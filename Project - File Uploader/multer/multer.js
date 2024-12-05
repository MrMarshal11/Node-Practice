import path from "node:path";
import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "multer/uploads/"); // Save to 'multer/uploads/' directory
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname); // Extract file extension
    const name = path.basename(file.originalname, ext); // Extract base name
    cb(null, `${name}-${Date.now()}${ext}`); // Append timestamp for uniqueness
  },
});

const upload = multer({ storage });

export default upload;
