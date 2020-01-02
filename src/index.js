
import 'dotenv/config';
/*Init comments   */
console.log('This is ');
console.log(process.env.API_NAME);

/* common imports*/
import express from 'express';
const app = express();

/**/ 
import routes from './routes';
const path = require('path')
import bodyParser from 'body-parser';


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


/*Routing request to...*/
app.use('/application',routes.component);
app.use('/application',routes.application);
app.use('/server',routes.server);
app.use('/exposition',routes.exposition);
app.use('/component_type',routes.component_type);

app.listen(process.env.API_PORT, () =>
  console.log('Listening on... PORT:' + process.env.API_PORT.toString())
);