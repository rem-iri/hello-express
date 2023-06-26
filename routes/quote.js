import express, {
    Request,
    Response,
    RequestHandler,
    NextFunction,
} from 'express';
import {v4 as uuidv4} from 'uuid';


const router = express.Router();

router.get('/', (req, res) => {
    res.send(Object.values(req.context.models.quotes))
})
router.get('/:quoteId', (req, res) => {
    res.send(req.context.models.quotes[req.params.quoteId])
})

router.post('/', (req, res) => {
    const id = uuidv4();
    const message = {
        id,
        quote: req.body.quote,
        author: req.body.author,
        year: req.body.year,
        serverMessage: req.serverMessage,
    };

    req.context.models.quotes[id] = message;
    console.log("CONTEXT", JSON.stringify(req.context, null, 2));
    
    return res.send(message);
});

export default router;