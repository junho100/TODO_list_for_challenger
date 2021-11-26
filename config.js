import dotenv from "dotenv";

dotenv.config();

const config = {
  server: {
    port: process.env.PORT,
    host: process.env.HOST,
  },
};

export default config;
