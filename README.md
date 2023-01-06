# Cloudinary Jumpstart
Cloudinary Jumpstart - Introduction to Cloudinary Using Node.

You'll learn the basics of how to get configured and started as a Cloudinary developer.

Topics:
- Environment Setup and Account Identifiers
- Uploading Basics
- Cloudinary URL Builder
- Transformation and Delivery (Resize, Crop, Optimize)
- Further Support


## Environment Setup

### Install Node.js and NPM
You will need to install Node.js on your machine.
[Download Node](https://nodejs.org/en/download/)

 Important - Installing Node.js will also install npm, the package manager for Node.js.

#### Mac Users
Using Homebrew:

```bash
brew install node
```

#### Windows
Using Chocolatey

```bash
choco install nvs
```

#### Verify Node/NPM install

```bash
# verify versions
$ node --version
v19.2.0

$ npm --version
8.19.3
```

### Choose an IDE or Use Text Editor

- [Visual Studio Code](https://code.visualstudio.com/download) *We recommend VS Code*
- [WebStorm](https://www.jetbrains.com/webstorm/) 
- [Sublime](https://www.sublimetext.com/) 
- [Atom](https://atom.io/) 
- [iTerm](https://iterm2.com/) 

### Download Repository

[Cloudinary Jumpstart](https://github.com/cloudinary-training/cld-jumpstart)

Checkout a local copy of the repository using the following command in a command line terminal on your computer:

```git clone https://github.com/cloudinary-training/cld-jumpstart.git```

- Assets are located in `/assets` directory
- Run scripts from the cld-jumpstart directory you have checked out. All references to local assets are relative to the root of the repository.

### Credentials

1. Create a free account on Cloudinary at [https://www.cloudinary.com/signup]

2. Navigate to the Dashboard. Copy the `CLOUDINARY_URL` into your clipboard.

![Dashboard](/assets/env_variable.png)

- Key: CLOUDINARY_URL
- Value: cloudinary://API_KEY:API_SECRET@CLOUD_NAME


3. Create a `.env` file in the root of the project. Paste the CLOUDINARY_URL environment variable into your `.env` file.


### Libraries

You will be using the `cloudinary` and the `dotenv` libraries.

### Install Cloudinary

```
npm install cloudinary
```

### Install dotenv

```
npm install dotenv 
```
In config.js and all other node scripts, you'll see 

```
require('dotenv').config();
const cloudinary = require('cloudinary').v2;

```

## Run Code: Test Credentials (config.js)

Make sure to npm install the Node.js libraries. You will be using the `cloudinary` and the `dotenv` libraries.

```bash
npm i
```

## Run Code: config.js

```bash
node config.js
```
You should see your Cloud Name and API Key output in this format:

```bash
****Set up and configure the SDK:****
 cloud_name
 api_key 
```
PS- Always keep your API_Secret private!

## Run Code

Basic Upload Method:
- Local
```
node local-upload.js
```
- Remote
```
node remote-upload.js
```
- Public ID Naming Options
```
node public-id.js
```
- Specify Resource Type
```
node resource-type.js
```
URL Builder:
- Retrieve Cloud Name from CLOUDINARY_URL
```
node cloudinary-url.js
```
- Supply Cloud Name in Code
```
node cloudinary-url-without-env.js
```
Basic transformations:
- resize
```
node resize.js
```
- fill crop with gravity

```
node crop.js
```

Basic optimizations:
- automatic format
```
node format-auto.js
```

- automatic quality
```
node quality-auto.js
```

- both (f_auto, q_auto)
```
node optimize.js
```
## Introduction to Cloudinary for API Users and Node.js Developers

If you'd like to learn more than the basics of getting started with Cloudinary, please do check out our course: [Introduction to Cloudinary for API Users and Node.js Developers](https://training.cloudinary.com/courses/introduction-for-api-users-developers), and its associated [repository](https://github.com/cloudinary-training/cld-intro-nodejs)

To learn even more, head to the [Cloudinary Academy](https://training.cloudinary.com)

# Credits 

## assets/images  

hiker.jpg - [Photo by Edou Hoekstra from Pexels](https://www.pexels.com/photo/man-in-white-shirt-and-black-shorts-standing-on-rock-near-lake-3756719/)

glacier.mp4 - [Photo by Jan Zakelj from Pexels](https://www.pexels.com/video/cold-glacier-iceberg-melting-9358281/)

surfer.jpg - [Wikimedia](https://upload.wikimedia.org/wikipedia/commons/3/35/Pro_Surfing_Competition.jpg)

y2kbug.ttf - [Public TrueType Font File, Y2K Bug, from All-free-download.com](https://all-free-download.com/font/download/y2k_bug_6919020.html)