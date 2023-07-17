
const express = require("express");

const port = process.env.PORT || 3001;

const { corsNode } = require('./middlewars/cors')

require("dotenv").config();

const { dbConnection } = require("./config/config");

dbConnection();

const app = express();

//CORS
app.use(corsNode)

// Public Directory
app.use(express.static("public"));

//Read body in JSON
app.use(express.json());

//PATHS FOR MODELS [ GET, POST, PUT, DELETE ]

app.use('/back/unsplash', require('./routes/UnsplashRoute'))

//LISTEN DE API REST IN PORT 
app.listen(port, () => {
    console.log(`SERVER EXPRESS API ONLINE IN PORT:[${port}]`);
});