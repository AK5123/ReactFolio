const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const start=require("./schedule");
const fs=require("fs");
var opn = require('opn');
const json = JSON.parse(fs.readFileSync(process.argv[2],{encoding:"utf-8"}));

app.use(express.static("./public/images/memoji"));
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/",(req,res)=>{
    fs.createReadStream("./webwizard.html").pipe(res);
})

app.post('/build',(request,response) => {
    json.memoji=request.body.memoji;
    console.log(json);
    fs.writeFileSync("./src/json/final.json",JSON.stringify(json));
    start(json.name.toLowerCase());
    response.send("Done");
});




app.listen(2000,()=>{
    opn('http://localhost:2000');
});











