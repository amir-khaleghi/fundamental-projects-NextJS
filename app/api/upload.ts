// pages/api/upload.js

import formidable from 'formidable';
import db from '@/utils/db';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  const form = new formidable.IncomingForm();

  form.parse(req, async (err, fields, files) => {
    // Handle other form fields (name, age) here if needed
    const { name, age } = fields;

    // Assuming 'file' is the name attribute in your form for the file input
    const imageFile = files.file;

    // Upload image to your storage service and get the URL or file path
    const imageUrl = await uploadToStorageService(imageFile);

    // Save image metadata to the database
    const user = await db.person.create({
      data: {
        name,
        age: parseInt(age),
        imageUrl,
      },
    });

    res.status(200).json({ success: true, user });
  });
}

async function uploadToStorageService(file) {
  // Implement the logic to upload the file to your storage service here
  // Return the URL or file path after successful upload
  // Example: Upload to S3 and return the S3 URL
}
