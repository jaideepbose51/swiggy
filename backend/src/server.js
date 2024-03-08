import dotenv from 'dotenv';
dotenv.config();


import express from 'express';
import cors from 'cors';
import {fileURLToPath} from 'url';
import foodRouter from './routers/food.router.js';
import userRouter from './routers/user.router.js';
import orderRouter from './routers/order.router.js';
import path,{ dirname } from 'path';
import { dbconnect } from './config/database.config.js';

dbconnect();


const __filename=fileURLToPath(import.meta.url);
const __dirname=dirname(__filename);

const app = express();
app.use(express.json());
app.use(
    cors({
        credentials: true,
        origin: ['http://localhost:3000'],
    })
);

app.use('/api/foods', foodRouter);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);

const publicFolder=path.join(__dirname, 'public');
app.use(express.static(publicFolder));

app.get('*',(req,res) => {
    const indexFilePath=path.join(publicFolder,'index.html');
    res.sendFile(indexFilePath);
});

const PORT =process.env.PORT ||  5000;
app.listen(PORT, (err) => {
    if (err) throw err;
    console.log('listen on port ' + PORT);
});