/*require("dotenv").config({
    path:`.env.${process.env.NODE_ENV || "development"}`
});*/

const config=require("./config/config");

const express=require("express");

//const path=require("path");

const cors=require("cors");

const app=express();

app.use(express.json());

app.use(cors());

app.listen(config.port, () => console.log("Servidor corriendo en http://localhost:3000"));

