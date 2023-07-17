
const express = require("express");

const { corsNode } = require('./src/middlewars/cors')

require("dotenv").config();

const port = process.env.PORT || 4005;

const { dbConnection } = require("./src/config/config");

dbConnection();

const app = express();

//CORS
app.use(corsNode)

// Public Directory
app.use(express.static("public"));

//Read body in JSON
app.use(express.json());

//PATHS FOR MODELS [ GET, POST, PUT, DELETE ]

app.use('/back/unsplash', require('./src/routes/UnsplashRoute'))

//LISTEN DE API REST IN PORT 
app.listen(port, () => {
    console.log(`SERVER EXPRESS API ONLINE IN PORT:[${port}]`);
});