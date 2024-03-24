import { sequelize } from "./db";
import express from 'express';
import expressLoader from './express'

export default async ({ app }: { app: express.Application }) => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

    await expressLoader({ app: app });

};
