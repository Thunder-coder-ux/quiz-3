player_1 = localStorage.getItem("player1_name");
player_2 = localStorage.getItem("player2_name");

p1_score = 0;
p2_score = 0;

document.getElementById("p1_name").innerHTML = player_1;
document.getElementById("p2_name").innerHTML = player_2;

document.getElementById("p1_score").innerHTML = p1_score;
document.getElementById("p2_score").innerHTML = p2_score;

document.getElementById("quesTrn").innerHTML = "Question turn - " + player_1 ;
document.getElementById("ansTrn").innerHTML = "Answer turn - " + player_2 ;

function send(){
    number1 = document.getElementById("num1").value;
    number2 = document.getElementById("num2").value;
    answer = parseInt(number1) * parseInt(number2);
    document.getElementById("1").innerHTML = number1 + "X" + number2;
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = ""; 
}

function check(){
    document.getElementById("1").innerHTML = "";
}