require("dotenv").config();
const cloudinary = require("cloudinary").v2;

// Specifying Resource Type

// Default
cloudinary.uploader
  .upload("./assets/hiker.jpg")
  .then((result) => {
    console.log('------------DEFAULT---------------');
    console.log(result);
    console.log('-----------------------------------');
  })
  .catch((error) => {
    console.log(error);
  });

// Video
cloudinary.uploader
  .upload("./assets/glacier.mp4", { resource_type: "video" })
  .then((result) => {
    console.log('------------VIDEO------------------');
    console.log(result);
    console.log('-----------------------------------');
  })
  .catch((error) => {
    console.log(error);
  });


// Raw
cloudinary.uploader
  .upload("./assets/y2kbug.ttf", { resource_type: "raw" })
  .then((result) => {
    console.log('-----------------RAW---------------');
    console.log(result);
    console.log('-----------------------------------');
  })
  .catch((error) => {
    console.log(error);
  });

// // Auto
cloudinary.uploader
  .upload("./assets/glacier.mp4", { resource_type: "auto" })
  .then((result) => {
    console.log('---------------AUTO-----------------');
    console.log(result);
    console.log('------------------------------------');
  })
  .catch((error) => {
    console.log(error);
  });
