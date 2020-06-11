const express = require("express");
const server = express();

// configura a pasta public para que esteja disponível no diretório raiz
server.use(express.static("public"));

// configurar nunjucks
const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
    express: server,
    noCache: true
});

// ------ configurar caminhos no servidor

server.get("/", (req, res) =>{
    return res.render("index.html")
} );





// ligar o servidor na porta 3000
server.listen(3000);