const express = require("express");

const { PORT } = require('./config/serverConfig');


const app = express();

app.listen(3000, () =>{
    console.log(`server started!! at ${PORT}`);
})