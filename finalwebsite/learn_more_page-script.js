function changeImage(){
  if(x < 3){
    document.getElementById("vacation_image").src = images[x];
  }
  else{
    x = 0;
    document.getElementById("vacation_image").src = images[x];
  }
  x+=1;
}

function timer(){
  setInterval(changeImage, 2000);
}

var images = [];

images[0] = "vacation1.webp";
images[1] = "family_vacation.jpeg";
images[2] = "vacation2.jpeg";

var x = 1;
