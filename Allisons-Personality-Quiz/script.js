var earlyBirdScore = 0;
var nightOwlScore = 0;

var answered = 0;
var result = document.getElementById("result");
var restart = document.getElementById("restart");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");

q1a1.addEventListener("click", earlyBird);
q1a1.addEventListener("click", disableButtonq1a1);

q1a2.addEventListener("click", nightOwl);
q1a2.addEventListener("click", disableButtonq1a2);

q2a1.addEventListener("click", nightOwl);
q2a1.addEventListener("click", disableButtonq2a1);

q2a2.addEventListener("click", earlyBird);
q2a2.addEventListener("click", disableButtonq2a2);

q3a1.addEventListener("click", nightOwl);
q3a1.addEventListener("click", disableButtonq3a1);

q3a2.addEventListener("click", earlyBird);
q3a2.addEventListener("click", disableButtonq3a2);

q4a1.addEventListener("click", earlyBird);
q4a1.addEventListener("click", disableButtonq4a1);

q4a2.addEventListener("click", nightOwl);
q4a2.addEventListener("click", disableButtonq4a2);

q5a1.addEventListener("click", earlyBird);
q5a1.addEventListener("click", disableButtonq5a1);

q5a2.addEventListener("click", nightOwl);
q5a2.addEventListener("click", disableButtonq5a2);

restart.addEventListener("click", restartQuiz)


function restartQuiz(){
	result.innerHTML = "You are a(n)...";
	resetAllQuestions();
	answered = 0;
	earlyBirdScore = 0;
	nightOwlScore = 0;
}
function resetAllQuestions(){
	q1a1.disabled = false;
	q1a2.disabled = false;
	q2a1.disabled = false;
	q2a2.disabled = false;
	q3a1.disabled = false;
	q3a2.disabled = false;
	q4a1.disabled = false;
	q4a2.disabled = false;
	q5a1.disabled = false;
	q5a2.disabled = false;
	
	q1a1.style.opacity = "100%";
	q1a2.style.opacity = "100%";
	q2a1.style.opacity = "100%";
	q2a2.style.opacity = "100%";
	q3a1.style.opacity = "100%";
	q3a2.style.opacity = "100%";
	q4a1.style.opacity = "100%";
	q4a2.style.opacity = "100%";
	q5a1.style.opacity = "100%";
	q5a2.style.opacity = "100%";
}

function earlyBird() {
	earlyBirdScore++;
	answered++;
	console.log("question count = " + answered + " earlyBird score = " + earlyBirdScore);
	if(answered == 5){
		console.log("The quiz is over!");
		updateResult();
	}
}
function nightOwl() {
	nightOwlScore++;
	answered++;
	console.log("question count = " + answered + " nightOwl score = " + nightOwlScore);
	if(answered == 5){
		console.log("The quiz is over!");
		updateResult();
	}
}

function updateResult(){
	if(earlyBirdScore >= 3){
		result.innerHTML = "You are an early bird!";
		console.log("You are an early bird!");
	} else if(nightOwlScore >= 3){
		result.innerHTML = "You are a night owl!";
		console.log("You are a night owl!");
	}
}

function disableButtonq1a1() {
	q1a1.disabled = true;
	q1a2.disabled = true;
	q1a2.style.opacity = "50%";
}
function disableButtonq1a2() {
	q1a1.disabled = true;
	q1a2.disabled = true;
	q1a1.style.opacity = "50%";
}
function disableButtonq2a1() {
	q2a1.disabled = true;
	q2a2.disabled = true;
	q2a2.style.opacity = "50%";
}
function disableButtonq2a2() {
	q2a1.disabled = true;
	q2a2.disabled = true;
	q2a1.style.opacity = "50%";
}
function disableButtonq3a1() {
	q3a1.disabled = true;
	q3a2.disabled = true;
	q3a2.style.opacity = "50%";
}
function disableButtonq3a2() {
	q3a1.disabled = true;
	q3a2.disabled = true;
	q3a1.style.opacity = "50%";
}
function disableButtonq4a1() {
	q4a1.disabled = true;
	q4a2.disabled = true;
	q4a2.style.opacity = "50%";
}
function disableButtonq4a2() {
	q4a1.disabled = true;
	q4a2.disabled = true;
	q4a1.style.opacity = "50%";
}
function disableButtonq5a1() {
	q5a1.disabled = true;
	q5a2.disabled = true;
	q5a2.style.opacity = "50%";
}
function disableButtonq5a2() {
	q5a1.disabled = true;
	q5a2.disabled = true;
	q5a1.style.opacity = "50%";
}

