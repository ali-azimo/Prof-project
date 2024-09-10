import express from 'express';
import mongoose from 'mongoose';
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