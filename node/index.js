const express = require('express')
const mysql = require('mysql')

async function createApp() {
    const app = express()
    const config = {
        host: 'db',
        user: 'root',
        password: 'root',
        database:'nodedb'
    };

    app.get('/', (req, res) => {

        const connection = mysql.createConnection(config)

        const sql = `INSERT INTO people(name) values(${Date.now()})`
        connection.query(sql)

        connection.query('SELECT name FROM people', (err, result) => {

            if(!result)
                return;

            const html = `<h1>Full Cycle Rocks!</h1>\n
            <ul>
               ${result.map(name => `<li>${name.name}</li>`).join('')}
           </ul>`;
           res.send(html);
        });

        connection.end();
    })

    return app;
}

module.exports = createApp