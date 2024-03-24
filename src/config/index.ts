import dotenv from 'dotenv';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (envFound.error) {
    throw new Error("⚠️  Couldn't find .env file  ⚠️");
}


export default {
    port: process.env.PORT || 10,
    dbURL: process.env.MONGODB_URI,
    db: process.env.DB || '',
    dbUserName: process.env.DATABASE_USERNAME || '',
    dbPassword: process.env.DATABASE_PASSWORD || '',
}