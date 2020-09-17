var mobOptions =["speedster", "attacker", "defender", "boss"];
var mobStatArray;
var giveXp;

function selection(o){
    if(o != true){
        i = Math.floor(Math.random() * 2);
        hold = mobOptions[i]
        if(hold == "speedster"){
            console.log("speedster");
            holdArray=[10, 3, 2, 6];
            giveXp = 4;
            mobStatArray = holdArray;
        }
        else if(hold == "attacker"){
            console.log("attacker");
            holdArray=[9, 4, 2, 2];
            giveXp = 5;
            mobStatArray = holdArray;
        }
        else if(hold == "defender"){ 
            console.log("defender");
            holdArray=[13, 3, 5, 2];
            giveXp = 6;
            mobStatArray = holdArray;
        } 
    }
    else if(o == true){
        alert("nee");
    }
    combatPrep();
}
function hpGeneration(hp){
    if(hp == "hp"){
        for(i=statArray[0];i>0;i--){
            var li = document.createElement("li");
            li.id = "urhp"+i
            document.getElementById("hp").appendChild(li);
        }
    }
    else{
        for(i=mobStatArray[0];i>0;i--){
            var li = document.createElement("li");
            li.id = "enhp"+i
            document.getElementById("enemyHp").appendChild(li);
        }
    }
}
function combatPrep(){
    hpGeneration("hp");
    hpGeneration("enemyHp");
}
var user;
var stat;
var en;
var hp;
var won;
var kill = false;
var wall = false;
var enwall = false;
function attack(a){
    if(a == 'u'){
        user = "urhp";
        en = "enhp";
        hp = mobStatArray[0];
        stat = statArray[1]
        bo = mobStatArray[2];
    }
    else{
        user = "enhp";
        en = "urhp";
        hp = statArray[0];
        stat = mobStatArray[1];
        bo = statArray[2];
    }
    if(wall == true && user =="urhp"){
        if(bo >= stat){
            stat = 0;
        }
        else{
            stat -= bo;
        }
        wall = false
    }
    else if(enwall == true && user =="enhp"){
        if(bo >= stat){
            stat = 0;
        }
        else{
            stat -= bo;
        }
        enwall = false
    }
    else{
        health = hp - stat;
    }
    console.log(health);
    
    for(i=hp;i>health;i--){
        if(i!= 0 && 0 < i){
            holdLi = document.getElementById(en+i);
            holdLi.style.backgroundColor = "red";
        }
        if(user == "urhp" &&  i<=0 || user == "urhp" && i ==1){
            enKilled();
            kill = true;
            won = true;
            break;
        }
        else if(user == "enhp" &&  i<=0 && won != true || user == "enhp" && i ==1 && won != true){
            killed();
            kill = true;
            break;
        }
    }
    if(a == 'u'){
        mobStatArray[0] -= stat
    }
    else{
        statArray[0] -= stat
    }
}
function block(u){
    if(u =="u"){
        wall =  true;
    }
    else if(u == "en"){
        enwall =  true;
    }
}
function enKilled(){
    alert("pog");
    showCombat(false);
}
function killed(){
    alert("u died");
    restart();
}

function moveFirst(move,who){
    var go = "none";
    if(statArray[3] > mobStatArray[3]){
        console.log("u");
        uMove(move, who);
        if(kill == false){
            go = setTimeout(enMove, 1500);
        }
        
    }
    else if(mobStatArray[3] > statArray[3]){
        console.log("en");
        enMove();
        if(kill == false){
            go =setTimeout(function(){uMove(move, who)}, 1500);
        }
    }
    else if (mobStatArray[3] == statArray[3]){
        i = Math.floor(Math.random() * 2);
        if(i == 0){
            console.log("en");
            uMove(move, who);
            if(kill == false){
                go = setTimeout(enMove, 1500);
            }
        }
        else{
            console.log("u");
            enMove();
            if(kill == false){
                go =setTimeout(function(){"uMove(move, who)"}, 1500);
            }
        }
    }
    go = "none";
}
function uMove(move, who){
    if(move == 'attack'){
        attack(who);
    }
    else if(move == 'block'){
        block(who);
    }
    else if(move == 'recover'){
        recover(who);
    }
    else if(move == 'dodge'){
        dodge(who);
    }
}
function enMove(){
    i = Math.floor(Math.random() * 4 +1);
    console.log(i);
    if(i = 1 || i == 5){
        attack();
    }
    else if(i = 2){
        block();
    }
    else if(i = 3){
        recover();
    }
    else if(i = 4){
        dodge();
    }
}