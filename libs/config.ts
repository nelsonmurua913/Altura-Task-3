import dotenv from "dotenv";

dotenv.config();

// CREATE CONFIG OBJECT
export default {
  mongo: {
    url: process.env.MONGODB_URL || "",
  },
  server: {
    port: process.env.SERVER_PORT || 3000,
  },
};