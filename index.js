var val1=Math.random();
var val2=Math.random();
val1=Math.floor(val1*6)+ 1;
val2=Math.floor(val2*6) + 1;
document.querySelector(".img1").setAttribute("src","images/dice"+ val1 + ".png");
document.querySelector(".img2").setAttribute("src","images/dice"+ val2 + ".png");

var a=document.querySelector("h1");

if(val1>val2)
    a.innerText="Player 1 wins !";
else if(val1<val2)
a.innerText="Player 2 wins !";
else
a.innerText="Draw !";