const express = require("express");
const router = express.Router();

const { welcome } = require("../controllers/user");

router.get("/", welcome);

module.exports = router;
