var value;
var spot;
var point;
var oldPoint;
var key = false;

//level selectie
function size(){
    var ask = prompt("kies uit de easy of normal");
    var doc = document.getElementById("map");
    if(ask == "easy"){
        value = "easy";
        spot = 32;
        point = 32;
        oldPoint = 32;
    }
    else if(ask == "normal"){
        value = "normal";
        spot = 64;
        point = 64;
        oldPoint = 64;
    }
    // else if(ask == "hard"){
    //     value = "hard"
    //     spot = 15;
    //     point = 15;
    //     oldPoint = 15;
    // }
    else{
        alert("wat snap je niet aan de vraag, is het zo moeilijk?!");
        location.reload();
    }
    doc.id = value
    make(value);
    if(value == "easy"){
        nextEasyLevel();
    }
    else if(value == "normal"){
        nextNormalLevel();
    }
    // else if(value == "hard"){
    //     nextHardLevel();
    // }
}

var cube = 0;
var leftRight;

//map generation
function make(size){
    var start;
    if(size == "easy"){
        cube = 18;
        leftRight = 17;
        winNum = 273;
        keynum = 18;
        start = 32;
    }
    else if(size == "normal"){
        cube = 34;
        leftRight = 33;
        winNum = "1057";
        keynum = 572;
        start = 64;
    }
    // else if(size == "hard"){
    //     cube = 66;
    //     leftRight = 65;
    //     winNum =  "273";
    // }
    var ip = 2
    var jp = 2
    var pixelCounter = 0;
    for(i=1;i<cube;i++){
        for(j=1;j<cube;j++){
            var div = document.createElement("div");
            div.id = "pixel"+ pixelCounter;
            div.className = "background";
            pixelCounter += 1;
            document.getElementById(value).appendChild(div)
            div.style.gridRowStart = j
            div.style.gridRowEnd = jp
            div.style.gridColumnStart = i
            div.style.gridColumnEnd = ip
            jp += 1
        }
        ip += 1
        jp = 1
    }
    holdCircle = document.getElementById("pixel"+start);
    holdCircle.className = "circle";
}

