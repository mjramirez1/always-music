const { Client } = require("pg");
const config = {
    user: "postgres",
    host: "localhost",
    database: "alwaysmusic_db",
    password: "1234",
    port: 5432,
};
const client = new Client(config);


async function eliminar() {
    await client.connect()
    const res = await client.query(
        "DELETE FROM estudiantes WHERE rut = '170201728'"
    )
    console.log('Cantidad de registros afectados', res.rowCount);
    client.end()
}
module.exports = eliminar