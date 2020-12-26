const mongoose = require('mongoose');

mongoose.connection.on('connected', () => {
    console.info('Successfully conncted to database');
});
// Exit application on error
mongoose.connection.on('error', (err) => {
    // eslint-disable-next-line no-console
    console.error(`MongoDB connection error: ${err}`);
    process.exit(-1);
}); 

exports.connect = async () => {
    await mongoose.connect(DB.mongoURI, {
      keepAlive: 1,
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      autoIndex: false
    });
  
    return mongoose.connection;
  };