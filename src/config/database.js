const mongoose = require('mongoose');
const initDB = async (DB_URL) => {
    try {
        await mongoose.connect(DB_URL);
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}

module.exports = initDB;