require("dotenv").config();
const cloudinary = require("cloudinary").v2;
cloudinary.config({ secure: "true" });

// create a Cloudinary delivery URL using the CLOUDINARY_URL in the config/ .env file.

console.log(cloudinary.url("hiker"));
