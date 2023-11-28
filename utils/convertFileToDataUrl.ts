import fs from 'fs';

const convertFileToDataUrl = async (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'base64', (err, data) => {
      if (err) {
        reject(err);
      } else {
        const base64String = `data:image/png;base64,${data}`;
        resolve(base64String);
      }
    });
  });
};

export default convertFileToDataUrl;
