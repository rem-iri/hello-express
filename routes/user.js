import express, {
    Request,
    Response,
    RequestHandler,
    NextFunction,
} from 'express';

const router = express.Router();

router.get('/users', (req, res) => {
    res.send(Object.values(req.context.models.users))
})
router.get('/users/:userId', (req, res) => {
    res.send(req.context.models.users[req.params.userId])
})

router.post('/users', (req, res) => {
    res.send('POST HTTP method on user resource')
})
router.put('/users/:userId', (req, res) => {
    res.send(`PUT HTTP method on user/${req.params.userId}`)
})
router.delete('/users/userId', (req, res) => {
    res.send(`DELETE HTTP method on user/${req.params.userId}`)
})

export default router;