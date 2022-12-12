const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());

const dotenv = require('dotenv');

dotenv.config(
    {
        path: './config/.env'
    }
);

const PORT_NUMBER = process.env.PORT_NUMBER;

const initiateDBConnection = require('./config/DB');

const ProductRouter = require('./routes/productRouter');
app.use('/products', ProductRouter);

const UserRouter = require('./routes/userRouter');
app.use('/users',UserRouter);

const EvaluationRouter = require('./routes/evaluationRouter');
app.use('/evaluations',EvaluationRouter);

const authRouter = require('./routes/authRouter');
app.use('/autherization', authRouter);

const RequestRouter = require('./routes/RequestRouter');
app.use('/request', RequestRouter);

const ResellRouter = require('./routes/resellRouter');
app.use('/resell',ResellRouter);

const exchangeRouter = require('./routes/ExchangeRouter');
app.use('/exhange',exchangeRouter);

app.use(cors());

app.listen(PORT_NUMBER, async () =>
{
    console.log(`Server started and listening to port ${PORT_NUMBER}.`);

    await initiateDBConnection();
});