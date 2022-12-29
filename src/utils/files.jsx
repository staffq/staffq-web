import AWS from "aws-sdk";
import { Buffer } from "buffer";

const uploadPdfToS3 = async (inputBase64, imageID, folder) => {
  // Configure AWS to use promise
  AWS.config.update({
    accessKeyId: process.env.NEXT_PUBLIC_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY,
  });
  // Create an s3 instance
  const s3 = new AWS.S3();
  // Let's assume the variable "base64" is one.
  console.log(inputBase64, "inputBase64");
  const base64Data = new Buffer.from(inputBase64.replace(/^data:application\/\w+;base64,/, ""),"base64");

  //const type = base64.split(';')[0].split('/')[1]
  const params = {
    Key: imageID + ".pdf",
    Bucket: "staffq-dev-bucket" + "/" + folder,
    Body: base64Data,
    ContentEncoding: "base64",
    ContentType: "application/pdf",
    ACL: "public-read-write",
  };
  try {
    return await s3.putObject(params).promise();
  } catch (error) {
    return error;
  }
};

export { uploadPdfToS3 };
