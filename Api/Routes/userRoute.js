import express from 'express';
import { teste } from '../Controllers/userController.js';


const router = express.Router();

//Exportamos o controlador
router.get('/teste', teste)
export default router;