
import { createConnection } from 'mysql';
var db = createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'geii_db'
});



export default db;