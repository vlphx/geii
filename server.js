const cors = require("cors");
const express = require('express')
const app = express()



var corsOptions = {
  origin: 
    "http://localhost:8080"
};
//Access-Control-Allow-Origin: *
app.use(cors(corsOptions));

// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

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