// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");

module.exports = function(app) {
  // Route for logging in
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json(req.user);
  });

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
    console.log("We are deleting "+req.data)
    const name = req.data.item;
    const email = req.data.UserEmail
    db.Favorites.destroy({
      where: {
        item:name,
        UserEmail:email
      }
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
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

};
