require("dotenv").config();
const cloudinary = require("cloudinary").v2;

// DOCS: https://cloudinary.com/documentation/image_upload_api_reference

// Basic Upload Method - remote asset
cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Mavericks_Surf_Contest_2010b.jpg/2880px-Mavericks_Surf_Contest_2010b.jpg")
	.then(result => {console.log(result)})
	.catch(error => {console.log(error)});

