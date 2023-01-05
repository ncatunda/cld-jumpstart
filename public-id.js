require("dotenv").config();
const cloudinary = require("cloudinary").v2;

// Public ID - Naming Options
// local asset

// default - 20 random characters
// cloudinary.uploader
//   .upload("./assets/hiker.jpg")
//   .then((result) => {
//     console.log("------------DEFAULT------------------");
//     console.log(result);
//     console.log("-------------------------------------");
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// file name + unique 6 random character suffix
// cloudinary.uploader
//   .upload("./assets/hiker.jpg", { use_filename: true, unique_filename: true })
//   .then((result) => {
//     console.log("------------FILENAME + UNIQUE----------");
//     console.log(result);
//     console.log("-------------------------------------");
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// use filename + no randomization
cloudinary.uploader
  .upload("./assets/hiker.jpg", { use_filename: true, unique_filename: false })
  .then((result) => {
    console.log("--------FILENAME + NOT UNIQUE----------");
    console.log(result);
    console.log("-------------------------------------");
  })
  .catch((error) => {
    console.log(error);
  });

// specify public ID
// cloudinary.uploader
//   .upload("./assets/hiker.jpg", { public_id: "mountain-123" })
//   .then((result) => {
//     console.log("--------SPECIFY PUBLIC ID-------------");
//     console.log(result);
//     console.log('-------------------------------------');
//   })
//   .catch((error) => {
//     console.log(error);
//   });
