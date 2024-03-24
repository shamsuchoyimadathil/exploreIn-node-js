import express from 'express';
const router = express.Router()


router.get('/', (req, res, next) => {
    res.redirect('/auth/login');
});

// middleware that is specific to this router
router.get('/login', (req, res, next) => {
    console.log('inside / ')
    // console.log(req,res,next)
    res.render('login', { test: 'test' })
    
});

router.get('/sign-up', (req, res, next) => {
    // console.log(req,res,next)
    res.render('sign-up', { test: 'test' })
});

router.get('/forget-password', (req, res, next) => {
    // console.log(req,res,next)
    res.render('forget-password', { test: 'test' })
});

export default router
