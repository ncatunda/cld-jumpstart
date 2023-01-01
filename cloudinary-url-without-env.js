const cloudinary = require("cloudinary").v2;
cloudinary.config({ cloud_name:"jen-brissman", secure: "true" });

// Create a URL from config with cloud name and public id
console.log(cloudinary.url("hiker"));

