import { Sequelize } from 'sequelize';
import config from '../config';


const { db, dbPassword, dbUserName } = config

export const sequelize = new Sequelize(db, dbUserName, dbPassword, {
    host: 'localhost',
    dialect: 'mysql',
    // port: 3306,
    // username:"shamsudheen",
    // password:''
})
