require("dotenv").config();
const cloudinary = require("cloudinary").v2;

// DOCS: https://cloudinary.com/documentation/image_upload_api_reference

// Basic Upload Method - remote asset
cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/3/35/Pro_Surfing_Competition.jpg")
	.then(result => {console.log(result)})
	.catch(error => {console.log(error)});

