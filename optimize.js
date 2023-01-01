require("dotenv").config();
const cloudinary = require("cloudinary").v2;
cloudinary.config({ secure: "true" });

//DOCS:
// format: https://cloudinary.com/documentation/image_optimization#automatic_format_selection_f_auto
// format: https://cloudinary.com/documentation/image_transformations#f_auto
// quality: https://cloudinary.com/documentation/image_optimization#automatic_quality_selection_q_auto

// Auto format + auto quality (f_auto, q_auto)
console.log(
  cloudinary.url("hiker", {
    transformation: {
      width: 500,
      height: 500,
      crop: "fill",
      gravity: "auto",
      fetch_format: "auto",
      quality: "auto",
    },
  })
);
