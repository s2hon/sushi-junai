// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
// var bcrypt = require("bcryptjs");
// Creating our User model
module.exports = function(sequelize, DataTypes) {
  var Favorites = sequelize.define("Favorites", {
    // The email cannot be null, and must be a proper email before creation
    item: {
      type: DataTypes.STRING   
    },
    category: {
      type: DataTypes.STRING
    },
    UserEmail: {
      type: DataTypes.STRING,
      references: {
        model: 'Users',
        key: 'email'
      }
    }
  });


  //here we will add a user.associate to connect to  favorites model 
  Favorites.associate = function(models) {
    // Associating user with favorites
    // When an favorite is deleted. we will have to update the array 
    Favorites.belongsTo(models.User, {
    //   onDelete: "cascade"
          foreignKey:{
          }
    });
  };
  return Favorites;
};