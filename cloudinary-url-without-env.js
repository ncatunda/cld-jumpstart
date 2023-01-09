const cloudinary = require("cloudinary").v2;
cloudinary.config({ cloud_name:"jen-brissman", secure: "true" });

// Supply cloud_name explicitly in the config object, not using CLOUDINARY_URL in .env file, not requiring dotenv 
console.log(cloudinary.url("hiker"));

