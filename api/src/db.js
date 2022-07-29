require('dotenv').config();
const mongoose = require('mongoose');

(async () => {
  try {      
    const db = await mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/basto");
    console.log('DB connected to', db.connection.name);
  } catch (err) {
    console.error(err);
  }
})()