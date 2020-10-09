  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Dress The Clown!")



document.onkeydown = checkKey;


var clothingIndex=0;
var headIndex=0;
var bodyIndex=0;
var shoesIndex=0;


function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {

      
        // up arrow
        if(clothingIndex<=1){
          clothingIndex++;
        }
        if(clothingIndex==0){
          document.getElementById('but').innerHTML='Dressing the head';

        }
        else if(clothingIndex==1){
          document.getElementById('but').innerHTML='Dressing the body';

        }
        else{
          document.getElementById('but').innerHTML='Dressing the feet';


        }
        
       
    }
    else if (e.keyCode == '40') {

      
        // down arrow
        if(clothingIndex>=1){
          clothingIndex--;
        }

        if(clothingIndex==0){
          document.getElementById('but').innerHTML='Dressing the head';

        }
        else if(clothingIndex==1){
          document.getElementById('but').innerHTML='Dressing the body';

        }
        else{
          document.getElementById('but').innerHTML='Dressing the feet';


        }

    }
    else if (e.keyCode == '37') {
       // left arrow

       if(clothingIndex==0){
        document.getElementById('head').src='images/head'+headIndex+'.png';
        
        if(headIndex>=1){
            headIndex--;
        }
      }
      else if(clothingIndex==1){

        document.getElementById('body').src='images/body'+bodyIndex+'.png';
      
        if(bodyIndex>=1){
            bodyIndex--;
        }
      }
      else if(clothingIndex==2){

        document.getElementById('shoes').src='images/shoes'+shoesIndex+'.png';
      
        if(shoesIndex>=1){
            shoesIndex--
        }
      }
     

    }
    else if (e.keyCode == '39') {
      // right arrow

      if(clothingIndex==0){
        document.getElementById('head').src='images/head'+headIndex+'.png';
      
        if(headIndex<=4){
            headIndex++
        }
      }
      else if(clothingIndex==1){
        document.getElementById('body').src='images/body'+bodyIndex+'.png';
      
        if(bodyIndex<=4){
            bodyIndex++
        }
      }
      else if(clothingIndex==2){
        document.getElementById('shoes').src='images/shoes'+shoesIndex+'.png';
      
        if(shoesIndex<=4){
            shoesIndex++
        }
      }
      
     
       
    }

}
      
