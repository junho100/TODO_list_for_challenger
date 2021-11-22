import dotenv from "dotenv";

dotenv.config();

const config = {
  server: {
    port: process.env.PORT,
  },
};

export default config;
