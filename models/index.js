const dbConfig = require("../db/db");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.locations = require("./location")(mongoose);
db.cities = require("./city")(mongoose);
db.provinces = require("./province")(mongoose);

module.exports = db;
