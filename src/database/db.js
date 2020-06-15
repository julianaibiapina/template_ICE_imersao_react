// importa dependência do sqlite3
const sqlite  = require("sqlite3").verbose()

// cria objeto que realizará as operações no BD
const db = new sqlite.Database("./src/database/database.db") 

// para que seja possível "pegar" la no servidor
module.exports = db
db.serialize( () => {

    // -------- cria tabela user
    db.run(`
        CREATE TABLE IF NOT EXISTS user (
            user_name TEXT PRIMARY KEY,
            name TEXT,
            password TEXT
        );
    `)


    // -------- cria tabela article
    db.run(`
            CREATE TABLE IF NOT EXISTS article (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                user_id TEXT, 
                title TEXT,
                subtitle TEXT,
                date TEXT,
                conteudo TEXT,
                link_image TEXT,
                FOREIGN KEY(user_id) REFERENCES user(user_name)
            )
    `)

    // -------- Inserir dados
    // const query = `INSERT INTO user ( user_name, name, password) VALUES (?, ?, ?);`
    // const values = [
    //     "julianaibiapina",
    //     "Juliana",
    //     "senhateste"
    // ]

    // function afterInsertData(err){
    //     if(err){
    //         return console.log(err)
    //     }

    //     console.log("Cadastrado com sucesso")
    //     console.log(this)
    // }

    // db.run(query, values, afterInsertData)


    // -------- Deletar dados
    // db.run(`DELETE FROM user WHERE id = ?;`, [40], function(err){
    //     if(err){
    //         return console.log(err)
    //     }
        
    //     console.log("Registro removido.")
    // })


    // -------- Consutar dados
    db.all(`SELECT * FROM user;`, function(err, rows){
        if(err){
            return console.log(err)
        }

        console.log("Dados:")
        console.log(rows)
    })


 

})

