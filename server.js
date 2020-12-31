// Requiring necessary npm packages
require("dotenv").config();
const express = require("express");

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(express.static("client/build"));

// Requiring our routes
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);


// Syncing our database and logging a message to the user upon success
app.listen(PORT, function() {
  console.log(
    "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
    PORT
  );
});
