var value;
var spot;
var point;
var oldPoint;
function size(){
    var ask = prompt("kies uit de easy of normal");
    var doc = document.getElementById("map");
    console.log(doc)
    if(ask == "easy"){
        value = "easy"
        spot = 15;
        point = 15;
        oldPoint = 15;
    }
    else if(ask == "normal"){
        value = "normal"
        spot = 31;
        point = 31;
        oldPoint = 31;
    }
    // else if(ask == "hard"){
    //     value = "hard"
    //     spot = 15;
    //     point = 15;
    //     oldPoint = 15;
    // }
    else{
        alert("wat snap je niet aan de vraag!");
        size();
    }
    doc.id = value
    make(value);
    if(value == "easy"){
        nextEasyLevel();
    }
    else if(value == "normal"){
        nextNormalLevel();
    }
    else if(value == "hard"){
        nextHardLevel();
    }
}
var cube = 0;
var leftRight;
function make(size){
    var start;
    if(size == "easy"){
        cube = 18;
        leftRight = 17;
        winNum = "273";
        start = 15;
    }
    else if(size == "normal"){
        cube = 34;
        leftRight = 33;
        winNum = "1057";
        start = 31;
    }
    else if(size == "hard"){
        cube = 66;
        leftRight = 65;
        winNum =  "273";
    }
    var ip = 2
    var jp = 2
    var pixelCounter = 0;
    for(i=1;i<cube;i++){
        for(j=1;j<cube;j++){
            var div = document.createElement("div");
            div.id = "pixel"+ pixelCounter;
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
function walking(e){
    str = e.which;
    if(str == 115){
        //up
        spot += 1;
        if(check(spot,1,"min") != false){
            if(check(spot,1,"min") == "yellow"){
                winGame();
            }
            point += 1
            place(point,oldPoint);
            oldPoint +=1;
        }
        if(point == winNum){
            victory();
        }
    }
    else if(str == 100){
        //right
        spot += leftRight;
        if(check(spot,leftRight,"min") != false){
            if(check(spot,leftRight,"min") == "yellow"){
                winGame();
            }
            point += leftRight;
            place(point,oldPoint);
            oldPoint +=leftRight;
        }
        if(point == winNum){
            victory();
        }
    }
    else if(str == 97){
        //left
        spot -= leftRight;
        if(check(spot,leftRight,"plus") != false){
            if(check(spot,leftRight,"plus") == "yellow"){
                winGame();
            }
            point -= leftRight
            place(point,oldPoint);
            oldPoint -=leftRight;
        }
        if(point == winNum){
            victory();
        }
    }
    else if(str == 119){
        //down
        spot -= 1;
        if(check(spot,1,"plus") != false){
            if(check(spot,1,"plus") == "yellow"){
                winGame();
            }
            point -=1;
            place(point,oldPoint);
            oldPoint -=1;
        }
        if(point == winNum){
            victory();
        }
    }
}
function place(num1,num2){
    holdOldCircle = document.getElementById("pixel"+num2);
    holdOldCircle.className = "";
    holdCircle = document.getElementById("pixel"+num1);
    holdCircle.className = "circle";
}
function check(step,nummer,tel){
    colorItem = document.getElementById("pixel"+step);
    if(colorItem.style.backgroundColor != "black"){
        if(colorItem.style.backgroundColor == "yellow"){
            return "yellow";
        }
        return true
    }
    else{
        if(tel == "min"){
            spot -= nummer;
        }
        else if(tel == "plus"){
            spot += nummer;
        }
        return false
    }
    
}
function victory(){
    
    if(value == "easy"){
        reset(288);
        spot = 15;
        point = 15;
        place(point,oldPoint);
        oldPoint = 15;
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
    else if(value == "hard"){
        reset(4224);
        spot = 15;
        point = 15;
        place(point,oldPoint);
        oldPoint = 15;
        nextHardLevel();
    }
}
function winGame(){
    noGame = document.getElementById(value);
    noGame.id = "none";
    alert("u won");
    location.reload();
}