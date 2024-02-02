const express = require("express");
const router = express.Router();
const User = require("../models/invoice");

router.post("/", async (req, res) => {
  try {
    
    await new User({ ...req.body}).save();
    res.status(400).send({ message: "User created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
