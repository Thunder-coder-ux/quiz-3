

function addUser(){
    player_1 = document.getElementById("player1_name").value;
    player_2 = document.getElementById("player2_name").value;

    localStorage.setItem("Player1");
    localStorage.setItem("Player2");

    window.location = "game.html";
}