import express from 'express';

import { createUser } from '../controllers/Auth.controller.js';

const router = express.Router();

router.post("/user", createUser);
router.post("/login");

export default router;
