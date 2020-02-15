var spot = 15;
var point = 15;
var oldPoint = 15;
make();
function make(){
    var ip = 2
    var jp = 2
    var pixelCounter = 0;
    for(i=1;i<18;i++){
        for(j=1;j<18;j++){
            var div = document.createElement("div");
            div.id = "pixel"+ pixelCounter;
            pixelCounter += 1;
            document.getElementById("map").appendChild(div)
            div.style.gridRowStart = j
            div.style.gridRowEnd = jp
            div.style.gridColumnStart = i
            div.style.gridColumnEnd = ip
            jp += 1
        }
        ip += 1
        jp = 1
    }
}
function walking(e){
    str = e.which;
    if(str == 115){
        //up
        spot += 1;
        if(check(spot,1,"min") != false){
            point += 1
            place();
            oldPoint +=1;
        }
    }
    else if(str == 100){
        //right
        spot += 17;
        if(check(spot,17,"min") != false){
            point += 17
            place();
            oldPoint +=17;
        }
    }
    else if(str == 97){
        //left
        spot -= 17;
        if(check(spot,17,"plus") != false){
            point -= 17
            place();
            oldPoint -=17;
        }
    }
    else if(str == 119){
        //down
        spot -= 1;
        if(check(spot,1,"plus") != false){
            point -=1;
            place();
            oldPoint -=1;
        }
    }
}
function place(){
    holdOldCircle = document.getElementById("pixel"+oldPoint);
    holdOldCircle.className = "";
    holdCircle = document.getElementById("pixel"+point);
    holdCircle.className = "circle";
    if(point == "273"){
        victory();
    }
}
function check(step,nummer,tel){
    colorItem = document.getElementById("pixel"+step);
    if(colorItem.style.backgroundColor != "black"){
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
    reset();
    nextLevel();
    spot = 15;
    point = 15;
    oldPoint = 15;
    place();
}