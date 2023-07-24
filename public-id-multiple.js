const { appendFileSync } = require("fs");

require("dotenv").config();
const fs = require("fs");
const cloudinary = require("cloudinary").v2;

//Function to upload all images within a folder
function uploadAllImagesInFolder() {
  const folderPath = "./assets/DCIM"; 

  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error("Error reading the DCIM folder:", err);
      return;
    }

    const uploadPromises = files.map((file) => {
      const imagePath = `${folderPath}/${file}`;
      return uploadImage(imagePath);
    });

    Promise.all(uploadPromises)
      .then((results) => {
        console.log("--------UPLOAD RESULTS----------");
        console.log(results);
        console.log("---------------------------------");
      })
      .catch((error) => {
        console.log("Error uploading images:", error);
      });
  });
}

// Function to upload a single image
function uploadImage(imagePath) {
  return cloudinary.uploader.upload(imagePath, {
    use_filename: true,
    unique_filename: false,
  });
}

// Call the function to upload all images from the "DCIM" folder
uploadAllImagesInFolder();