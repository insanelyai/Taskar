import mongoose from "mongoose";

const connect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    mongoose.connection.on("connected", () => {
      console.log(
        `Connected to MongoDB at ${conn.connection.host}:${conn.connection.port}`
      );
    });

    mongoose.connection.on("error", (err) => {
      console.error("MongoDB connection error:", err.message);
    });
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err.message);
  }
};

export default connect;
