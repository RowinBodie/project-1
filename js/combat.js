var mobOptions =["speedster", "attacker", "defender", "boss"];
var mobStatArray;
function selection(o){
    if(o != true){
        i = Math.floor(Math.random() * 3);
        hold = mobOptions[i]
        if(hold == "speedster"){
            console.log("speedster");
            holdArray=[10, 3, 2, 6];
            mobStatArray = holdArray;
        }
        else if(hold == "attacker"){
            console.log("attacker");
            holdArray=[10, 4, 2, 2];
            mobStatArray = holdArray;
        }
        else if(hold == "defender"){ 
            console.log("defender");
            holdArray=[10, 3, 5, 2];
            mobStatArray = holdArray;
        } 
    }
    else if(o == true){
        alert("nee");
    }
}
function hpGeneration(){
    holdHp = document.getElementById("hp");

    for(i=1;i<=statArray[0];i++){
        var li = document.createElement("li");
        li.id = "urhp"+i
        document.getElementById("hp").appendChild(li);
    }
    
}