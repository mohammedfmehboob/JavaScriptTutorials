/* 
Mohammed Mehboob 
JavaScript - TPEO 

var isThristy = true;

if (isThirsty) {
    buyMoge();
} else {
    saveMoney();
}

if (expression operator expression) {
    do_something;
} else {
    do_something_different;
}

var isThirsty = true;
var isHungry = false
if (isThirsty && isHungry) {
    buyMoge();
    buyFood();
} else {
    saveMoney();
}


if (isThirfsty || isHungry) {
    buyMoge();
    buyFood();
}else {
    saveMoney();
}
 */

function findTreasure(x, y){
    var treasureX = 3;
    var treasureY = 9;

    if (x == treasureX && y == treasureY) {
        console.log("You found the treasure!");
        return;
    }

    while(x != treasureX) {
        if (x < treasureX) {
            console.log("Stepping to the right.");
            x++;
        } else if (x > treasureX) {
            console.log("Stepping to the left.");
            x--;
        }
    }

    while(y != treasureY) {
        if (y < treasureY) {
            console.log("Stepping north.");
            y++;
        } else if (y > treasureY) {
            console.log("Stepping south.");
            y--;
        }
    }

    console.log("You have found the treasure!");

}

findTreasure(3,0);
findTreasure(6,3);
findTreasure(3,8);