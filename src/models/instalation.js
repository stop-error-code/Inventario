module.exports = (sequelize, type) =>{
    return sequelize.define('instalation', { 
        id: { 
            type: type.INTEGER, 
            primaryKey: true, 
            autoIncremet: true }, 
        name: { 
            type: type.STRING, },
        component_id:{type:type.INTEGER},
        server_id:{type:type.INTEGER}
           })
  
        }