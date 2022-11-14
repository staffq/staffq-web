/*
  Latest - Configurations for different environment
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
  };
  
  const environment = "development";
  
  const hostConfig = {
    WEB_URL: config[environment].webUrl,
    IMAGE_URL: `https://${config[environment].bucketName}.s3.amazonaws.com`,
    API_URL: config[environment].apiUrl,
    S3_BUCKET: `${config[environment].bucketName}`,
  };
  
  export { hostConfig };
  
