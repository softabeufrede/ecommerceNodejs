const express = require('express')
const router = express.Router();

const {sayHi}= require("../controllers/user");
//router.get("/api", (req, res) => {
  ////  res.send("Hello from node coom");
//});
router.get("/", sayHi);

module.exports= router;