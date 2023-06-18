import express from "express";
import multer from "multer";
import path from "path";
import crypto from "crypto";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/upload");
  },
  filename: function (req, file, cb) {
    const name = crypto.randomUUID() + path.extname(file.originalname);
    cb(null, name);
  },
});
const upload = multer({ storage: storage });

const router = express.Router();

export default router;
