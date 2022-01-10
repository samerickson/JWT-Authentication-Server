import dotenv from 'dotenv';

import app from './app.js';
import pool from './database/Db.js';

dotenv.config();

app.get('/', (_req, res) => {
	res.json({ msg: "🔭 -- Server is running!"});
});

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, console.log(`Process started at localhost:${PORT}`));

const shutdown = () => {

	console.log('\nClosing database connection');
	pool.end((error) => {
		if(error) console.error(`Failed to close database connection - ${error}`);
	});
	console.log('Closed database connection');

	console.log('\nShutting down server');
	if(server.listening) {
		server.close((error) => {
			console.error(error);
			process.exit(1);
		});

		process.exit(0);
	}
}

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);
