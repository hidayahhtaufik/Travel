const express = require("express");
const app = express();
const port = 3000;
const routerIndex = require("./routes/index");
const menu = require("./routes/menu");

app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");

const admin = require("./routes/admin");

app.use("/", routerIndex);
app.use("/menu", menu);
app.use("/admin", admin);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
