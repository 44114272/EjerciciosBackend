import {Router} from 'express';

const router = Router();


const food = [
    { name: "Pizza", price: 700 },
    { name: "Hamburguesa", price: 500 },
    { name: "Papas fritas", price: 300 },
    { name: "Pollo", price: 1000 },
    { name: "Pescado", price: 1100 },
  ];

router.get('/', (req,res) => {
    const user = {
        name: 'Joaquin',
        role: 'admin'
    };
    res.render('index', {
        user,
        isAdmin: user.role === 'admin',
        food
    })
})
router.get('/register', (req,res) => {
    res.render('register')
})

export default router;
