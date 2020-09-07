var maze;
var combat;

function noMaze(vision){
    maze = document.getElementById("maze");
    maze.style.display = vision;
}

function showCombat(vision){
    combat = document.getElementById("combatField");
    combat.style.display = vision;
}