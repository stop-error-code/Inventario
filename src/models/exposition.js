module.exports = (sequelize, type) =>{
    return sequelize.define('exposition',{ 
        id: { 
            type: type.INTEGER, 
            primaryKey: true, 
            autoIncremet: true }, 
        name: { 
            type: type.STRING, }, 
           }, {underscored: true})
  
        }