import {Router} from 'express';

const router = Router();
const pets = [];

router.post('/', (req,res) => {
    const {name, specie} = req.body;
    pets.push({name, specie});
    res.json({info: 'Pet created', pet: {name, specie}});
});

router.get('/:name([a-zA-Z20%]+)', (req, res) => {
    res.json({info: 'Pet found', pet: req.pet});
});

router.put('/:name([a-zA-Z20%]+)', (req, res) => {
    if (req.pet){
        const newPet = {...req.pet, adopted: true}
        const index = pets.findIndex(petDB => petDB.name === req.pet.name)
        pets[index] = newPet;
        res.json({info: 'Pet found', pet: newPet});
    }
    else 
        res.json({info: 'Pet not found'})
});

router.param('name', (req, res, next, name) => {
    const pet = pets.find(petDB => petDB.name === name);
    if(pet)
        req.pet = pet;
    
    else
        req.pet = null;
    next()
})


// router.get('/:word([a-zA-Z%C3%A1]+)', (req, res) => {
//     res.send(req.params.word);
// });
// router.put('/:word([a-zA-Z%C3%A1]+)', (req, res) => {
//     res.send(req.params.word);
// });
// router.delete('/:word([a-zA-Z%C3%A1]+)', (req, res) => {
//     res.send(req.params.word);
// });

// router.param('word', (req, res, next, word) => {
//     const searchWord = words.find(wordDB => wordDB === word);
//     if(!searchWord)
//         return res.status(404).send('Word not found');
//     req.word = searchWord;
//     next();
// })

router.get('*', (req, res) =>{
    res.status(404).send('Cannot get specified word')
})

export default router;