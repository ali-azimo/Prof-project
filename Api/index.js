import express from 'express';

const app = express();



//Porta de entra
app.listen(5000, () => {
    console.log('Servidor esta aberto no portal 5000');
});