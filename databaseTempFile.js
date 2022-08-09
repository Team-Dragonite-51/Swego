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

CREATE TABLE a_questions(
    algo_question_id    SERIAL PRIMARY KEY,
    question            VARCHAR NOT NULL,
    test                VARCHAR NOT NULL
)


CREATE TYPE choices AS ENUM('multi', 'algo')
CREATE TABLE completed(
    user_id                 SERIAL PRIMARY KEY,
    completed_question_id   INT NOT NULL,
    type                    choices NOT NULL,
    is_completed            BOOLEAN NOT NULL
)

CREATE TABLE users(
    user_id         SERIAL PRIMARY KEY,
    username        VARCHAR NOT NULL,
    password        VARCHAR NOT NULL
)


CREATE TABLE score(
    user_id     SERIAL PRIMARY KEY,
    points      INT NOT NULL
)

*/