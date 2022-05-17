-- tables setup
CREATE TABLE users (
    id UUID NOT NULL PRIMARY KEY,
    username TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL,
    password TEXT NOT NULL,
    CONSTRAINT users_pkey PRIMARY KEY(id)
)
WITH (oids = false);

CREATE TABLE games (
    id UUID NOT NULL,
    wins int NOT NULL,
    gamesPlayed int NOT NULL
)
WITH (oids = false);

CREATE TABLE trivia (
    id UUID NOT NULL,
    correct int NOT NULL,
    questionsAnswered int NOT NULL
)
WITH (oids = false);