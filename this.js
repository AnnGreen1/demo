const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const app = express();
const upload = multer({ dest: "uploads/" });

app.post("/upload", upload.single("chunk"), (req, res) => {
  const { index, fileName } = req.body;
  const chunkFilePath = path.join(__dirname, "uploads", `${fileName}-${index}`);
  fs.renameSync(req.file.path, chunkFilePath);

  res.json({ message: "上传成功", index });
});

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
