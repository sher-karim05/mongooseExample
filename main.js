import express from 'express';
import mongoose from 'mongoose'
import bodyParser from 'body-parser';

const app = express();

const PORT = 5500;

app.listen(PORT, ()=>console.log(`Server is running at port ${PORT}`))