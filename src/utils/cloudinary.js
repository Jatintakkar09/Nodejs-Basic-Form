import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({ 
  cloud_name: 'dosxezkdw', 
  api_key: '493288967476844', 
  api_secret: '0Nq-WML9bcRBjNCvOL0WcNj6BKI' // Click 'View Credentials' below to copy your API secret
});

const UploadOnCloudinary = async (LocalFilePath) => {
  try {
    if (!LocalFilePath) return null;

    const uploadResult = await cloudinary.uploader.upload(LocalFilePath, {
      resource_type: "auto",
    });

    console.log("file Uploaded SuccessFully", uploadResult.url);
       fs.unlinkSync(LocalFilePath)
    return uploadResult;
  } catch (error) {
    fs.unlinkSync(LocalFilePath);
    return null;
  }
};


export {UploadOnCloudinary}