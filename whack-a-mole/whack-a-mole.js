  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

  


console.log("Whack-a-Mole!")

var table=document.getElementsByTagName('table')[0];


var img=document.createElement('img');
    img.src="mole4.PNG";

  var r,c;
  var sound=document.getElementsByTagName('audio')[0];
  var count=0;

  var scores=[];
  var theHighest;
  //randomly show the mole
  getRandomNumber();
  table.rows[r].cells[c].appendChild(img);


  

 
document.getElementsByTagName("img")[0].onclick=function (){
        

         getRandomNumber();
         table.rows[r].cells[c].appendChild(img);
       
        //play clicked sound
        sound.play();
        //count the clicks

        count++;

        
        displayCounter(count);
      
}

    
         
     


document.getElementById('butShow').onclick=function(){

  theHighest=scores.reduce((pre,curr)=>{
    return Math.max(pre, curr)      
  });
  document.getElementById('butShow').innerHTML='Your highest score is '+theHighest;
  
  
}


document.getElementById('butTime').onclick=setInterval(timingClick,10000);



function getRandomNumber(){
  r=Math.floor(Math.random()*5);
  c=Math.floor(Math.random()*5);

 

};

function displayCounter(count){

    if(count==0){
      document.getElementById('counter').innerHTML='<p>'  +'Start play '+ '</p>'
    }
    else{
      document.getElementById('counter').innerHTML='<p>'  +'You whacked  '+count+'  moles'+ '</p>';


    }
};

function timingClick(){
        alert('Time out, Game over!');
        scores.push(count);
        count=0;
        displayCounter(count);

            
}



  


   
