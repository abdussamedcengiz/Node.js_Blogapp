const express = require("express");
const router = express.Router();
const path = require("path");

// use() yerine get(): gerekcesi routes/user.js icinde anlatiliyor.
// Buradaki router.use("/") de /admin altindaki HER adresi yakalayip
// blog listesini 200 koduyla donuyordu.
router.get("/blog/create", function (req, res) {
  res.sendFile(path.join(__dirname, "../views/admin", "blog-create.html"));
});

router.get("/blogs/:blogid", function (req, res) {
  res.sendFile(path.join(__dirname, "../views/admin", "blog-edit.html"));
});
router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../views/admin", "blog-list.html"));
});

module.exports = router;
