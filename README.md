# Inventario
La idea es basicamente diseñar una aplicacion desde cero, orientada a ser un inventario de Applicaciones.

Trabajando desde cero, con una especificacion, requerimientos funcionales y no funcionales. 
Ademas trabajaramos con el diseño de la applicacion, a priori una aplicacion un front, back y componentes de base de datos.
Orientado a trabajar con rest, mostrandose en un front con angular y una base sql modesta. 

Clonar el poyecto
+ git clone
Instalar dependencias
+ npm install
Iniciar la app 
+ npm start

La app al iniciar creara las tablas necesarias para trabajar, es importante que el usuario tenga permisos para hacerlo.

Previamente configurar el .env estas properties

API_NAME= {Nombre de la app}
DATABASE={Nombre de la bbdd}
DATABASE_USER={Usuario de la db} // Tiene que tener permisos de creacion de tablas
DATABASE_PASSWORD={Password del user}
DATABASE_HOST={hostame/ip/}
DATABASE_PORT={Puerto donde escucha la db}
API_PORT={Puerto donde exponemos la app}