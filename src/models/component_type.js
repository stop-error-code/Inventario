module.exports = (sequelize, type) =>{
    return sequelize.define('component_type', { 
        id: { 
            type: type.INTEGER, 
            primaryKey: true, 
            autoIncremet: true }, 
        name: { 
            type: type.STRING, }, 
           })
  
        }