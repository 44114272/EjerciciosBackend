import {Router} from 'express';
import passport from 'passport';

const router = Router();

router.post('/register', passport.authenticate('register', { failureRedirect: 'fail-register' }), async (req, res) => {
        res.send({status: 'success', message: 'User Registered'});
});

router.get('/fail-register', async(req,res) => {
    res.send({ status: 'error', message: 'Register failed' });
});

router.post('/login', passport.authenticate('login', { failureRedirect: 'fail-login' }), async (req, res) => {
    if (!req.user)
        res.send({ status: 'error', message: 'Invalid credentials' });

    req.session.user = {
        first_name: req.user.first_name,           
        last_name:  req.user.last_name,
        age:        req.user.age,
        email:      req.user.email,
    }

    res.send({ status: 'success', message: 'Login success' });
});

router.get('/fail-login', async(req,res) => {
    res.send({ status: 'error', message: 'Login failed' });
});


router.get('/logout', async (req, res) => {
    req.session.destroy(err => {
        if(err) return res.status(500).send({status: 'error', error: 'Logout fail'});
        res.redirect('/');
    })
});

export default router;