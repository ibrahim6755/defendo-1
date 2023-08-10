import express from 'express'
import { regsiterUser, loginUser, logoutUser } from '../controllers/userController.js';

const router = express.Router();

router.route('/account/Register').post(regsiterUser);

router.route('/account/Login').post(loginUser);

router.route('/account/Logout').get(logoutUser);


export default router;

