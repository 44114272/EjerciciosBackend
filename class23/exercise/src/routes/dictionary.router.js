import {Router} from 'express';

const router = Router();
const words = ['test']

// Regular expression that only accepts uppercase or lowercase letters
router.get('/:word([a-zA-Z%C3%A1]+)', (req, res) => {
    res.send(req.params.word);
});
router.put('/:word([a-zA-Z%C3%A1]+)', (req, res) => {
    res.send(req.params.word);
});
router.delete('/:word([a-zA-Z%C3%A1]+)', (req, res) => {
    res.send(req.params.word);
});

router.param('word', (req, res, next, word) => {
    const searchWord = words.find(wordDB => wordDB === word);
    if(!searchWord)
        return res.status(404).send('Word not found');
    req.word = searchWord;
    next();
})

router.get('*', (req, res) =>{
    res.status(404).send('Cannot get specified word')
})

export default router;