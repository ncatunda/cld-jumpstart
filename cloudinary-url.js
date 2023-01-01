require("dotenv").config();
const cloudinary = require("cloudinary").v2;
cloudinary.config({ secure: "true" });

// create a Cloudinary delivery URL using cloud name and public id

console.log(cloudinary.url("hiker"));
