  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Inflate The Unicorn!")

var i1=0;
var i2=0;
var i3=0;

document.getElementById('img1').onclick=function(){
      if(i1==4){
        alert('Unicorn number 1'+'says thank you');
      }

      if(i1<4){
        document.getElementById('img1').src='images/unicorn-'+i1+'.png';
        i1++;
      }

      
}
 

document.getElementById('img2').onclick=function(){
      if(i2==4){
        alert('Unicorn number 2'+' says thank you');
    }


  if(i2<4){
    document.getElementById('img2').src='images/unicorn-'+i2+'.png';
    i2++;
  }

  
}

document.getElementById('img3').onclick=function(){
  if(i3==4){
    alert('Unicorn number 3'+' says thank you');
}

  if(i3<4){
    document.getElementById('img3').src='images/unicorn-'+i3+'.png';
    i3++;
  }

  
}
