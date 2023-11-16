function dice(){
    x = Math.floor(Math.random() * 6) + 1;
    y = Math.floor(Math.random() * 6) + 1;
    if(x == 1){
        document.getElementById("img1").src="image/dice1.png";
    }else if(x == 2){
        document.getElementById("img1").src="image/dice2.png";
    }else if(x == 3){
        document.getElementById("img1").src="image/dice3.png";
    }else if(x == 4){
        document.getElementById("img1").src="image/dice4.png";
    }else if(x == 5){
        document.getElementById("img1").src="image/dice5.png";
    }else{
        document.getElementById("img1").src="image/dice6.png";
    }
    if(y == 1){
        document.getElementById("img2").src="image/dice1.png";
    }else if(y == 2){
        document.getElementById("img2").src="image/dice2.png";
    }else if(y == 3){
        document.getElementById("img2").src="image/dice3.png";
    }else if(y == 4){
        document.getElementById("img2").src="image/dice4.png";
    }else if(y == 5){
        document.getElementById("img2").src="image/dice5.png";
    }else{
        document.getElementById("img2").src="image/dice6.png";
    }
    win()
}
function win(){
    if(x > y){
        document.getElementById('para').innerHTML = "player 1 is winnnnnnn!!!!"
        document.getElementById("Player1").style.color = "white"
        document.getElementById("Player2").style.color = "#4ECCA3"
        document.getElementById("Player1").innerHTML ="Player1" + "👑"
        document.getElementById("Player2").innerHTML ="Player2"
    }else if(x < y){
        document.getElementById('para').innerHTML = "player 2 is winnnnnnn!!!!"
        document.getElementById("Player2").style.color = "white"
        document.getElementById("Player1").style.color = "#4ECCA3"
        document.getElementById("Player2").innerHTML ="Player2" + "👑"
        document.getElementById("Player1").innerHTML ="Player1"
    }else{
        document.getElementById('para').innerHTML = "Both are equal!!!!"
        document.getElementById("Player1").style.color = "white"
        document.getElementById("Player2").style.color = "white"
        document.getElementById("Player1").innerHTML ="Player1" + "👑"
        document.getElementById("Player2").innerHTML ="Player2" + "👑"
    }
}

