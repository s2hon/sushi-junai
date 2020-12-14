// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");
const axios = require("axios");
require('dotenv').config();
const APIKEY = process.env.API_KEY;

module.exports = function(app) {
  // Route for logging in
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json(req.user);
  });

  // app.get("/api/user",function(req,res){
  //   console.log((req.user));
  //   res.json(req.user)
  // });
  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function(req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });

  //route for creating a new favorite entry in a user's db 
  app.post("/api/favorites", function(req, res) {
    db.Favorites.create({
      item:req.body.item,
      category: req.body.category,
      UserEmail:req.body.UserEmail
    }).
    then(function(dbFavorite) {
      res.json(dbFavorite);
      //this response might be useful in the future

    })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });
  
  //this code will retrieve the favorites
  app.get("/api/favorites/:email", function(req, res){
    console.log("we are searching for the email"+ req.params.email);
    db.Favorites.findAll({
      where: {
        UserEmail: req.params.email
      }
    }).then(function(dbFavorites){
      res.json(dbFavorites);
    })
  })
//delete favorites 
  app.delete("/api/favorites", function(req, res) {
    const name = req.body.item;
    const email = req.body.UserEmail
    db.Favorites.destroy({
      where: {
        item:name,
        UserEmail:email
      }
    })
      .then(function(dbPost) {
        res.status(200);
        res.send("You have deleted the item: "+name);
      }).
      catch((err)=>res.send(err));
  });
  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.status(401).json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  app.get("/api/reviews", function(req, res) {
    console.log('I am running')
    const BASEURL = "https://api.yelp.com/v3/businesses/uK3hclf6oje7rRAbUhPCLg/reviews";
    try {
      axios
      .get(
          BASEURL,
          {
            headers: {
                Authorization: `Bearer ${APIKEY}`,
            },
          }
      ) 
      .then(json => {
        console.log(json.data.reviews, 'data');
        res.status(200)
;        res.json(json.data);
        //set state
      }) 
      .catch(err => {
        res.status(404);
      }) 
      
    } catch (err) {
      console.error(err)
    }
  });

};
