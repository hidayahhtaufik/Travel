const routes = require("express").Router();
const Controller = require("../controllers/controller_menu");
const checkIsLogin = require("../middlewares/checkIsLogin");

const bodyParser = require("body-parser");

routes.get("/", checkIsLogin, Controller.listView);

routes.get("/search", checkIsLogin, Controller.findAll);

routes.post("/search", Controller.listView);

routes.get("/logout", Controller.logout);

routes.get("/transaction/:id", Controller.buyingTicket);

routes.post("/transaction/:id", Controller.createAtConjungtion);

routes.post("/minusQty/:id", Controller.minus);

routes.get("/history", Controller.getHistory);

module.exports = routes;
