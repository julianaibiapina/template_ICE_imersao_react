const express = require("express");
const server = express();

// configura a pasta public para que esteja disponível no diretório raiz
server.use(express.static("public"));

// ------CONFIGURAR CAMINHOS DA APLICAÇÃO

// req: requisição
// res: resposta

server.get("/", (req, res) =>{
    // __dirname é uma variável já criada pelo node, referenciando nosso diretório
    res.sendFile(__dirname + "/views/index.html");
} );

// ligar o servidor na porta 3000
server.listen(3000);