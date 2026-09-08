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

const PORT = process.env.PORT || 4000;
app.listen(PORT, function () {
  console.log(`http://localhost:${PORT} adresinde calisiyor`);
});
