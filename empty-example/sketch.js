
var pos1=10;

function setup() {
    createCanvas (1000,1000);
   }

function draw (){

background ("#03fcf4");
    
strokeWeight(1);
   

   
    //pink
       fill("#e61ec4");  
triangle(mouseX, mouseY, 58, 220
, 286, 275);
      //purple   
fill("#6865a8");  
triangle(mouseX, mouseY, 150, 120, 286, 275);
       //mauve
    fill("#a8657e");  
    triangle(mouseX, mouseY, 378, 100, 286,275);
    //Blue
    
    fill("#1e5ae6");  
    triangle(mouseX, mouseY, 478, 190, 286,275);
    
  
    
    //yellow
        fill("#dfe61e");  
triangle(mouseX, mouseY, 490, 320, 286, 275);

 //green   
fill("#75e61e");  
triangle(mouseX, mouseY, 300, 430, 286, 275);
    

     //grey
fill("#65a3a8");  
triangle(mouseX, mouseY, 120, 320, 286, 275);
    
    //red
 fill ("#fc0303");
    
ellipse (mouseX, mouseY,pos1, pos1);
        

}
function mousePressed(){
    
    pos1=pos1+10;
}
 
