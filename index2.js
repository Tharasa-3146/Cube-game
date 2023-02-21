var nam=Math.random();
nam=nam*6;
nam=Math.floor(nam)+1;
var randomdiceimg="dice" + nam +".png";
var randomImagesource="images/"+ randomdiceimg;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImagesource);
 

if(nam%2!=0){
    document.querySelector("h1").innerHTML="Winner!";

}

else{
    document.querySelector("h1").innerHTML="Lose!";

}