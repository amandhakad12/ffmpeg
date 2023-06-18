import express from "express";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use("/public", express.static("public"));
app.use(cookieParser());

app.listen(3000, () => {
  console.log("listening");
});
