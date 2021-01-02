const mysql = require('mysql2');
const config = require('../config');

if (config.useStats) {
	const stats = mysql.createConnection({
		host: config.dbHost,
		database: config.dbDb,
		user: config.dbUser,
		password: config.dbPw
	});
	module.exports = stats;
}
