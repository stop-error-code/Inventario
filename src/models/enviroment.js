module.exports = (sequelize, type) =>{
    return sequelize.define('enviroment', { 
        id: { 
            type: type.INTEGER, 
            primaryKey: true, 
            autoIncremet: true }, 
        name: { 
            type: type.STRING, },
           })
  
        }