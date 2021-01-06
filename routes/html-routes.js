// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

module.exports = function(app) {
  app.use(express.static(path.join(__dirname, 'build')));

  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

  app.use(function(req, res) {
      res.sendFile(path.join(__dirname, "./client/src/pages/Dinein.js"))
  })
};
