const mongoose = require("mongoose");
const dns = require("dns");

// Use public DNS servers if the default resolver blocks MongoDB Atlas SRV lookups.
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected successfully`);
  } catch (error) {
    console.error(" MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
