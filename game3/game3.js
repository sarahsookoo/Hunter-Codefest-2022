var score = 0;
var high = 0;
var strikes = 3;
var randomNum = "";
var mySet = new Set();
var over = 0;
var difficulty = 1;
var ans;
var eq;
var input;
var countDownDate;

function timer() {
    document.getElementById("timer").innerHTML = 40;
    countDownDate = new Date().getSeconds() + 40;

    var x = setInterval(function () {

        var seconds = new Date().getSeconds();

        var distance = countDownDate - seconds;
        if (distance >= 60) {
            distance -= 60;
        }

        if (distance < 10) {
            document.getElementById("timer").style.color = "red";
        }

        document.getElementById("timer").innerHTML = distance;

        if (over == 1) {
            clearInterval(x);
            document.getElementById("timer").innerHTML = "Out of strikes!";
            document.getElementById("timer").style.color = "red";
        }

        if (distance == 0) {
            clearInterval(x);
            document.getElementById("timer").innerHTML = "Time's up! " + eq + ans;
            document.getElementById("timer").style.color = "red";
            over = 1;
            if (high < score) {
                high = score;
                document.getElementById("num").innerHTML = "New High Score!" + '\xa0\xa0\xa0\xa0' +
                    "High Score | " + high + '\xa0\xa0\xa0\xa0' + "Try again by pressing the button above!";
            }
            else {
                document.getElementById("num").innerHTML = "Game Over!" + '\xa0\xa0\xa0\xa0' +
                    "High Score | " + high + '\xa0\xa0\xa0\xa0' + "Try again by pressing the button above!";
            }
        }
    }, 1000);
}

function displayNum1() {//used when restarting game
    timer();
    difficulty = 1;
    generateCode();
    score = 0;
    strikes = 3;
    over = 0;
    mySet = new Set();
    document.getElementById("message").innerHTML = "Good Luck!" + '\xa0\xa0\xa0\xa0' +
    "High Score | " + high;
    document.getElementById("num").innerHTML = randomNum;
    document.getElementById("message").style.color = "black";
    document.getElementById("timer").style.color = "black";
}

function displayNum() {
    document.getElementById("num").innerHTML = randomNum;
}

function displayGoodText() {
    document.getElementById("message").innerHTML = "Correct!" + '\xa0\xa0\xa0\xa0'
        + "Current Score | " + score + '\xa0\xa0\xa0\xa0' + " Strikes | " + strikes;
    document.getElementById("message").style.color = "black";
}

function displayBadText() {
    document.getElementById("message").innerHTML = "Incorrect, " + eq + ans + ", not " + input + '\xa0\xa0\xa0\xa0'
        + "Current Score | " + score + '\xa0\xa0\xa0\xa0' + " Strikes | " + strikes;
    document.getElementById("message").style.color = "red";
}

function generateRandom() {
    generateCode();
}

function generateCode() {
    var num1;
    var num2;
    var length = Math.floor(Math.random() * 9) + 2;
    mySet = new Set();
    mySet.add("+");
    if (difficulty > 2) {
        mySet.add("-");
    }
    if (difficulty > 4) {
        mySet.add("*");
        mySet.add("*");
    }
    if (difficulty > 9) {
        mySet.add("/");
        mySet.add("/");
        mySet.add("*");
    }
    if (difficulty > 16) {
        mySet.add("%");
        mySet.add("%");
        mySet.add("*");
        mySet.add("/");
    }
    var length = Math.floor(Math.random() * mySet.size);
    var counter = 0;
    var item;
    for (item of mySet) {
        if (counter == length) {
            randomNum = item;
            break;
        }
        counter++;
    }
    if (item == "+") {
        num1 = Math.floor(Math.random() * ((difficulty + 4)));
        num2 = Math.floor(Math.random() * ((difficulty + 4)));
        ans = num1 + num2;
    }
    if (item == "-") {
        num1 = Math.floor(Math.random() * (difficulty));
        num2 = Math.floor(Math.random() * (difficulty));
        var temp = num1;
        num1 = temp + num2;
        ans = temp;
    }
    if (item == "*") {
        num1 = Math.floor(Math.random() * ((difficulty - 4)));
        num2 = Math.floor(Math.random() * ((difficulty - 4)));
        ans = num1 * num2;
    }
    if (item == "/") {
        num1 = Math.floor(Math.random() * (difficulty - 8));
        num2 = Math.floor(Math.random() * (difficulty - 4)) + 1;
        var temp = num1;
        num1 = temp * num2;
        ans = temp;
    }
    if (item == "%") {
        num1 = Math.floor(Math.random() * (difficulty));
        num2 = Math.floor(Math.random() * (difficulty / 2) + 1);
        ans = num1 % num2;
    }
    eq = num1 + " " + item + " " + num2 + " = "
    randomNum = eq;
    console.log(ans);
    difficulty += 2.5;
}

function enter() {
    input = document.getElementsByName("ans")[0].value
    if (!over) {
        if (input != ans) {
            strikes--;
            displayBadText();
            if (strikes == 0) {
                if (high < score) {
                    high = score;
                    document.getElementById("timer").innerHTML = "Out of strikes!";
                    document.getElementById("timer").style.color = "red";
                    document.getElementById("num").innerHTML = "New High Score!" + '\xa0\xa0\xa0\xa0' +
                        "High Score | " + high + '\xa0\xa0\xa0\xa0' + "Try again by pressing the button above!";
                }
                else {
                    document.getElementById("timer").innerHTML = "Out of strikes!";
                    document.getElementById("timer").style.color = "red";
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