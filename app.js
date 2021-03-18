const express = require("express");
const path = require("path")
const app = express();

app.set("port", 3000 || process.env.PORT); //ЗАДАЕМ ПОРТ ИЛИ ТОТ КОТОРЫЙ ФРИ

app.use(express.static(path.join(__dirname, "/"))); //дает доступ чтобы открылись все другие файлы

app.get("/", (req, res) =>{
    res.status(200);
    res.contentType("text/html");
    res.sendFile(path.join(__dirname, "/index.html"))
});

app.get("/about", (req, res) =>{
    res.status(200);
    res.contentType("text/html");
    res.sendFile(path.join(__dirname, "/about.html"))
});

app.get("/about/team_photo", (req, res) =>{
    res.status(200);
    res.contentType("image/jpg");
    res.sendFile(path.join(__dirname, "/teamphoto.jpg"))
});

app.get("/video", (req, res) =>{
    res.status(200);
    res.contentType("video/mp4");
    res.sendFile(path.join(__dirname, "/video.mp4"))
});

app.get("err", (req, res) =>{
    res.status(200);
    res.contentType("text/plain");
    res.sendFile(404, NOTFOUND)
});


app.listen(app.get("port"), ()=>{
    console.log(`Express server is running on localhost:${app.get("port")}. Please CTRL+C to terminate...`)
})