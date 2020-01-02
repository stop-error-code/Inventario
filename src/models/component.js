module.exports = (sequelize, type) =>{
    return sequelize.define('component', { 
        id: { 
            type: type.INTEGER, 
            primaryKey: true, 
            autoIncremet: true }, 
        name: { 
            type: type.STRING, }, 
        component_type_id: { 
            type: type.INTEGER }, 
        application_id:{
            type: type.INTEGER
        },
           })
  
        }