const cors = require("cors");
const bodyParser = require("body-parser");
const express = require('express');
const app = express()


var corsOptions = {
  origin: 
    "http://localhost:8080"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json()); 
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const database = require("./app/models");
 database.sequelize.sync();

// In development, you may need to drop existing tables and re-sync database. Just use force: true as following code:
//database.sequelize.sync({ force: true }).then(() => {
//  console.log("Drop and re-sync database.");
//});

let count="1";

app.get('/', (req, res) => {
  res.json('bienvenue'
    // { "changed": count }
  );
})
app.listen(3000, () => console.log('localhost 3000'))

require("./app/routes/role.routes")(app);
require("./app/routes/user.routes")(app);

// const background= () => {
//     console.log('backgroung executed', count);
//     setTimeout(background, 5000);
//     count++;
// }
// background()
