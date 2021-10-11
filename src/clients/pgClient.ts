const { Client } = require('pg');

export const pgClient = new Client({
    user: 'lzvstsvtwjvbvm',
    host: 'ec2-3-221-100-217.compute-1.amazonaws.com',
    database: 'dba02ugmcerddt',
    password: '2497423c8235d10bab30eb20f5d36237e7119c77afbbad70c30af172a744fe82',
    port: 5432,
});

pgClient.connect();