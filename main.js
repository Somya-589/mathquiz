function adduser(){
    user1 = document.getElemetntById("INPUT_player1").value;
    user2 = document.getElemetntById("INPUT_player2").value;

    localStorage.setItem("user_1",user1);
    localStorage.setItem("user_2",user2);

    window.location="game.html";
}