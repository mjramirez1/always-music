const { Client } = require("pg");
const args = process.argv.slice(2)

const config = {
    user: "postgres",
    host: "localhost",
    database: "alwaysmusic_db",
    password: "1234",
    port: 5432,
};
const client = new Client(config)

const consultarut = args[1] 

async function consultaRut() {
    await client.connect()
    const res = await client.query(
        `SELECT * FROM estudiantes WHERE rut = '${consultarut}'`
    )
    console.log(res.rows);
    client.end();
}
module.exports = consultaRut