var p1 = Math.floor((Math.random()*6))+1;
var p2 = Math.floor((Math.random()*6))+1;
if(p1>p2){
    document.firstElementChild.lastElementChild.querySelector("p").textContent = "Player 1 WINS";
}else if(p2>p1){
    document.firstElementChild.lastElementChild.querySelector("p").textContent = "Player 2 WINS";
}else{
    document.firstElementChild.lastElementChild.querySelector("p").textContent = "It's a DRAW Roll Again";
}
document.firstElementChild.lastElementChild.querySelectorAll("img")[0].setAttribute("src","images/dice_"+p1+".png");
document.firstElementChild.lastElementChild.querySelectorAll("img")[1].setAttribute("src","images/dice_"+p2+".png");