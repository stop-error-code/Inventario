module.exports = (sequelize, type) =>{
  return sequelize.define('application',{
      id: { 
          type: type.INTEGER, 
          primaryKey: true, 
          autoIncremet: true }, 
      name: { 
          type: type.STRING, }, 
      exposition_id: { 
          type: type.INTEGER }, 
      description: { 
          type: type.STRING }, 
         }, {underscored: true})
      }