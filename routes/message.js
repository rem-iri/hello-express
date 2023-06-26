import express, {
    Request,
    Response,
    RequestHandler,
    NextFunction,
} from 'express';
import {v4 as uuidv4} from 'uuid';

const router = express.Router();

router.get('/', (req, res) => {
    return res.send(Object.valies(req.context.models.messages));
})
router.get('/:messageId', (req, res) => {
    return res.send(req.context.models.messages[req.params.messageId]);
})


router.post('/', (req, res) => {
    const id = uuidv4();
    const message = {
        id,
        text: req.body.text,
        serverMessage: req.serverMessage,
    };

    console.log("CONTEXT", req.context);
    req.context.models.messages[id] = message;

    return res.send(message);
});

export default router;