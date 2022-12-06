const mysql = require('mysql2');

const config = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'demo'
};

const findSensors = (callback = (data) => {}) => {

    try {
        const connection = mysql.createConnection(config);
        connection.connect((err) => {
            if(err) {
                console.log(err);
                return;
            }
            console.log('Connected to database');
        });
        connection.query("SELECT * FROM sensor", (err, results, fields) => {
            
            if(callback) callback(results);
            connection.end();
        });
    } catch (error) {
        console.log(error);
        if(callback) callback(null);
    }
}

const insert = (data) => {

    try {
        console.log(data);
        const connection = mysql.createConnection(config);
        connection.connect();
        connection.query("INSERT INTO sensor_data (value, sensor_id, created_at) VALUES (" + data.value + ", " + data.sensorId + ", NOW())",
            (err, results, fields) => {
                connection.end();
            }
        );
    } catch (error) {
        console.log(error);
    }
}   

const findSensorData = (sensorId, callback = (data) => {}) => {

    try {
        const connection = mysql.createConnection(config);
        connection.connect();
        connection.query(`SELECT * FROM sensor_data WHERE sensor_id = ${sensorId}`, (err, results, fields) => {
            if(callback) callback(results);
            connection.end();
        });
    } catch (error) {
        console.log(error);
        callback(null);
    }
} 

const findData = (callback = (data) => {}) => {

    try {
        const connection = mysql.createConnection(config);
        connection.connect();
        connection.query(`SELECT * FROM sensor_data`, (err, results, fields) => {
            if(callback) callback(results);
            connection.end();
        });
    } catch (error) {
        console.log(error);
        callback(null);
    }
} 

module.exports = {  
    findSensors,
    insert,
    findData,
    findSensorData
}