const routes = require("express").Router();
const Controller = require("../controllers/controller_admin");

routes.get("/", Controller.viewAll);

routes.get("/addAdmin", (req, res) => {
  res.render("addAdmin");
});

routes.post("/addAdmin", Controller.addAdmin);

routes.get("/show", Controller.findAll)

routes.get("/addTicket", (req, res) => {
  res.render("admin_add_ticket.ejs");
});

routes.post("/addTicket", Controller.addTicket);

routes.get('/delete/:id', Controller.destroy)

routes.get("/editTicket/:id", Controller.getEditTicket);

routes.post("/editTicket/:id", Controller.editTicket);

routes.get("/deleteTicket/:id", Controller.deleteTicket);

module.exports = routes;
