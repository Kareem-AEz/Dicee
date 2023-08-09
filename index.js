var button = document.getElementById("myButton");
var shuffleText = document.getElementById("Shuffle_res");

var dice = './SVG/Dice${}.svg';

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

var img_player1 = document.querySelectorAll("img")[0];
var img_player2 = document.querySelectorAll("img")[1];


// Add a click event listener to the button
button.addEventListener("click", function() {
   

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

// ----------------------Cheat1
var cheat1= document.getElementById("cheat1");

cheat1.addEventListener("click", function() {
    console.log("Cheat1");
    n=0;
    do{
        x= player1_random();
        y= player2_random();
        n++;
    } while(x < y);
    if (x==y){
        img_player1.src=`./SVG/Dice${x}.svg`;
        img_player2.src=`./SVG/Dice${y}.svg`;
        document.getElementById("Shuffle_res").innerHTML= ("DRAW!!");
    }
    else{
        img_player1.src=`./SVG/Dice${x}.svg`;
        img_player2.src=`./SVG/Dice${y}.svg`;
        document.getElementById("Shuffle_res").innerHTML= ("⭐Player 1 Wins!!");
    }
    console.log(x);
    console.log(y);
    console.log(n);
});

// ----------------------Cheat2
var cheat1= document.getElementById("cheat2");

cheat1.addEventListener("click", function() {
    console.log("Cheat2");
    n=0;
    do{
        x= player1_random();
        y= player2_random();
        n++;
    } while(x > y);

    if (x==y){
        img_player1.src=`./SVG/Dice${x}.svg`;
        img_player2.src=`./SVG/Dice${y}.svg`;
        document.getElementById("Shuffle_res").innerHTML= ("DRAW!!");
    }
    else{
        img_player1.src=`./SVG/Dice${x}.svg`;
        img_player2.src=`./SVG/Dice${y}.svg`;
        document.getElementById("Shuffle_res").innerHTML= ("Player 2 Wins!⭐");
    }
    console.log(x);
    console.log(y);
    console.log(n);
});

// hide Cheet

var hidecheat = document.getElementById("hideCheat");
var cheat1 = document.getElementsByClassName("cheat")[0];
var cheat2 = document.getElementsByClassName("cheat")[1];

var isCheatHidden = false; // Initial state is not hidden

hidecheat.addEventListener("click", function() {
    if (isCheatHidden) {
        cheat1.style.backgroundColor = "#745644";
    } else {
        cheat1.style.backgroundColor = "transparent";
    }
    
    cheat2.style.backgroundColor = cheat1.style.backgroundColor;
    isCheatHidden = !isCheatHidden; // Toggle the state
});
