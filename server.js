import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
import models from './models';
import routes from "./routes";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use((req, res, next) => {
    req.serverMessage = 'server generated message';
    next();
})
app.use((req, res, next) => {
    req.context = {
        models
    };
    next();
})

app.use('/users', routes.userRoute);
app.use('/messages', routes.messageRoute);
app.use('/quotes', routes.quoteRoute);

app.get('/', (req, res) => {
    res.send('Received a GET HTTP method')
})

app.post('/', (req, res) => {
    res.send('Received a POST HTTP method')
})
app.put('/', (req, res) => {
    res.send('Received a PUT HTTP method')
})
app.delete('/', (req, res) => {
    res.send('Received a DELETE HTTP method')
})



app.listen(3000, () => {
    console.log(process.env.ENVIRONMENT);
    console.log('Example app listening on port 3000!');
})