
var express = require('express');
var router = express.Router();
var movies = require('../Model/movies');

/*...........................Post..........................*/


router.route('/movieAdd').post (function(req,res){
    if(req.body)
    {
    var movieAdd= new movies(req.body);
    movieAdd.save(function(err){
        if(err)
        {
            res.send("sorry dude uts error");
        }
        else{
            res.send("Successfull !!  great job indeed")
        }
    });

}
});
/* .....................................Delete................................*/


router.route('/movieDelete/:id').delete(function(req,res)
{
    movies.remove({id: req.params.id}, function (err,offer){
      if(err) {
        console.log(err);
       }
      else{
         console.log("successfully deleted");
        //res.send("successfully deleted");
        res.send( "O NO !!!!!!!! :(  Deleted ");
      }
  });
  });

  /* ................................Get movie............... */


router.route("/getMovie").get(function(req,res){

     movies.find({},{__v:false, _id:false},function(err,data){
        if(err)
        {
          console.log(err);
        }
        else
        {
          console.log("successfully displayed");
          console.log(data);
          res.send(data);
        }
    });
    });
    /*...................................UPDATE.................*/
    router.route("/update/:title").put(function(req,res){
      movies.update({Tittle:req.params.title} ,{ id:req.body.id},function(err,data){
        if(err){
          console.log(err);
        }
        else{
          console.log(" O NO !!!!!!!! :(  Updated ");
        }
      });
    });





module.exports=router;



/*
router.route("/add")
.post(function(req,res){
    if(req.body)
    {
        var userVar = new User(req.body);
        uservar.save(function(err)
    {
        if(err)
        {
            res.send(err);
        }
        else {
            {
                res.send("User inserted");
            }
        }
    })
    }
})
*/
module.exports=router;
