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

const ingresoNombre = args[1]
const ingresoRut = args[2]
const ingresoCurso = args[3]
const ingresoNivel = args[4]

async function editar() {
    await client.connect()
    const res = await client.query(
        `UPDATE estudiantes SET nombre = '${ingresoNombre}', rut = '${ingresoRut}', curso = '${ingresoCurso}', nivel = '${ingresoNivel}',  RETURNING *;`
    );
    console.log(`Registro modificado del estudiante ${ingresoNombre}`, res.rows[0]);
    client.end();
}

module.exports = editar

