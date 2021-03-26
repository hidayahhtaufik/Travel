const router = require("express").Router();
const Model = require("../models");
const hashPassword = require("../helpers/helper_hash_password");
var session = require("express-session");

class Controller {
  constructor() {}

  static register(req, res) {
    if (
      req.body.name == "" ||
      req.body.phone_number == "" ||
      req.body.email == "" ||
      req.body.password == ""
    ) {
      res.send("error");
    } else {
      const new_account = {
        name: req.body.name,
        phone: req.body.phone_number,
        email: req.body.email,
        password: req.body.password,
        role: "user",
      };

      Model.Customer.create(new_account).then((response) => {
        res.render("login/login");
      });
    }
  }

  static login(req, res) {
    if (req.body.email == "" || req.body.password == "") {
      res.send("error");
    } else {
      Model.Customer.findOne({ where: { email: req.body.email } })
      .then((response) => {
        if (hashPassword(req.body.password, response.password)) {
          req.session.idCustomer = response.id;

          if (response.role === "admin") {
            res.redirect("/admin");
          } else {
            req.session.idCustomer = response.id;
            req.session.email = response.email;

            res.redirect("/menu/search");
          }
        } else {
          res.send("gagal");
        }
      });
    }
  }
}

module.exports = Controller;
