const express = require("express");
const router = express.Router();

const path = require("path");

// router.use YERINE router.get KULLANILIYOR.
//
// use() bir yol ONEKIYLE eslesir ve HTTP metodunu ayirt etmez. Bu
// yuzden son satirdaki router.use("/") BUTUN adresleri yakaliyordu:
// olmayan bir sayfa istendiginde bile ana sayfa, üstelik "200 OK"
// koduyla donuyordu. Tarayici ve arama motorlari boyle bir cevabi
// gecerli bir sayfa sanar.
//
// get() ise tam eslesme arar; eslesmeyen adresler index.js'teki 404
// isleyicisine dusuyor.
router.get("/blogs/:blogid", function (req, res) {
  res.sendFile(path.join(__dirname, "../views/users", "blog-details.html"));
});
router.get("/blogs", function (req, res) {
  res.sendFile(path.join(__dirname, "../views/users", "blogs.html"));
});
router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../views/users", "index.html"));
});
module.exports = router;
