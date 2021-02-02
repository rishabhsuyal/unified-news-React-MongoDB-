const express = require('express');
const router = express.Router();
const newsTemp = require("../models/khabar");

router.get("/",(req,res)=>{
    newsTemp.find({  })
    .then((data) => {
        res.json(data);
    })
    .catch((error) => {
        console.log('error: ', daerrorta);
    });
});
router.post("/compose",(req,res)=>{
    const userNews =new newsTemp({
        khabT:req.body.khabT,  
        khab:req.body.khab
    });
    userNews.save();
})


module.exports=router;