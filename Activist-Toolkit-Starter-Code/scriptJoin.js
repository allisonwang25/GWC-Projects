//Get the button:
toTopButton2 = document.getElementById("toTop2");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    toTopButton2.style.display = "block";
  } else {
    toTopButton2.style.display = "none";
  }
	console.log("run");
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {

  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

var button = document.getElementById("emailButton");
button.addEventListener("click", generateScript);
var displayScript = document.getElementById("emailTxt")

function generateScript() {
  //This variable must be in the function or it will not work
	var representative = document.getElementById("representative").value;
  var name = document.getElementById("name").value;
  var location = document.getElementById("location").value;
	var experience = document.getElementById("experience").value;

  displayScript.innerHTML = "Dear " + representative + ", my name is " + name + " and I live in " + location + ". Please stand with all the women that you represent. Basic human rights to life apply for women beyond just being able to be born ---- and then their rights to their life all end. Body autonomy is important. Health choices are important. Even when the choices are not what you would choose. "+ experience+ " We cannot lose the critical protections afforded by the Roe v. Wade decision. Please do not let reproductive rights be rolled back where women lose autonomy over their own bodies. I'm asking you to protect our hard-earned progress and protect a woman’s right to choose. All women must have access to safe and legal abortions and a woman's ability to make her own private health decisions should not be up for debate anymore."

}
