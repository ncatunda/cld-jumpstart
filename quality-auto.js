require("dotenv").config();
const cloudinary = require("cloudinary").v2;
cloudinary.config({ secure: "true" });

//DOCS:
// quality: https://cloudinary.com/documentation/image_optimization#automatic_quality_selection_q_auto

// Auto quality
console.log(cloudinary.url("hiker", {transformation: {quality: "auto"}}));
