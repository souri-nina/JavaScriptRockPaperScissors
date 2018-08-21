// get player to chooose rock, paper, or scissor
// computer choose random rock, paper, or scissor
// show user and computer's choices on screen
// show the winner

var rockbtn = document.getElementById('rock')
var paperbtn = document.getElementById('paper')
var scissorbtn = document.getElementById('scissor')
var resetbtn = document.getElementById("reset")
var player = document.getElementById("player")
var adversary = document.getElementById("adversary")
var userWeapon = ["Rock", "Paper", "Scissor"]


rockbtn.addEventListener('click', function() {


var player = function(userWeapon) {
  document.getElementById("player").innerHTML = 'Player, You Chose' + ' ' + userWeapon + '.';
    }
}

