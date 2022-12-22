/*
  Configurations for different runtime
*/
const config = {
    production: {
      webUrl: "",
      apiUrl: "",
      bucketName: "",
    },
  
    staging: {
      webUrl: "",
      apiUrl: "",
      bucketName: "",
    },
  
    development: {
      webUrl: "",
      apiUrl: "https://2lx73wz4k5.execute-api.ap-southeast-1.amazonaws.com/dev/",
      bucketName: "",
    },
   local: {
      webUrl: "http://localhost:4000/",
      apiUrl: "http://localhost:4052/dev/",
      bucketName: "http://staffq-dev-bucket.s3.amazonaws.com/",
    },
  };
  
  const environment = "local";
  
  const hostConfig = {
    WEB_URL: config[environment].webUrl,
    IMAGE_URL: `https://${config[environment].bucketName}.s3.amazonaws.com`,
    API_URL: config[environment].apiUrl,
    S3_BUCKET: `${config[environment].bucketName}`,
  };
  
  export { hostConfig };
  