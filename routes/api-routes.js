
const axios = require("axios");
require('dotenv').config();
const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;
const BASEURL = "https://api.yelp.com/v3/businesses/uK3hclf6oje7rRAbUhPCLg/reviews";

module.exports = function(app) {
  app.get("/api/reviews", function(req, res) {    
    try {
      axios
      .get(
          BASEURL,
          {
            headers: {
                Authorization: "Bearer "+ REACT_APP_API_KEY
            }
          }
      ) 
      .then(json => {
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
