const express = require("express");

// Tells node that we are creating an "express" server
let app = express();

// Sets an initial port. 
let PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());

// The below points our server to a series of "route" files.
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// LISTENER
// The below code effectively "starts" our server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});