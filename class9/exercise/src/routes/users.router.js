import { Router } from 'express'
import { uploader } from '../utils.js';

const router = Router();

const users = [];

router.get('/', (req,res) => {
    res.send({users})
})

router.post('/', (req,res) => {
    const user = req.body;
    users.push(user)
    res.send({status: 'Success', user})
})


router.post('/imgs', uploader.single('file'), (req,res) => {
    const filename = req.file.filename;
    const user = req.body;
    user.imge = `http:localhost:8080/imgs/${filename}`;
    users.push(user); 
    res.send({status: 'success'})
})

export default router;