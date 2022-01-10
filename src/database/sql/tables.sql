CREATE TABLE users(
	cid BINARY(16) PRIMARY KEY,
	first_name VARCHAR(64) NOT NULL,
	last_name VARCHAR(64) NOT NULL,
	email VARCHAR(64) NOT NULL UNIQUE,
	role VARCHAR(12) NOT NULL CHECK (role IN ('admin','tech','office', 'forman')),
	password VARCHAR(64) NOT NULL
);

