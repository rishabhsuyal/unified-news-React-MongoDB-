const mongoose = require("mongoose");

const newsSchema=new mongoose.Schema({
    khabT:String,
    khab:String

});

  
module.exports=mongoose.model("New",newsSchema);
  