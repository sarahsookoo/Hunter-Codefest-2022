var score = 0;
var high = 0;
var strikes = 3;
var randomNum = "";
var mySet = new Set();
var over = 0;

function displayNum1() {//used when restarting game
    generateCode();
    score = 0;
    strikes = 3;
    over = 0;
    mySet = new Set();
    document.getElementById("message").innerHTML = "Good Luck!" + '\xa0\xa0\xa0\xa0' +
    "High Score | " + high;
    document.getElementById("num").innerHTML = randomNum;
    for (let item of mySet) console.log(item);
    console.log("------------");
    document.getElementById("message").style.color = "black";
}

function displayNum() {
    document.getElementById("num").innerHTML = randomNum;
    for (let item of mySet) console.log(item);
    console.log("------------");
}

function displayGoodText() {
    document.getElementById("message").innerHTML = "Correct!" + '\xa0\xa0\xa0\xa0'
        + "Current Score | " + score + '\xa0\xa0\xa0\xa0' + " Strikes | " + strikes;
    document.getElementById("message").style.color = "black";
}

function displayBadText1() {
    document.getElementById("message").innerHTML = "Incorrect, " + randomNum + " was seen!" + '\xa0\xa0\xa0\xa0'
        + "Current Score | " + score + '\xa0\xa0\xa0\xa0' + " Strikes | " + strikes;
    document.getElementById("message").style.color = "red";
}

function displayBadText2() {
    document.getElementById("message").innerHTML = "Incorrect, " + randomNum + " was not seen!" + '\xa0\xa0\xa0\xa0'
        + "Current Score | " + score + '\xa0\xa0\xa0\xa0' + " Strikes | " + strikes;
    document.getElementById("message").style.color = "red";
}

function generateRandom() {
    if (Math.floor(Math.random() * 4) + 1 == 1) {
        var length = Math.floor(Math.random() * mySet.size);
        var counter = 0;
        for (let item of mySet) {
            if (counter == length) {
                randomNum = item;
                break;
            }
            counter++;
        }
    }
    else {
        generateCode();
    }
}

function generateCode() {
    var code = String.fromCharCode(Math.floor(Math.random() * 60) + 63);
    var length = Math.floor(Math.random() * 9) + 2;
    for (let i = 0; i < length; i++) {
        code += String.fromCharCode(Math.floor(Math.random() * 90) + 33);
    }
    randomNum = code;
}

function unHideNext() {
    var z = document.getElementsByClassName("nextbutton")[0];
    if (z.style.visibility = "hidden") {
        z.style.visibility = "visible";
    }
}

function unHideInput() {
    var z = document.getElementsByClassName("inputbox")[0];
    if (z.style.visibility = "hidden") {
        z.style.visibility = "visible";
    }
}

function hideNext() {
    var z = document.getElementsByClassName("nextbutton")[0];
    if (z.style.visibility = "visible") {
        z.style.visibility = "hidden";
    }
}

function notSeen() {
    if (!over) {
        if (mySet.has(randomNum)) {
            strikes--;
            displayBadText1();
            if (strikes == 0) {
                if (high < score) {
                    high = score;
                    document.getElementById("num").innerHTML = "New High Score!" + '\xa0\xa0\xa0\xa0' +
                        "High Score | " + high + '\xa0\xa0\xa0\xa0' + "Try again by pressing the button above!";
                }
                else {
                    document.getElementById("num").innerHTML = "Game Over!" + '\xa0\xa0\xa0\xa0' +
                        "High Score | " + high + '\xa0\xa0\xa0\xa0' + "Try again by pressing the button above!";
                }
                over = 1;
            }
            else {
                mySet.add(randomNum);
                generateRandom();
                displayNum();
            }
        }
        else {
            score++;
            displayGoodText();
            mySet.add(randomNum);
            generateRandom();
            displayNum();
        }
    }
}

function seen() {
    if (!over) {
        if (!(mySet.has(randomNum))) {
            strikes--;
            displayBadText2();
            if (strikes == 0) {
                if (high < score) {
                    high = score;
                    document.getElementById("num").innerHTML = "New High Score!" + '\xa0\xa0\xa0\xa0' +
                        "High Score | " + high + '\xa0\xa0\xa0\xa0' + "Try again by pressing the button above!";
                }
                else {
                    document.getElementById("num").innerHTML = "Game Over!" + '\xa0\xa0\xa0\xa0' +
                        "High Score | " + high + '\xa0\xa0\xa0\xa0' + "Try again by pressing the button above!";
                }
                over = 1;
            }
            else {
                mySet.add(randomNum);
                generateRandom();
                displayNum();
            }
        }
        else {
            score++;
            displayGoodText();
            mySet.add(randomNum);
            generateRandom();
            displayNum();
        }
    }
}
