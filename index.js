const express = require("express");
const app = express();
const port = 9000;
const db = require("./config/db");

app.use(express.urlencoded({extended:false}));
app.use(express.json()); 
app.use('/',require("./routes"));

app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
        return;
    }
    console.log(`Server is running successfully on port ${port}`);
})