import dotenv from 'dotenv';

dotenv.config();

const dbConfig = {
	connectionLimit: 100,
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DEFAULT_DATABASE
}

export default dbConfig;
