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
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_name TEXT,
            name TEXT,
            password TEXT
        );
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
    // db.run(`DELETE FROM user WHERE id = ?;`, [8], function(err){
    //     if(err){
    //         return console.log(err)
    //     }
        
    //     console.log("Registro removido.")
    // })


    // -------- Consutar dados
    // db.all(`SELECT * FROM user;`, function(err, rows){
    //     if(err){
    //         return console.log(err)
    //     }

    //     console.log("Dados:")
    //     console.log(rows)
    // })


    // ------ teste
//     const query = `SELECT user_name, name, password FROM user WHERE user_name = ?;`
//     db.get(query, ["julianaibiapina"], (err, row) => {
//         console.log(row)
//         if(err){
//             // return console.error(err.message)      
//             return res.render("login.html", {check:false})      
//         }

//         if(await bcrypt.compare(password, row.password)){
//             return res.render("login.html", {check:true})
//         }else{
//             return res.render("login.html", {check:false})
//         }
//     })

})

