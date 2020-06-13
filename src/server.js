const express = require("express")
const server = express()
const nunjucks = require("nunjucks")
const bcrypt = require("bcrypt")

const db = require("./database/db")

// configura a pasta public para que esteja disponível no diretório raiz
server.use(express.static("public"))

// habilitar o uso do req.body (importante para receber dados pelo método POST)
server.use(express.urlencoded({extended: true}));

// ------ configurar nunjucks
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})


// ------ configurar caminhos no servidor

server.get("/", (req, res) =>{
    return res.render("index.html")
} );

server.get("/cadastro-user", (req, res) =>{
    return res.render("cadastro-user.html")
} );

server.get("/page-login", (req, res) =>{
    return res.render("login.html")
} );

// ------ cadastrar usuário
// esse novo caminho deve ser colocado lá html na tag form
server.post("/save-user", async (req, res) => {
    // req.body: corpo do nosso formulário foi habilitado no início deste código

    // senha criptografada
    const hashedPassword =  await bcrypt.hash(req.body.password, 10)
    
    // armazena no BD
    const query = `INSERT INTO user ( user_name, name, password) VALUES (?, ?, ?);`
    const values = [
        req.body.username,
        req.body.name,
        hashedPassword
    ]

    // function call back
    function afterInsertData(err){
        if(err){
            console.log(err);
            return res.send("Erro no cadastro")
            
        }

        return res.render("cadastro-user.html", {saved:true})
    }

    db.run(query, values, afterInsertData)

})


// ------ efetuar login
server.post("/login", async (req, res) =>{
    const user_name = req.body.username
    const password = req.body.password

    const query = `SELECT user_name, name, password FROM user WHERE user_name = ?`
    db.get(query, [user_name], (err, row) => {
        return res.render("login.html", {check:true})
    })
})


// ligar o servidor na porta 3000
server.listen(3000);