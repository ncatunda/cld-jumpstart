require("dotenv").config();
const cloudinary = require("cloudinary").v2;
cloudinary.config({ secure: "true" });

//DOCS: https://cloudinary.com/documentation/image_transformations

// Crop (fill) with gravity
console.log(cloudinary.url("hiker", {transformation: {width: 500, height: 500, crop: "fill", gravity: "auto"}}));
