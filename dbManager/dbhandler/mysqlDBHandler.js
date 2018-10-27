'use strict'

var mysql      = require('mysql');
var pool  = mysql.createPool({
    connectionLimit : 10,
    host            : process.env.mysqlhost,
    user            : process.env.mysqluser,
    password        : process.env.mysqlpassword,
    database        : process.env.MHA_DB
  });

  pool.on('connection', function (connection) {
    connection.query('SET SESSION auto_increment_increment=1')
  });

  pool.on('acquire', function (connection) {
    console.log('Connection %d acquired', connection.threadId);
  });

  pool.on('release', function (connection) {
    console.log('Connection %d released', connection.threadId);
  });