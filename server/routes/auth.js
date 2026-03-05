const express = require("express");
const router = express.Router();

// POST /api/auth/signup
router.post("/signup", (req, res) => {
  const { name, password } = req.body;
  console.log("Received signup data:", name, password);

  // Example response
  console.log("REQUEST", req.body)
  res.json({ message: "Signup successful!", received: { name,password } });
});

module.exports = router;