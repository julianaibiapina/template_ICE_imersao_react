const express = require("express")
const server = express()
const nunjucks = require("nunjucks")
const bcrypt = require("bcrypt")
const session = require("express-session")

const db = require("./database/db")
const { response } = require("express")

// configura a pasta public para que esteja disponível no diretório raiz
server.use(express.static("public"))

// habilitar o uso do req.body (importante para receber dados pelo método POST)
server.use(express.urlencoded({extended: true}));

// ------ inicia sessão
server.use(session({
    secret: "secret",
    resave: true,
    saveUninitialized: true
}))

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

server.post("/logout", (req, res) =>{
    req.session.destroy()
    return res.render("index.html")
})

server.get("/home-user", (req, res) =>{
    if (req.session.loggedin){
        return res.render("home-user.html", { username: req.session.username})
    }else{
        return res.render("login.html")
    }
    
} );



// ------ cadastrar usuário
// esse novo caminho deve ser colocado lá html na tag form
server.post("/save-user", async (req, res) => { 

    // req.body: corpo do nosso formulário foi habilitado no início deste código

    var check = false // informa se pode ou não cadastrar
    const query = `SELECT user_name FROM user WHERE user_name = ?`
    db.get(query, [req.body.username], (err, row) => {

        // 1. verifica de o user_name está disponível
        if(err){ // erro na consulta

            console.log(err)

        }else{

            if(row == null){ // nome de usuário disponível
                console.log("Ok");
                check = true
            } // se não, check já é falso

        }

        // 2. Realiza ou não o cadastro mediante a resposta guardada em check
        if(check){ // pode cadastrar

            // const hashedPassword =  await bcrypt.hash(req.body.password, 10) // senha criptografada (await não ta dando certo)
            const query = `INSERT INTO user ( user_name, name, password) VALUES (?, ?, ?);`
            const values = [
                req.body.username,
                req.body.name,
                req.body.password
            ]

            // function callback
            function afterInsertData(err){
                if(err){
                    console.log(err);
                    return res.render("cadastro-user.html", { check: false } )
                }
                
                console.log("cadastrado");
                
                return res.render("cadastro-user.html", { check: true } )
            }

            db.run(query, values, afterInsertData)

        }else{ // user_name não disponível
            console.log("não cadastrado.")
            
            return res.render("cadastro-user.html", { check: false } )
        }

    }) 

})


// ------ efetuar login
server.post("/login", async (req, res) =>{
    
    const user_name = req.body.username
    const password = req.body.password

    const query = `SELECT user_name, name, password FROM user WHERE user_name = ?`
    db.get(query, [user_name], async (err, row) => {
        if(err){
            console.log(err);
                      
            return res.render("login.html", { check: false}) // erro no BD
        }else{
            if(row == null){
                
                return res.render("login.html", { check: false}) // usuário não encontrado
            }else{ // usuário cadastrado, agora precisa conferir a senha

                try{
                    if(await bcrypt.compare(password, row.password)){
                        req.session.loggedin = true
                        req.session.username = row.name
                        return res.render("login.html", { check: true}) // usuário cadastrado e senha correta
                    }else{
                        
                        return res.render("login.html", { check: false}) // usuário cadastrado e senha incorreta
                    }
                } catch{
                    return res.status(500).send() // erro no bcrypt.compare               
                }
                
            }
            
        }
    })
})


// ligar o servidor na porta 3000
server.listen(3000);