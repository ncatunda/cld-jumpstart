require("dotenv").config();
const cloudinary = require("cloudinary").v2;
cloudinary.config({ secure: "true" });

//DOCS:
// format: https://cloudinary.com/documentation/image_optimization#automatic_format_selection_f_auto
// format: https://cloudinary.com/documentation/image_transformations#f_auto

// Auto format
console.log(cloudinary.url("hiker", {transformation: {fetch_format: "auto"}}));

