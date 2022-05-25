const { Client } = require("pg")
const args = process.argv.slice(2)
const consulta = require('./consulta')
const ingreso = require('./ingreso')
const editar = require('./editar')
const eliminar = require('./eliminar')
const consultarut = require('./consultarut')

const config = {
    user: "postgres",
    host: "localhost",
    database: "alwaysmusic_db",
    password: "1234",
    port: 5432,
}

const programaComando = args[0]

const programa = async (programa) => {
    if(programa === 'consulta'){
    consulta()
    }
    if(programa === 'ingreso'){
        ingreso()
    }
    if(programa === 'editar'){
        editar()
    }
    if(programa === 'eliminar'){
        eliminar()
    }
    if(programa === 'consultarut'){
        consultarut()
    }
}
programa(programaComando)