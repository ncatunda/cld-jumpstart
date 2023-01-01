require("dotenv").config();
const cloudinary = require("cloudinary").v2;
cloudinary.config({ secure: "true" });

//DOCS: https://cloudinary.com/documentation/image_transformations

// Resize an asset
console.log(
  cloudinary.url("hiker", { transformation: { width: 500, crop: "scale" } })
);
