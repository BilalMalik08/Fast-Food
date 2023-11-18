import http from "http";
import mongoose from "mongoose";

const url =
  "mongodb+srv://muhammadbilal:bilalsamie11@cluster0.yeflsll.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(url)
  .then(() => console.log("Connected"))
  .catch(() => console.log("Not Connected"));

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Home page loaded");
    res.end();
  }

  if (req.url === "/products") {
    res.write("Products page loaded");
    res.end();
  }

  if (req.url === "/services") {
    res.write("Services page loaded");
    res.end();
  }
});

server.listen(5000);
