const express = require("express");

const bodyParser= require("body-parser");
const request=require("request");
const  app = express();


app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html")
})
app.post("/",function(req,res){
  email=req.body.email,
  firstname=req.body.fname,
  lastname =req.body.lname;



(console.log(email,firstname,lastname))

if(lastname=req.body.lname)

{
    res.sendFile(__dirname + "/success.html")
} else {
    res.sendFile(__dirname + "/failure.html")
};

/*var data= {
  members:[
    {
      email_addresh: email,
      status: "subscribed",
      merge_fields: {
        FNAME:firstname,
        LNAME:lastname

      }
    }
  ]
}
})

var jsonData = JSON.stringify(data);
const url = "https://us17.api.mailchimp.com/3.0/lists/7b80f67abe";

const option ={
  method:"POST",
  auth:"angela:793523cfeb9fe01318373dc40319e4d2-us17"
}

const request=  https.request(url,options,function(response){
  response.on("data",function(data){
    console.log(JSON.parse(data));

  })

})
request.write(jsonData);
request.end();

*/

});
app.listen(3000,function(){
  console.log("server is running at 3000")
});



//793523cfeb9fe01318373dc40319e4d2-us17
//APIKEY

//unique
//7b80f67abe
