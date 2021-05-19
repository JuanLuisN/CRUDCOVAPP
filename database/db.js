const mysql = require('mysql');

const pool = mysql.createPool({
    host: 'b5pofpw3ei4wd0sy1eea-mysql.services.clever-cloud.com',
    user: 'u5hoog4tmttkkj9h',
    password: '9bOEXNcsoAueiw8JA0xL',
    database: 'b5pofpw3ei4wd0sy1eea'
})
pool.getConnection((err, connection)=>{
    if(err){
        console.error('conexion con la bd cerrada')
    }
    if(connection) connection.release();
    console.log('Db conectada');
    return;
})

module.exports = pool;
