# Inventario
La idea es basicamente diseñar una aplicacion desde cero, orientada a ser un inventario de Applicaciones.



*Clonar el poyecto*
  + git clone
  
*Instalar dependencias*
  + npm install
  
*Iniciar la app* 
  + npm start

La app al iniciar creara las tablas necesarias para trabajar, es importante que el usuario tenga permisos para hacerlo.

Previamente configurar el .env estas properties

*API_NAME*= {Nombre de la app}

*DATABASE*={Nombre de la bbdd}

*DATABASE_USER*={Usuario de la db} // Tiene que tener permisos de creacion de tablas

*DATABASE_PASSWORD*={Password del user}

*DATABASE_HOST*={hostame/ip/}

*DATABASE_PORT*={Puerto donde escucha la db}

*API_PORT*={Puerto donde exponemos la app}
