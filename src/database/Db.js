import mysql from 'mysql2';
import util from 'util';

import dbConfig from '../config/db.config.js';

const pool = mysql.createPool(dbConfig);

pool.getConnection = util.promisify(pool.getConnection);

pool.getConnection((error, connection) => {
	if(error) {
		console.error(error);
		if(connection) connection.release;
	} else {
		console.log(`Connected to database`);
	}
});

export default pool;
