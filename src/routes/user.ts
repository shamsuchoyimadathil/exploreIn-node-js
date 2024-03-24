import express from 'express';
const router = express.Router()

// middleware that is specific to this router
router.get('/', (req, res, next) => {
    console.log('inside / ')
    // console.log(req,res,next)
    res.render('user', { test: 'test' })
});

router.get('/add-post', (req, res, next) => {
    // console.log(req,res,next)
    res.render('add-post', { test: 'test' })
});

router.get('/edit-user', (req, res, next) => {
    // console.log(req,res,next)
    res.render('edit-user', { test: 'test' })
});

export default router
