const Model = require("../models");
const router = require("express").Router();
const hashPassword = require("../helpers/helper_hash_password");
const session = require("express-session");

class Controller {
  constructor() {}

  static findAll(req, res){
    Model.Customer.findAll({
      where: {
        role: "admin"
      }
    })
      .then(data =>{
        // res.send(data)
        res.render('adminList', {data})
      })
      .catch(err =>{
        res.send(err.message)
      })
  }

  static viewAll(req, res) {
    Model.Ticket.findAll()

      .then((list) => {
        list.forEach((data) => {
          data.price = Model.Ticket.changePrice(data.price);
        });
        res.render("admin/admin_homepage", { list });
      })
      .catch((err) => {
        res.send(err.message);
      });
  }

  static addAdmin(req, res) {
    if (
      req.body.name == "" ||
      req.body.phone_number == "" ||
      req.body.email == "" ||
      req.body.password == ""
    ) {
      res.send("error");
    } else {
      console.log(req.body)
      const new_account = {
        name: req.body.name,
        phone_number: req.body.phone_number,
        email: req.body.email,
        password: req.body.password,
        gender: req.body.gender,
        role: "admin",
      };
      Model.Customer.create(new_account)
      .then(() => {
        res.redirect("/admin");
      });
    }
  }

  static destroy(req,res){
    Model.Customer.destroy({
      where: {id: req.params.id}
    })
    .then(() =>{
      res.redirect('/admin')
    })
    .catch(err =>{
      res.send(err.message)
    })
  }

  static addTicket(req, res) {
    // console.log(req.body);
    Model.Ticket.create({
      nama_pesawat: req.body.nama_pesawat,
      seats: req.body.seats,
      price: req.body.price,
      destination: req.body.destination,
      flight_schedule: req.body.flight_schedule,
    })

      .then((data) => {
        // res.send(data);
        res.redirect("/admin");
      })
      .catch((err) => {
        throw err;
      });
  }

  static getEditTicket(req, res) {
    Model.Ticket.findOne({ where: { id: req.params.id } }).then((data) => {
      res.render("../views/admin/edit_tiket.ejs", { data });
    });
  }

  static editTicket(req, res) {
    Model.Ticket.update(req.body, { where: { id: req.params.id } }).then(
      (result) => {
        res.redirect("/admin");
      }
    );
  }

  static deleteTicket(req, res) {
    Model.Ticket.destroy({
      where: {
        id: req.params.id,
      },
    }).then((response) => {
      res.redirect("/admin");
    });
  }
}

module.exports = Controller;
