var statArray=[
    10,
    3,
    2,
    3
];
var nameStatArray=[
    "hp",
    "attack",
    "defence",
    "speed"
];

function levelup(){
    var levelArray=[];
    for(i=0;i<statArray.length;i++){
        if(i ==0){
            temCount = Math.floor(Math.random() * 5+3);
        }
        else{
            temCount = Math.floor(Math.random() * 2+1);
        }
        levelArray.push(temCount)
        statArray[i] += temCount;
    }
    console.log(levelArray);
};

var maxExp = 10;

function xp(earned){
    earn = Math.floor(Math.random() * 4 + earned);
    console.log(earn)
};