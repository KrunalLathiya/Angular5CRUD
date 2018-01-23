// coinRoutes.js

var express = require('express');
var coinRoutes = express.Router();

// Require Item model in our routes module
var Coin = require('../models/Coin');

// Defined store route
coinRoutes.route('/add').post(function (req, res) {
  var coin = new Coin(req.body);
   coin.save()
    .then(item => {
    res.status(200).json({'coin': 'Coin added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
coinRoutes.route('/').get(function (req, res) {
   Coin.find(function (err, coins){
    if(err){
      console.log(err);
    }
    else {
      res.json(coins);
    }
  });
});

// Defined edit route
coinRoutes.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  Coin.findById(id, function (err, coin){
      res.json(coin);
  });
});

//  Defined update route
coinRoutes.route('/update/:id').post(function (req, res) {
   Coin.findById(req.params.id, function(err, coin) {
    if (!coin)
      return next(new Error('Could not load Document'));
    else {
      coin.name = req.body.name;
      coin.price = req.body.price;

      coin.save().then(coin => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
coinRoutes.route('/delete/:id').get(function (req, res) {
   Coin.findByIdAndRemove({_id: req.params.id}, function(err, coin){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = coinRoutes;
