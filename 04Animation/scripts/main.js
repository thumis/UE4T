

 // changing individual properties with code and using setInterval
 var rotationSpeed = 0.25;
    var rotationSlowDown = -0.0005;
 var position = 0.0025;
    var positionSlowDown = -0.004;

 var myOtherBox = document.getElementById('myOtherBox');

 function fidgetSpinner(){

 	myOtherBox.object3D.rotation.x += rotationSpeed;
     myOtherBox.object3D.rotation.y -= rotationSpeed;
     myOtherBox.object3D.rotation.z -= rotationSpeed;

     myOtherBox.object3D.position.x += position;

     console.log(
     "rotation x: " + myOtherBox.object3D.rotation.x + "\n" +
     "position x: " + myOtherBox.object3D.position.x + "\n" +
     "Speed: "+  rotationSpeed);
     if (rotationSpeed <= 0.001 ) {
         rotationSpeed = 0.25;
     }
     else{
         rotationSpeed += rotationSlowDown;
     }
     if(myOtherBox.object3D.position.x <= -10){
         myOtherBox.object3D.position.x = 1;
         position = 0.0025;
     }
     else{
         position += positionSlowDown;
     }
     ;
 }

 setInterval(fidgetSpinner, 16); //equivalent to 60 fps