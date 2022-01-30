var score = 0;
var high = 0;
var randomNum = "";
var mySet = new Set();
var over = 0;
var difficulty = 1;
var ans;
var answer;
var eq;
var input;
var countDownDate;
var num1;
var num2;
var num3;
var num4;
var sign;
var wrong;
var start;
var solved = 0;

function displayNum1() {//used when restarting game
    solved = 0;
    difficulty = 1;
    generateCode();
    score = 0;
    over = 0;
    mySet = new Set();
    document.getElementById("message").innerHTML = "Good Luck!" + '\xa0\xa0\xa0\xa0' +
    "Best Time | " + high;
    document.getElementById("num").innerHTML = randomNum;
    document.getElementById("message").style.color = "black";
}

function round(num) {
    return Math.round(num * 100) / 100;
}

function displayNum() {
    document.getElementById("num").innerHTML = randomNum;
}

function displayGoodText() {
    document.getElementById("message").innerHTML = "Correct!" + '\xa0\xa0\xa0\xa0'
        + "Time so far | " + round(score) + '\xa0\xa0\xa0\xa0' + "Completed Problems | " + solved;
    document.getElementById("message").style.color = "black";
}

function displayBadText() {
    document.getElementById("message").innerHTML = "Incorrect, " + answer + ", not " + input + " = " + wrong + '\xa0\xa0\xa0\xa0'
        + "Time so far | " + round(score) + '\xa0\xa0\xa0\xa0' + "Completed Problems | " + solved;
    document.getElementById("message").style.color = "red";
}

function generateRandom() {
    generateCode();
}

function combine(x, y) {
    var z;
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
        z = x + y;
    }
    if (item == "-") {
        if (x - y >= 0) {
            z = x - y;
        }
        else {
            z = x + y;
            item = "+";
        }
    }
    if (item == "*") {
        z = x * y;
    }
    if (item == "/") {
        if ((x / y) % 1 == 0) {
            z = x / y;
        }
        else {
            z = x * y;
            item = "*";
        }
    }
    if (item == "%") {
        z = x % y;
    }
    sign = item;
    return z;
}

function combine2(x, y, item) {
    var z;
    x = parseInt(x);
    y = parseInt(y);
    if (item == "+") {
        z = x + y;
    }
    if (item == "-") {
        z = x - y;
    }
    if (item == "*") {
        z = x * y;
    }
    if (item == "/") {
        z = x / y;

    }
    if (item == "%") {
        z = x % y;
    }
    return z;
}

function arrayEquals(a, b) {
    return Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index]);
}

function check(str) {
    const words = str.split(' ');
    score += (new Date().getTime() - start) / 1000;
    if (words.length != 7) {
        score += 10;
        wrong = "invalid input"
        return false;
    }
    var temp1 = combine2(words[0], words[2], words[1]);
    var temp2 = combine2(temp1, words[4], words[3]);
    var temp3 = combine2(temp2, words[6], words[5]);
    var arr1 = [words[0], words[2], words[4], words[6]];
    arr1.sort();
    var arr2 = [num1, num2, num3, num4];
    arr2.sort();
    wrong = temp3;
    if (temp3 == ans && arr1[0] == arr2[0] &&
        arr1[1] == arr2[1] && arr1[2] == arr2[2] && arr1[3] == arr2[3]) {
        return true;
    }
    score += 10;
    return false;
}

function generateCode() {
    var func1;
    var func2;
    var func3;
    num1 = Math.floor(Math.random() * 9 + 1);
    num2 = Math.floor(Math.random() * 8 + 1);
    num3 = Math.floor(Math.random() * 7 + 1);
    num4 = Math.floor(Math.random() * 6 + 1);
    mySet = new Set();
    mySet.add("+");
    mySet.add("-");
    mySet.add("*");
    mySet.add("/");
    mySet.add("%");
    ans = combine(num1, num2);
    func1 = sign;
    ans = combine(ans, num3);
    func2 = sign;
    ans = combine(ans, num4);
    func3 = sign;
    eq = num1 + " " + num2 + " " + num3 + " " + num4 + " = " + ans;
    randomNum = eq;
    answer = num1 + " " + func1 + " " + num2 + " " + func2 + " " + num3 + " " + func3 + " " + num4 + " = " + ans
    console.log(answer);
    start = new Date().getTime();
}

function enter() {
    input = document.getElementsByName("ans")[0].value
    if (!over) {
        if (!check(input)) {
            displayBadText();
            mySet.add(randomNum);
            generateRandom();
            displayNum();
        }
        else {
            solved++;
            displayGoodText();
            if (solved == 4) {
                if (high < score) {
                    high = round(score);
                    document.getElementById("num").innerHTML = "New Best Time!" + '\xa0\xa0\xa0\xa0' +
                        "Best Time | " + high + '\xa0\xa0\xa0\xa0' + "Try again by pressing the button above!";
                }
                else {
                    document.getElementById("num").innerHTML = "Game Over!" + '\xa0\xa0\xa0\xa0' +
                        "Best Time | " + high + '\xa0\xa0\xa0\xa0' + "Try again by pressing the button above!";
                }
                over = 1
            }
            else {
                displayGoodText();
                mySet.add(randomNum);
                generateRandom();
                displayNum();
            }
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