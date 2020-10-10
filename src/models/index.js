

import Sequelize from 'sequelize';
const applicationModel= require('./application')
const serverModel=require('./server')
const componentModel=require('./component')
const enviromentModel=require('./enviroment')
const instalationModel=require('./instalation')
const componentTypeModel=require('./component_type')
const expositionModel=require('./exposition')

var opts = {
  define: {
      //prevent sequelize from pluralizing table names
      freezeTableName: true
  }
}
//Connecting to database
console.log("Conecting to the database");
const sequelize  = new Sequelize(process.env.DATABASE,process.env.DATABASE_USER,process.env.DATABASE_PASSWORD, {
  host: process.env.DATABASE_HOST,
  dialect: 'postgres'
},opts)

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
  sequelize.sync({force: (process.env.DATABASE_SYNC=="true")})
  .then(() => {

    console.log(`+++++++++++++++++++++++++++++++`);
    console.log(` Database & tables created!`);
    console.log(`+++++++++++++++++++++++++++++++`)
  })

const Server= serverModel(sequelize,Sequelize)
const Application= applicationModel(sequelize,Sequelize)
const Component=componentModel(sequelize,Sequelize)
const Enviroment=enviromentModel(sequelize,Sequelize)
const Instalation=instalationModel(sequelize,Sequelize)
const ComponentType=componentTypeModel(sequelize,Sequelize)
const Exposition=expositionModel(sequelize,Sequelize)
  /*Object.keys(models).forEach(key => {
    if ('associate' in models[key]) {
      models[key].associate(models);
    }
  });*/
/*Application.hasOne(Exposition,{target:'id'});*/
Application.belongsTo(Exposition);
  export { sequelize };
 module.exports={Server,Application,Component,Enviroment,Instalation,ComponentType,Exposition}