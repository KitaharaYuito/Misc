var diceResult1 = 0, diceResult2 = 0, diceResult3 = 0, diceResult4 = 0, diceResult5 = 0, diceResult6 = 0;
var parentNum = 1000000;

for(var i = 0; i < parentNum; i++){
    var result = Math.floor(Math.random() * (6 - 1 + 1)) + 1
    if(result == 1) diceResult1 ++;
    else if(result == 2) diceResult2 ++;
    else if(result == 3) diceResult3 ++;
    else if(result == 4) diceResult4 ++;
    else if(result == 5) diceResult5 ++;
    else diceResult6 ++;
    console.log("処理中...(" + i + " / " + parentNum + ")")
}
console.log("1:" + diceResult1 +  " (" + diceResult1 / (parentNum / 100) + "%)\n" +
            "2:" + diceResult2 +  " (" + diceResult2 / (parentNum / 100) + "%)\n" +
            "3:" + diceResult3 +  " (" + diceResult3 / (parentNum / 100) + "%)\n" +
            "4:" + diceResult4 +  " (" + diceResult4 / (parentNum / 100) + "%)\n" +
            "5:" + diceResult5 +  " (" + diceResult5 / (parentNum / 100) + "%)\n" +
            "6:" + diceResult6 +  " (" + diceResult6 / (parentNum / 100) + "%)"
);
