import express from 'express';
import path from 'path';
import handlebars from 'express-handlebars'
import config from '../config';
import indexRoute from '../routes/index'
import authRoute from '../routes/auth'
import userRoute from '../routes/user'
import dayjs from 'dayjs';



const __dirname = path.resolve('./src');

const { port } = config

export default ({ app }: { app: express.Application }) => {

    // console.log(path.join(__dirname, '/views', 'layouts'), 'layout path')
    // view engine setup
    app.set('views', path.join(__dirname, '/views'));
    const hbsConf = handlebars.create({
        extname: 'hbs',
        layoutsDir: path.join(__dirname, '/views', 'layouts'),
        defaultLayout: 'layout.hbs',
        partialsDir: [path.join(__dirname, '/views')],
        helpers: {
            stringify: (obj: any) => {
                if (obj) {
                    return JSON.stringify(obj);
                }
                return '';
            },
            formatDate: (date: string, format: string) => {
                return dayjs(date).format(format);
            },
        }
    })
    app.engine('handlebars', hbsConf.engine);
    app.set('view engine', 'hbs');


    app.set('port', port || 1111);

    app.use(express.static(path.join(__dirname, '/public')));
    app.use(express.static(path.join(__dirname, '/views', 'themes')));

    // Setup the routes
    app.use('/', indexRoute)
    app.use('/auth', authRoute)
    app.use('/user', userRoute)
};
