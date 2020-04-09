var db = require("../models");

module.exports = function (app) {
    //get all burgers
    app.get("/", function (req, res) {
        db.Burgers.findAll({
       
        }).then(function (data) {
            console.log(data);
            res.render("index", data);
        });
    });

    app.post("/burgers", function(req,res){
        db.Burgers.create(req.body).then(function (data) {
            console.log(data);
            res.json(data);
            res.redirect('/');
        });
    });

    // app.update("/burgers", function(req,res){
    //     db.Burgers.create(req.body).then(function (data) {
    //         console.log(data);
    //         res.json(data);
    //         res.redirect('/');
    //     });
    // });











}

// router.get("/", function (req, res) {
//     burger.selectAll(function (data) {
//         var hbsObject = {
//             burgers: data
//         };
//         console.log(hbsObject);
//         res.render("index", hbsObject);
//     });
// });

// router.post("/burgers", function (req, res) {
//     burger.createOne([
//         "burger_name"
//     ], [
//         req.body.burger_name
//     ], function (data) {
//         res.redirect('/');
//     });
// });

// router.put("/burgers/:id", function (req, res) {
//     var condition = "id = " + req.params.id;
//     console.log("condition", condition);

//     burger.updateOne({
//         devoured: true
//     }, condition, function (data) {
//         res.redirect("/");
//     });
// });