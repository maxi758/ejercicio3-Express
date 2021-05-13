const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(__dirname));

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/saludar", function (req, res) {
    res.send("Holaaaaaa");
});

app.get("/foto", function (req, res) {
    res.sendFile(path.join(__dirname, "img.jpg"));
});

app.listen("3000", function () {
    console.log("iniciando en puerto 3000");
})