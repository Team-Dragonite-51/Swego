const db = require ('../models/databaseModel')

const getQuestion = {};


//middleware function to query db for next question
getQuestion.nextQ = async (req, res, next) => {
	//need to know the user_id
	//need to know the current question
	let user_id = 1;
	let current_question = 1;

	//check if the next question need to be an algo or multi type of question
	let curr_type;
	if (current_question>5) {
		curr_type = 'multi';
	}
	else {
		curr_type = 'algo';
	}

	//query to get a list of questions that user has already completed
	const getList = `
		SELECT user_id, completed_question_id, type FROM completed WHERE type='${curr_type}'
	`
	let completedQuestions;
	console.log(getList);
	await db.query(getList)
		.then (data => {
			completedQuestions = data.rows;
		})
	
	//query to get a list of the algo or multi questions
	let questionList;
		//get all algo type questions
		if (curr_type==='algo'){
			const getAlgoQuery = `
				SELECT * FROM a_questions
			`
			await db.query(getAlgoQuery)
				.then (data => {
					questionList = data.rows;
				})
		}
		//get all multiple choice type questions
		else {
			const getMultiQuery = `
				SELECT * FROM mc_questions
			`
			await db.query(getMultiQuery)
				.then (data => {
					questionList = data.rows
				})
		}

		console.log('questionList', questionList)
		console.log('completedQuestions',completedQuestions)
		res.locals.question = questionPicker(completedQuestions, questionList);

		return next();
}

//algo for randomly pick a question;
function questionPicker(completedQuestions, questionList){
	// compare completedQuestions at index at key completed_question_id
	//with questionList at index at key question_id

	
	const completedIDs = {}
	for (const question of completedQuestions){
		completedIDs[question.completed_question_id] = true;
	}
	const selections = []
	for (const question of questionList){
		if (!completedIDs[algo_question_id]) selections.push(algo_question_id)
	}

	return 1;
}



module.exports = getQuestion;