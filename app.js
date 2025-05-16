//base x impostare express

const express = require("express");
const app = express();
const port = 3000;

// require errorHandler
const errorHandler = require("./middlewares/errorHandler.js");

//implementazione servizio public middleware
app.use(express.static("public"));
//middleware body parser
app.use(express.json());

// importo data
// let { posts } = require("./data/posts.js");

//importo router
const blogRouter = require("./routers/posts.js");

// routers
app.use("/posts", blogRouter);

//basic
app.get("/", (req, res) => {
  res.json("Questa è la home del blog.");
  console.log("lettura base");
});

// errorHandler
app.use(errorHandler);

// ascolto

app.listen(port, () => {
  console.log("Server in ascolto alla porta " + port);
});
