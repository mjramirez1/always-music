const { Client } = require("pg");
const config = {
    user: "postgres",
    host: "localhost",
    database: "alwaysmusic_db",
    password: "1234",
    port: 5432,
}
const client = new Client(config);

async function consulta() {
    await client.connect()
    const res = await client.query(
        "SELECT * FROM estudiantes"
    );
    console.log(res.rows);
    client.end();
}

module.exports = consulta