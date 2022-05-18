import cors from "cors";
import express from 'express';
const app = express()
import db from './config/db.js'


var corsOptions = {
  origin: 
    "http://localhost:8080"
};
//Access-Control-Allow-Origin: *
app.use(cors(corsOptions));


let count="1";

app.get('/', (req, res) => {
  res.json({"changed" :count});
})
app.listen(3000, () => console.log('localhost 3000'))

const background=function() {
    console.log('backgroung executed', count);
    setTimeout(background, 5000);
    count++;
}

background()
db.connect();

db.query('SELECT * FROM role', function(err, rows, fields) {
  if (err) throw err;
  console.log('The solution is: ', rows);
});

db.end();