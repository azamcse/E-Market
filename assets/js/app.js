


var login = document.getElementById("loginArea");
var register = document.getElementById("registerArea");
var indicator = document.getElementById("indicator");




function registerA(){
    login.style.transform = "translateX(0px)";
    register.style.transform = "translateX(0px)";
    indicator.style.transform = "translateX(0px)";
}
function loginA(){
    login.style.transform = "translateX(315px)";
    register.style.transform = "translateX(300px)";
    indicator.style.transform = "translateX(-100px)";
}




// var mainPhoto =document.getElementById("fulImg");

// function photo1(){
//     mainPhoto.src = "images/gallery-1.jpg";
// }
// function photo2(){
//     mainPhoto.src = "images/gallery-2.jpg";
// }

// function photo3(){
//     mainPhoto.src = "images/gallery-3.jpg";
// }

// function photo4(){
//     mainPhoto.src = "images/gallery-4.jpg";
// }


var fullImg = document.getElementById("fulImg");

var allPhoto = ["images/gallery-1.jpg","images/gallery-2.jpg","images/gallery-3.jpg","images/gallery-4.jpg"];

function myFunction(param){
    fullImg.src=allPhoto[param]
}


//  CAROUSEL

$(document).ready(function(){
    $(".testimonial_area").owlCarousel({
        items:3,
        loop:true,
        autoplay:true,
        margin:30,
        smartSpeed:2000
    });
  });

  $(document).ready(function(){
    $(".brand_area").owlCarousel({
        items:5,
        loop:true,
        autoplay:false,
        margin:30,
        smartSpeed:1000
    });
  });