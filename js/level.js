var played = 0;

function colorBlock(block){
    colorItem = document.getElementById("pixel"+block);
    colorItem.style.backgroundColor = "black"
}
nextLevel();
function nextLevel(){
    played +=1
    if(played == 1){
        field1();
    }
    else if(played == 2){
        field2();
    }
}

function reset(){
    for(i=0;i<=288;i++){
        colorItem = document.getElementById("pixel"+i);
        colorItem.style.backgroundColor = ""
    }
}

function field1(){
    tempClass = document.getElementById("pixel15");
    tempClass.className = "circle";
    for(i=0;i<=14;i++){
        colorBlock(i);
    }
    colorBlock(16)
    for(i=17;i<=272;i+=17){
        colorBlock(i);
    }
    for(i=274;i<=288;i++){
        colorBlock(i);
    }
    for(i=16;i<=288;i+=17){
        colorBlock(i);
    }
    colorBlock(83);
    colorBlock(31);
    colorBlock(48);
    for(i=82;i<=133;i+=17){
        colorBlock(i);
    }
    for(i=201;i<=252;i+=17){
        colorBlock(i);
    }
    for(i=19;i<=53;i+=17){
        colorBlock(i);
    }
    for(i=87;i<=189;i+=17){
        colorBlock(i);
    }
    for(i=223;i<=257;i+=17){
        colorBlock(i);
    }
    for(i=37;i<=40;i++){
        colorBlock(i);
    }
    for(i=72;i<=140;i+=17){
        colorBlock(i);
    }
    for(i=174;i<=259;i+=17){
        colorBlock(i);
    }
    for(i=74;i<=193;i+=17){
        colorBlock(i);
    }
    colorBlock(227);
    colorBlock(244);
    for(i=42;i<=110;i+=17){
        colorBlock(i);
    }
    colorBlock(144);
    colorBlock(161);
    for(i=195;i<=246;i+=17){
        colorBlock(i);
    }
    colorBlock(27);
    colorBlock(44);
    colorBlock(78);
    colorBlock(95);
    colorBlock(129);
    colorBlock(146);
    for(i=180;i<=214;i+=17){
        colorBlock(i);
    }
    colorBlock(248);
    for(i=165;i<=168;i++){
        colorBlock(i);
    }
    for(i=80;i<=133;i+=17){
        colorBlock(i);
    }
    for(i=216;i<=250;i+=17){
        colorBlock(i);
    }
    colorBlock(45);
    colorBlock(46);
    colorBlock(251);
    colorBlock(181);
    colorBlock(182);
    colorBlock(77);
    colorBlock(130);
    colorBlock(145);
    colorBlock(243);
    colorBlock(247);
    colorBlock(107);
    colorBlock(92);
    colorBlock(86);
    colorBlock(139);
    colorBlock(194);
}

function field2(){
    for(i=0;i<=14;i++){
        colorBlock(i);
    }
    colorBlock(16)
    for(i=17;i<=272;i+=17){
        colorBlock(i);
    }
    for(i=274;i<=288;i++){
        colorBlock(i);
    }
    for(i=16;i<=288;i+=17){
        colorBlock(i);
    }
    arrayBlackBox = []
}