//movement
function walking(e){
    str = e.which;
    if(str == 115){
        //up
        spot += 1;
        if(check(spot,1,"min") != false){
            if(check(spot,1,"min") == "yellow"){
                point += 1
                place(point,oldPoint);
                oldPoint +=1;
                if(key != false){
                    winGame();
                }
            }
            else if(check(spot,1,"min") == "pink"){
                alert("Next Level!");
            }
            else if(check(spot,1,"min") == "purple"){
                showCombat(true);
                selection();
                point += 1
                place(point,oldPoint);
                oldPoint +=1;
            }
            else if(check(spot,1,"min") != "pink" && check(spot,1,"min") != "yellow" &&check(spot,1,"min") != "purple"){
                point += 1
                place(point,oldPoint);
                oldPoint +=1;
            }
        }
        if(point == winNum && key == true){
            victory();
        }
    }
    else if(str == 100){
        //right
        spot += leftRight;
        if(check(spot,leftRight,"min") != false){
            if(check(spot,leftRight,"min") == "yellow"){
                point += leftRight;
                place(point,oldPoint);
                oldPoint +=leftRight;
                if(key != false){
                    winGame();
                }
            }
            else if(check(spot,leftRight,"min") == "pink"){
                alert("Next Level!");
                victory();
            }
            else if(check(spot,leftRight,"min") == "purple"){
                point += leftRight;
                place(point,oldPoint);
                oldPoint +=leftRight;
                showCombat(true);
                selection();
            }
            else if(check(spot,leftRight,"min") != "pink" && check(spot,leftRight,"min") != "yellow" && check(spot,leftRight,"min") != "purple"){
                point += leftRight;
                place(point,oldPoint);
                oldPoint +=leftRight;
            }
            
        }
        if(point == winNum  && key == true){
            victory();
        }
    }
    else if(str == 97){
        //left
        spot -= leftRight;
        if(check(spot,leftRight,"plus") != false ){
            if(check(spot,leftRight,"plus") == "yellow"){
                point -= leftRight
                place(point,oldPoint);
                oldPoint -=leftRight;
                if(key != false){
                    winGame();
                }
            }
            else if(check(spot,leftRight,"plus") == "pink"){
                alert("Next Level!");
                victory();
            }
            else if(check(spot,leftRight,"plus") == "purple"){
                point -= leftRight
                place(point,oldPoint);
                oldPoint -=leftRight;
                showCombat(true);
                selection();
            }
            else if(check(spot,leftRight,"plus") != "pink" && check(spot,leftRight,"plus") != "yellow" && check(spot,leftRight,"plus") != "purple"){
                point -= leftRight
                place(point,oldPoint);
                oldPoint -=leftRight;
            }
            
        }
        if(point == winNum  && key == true){
            victory();
        }
    }
    else if(str == 119){
        //down
        spot -= 1;
        if(check(spot,1,"plus") != false){
            if(check(spot,1,"plus") == "yellow"){
                point -=1;
                place(point,oldPoint);
                oldPoint -=1;
                if(key != false){
                    winGame();
                }
            }
            else if(check(spot,1,"plus") == "pink"){
                alert("Next Level!");
                victory();
            }
            else if(check(spot,1,"plus") == "purple"){
                point -=1;
                place(point,oldPoint);
                oldPoint -=1;
                showCombat(true);
                selection();
            }
            else if(check(spot,1,"plus") != "pink" && check(spot,1,"plus") != "yellow" && check(spot,1,"plus") != "purple"){
                point -=1;
                place(point,oldPoint);
                oldPoint -=1;
            }
        }
        if(point == winNum  && key == true){
            victory();
        }
    }
}
//circle placement
function place(num1,num2){
    holdOldCircle = document.getElementById("pixel"+num2);
    holdOldCircle.className = "background";
    holdCircle = document.getElementById("pixel"+num1);
    holdCircle.className = "circle";
}
//tile checker
function check(step,nummer,tel){
    colorItem = document.getElementById("pixel"+step);
    if(colorItem.style.backgroundColor == "yellow"){
        return "yellow";
    }
    else if(colorItem.style.backgroundColor == "green" || colorItem.style.backgroundColor == "blue"){
        unlockDoor();
        return "unlockDoor";
    }
    else if(colorItem.style.backgroundColor == "pink"){
        return "pink";
    }
    else if(colorItem.style.backgroundColor == "purple"){
        return "purple";
    }
    if(colorItem.style.backgroundColor == "black"){
        if(tel == "min"){
            spot -= nummer;
        }
        else if(tel == "plus"){
            spot += nummer;
        }
        return false
    }
}
//reset
function victory(){
    if(value == "easy"){
        reset(288);
        spot =32;
        point = 32;
        place(point,oldPoint);
        oldPoint = 32;
        nextEasyLevel();
    }
    else if(value == "normal"){
        reset(1088);
        spot = 31;
        point = 31;
        place(point,oldPoint);
        oldPoint = 31;
        nextNormalLevel();
    }
    // else if(value == "hard"){
    //     reset(4224);
    //     spot = 15;
    //     point = 15;
    //     place(point,oldPoint);
    //     oldPoint = 15;
    //     nextHardLevel();
    // }
}

//if game won
function winGame(){
    noGame = document.getElementById(value);
    noGame.id = "none";
    alert("u won");
    location.reload();
}

//restart
function restart(){
    noGame = document.getElementById(value);
    noGame.id = "none";
    alert("restart! helaas moet je nu alles opnieuw doen 😈");
    location.reload();
}

//door unlock
function unlockDoor(){
    key = true;
    if(value == "easy"){
        colorBlock(keynum,"blue");
    }
    else if(value == "normal"){
        colorBlock(keynum, "blue");
    }
}