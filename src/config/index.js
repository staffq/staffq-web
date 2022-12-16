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
      apiUrl: "",
      bucketName: "",
    },
   local: {
      webUrl: "http://localhost:4000/",
      apiUrl: "http://localhost:4052/dev/",
      bucketName: "",
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
  