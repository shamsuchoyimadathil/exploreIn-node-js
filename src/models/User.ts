import { Sequelize, DataTypes } from 'sequelize'

import { sequelize } from '../loaders/db'

export const User = sequelize.define('User', {

    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            max: 254,
            min: 3,
            notEmpty: true,
            is: /^[a-zA-Z0-9]+$/i,
        }
    },

    lastname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            max: 254,
            min: 3,
            notEmpty: true,
            is: /^[a-zA-Z0-9]+$/i,
        }
    },

    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            max: 254,
            min: 3,
            notEmpty: true,
            is: /^[a-zA-Z0-9]+$/i,
        }
    },
    email: {
        type: DataTypes.STRING,
        // allowNull: false,
        unique: true,
        validate: {
            isEmail: true,

        },
    },

    phone: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            min: 10,
            is: /^[0-9]+$/i,

        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            min: 6,
            max: 16,
            is: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i,
        },
    },

    avatar: {
        type: DataTypes.STRING,
    },
    cover: {
        type: DataTypes.STRING,
    },
})

