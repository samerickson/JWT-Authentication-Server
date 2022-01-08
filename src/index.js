import dotenv from 'dotenv';

import app from './app.js';

dotenv.config();

app.get('/', (_req, res) => {
	res.json({ msg: "🔭 -- Server is running!"});
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Process started at localhost:${PORT}`));

