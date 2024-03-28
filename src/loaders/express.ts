import express from 'express';
import path from 'path';
import handlebars from 'express-handlebars'
import config from '../config';
import indexRoute from '../routes/index'
import authRoute from '../routes/auth'
import userRoute from '../routes/user'
import dayjs from 'dayjs';
import hbs from 'hbs'

const __dirname = path.resolve('./src');

const { port } = config

export default ({ app }: { app: express.Application }) => {

    // console.log(path.join(__dirname, '/views', 'layouts'), 'layout path')
    // view engine setup
    // console.log(path.join(__dirname, '/views/partials'),'path')
    hbs.registerPartials(path.join(__dirname, '/views/partials'))
    hbs.handlebars.registerHelper('getIcon', (icon: string) => {
        return new hbs.handlebars.SafeString('<span class="material-symbols-outlined">' + icon + '</span>')
    })
    app.set('views', path.join(__dirname, '/views'));
    const hbsConf = handlebars.create({
        extname: 'hbs',
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
            getIcon: (icon: string) => {
                return new hbs.handlebars.SafeString('<span class="material-symbols-outlined">' + icon + '</span>')
            }
        },

    })

    app.engine('handlebars', hbsConf.engine);

    app.set('view engine', 'hbs');
    app.set('view options', { layout: 'layouts/layout' });


    app.set('port', port || 1111);

    app.use(express.static(path.join(__dirname, '/public')));
    app.use(express.static(path.join(__dirname, '/views', 'themes')));

    // Setup the routes
    app.use('/', indexRoute)
    app.use('/auth', authRoute)
    app.use('/user', userRoute)
};
