var maze;
var combat;
var visual;
var vision;

function showCombat(check){
    if(check == true){
        visual = "none"
        vision = "block"
    }
    else{
        visual = "inline"
        vision = "none"
    }
    maze = document.getElementById("maze");
    maze.style.display = visual;
    combat = document.getElementById("combatField");
    combat.style.display = vision;
}