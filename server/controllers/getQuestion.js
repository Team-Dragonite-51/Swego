const db = require ('../models/databaseModel')

const getQuestion = {};


//middleware function to query db for next question
getQuestion.nextQ = async (req, res, next) => {
	//need to know the user_id
	// let user_id = 4;
	// let nextquestion = true;
	const user_id = req.headers.user_id;
	const nextquestion = req.headers.nextquestion
	// console.log('REQ.HEADERS', req.headers)

	console.log('userID', user_id, nextquestion)

	//query to get current question
	const getCurrQ = `
		SELECT * FROM score WHERE user_id=${user_id}
	`
	let userGameInfo;
	let scoreTable;
	let current_question_id;
	let current_question;
	let firstTime = false;
	await db.query(getCurrQ)
		.then (data=>{
			scoreTable = data.rows
		})
	
	//checking if this is a first time user
	console.log('scoreTable',scoreTable)
	// if (scoreTable[0]){
	// 	for (let i=0; i<scoreTable.length; i++){
	// 		console.log(scoreTable[i])
	// 		if (scoreTable[i]['user_id']===user_id){
	// 			userGameInfo = scoreTable[i];
	// 			i = scoreTable.length;
	// 		}
	// 	}
	// }
	userGameInfo = scoreTable[0]
	//if first time, current_question = 1
	console.log('userGameInfo', userGameInfo)
	if (!userGameInfo){
		current_question = 1;
		firstTime = true;
		//get new question
	} 
	//if continue, set to current
	else if (nextquestion===false){
		current_question = userGameInfo['current_question'];
		current_question_id = userGameInfo['current_question_id'];
	}
	//if next question, set to + 1
	else {
		current_question = userGameInfo['current_question']+1;
		let finishedQuestion = userGameInfo['current_question_id'];
		const updateCompletedTable = `
			INSERT INTO completed (user_id, completed_question_id, type)
			VALUES (${user_id}, ${finishedQuestion}, 'multi')
		`
		db.query(updateCompletedTable)
	}

	//check if the next question need to be an algo or multi type of question
	let curr_type;
	let difficulty;
	
	if (current_question <=9) {
		curr_type = 'multi';
		difficulty = 1;
	}
	else {
		curr_type = 'algo'
	}

	//query to get a list of questions that user has already completed

	let completedQuestions = await getCompletedQuestions(curr_type)
	
	//query to get a list of the algo or multi questions
	//get all available questions based on type and difficulty
	const questionList = curr_type==='algo'? await getAlgoQuestions(difficulty): await getMultiQuestions(difficulty)
	// console.log('questionList', questionList)
	if (!current_question_id){
		if (!firstTime){
			res.locals.question = questionPicker(completedQuestions, questionList);
			//update the database of current question table score
			// console.log(current_question, res.locals.question.question_id)
			console.log('UPDATE SCORE TABLE')
			const updateScoreTable = `
				UPDATE score
				SET current_question = ${current_question}, current_question_id = ${res.locals.question.question_id}
				WHERE user_id = ${user_id}
			`
			db.query(updateScoreTable);
		}
		//first time, need to create a score row
		else {
			res.locals.question = questionPicker(completedQuestions, questionList);
			console.log('INSERT SCORE TABLE')
			const newScoreRow = `
				INSERT INTO score (user_id, current_question_id)
				VALUES (${user_id}, ${res.locals.question.question_id})
			`
			db.query(newScoreRow)
		}
	}
	else {
		for (let i=0; i<questionList.length; i++){
			if (questionList[i]['question_id'] === current_question_id){
				res.locals.question = questionList[i]
				i = questionList.length
			}
		}
	}
	return next();
}


//HELPER FUNCTIONS START HERE

async function getAlgoQuestions(difficulty){
	const getAlgoQuery = `
		SELECT * FROM a_questions
		`;
	let list
	await db.query(getAlgoQuery)
		.then (data => {
			list = data.rows;
		})
	return list;
}

async function getMultiQuestions(difficulty){
	const getMultiQuery = `
		SELECT * FROM mc_questions 
	`
	let list;
	await db.query(getMultiQuery)
		.then (data => {
			list = data.rows
		})
	return list;
}

async function getCompletedQuestions(curr_type){
	const getList = `
	SELECT user_id, completed_question_id, type FROM completed WHERE type='${curr_type}'
	`
	let list;
	await db.query(getList)
		.then (data => {
			list = data.rows;
		})
	return list;
}


//algo for randomly pick a question;
function questionPicker(completedQuestions, questionList){
	// compare completedQuestions at index at key completed_question_id
	//with questionList at index at key question_id
	// console.log(completedQuestions)
	// console.log(questionList)
	const completedIDs = {}
	for (const question of completedQuestions){
		completedIDs[question.completed_question_id] = true;
	}
	// console.log('completedIDs', completedIDs)
	const selections = []
	for (const question of questionList){
		if (!completedIDs[question.question_id]) selections.push(question)
	}
	// console.log('selections', selections)

	let index = Math.floor(Math.random()*selections.length)
	// console.log('index', index)

	if (!selections[index]) return 'We are out of questions'
	return selections[index];
}



module.exports = getQuestion;