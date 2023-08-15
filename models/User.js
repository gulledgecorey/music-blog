const { Model, DataTypes } = require('sequelize'); //imports the datatypes from sequelize
const sequelize = require('../config/connection'); //imports the sequelize connection to config/connection.js

//creates the user model
 class User extends Model {}
 User.init(
    { 
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
//allows only alphanumeric characters for the password
  hooks: {
    async beforeCreate(newUserData) {
      newUserData.password = await bcrypt.hash(newUserData.password, 10);
      return newUserData;
    },
  },
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'user',
});

module.exports = User;