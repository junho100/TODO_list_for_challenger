import dotenv from "dotenv";

dotenv.config();

const config = {
  server: {
    port: process.env.PORT,
    host: process.env.HOST,
  },
  db: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
  auth: {
    saltRounds: process.env.SALT_ROUNDS,
    secKey: process.env.SEC_KEY,
    expDay: process.env.EXP_DAY,
  },
};

export default config;
