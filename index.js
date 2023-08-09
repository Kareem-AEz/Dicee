var button = document.getElementById("myButton");
var shuffleText = document.getElementById("Shuffle_res");

var dice = './SVG/Dice${}.svg'

// Add a click event listener to the button
button.addEventListener("click", function() {
   function player1_random(){
    let x= Math.random();
    let y= Math.round((x*5)+1);
    return y;
   }

   function player2_random(){
    let x= Math.random();
    let y= Math.round((x*5)+1);
    return y;
   }

   let res1= player1_random();
   let res2= player2_random();

   if(res1 == res2){
        document.getElementById("Shuffle_res").innerHTML= ("DRAW!!");
        
   }
   else if(res2 > res1) {
        document.getElementById("Shuffle_res").innerHTML= ("Player 2 Wins!⭐");
        
   }
   else{
        document.getElementById("Shuffle_res").innerHTML= ("⭐Player 1 Wins!!");
   }

   console.log(res1);
   console.log(res2);
   var img_player1= document.querySelectorAll("img")[0];
   var img_player2= document.querySelectorAll("img")[1];

   img_player1.src=`./SVG/Dice${res1}.svg`;
   img_player2.src=`./SVG/Dice${res2}.svg`;
});
