const { Model, DataTypes } = require('sequelize'); //imports the datatypes from sequelize
const sequelize = require('../config/connection'); //imports the sequelize connection to config/connection.js

//creates the user model
const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER, //sets the data type to integer
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  //allows only alphanumeric characters for the username
  username: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      isAlphanumeric: true,
    },
  },
  //allows only email addresses
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, 
    validate: {
      isEmail: true, //checks if the email is valid
    },
  },
  //allows only passwords with a length of 8 or more
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [8], //sets the length
    },
  },
});

module.exports = User;