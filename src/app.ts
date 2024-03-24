import express from 'express';
// import path from 'path';
// import handlebars from 'express-handlebars'
// import index from './routes/index'
import config from './config';
import loader from './loaders/index'

async function startServer() {
    const app = express();

    // // view engine setup
    // app.set('views', path.join(__dirname, './views'));
    // app.set('view engine', 'hbs');

    // app.set('port', process.env.PORT || 1111);

    // app.use(express.static(path.join(__dirname, 'public')));


    // const PORT = process.env.PORT || 5000;
    // app.use('/',index)

    // await require('./loaders').default({ expressApp: app });
    await loader({ app: app })

    app.listen(config.port, () => {
        console.log(`Server started at http://localhost:${config.port}`)
    })
}

startServer();
