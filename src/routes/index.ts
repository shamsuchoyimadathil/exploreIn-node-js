import express from 'express';


const router = express.Router();

router.get('/', (req, res, next) => {
    console.log('inside / ')
    // console.log(req,res,next)
    res.render('index', { test: '111111' })
});

router.get('/test', (req, res, next) => {
    // console.log(req,res,next)
    res.render('test', { test: 'test' })
});


export default router