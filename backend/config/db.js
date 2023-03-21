import mongoose from 'mongoose';

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDb Connected : ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold);
    console.log(' some thing went wrong');
    process.exit(1);
    // one mens it will exit with a failer
  }
};

export default connectDb;
