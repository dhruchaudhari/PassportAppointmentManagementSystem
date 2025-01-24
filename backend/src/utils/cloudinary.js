import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";
dotenv.config();


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;

        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto",
        });

        console.log("File upload success", response.url);

        // Clean up local file after upload
        fs.unlinkSync(localFilePath);

        return response;
    } catch (error) {
        console.error("Error during file upload:", error);
        if (fs.existsSync(localFilePath)) {
            fs.unlinkSync(localFilePath); // Remove the file if it exists
        }
        throw error;
    }
};

export { uploadOnCloudinary };






// import { v2 as cloudinary} from "cloudinary";
// import fs from "fs"

// cloudinary.config({ 
//     cloud_name: process.env.CLOUDINARY_NAME, 
//     api_key: process.env.CLOUDINARY_API_KEY, 
//     api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
// });

// const uploadOnCloudinary = async (localfilePath) => {
//     try {
//         if(!localfilePath) return null

//         const response = await cloudinary.uploader.upload(localfilePath , {
//             resource_type : "auto"
//         })
//         console.log("File upload success" , response.url)

//         return response
//     } catch (error) {
//         fs.unlinkSync(localfilePath) // upload failed so remove the file from the local server
//     }
// }

// export  {uploadOnCloudinary}