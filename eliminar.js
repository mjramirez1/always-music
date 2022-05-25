const { Client } = require("pg");
const config = {
    user: "postgres",
    host: "localhost",
    database: "alwaysmusic_db",
    password: "1234",
    port: 5432,
}
const client = new Client(config)
const args = process.argv.slice(2)
const ingresoRut = args[1]

async function eliminar() {
    await client.connect()
    const res = await client.query(
        `DELETE FROM estudiantes WHERE rut = '${ingresoRut}'`
    )
    console.log(`Registro de estudiante con rut ${ingresoRut} eliminado`)
    client.end()
}
module.exports = eliminar