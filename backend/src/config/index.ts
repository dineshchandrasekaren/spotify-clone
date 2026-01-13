import "dotenv/config";
const {
  MONGO_URL = "mongodb://localhost:27017/spotify",
  PORT = 5000,
  CLOUDINARY_API_SECRET = "",
  CLOUDINARY_API_KEY = "",
  CLOUDINARY_CLOUD_NAME = "",
} = process.env;

export default {
  // Server configuration
  PORT,

  // Database configuration
  MONGO_URL,

  // Cloudinary configuration
  CLOUDINARY_API_SECRET,
  CLOUDINARY_API_KEY,
  CLOUDINARY_CLOUD_NAME,
};
