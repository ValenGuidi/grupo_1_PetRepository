const express = require('express');
const path = require("path");

const app = express();

//app.use("/static",express.static("public"));
app.use(express.static("public"));


//levantar el server
app.listen(3040, () =>{ 
    console.log("server corriendo puerto 3040");
})

//rutas
app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname,"/views/index.html"))
})

app.get("/register"), (req, res) => {
    res.sendFile(path.join(__dirname, "/views/register.html"));
}
