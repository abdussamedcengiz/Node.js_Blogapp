const express = require("express");
const app = express();
const path = require("path");
const userRoutes = require("./routes/user");
const adminRoutes = require("./routes/admin");

// Bootstrap'in yalnizca dagitim (dist) klasoru disariya aciliyor; onceden
// butun node_modules /libs altinda sunuluyordu.
app.use(
  "/libs/bootstrap",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist"))
);
app.use("/static", express.static(path.join(__dirname, "public")));
app.use("/admin", adminRoutes);
app.use(userRoutes);

// 404: hicbir rota eslesmezse buraya dusulur.
//
// ONCEDEN BOYLE BIR ISLEYICI YOKTU ve rotalar router.use("/") ile
// tanimlandigi icin olmayan bir adres bile ana sayfayi "200 OK"
// koduyla donuyordu. Durum kodu onemli: tarayicilar, arama motorlari
// ve izleme araclari sayfanin var olup olmadigini govdeye degil bu
// koda bakarak anlar.
app.use(function (req, res) {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, function () {
  console.log(`http://localhost:${PORT} adresinde calisiyor`);
});
