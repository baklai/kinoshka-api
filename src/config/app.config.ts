const PORT = 3000;
const HOST = '127.0.0.1';
const MONGO_URI = 'mongodb://localhost:27017/kinoshka';
const ACCESS_SECRET = 'KINOSHKA-ACCESS-SECRET';

export default () => ({
  HOST: process.env.HOST || HOST,
  PORT: parseInt(process.env.PORT || '', 10) || PORT,
  MONGO_URI: process.env.MONGO_URI || MONGO_URI,
  ACCESS_SECRET: process.env.ACCESS_SECRET || ACCESS_SECRET
});
