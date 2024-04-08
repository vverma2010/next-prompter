import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("Connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI as string, {
      dbName: "share_prompt",
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    });

    isConnected = true;
    console.log("MongoDB connected");
  } catch (err) {}
};
