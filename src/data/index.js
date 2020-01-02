const Sequelize = require('sequelize');

// Option 2: Passing a connection URI
const sequelize = new Sequelize('postgres://appInventario:appInventario@localhost:5432/inventario');