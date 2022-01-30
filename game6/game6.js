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
var word;
var countDownDate;
var prev = "";
var next = "";
var pprev = "";
var nnext = "";
const words = "about|above|add|after|again|air|all|almost|along|also|always|America|an|and|animal|another|answer|any|are|around|as|ask|at|away|back|be|because|been|before|began|begin|being|below|between|big|book|both|boy|but|by|call|came|can|car|carry|change|children|city|close|come|could|country|cut|day|did|different|do|does|don't|down|each|earth|eat|end|enough|even|every|example|eye|face|family|far|father|feet|few|find|first|follow|food|for|form|found|four|from|get|girl|give|go|good|got|great|group|grow|had|hand|hard|has|have|he|head|hear|help|her|here|high|him|his|home|house|how|idea|if|important|in|Indian|into|is|it|its|it's|just|keep|kind|know|land|large|last|later|learn|leave|left|let|letter|life|light|like|line|list|little|live|long|look|made|make|man|many|may|me|mean|men|might|mile|miss|more|most|mother|mountain|move|much|must|my|name|near|need|never|new|next|night|no|not|now|number|of|off|often|oil|old|on|once|one|only|open|or|other|our|out|over|own|page|paper|part|people|picture|place|plant|play|point|put|question|quick|quickly|quite|read|really|right|river|run|said|same|saw|say|school|sea|second|see|seem|sentence|set|she|should|show|side|small|so|some|something|sometimes|song|soon|sound|spell|start|state|still|stop|story|study|such|take|talk|tell|than|that|the|their|them|then|there|these|they|thing|think|this|those|thought|three|through|time|to|together|too|took|tree|try|turn|two|under|until|up|us|use|very|walk|want|was|watch|water|way|we|well|went|were|what|when|where|which|while|white|who|why|will|with|without|word|work|world|would|write|year|you|young|your"
const list = words.split('|');

function timer() {
    document.getElementById("timer").innerHTML = 60;
    countDownDate = new Date().getSeconds() + 60;

    var x = setInterval(function () {
        input = document.getElementsByName("ans")[0].value
        var seconds = new Date().getSeconds();

        var distance = countDownDate - seconds;
        if (distance >= 60) {
            distance -= 60;
        }

        if (distance < 10) {
            document.getElementById("timer").style.color = "red";
        }

        document.getElementById("timer").innerHTML = distance;

        if (distance == 0) {
            enableStart();
            clearInterval(x);
            document.getElementById("timer").innerHTML = "Time's up!";
            document.getElementById("timer").style.color = "red";
            over = 1;
            if (high < score) {
                high = score;
                document.getElementById("num").innerHTML = "New High WPM!" + '\xa0\xa0\xa0\xa0' +
                    "WPM | " + high + '\xa0\xa0\xa0\xa0' + "Try again by pressing the button above!";
            }
            else {
                document.getElementById("num").innerHTML = "Game Over!" + '\xa0\xa0\xa0\xa0' +
                    "WPM | " + high + '\xa0\xa0\xa0\xa0' + "Try again by pressing the button above!";
            }
        }
    }, 1000);
}

function displayNum1() {//used when restarting game
    disableStart();
    document.getElementById('answer').value = '';
    timer();
    difficulty = 1;
    generateRandom();
    generateRandom();
    generateRandom();
    prev = '\xa0\xa0\xa0\xa0';
    pprev = '\xa0\xa0\xa0\xa0';
    score = 0;
    strikes = 3;
    over = 0;
    mySet = new Set();
    document.getElementById("message").innerHTML = "Good Luck!" + '\xa0\xa0\xa0\xa0' +
    "Highest WPM | " + high;
    document.getElementById("num").innerHTML = pprev + " " + prev + " <span>" + word.slice(0, -1) + "</span> " + next + " " + nnext;
    document.getElementById("message").style.color = "black";
    document.getElementById("timer").style.color = "black";
}

function displayNum() {
    document.getElementById("num").innerHTML = pprev + " " + prev + " <span>" + word.slice(0, -1) + "</span> " + next + " " + nnext;
}

function displayGoodText() {
    document.getElementById("message").innerHTML = "Words | " + score;
    document.getElementById("message").style.color = "black";
}

function generateRandom() {
    pprev = prev;
    prev = word;
    word = next;
    next = nnext;
    nnext = list[Math.floor(Math.random() * list.length)] + " ";
}

function check(input) {
    if (input == word) {
        return true;
    }
    return false;
}

function disableStart() { //disables start button
    document.getElementById("start").disabled = true;
}

function enableStart() { //disables start button
    document.getElementById("start").disabled = false;
}

function enter() {
    input = document.getElementsByName("ans")[0].value
    if (!over && check(input)) {
        score++;
        displayGoodText();
        mySet.add(randomNum);
        generateRandom();
        displayNum();
        document.getElementById('answer').value = '';
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