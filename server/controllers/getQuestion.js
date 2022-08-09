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
	if (current_question<5) {
		curr_type = 'multi';
	}
	else {
		curr_type = 'algo';
	}

	//query to get a list of questions that user has already completed
	const getList = `
		SELECT user_id, completed_question_id, type FROM completed WHERE type=${curr_type}
	`
	db.query(getList)
		.then (data => {
			console.log(data)
		})
}

//algo for randomly pick a question;

module.exports = getQuestion;