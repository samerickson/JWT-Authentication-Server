import pool from '../database/Db.js';

export const addRefreshToken = async (refreshToken, user) => {
    await pool.promise().query(
        'INSERT INTO REFRESH_TOKENS VALUES (?, ?, CURRENT_TIMESTAMP)',
        [refreshToken, user],
        (error, results, _fields) => {
            if(error)  {
                console.log(error);
                return false;
            }

            console.log(results);
            return true;
        }
    );
}

export const insertUser = async (first_name, last_name, email, role, password) => {
    return await pool.promise().query(
        `INSERT INTO USERS VALUES (UUID_TO_BIN(UUID()), ?, ?, ?, ?, ?)`,
        [first_name, last_name, email, role, password]);
}

export const getUserForLogin = async (email) => {
    const query = await pool.promise().query(`SELECT password, cid, role FROM USERS WHERE EMAIL=?`, [email]);
    return query[0];
}

export const removeRefreshToken = async (email) => {
    return await pool.promise().query(`DELETE FROM REFRESH_TOKENS WHERE cid IN (SELECT cid FROM USERS WHERE email=?)`, [email]);
}
