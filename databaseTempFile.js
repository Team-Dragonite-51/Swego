/*
CREATE TABLE mc_questions(
    question_id     SERIAL PRIMARY KEY,
    question_text   VARCHAR NOT NULL,
    difficulty      INT NOT NULL,
    a               VARCHAR NOT NULL,
    b               VARCHAR NOT NULL,
    c               VARCHAR NOT NULL,
    d               VARCHAR NOT NULL,
    correct         VARCHAR NOT NULL
)

INSERT INTO mc_questions (question_text, difficulty, a, b, c, d, correct)
VALUES ('what is team name', 1, 'charzard', 'dragonite', 'mewtwo', 'pikachu', 'dragonite')
*/


/*

    function test (testFunction) {

        if (testFunction(param1, param2) != true) return false;
        if (testFunction(param1, param2) != true) return false;
        if (testFunction(param1, param2) != true) return false;
        if (testFunction(param1, param2) != true) return false;

        return true;

    }
    
*/




/*
CREATE TABLE a_questions(
    question_id         SERIAL PRIMARY KEY,       
    question            VARCHAR NOT NULL,
    test                VARCHAR NOT NULL,
    difficulty          INT NOT NULL
)

INSERT INTO a_questions (question, test)
VALUES ('who is the president', 'hello')

*/

/*
CREATE TYPE choices AS ENUM('multi', 'algo')
CREATE TABLE completed(
    user_id                 SERIAL PRIMARY KEY,
    completed_question_id   INT NOT NULL,
    type                    choices NOT NULL
)
INSERT INTO completed (user_id, completed_question_id, type)
VALUES (1, 1, 'algo')
*/


/*
CREATE TABLE users(
    user_id         SERIAL PRIMARY KEY,
    username        VARCHAR NOT NULL,
    password        VARCHAR NOT NULL
)
*/


/*
CREATE TABLE score(
    user_id                 INT PRIMARY KEY,
    points                  INT NOT NULL,
    current_question        INT NOT NULL DEFAULT 1
    current_question_id     INT NOT NULL
)
*/