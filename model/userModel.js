const DataTypes = require('sequelize')
const db = require('../database/connection')
const { v4: uuidv4 } = require('uuid');

const userModel = db.define('User',{
    // Id:{
    //     type:DataTypes.INTEGER,
    //     // allowNull: false,
    //     autoIncrement:true,
    //     primarykey:true
    // },
    Uid:{
        type:DataTypes.UUID,
        defaultValue: uuidv4(13)
    },
    FirstName:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            is: /^[A-Za-z]+$/
        }
    },
    LastName:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            is: /^[A-Za-z]+$/
        }
    },
    Email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
        validate:{
            is:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        }
    },
    Phone:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
        validate:{
            is: /^\d{10}$/
        }
    },
    Status:{
        type:DataTypes.STRING,
        allowNull:false
    },
    Role:{
        type:DataTypes.STRING,
        allowNull:false
    },
    Password:{
        type:DataTypes.STRING,
        allowNull:false,
        // validate:{
        //     is: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        // }
    },
})
userModel.sync().then(()=> console.log('User Table created successfully'))
.catch(()=> console.log('User Table not created !'))

module.exports = userModel;