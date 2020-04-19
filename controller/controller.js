const express = require("express");
const router = express.Router();
const db = require("../models");

//getting burgers associated with customers
router.get('/', function (req, res) {
    db.Burgers.findAll({
        include: [{
            model: db.Customer
        }],
        order: [
            ['burger_name']
        ]
    }).then(function (dbBurgers) {
        var hbsObj = {
            burgers: dbBurgers
        }
        res.render('index', hbsObj);
    });
});

//new burger data create
router.post("/burgers", function (req, res) {
    db.Burgers.create({
        //get burger name from input named burger-name
        name: req.body.burger_name
    }).then(function () {
        res.redirect('/');
    });
});

//devoured update to true
router.put("/update/:burger_id", function (req, res) {
    db.Customer.findOrCreate({
        where: {
            //get customer's name from input named customer-name
            name: req.body.customer_name
        }
    }).spread((Customer) => Customer.get({
        plain: true
    }));
    db.Burgers.update({
        devoured: true,
        //get customer from the form with customer id.
        CustomerId: Customer.id
    }, {
        where: {
            //update devoured to true from the burger id.
            id: req.params.burger_id
        }
    }).then(function (dbBurger) {
        res.redirect('/');
    })

});
module.exports = router;