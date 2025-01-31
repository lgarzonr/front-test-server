const express = require("express");
const router = express.Router();
const itemController = require("../controllers/itemController");

router.get("/", itemController.getItemsByWord);

router.get("/:id", itemController.getItemById);

module.exports = router;
