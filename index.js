const { Client } = require("pg")
const args = process.argv.slice(2)
const consulta = require('./consulta')
const ingreso = require('./ingreso')
const editar = require('./editar')
const eliminar = require('./eliminar')
const consultarut = require('./consultarut')

const programaComando = args[0]

const programa = async (programa) => {
    console.log(process.argv)
    if(programa === 'consulta'){
    consulta(Client)
    console.log('Registro actual: ')
    }
    if(programa === 'ingreso'){
        ingreso(Client)
    }
    if(programa === 'editar'){
        editar(Client)
    }
    if(programa === 'eliminar'){
        eliminar(Client)
    }
    if(programa === 'consultarut'){
        consultarut(Client)
    }
}
programa(programaComando)