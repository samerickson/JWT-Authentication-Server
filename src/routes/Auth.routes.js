import express from 'express';

import { createUser, loginUser, logoutUser } from '../controllers/Auth.controller.js';

const router = express.Router();

router.post("/user", createUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);

export default router;
