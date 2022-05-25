const { Client } = require("pg");
const config = {
    user: "postgres",
    host: "localhost",
    database: "alwaysmusic_db",
    password: "1234",
    port: 5432,
}
const client = new Client(config);

const args = process.argv.slice(2)

const ingresoNombre = args[1]
const ingresoRut = args[2]
const ingresoCurso = args[3]
const ingresoNivel = args[4]

async function ingreso() {
    await client.connect()
    const res = await client.query(
        `INSERT INTO estudiantes (nombre, rut, curso, nivel) VALUES ('${ingresoNombre}', '${ingresoRut}', '${ingresoCurso}', ${ingresoNivel}) RETURNING *`)
    console.log(`Estudiante ${ingresoNombre} ingresado correctamente`)
    client.end()
}
module.exports =  ingreso
