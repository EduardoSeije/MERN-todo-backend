const mongoose = require('mongoose');

const dbConnect = async () => {
  try {
    const connected = await mongoose.connect(
      process.env.MONGODB_URL ,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(`MongoDb Connected successfully`);
  } catch (error) {
    console.log(`Error occurred, ${error.message}`);
  }
};

module.exports = { dbConnect };

