import express from 'express';
import mongoose from 'mongoose';
import userRouter from './Routes/userRoute.js'
import dotenv from 'dotenv';

dotenv.config();


//Conectar com banco de dados online
mongoose
    .connect(process.env.MONGO)
    .then(() => {
        console.log('Conectado ao Banco de dados Mongo!');
    }).catch((err) => {
        console.log(err)
    });
const app = express();


//Porta de entra
app.listen(5000, () => {
    console.log('Servidor esta aberto no portal 5000!');
});

//Todos routes devem ser definido no index.js
//Os routes deveriam esta qui, mas sao criados separados e importados aqui
app.use('/api/user', userRouter)