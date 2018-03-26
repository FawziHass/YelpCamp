var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Clouds Rest",
        image: "https://farm7.staticflickr.com/6057/6234565071_4d20668bbd.jpg",
        description: "ry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing "
        
    },
    {
        name: "Snow Fall",
        image: "https://thumb.grindnetworks.com/tjGKrhIarzxOrJ3YmoscB17Fs6A=/1000x0/filters:format(jpg):quality(80):max_bytes(500000):sharpen(0.2%2C1%2Ctrue):strip_exif():strip_icc()/https://www.adventuresportsnetwork.com/wp-content/uploads/2015/02/shutterstock_242371765.jpg",
        description: "ry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing "
        
    },
    {
        name: "Lake Fun",
        image: "http://blog.visafirst.com/wp-content/uploads/2013/06/camping-in-scotland.jpg",
        description: "ry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing "
        
    }
];



function seedDB(){
    //Remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
       console.log("removed campground"); 
       //add campgrounds
        data.forEach(function(seed){
        Campground.create(seed, function(err, campground){
               if(err){
                   console.log(err);
                }else{
                    console.log("added a campground");
                    //create a comment
                    Comment.create(
                        {
                            text: "this place is great",
                            author: "Homer"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            }else{
                                campground.comments.push(comment);
                                campground.save(); 
                                console.log("created comment");
                            }
                            
                        });
                }
        });
      });
    });
    
    //add comments 
    
}

module.exports = seedDB;

