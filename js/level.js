var played = 0;

size();
function colorBlock(block, color){
    colorItem = document.getElementById("pixel"+block);
    if(color == null){
        colorItem.style.backgroundColor = "black";
    }
    else{
        colorItem.style.backgroundColor = color;
    }
}

function nextEasyLevel(){
    played +=1
    if(played == 1){
        field1();
    }
    else if(played == 2){
        field2();
    }
}
function nextNormalLevel(){
    played +=1
    if(played == 1){
        nfield1();
    }
}
function nextHardLevel(){
    played +=1
    if(played == 1){
        hfield1();
    }
}
function reset(number){
    for(i=0;i<=number;i++){
        colorItem = document.getElementById("pixel"+i);
        colorItem.style.backgroundColor = ""
    }
}

function field1(){
    tempClass = document.getElementById("pixel32");
    tempClass.className = "circle";
    for(i=0;i<=14;i++){
        colorBlock(i);
    }
    colorBlock(64,"purple")
    colorBlock(15);
    colorBlock(16);
    colorBlock(256,"pink");
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
    colorBlock(273);
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
    arrayBlackBox = [15,273,48,47,46,65,82,83,44,61,78,79,80,97,114,116,133,132,131,113,112,111,110,237,93,76,75,74,57,41,40,23,42,38,37,36,19,72,89,106,105,104,87,70,69,108,125,142,141,140,139,138,159,176,127,146,163,162,161,160,164,165,166,167,202,201,218,235,252,251,250,199,216,215,214,197,196,195,178,229,246,263,247,248,244,243,242,241,240,239,223,206,189,172,173,174,191,208,209,210,193];
    for(i=0;i<arrayBlackBox.length;i++){
        colorBlock(arrayBlackBox[i]);
    }
    colorBlock(256,"yellow");
    colorBlock(18,"green");
}
function nfield1(){
    for(i=0;i<=30;i++){
        colorBlock(i);
    }
    colorBlock(16)
    for(i=33;i<=1056;i+=33){
        colorBlock(i);
    }
    for(i=32;i<=1088;i+=33){
        colorBlock(i);
    }
    for(i=1058;i<=1088;i++){
        colorBlock(i);
    }
    arrayBlackBox = [1057,31,63,129,162,195,261,262,327,360,426,427,493,492,525,558,557,556,128,127,94,93,92,125,158,191,190,189,156,123,90,89,88,121,154,187,193,226,259,260,326,325,324,323,290,257,224,425,424,391,390,389,387,354,321,288,255,254,253,286,319,352,385,418,451,452,453,454,455,388,488,489,490,521,554,587,620,622,623,624,591,690,723,756,755,754,822,823,888,887,886,885,954,987,1020,821,820,689,688,687,686,685,684,651,618,585,552,519,518,517,819,818,785,752,751,750,783,816,849,882,883,884,953,1019,1018,1017,984,951,950,949,948,947,980,1013,1015,1048,946,913,880,847,814,781,748,715,682,649,616,583,550,53,86,119,152,185,218,251,217,216,215,85,84,117,150,214,181,148,115,82,81,80,113,146,318,317,316,315,282,281,280,279,278,245,212,211,210,117,144,111,78,77,76,109,142,175,208,177,945,944,943,976,1009,1044,1011,516,515,482,449,416,383,382,381,380,379,346,345,344,343,342,309,276,275,274,273,272,239,206,173,140,107,74,41,271,270,237,204,171,138,105,72,71,70,69,68,103,136,169,202,235,301,334,335,336,369,402,333,332,299,266,233,200,167,134,101,399,400,398,431,464,465,466,467,468,469,470,404,371,338,339,340,373,406,407,408,409,410,443,476,475,474,473,472,471,509,542,543,544,545,546,513,480,447,446,445,478,548,581,614,613,612,611,610,609,608,607,606,573,540,680,679,678,677,676,709,742,743,744,745,746,741,740,707,674,673,672,671,539,538,537,536,535,1040,1007,974,941,908,875,876,877,878,845,812,811,810,809,808,807,840,873,906,939,972,1005,1004,1003,970,937,739,772,805,838,871,870,869,902,935,968,1001,1000,999,998,997,704,737,803,802,801,834,867,900,933,768,735,702,669,636,603,604,605,964,931,898,865,864,863,862,861,860,993,926,959,992,1025,993,994,995,962,929,928,893,799,766,733,700,667,634,601,568,500,533,566,599,632,665,698,731,764,797,830,529,530,531,563,596,66,662,695,728,729,730,793,794,795,597,663];
    for(i=0;i<arrayBlackBox.length;i++){
        colorBlock(arrayBlackBox[i]);
    }
    colorBlock(126,"purple");
    colorBlock(1024,"yellow");
    colorBlock(572,"green");
}