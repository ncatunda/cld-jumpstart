const { appendFileSync } = require("fs");

require("dotenv").config();
const fs = require("fs");
const cloudinary = require("cloudinary").v2;

// Public ID - Naming Options
// local asset
// use filename + no randomization

//Function to upload all images within a folder
function uploadAllImagesInFolder() {
  const folderPath = ".assets/DCIM";

  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error("Error reading the DCIM folder:", err);
      return;
    }

    const uploadPromises = files.map((file) => {
      const imagePath = `${folderPath}/${file}`;
      return uploadAllImagesInFolder(imagePaht);
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

// Call the function to upload all images from the "DCIM" folder
uploadAllImagesInFolder();


