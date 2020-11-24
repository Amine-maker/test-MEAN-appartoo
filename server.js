const express = require("express");
const bodyParser = require("body-parser");
var cookieParser = require('cookie-parser');
const cors = require("cors");
const app = express();


app.use((req, res, next) => {

  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'PATCH, DELETE, PUT, GET, POST');
  next();
});


require("./app/route/schtrompf.route")(app);

const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false 
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });



  var corsOptions = {
    origin: 'http://localhost:4200',
  };
  
  app.use(cors(corsOptions));


  // parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))

app.use(cookieParser());



// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to test." });
});


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});