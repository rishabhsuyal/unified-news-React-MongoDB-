const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const routesUrl = require("./routes/routes");



mongoose.connect("mongodb://localhost:27017/unifiedNewsDB",{useNewUrlParser: true});
mongoose.set("useCreateIndex",true);

app.use(express.json());
app.use(cors())
app.use("/app",routesUrl);

app.listen(3000,function(){
  console.log("Server started at post 3000");
});
