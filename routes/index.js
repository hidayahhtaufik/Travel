const routes = require("express").Router();
const Controller = require("../controllers/controller");
const checkLoginRegister = require("../middlewares/check_login_register");
var session = require("express-session");

routes.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
  })
);

routes.get("/", checkLoginRegister, (req, res) => {
  res.render("homepage");
});

routes.get("/register", checkLoginRegister, (req, res) => {
  res.render("register/register");
});

routes.post("/register", Controller.register);

routes.get("/login", checkLoginRegister, (req, res) => {
  res.render("login/login");
});

routes.post("/login", Controller.login);

module.exports = routes;
