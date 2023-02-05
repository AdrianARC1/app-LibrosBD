const { createPool } = require('mysql2/promise')

const pool = createPool({
    // host: process.env.HOST,
    // user: process.env.USUARIO,
    // password: process.env.PASSWORD,
    // database: process.env.DATABASE

})

module.exports = pool