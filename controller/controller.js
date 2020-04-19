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
        burger_name: req.body.burger_name
    }).then(function () {
        res.redirect('/');
    });
});

//devoured update to true
router.put("/update/:burger_id", function (req, res) {
    //either find or create new customer
    db.Customer.findOrCreate({
        where: {
            //get customer's name from input named customer-name
            name: req.body.customer_name
        }
    }).spread((Customer) => {
        Customer.get({
            //spread divides the array into two partsa nd passes them as arguments to call back function
            plain: true
        });
        db.Burgers.update({
            devoured: true,
            //get customer from table with customer id and update the burger table.
            CustomerId: Customer.id

        }, {
            where: {
                //update devoured to true and CustomerId from the burger id.
                id: req.params.burger_id
            }
        }).then(function (dbBurger) {
            res.redirect('/');
        })
    })
});
module.exports = router;