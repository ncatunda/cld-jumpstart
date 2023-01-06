require("dotenv").config();
const cloudinary = require("cloudinary").v2;
cloudinary.config({ secure: "true" });

// Automatic Gravity + scale crop (Error!)
console.log(
    cloudinary.url("hiker", {
      transformation: {
        width: 500,
        crop: "scale",
        gravity: "auto"
      },
    })
  );