const Model = require("../models");
const router = require("express").Router();
const session = require("express-session");


class Controller {
  static listView(req, res) {
    Model.Ticket.findAll({
      where: { flight_schedule: req.body.tanggal },
      order: [["price", "ASC"]],
    })

      .then((listDataTickets) => {
        listDataTickets.forEach((data) => {
          data.price = Model.Ticket.changePrice(data.price);
        });
        res.render("menu/homeMenu", { listDataTickets });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static findAll(req, res){
    Model.Ticket.findAll()
      .then(data =>{
        res.render('search_menu', {data})
      })
      .catch(err =>{
        res.send(err.message)
      })
  }

  static buyingTicket(req, res) {
    Model.Ticket.findOne({
      where: {
        id: req.params.id,
      },
    })
      .then((listDataTicket) => {
        res.render("menu/sureToBuy", { listDataTicket });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static createAtConjungtion(req, res) {
    let conjungtionID = {
      TicketId: req.params.id,
      CustomerId: req.session.idCustomer,
    };

    if (
      conjungtionID.TicketId == undefined ||
      conjungtionID.CustomerId == undefined
    ) {
      res.redirect("/login");
    } else {
      Model.TicketCustomer.create(conjungtionID)

        .then((listData) => {
          res.redirect("/menu/history");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  static logout(req, res) {
    delete req.session.idCustomer;
    delete req.session.email;

    res.redirect("/");
  }

  static getHistory(req, res) {
    Model.Customer.findAll({
      where: { id: req.session.idCustomer },
      include: [Model.Ticket],
    }).then((data) => {
      const data_tiket = data[0].Tickets;

      res.render("menu/history", { data_tiket });
    });
  }

  static minus(req, res) {
    let conjungtionID = {
      TicketId: req.params.id,
      CustomerId: req.session.idCustomer,
    };
    Model.Ticket
    .findOne({
      where: { id: req.params.id },
    })
    .then((data) => {
      const update_qty = {
        nama_pesawat: data.nama_pesawat,
        seats: data.seats - 1,
        price: data.price,
        flight_schedule: data.flight_schedule,
        destination: data.destination,
      };

      Model.Ticket.update(update_qty, { where: { id: req.params.id } });
      Model.TicketCustomer.create(conjungtionID)
      .then((result) => {
        res.render("search_menu.ejs");
      });
    });
  }
}

module.exports = Controller;
