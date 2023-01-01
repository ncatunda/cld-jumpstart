require("dotenv").config();
const cloudinary = require("cloudinary").v2;
cloudinary.config({ secure: "true" });

//Getting started DOCS: https://cloudinary.com/documentation/how_to_integrate_cloudinary
//Node.js SDK: https://cloudinary.com/documentation/node_integration

console.log("****Set up and configure the SDK:****")
console.log(cloudinary.config().cloud_name);
console.log(cloudinary.config().api_key);
