var myArray = ["Criminalising abortion does not stop abortions, it just makes abortion less safe",
			  "People have abortions all the time, regardless of what the law says",
			  "Almost every death and injury from unsafe abortion is preventable",
			  "Many countries are starting to change their laws to allow for greater access to abortion",
			  "Criminalising or restricting abortion prevents doctors from providing basic care",
			  "It’s not just cisgender women and girls who need abortions",
			  "Criminalising abortion is a form of discrimination, which further fuels stigma",
			  "Access to safe abortion is a matter of human right"];

//2. Connect a variable to the HTML <p> tag "quote"
var quote = document.getElementById("quote");

//3. Connect a variable to the HTML <button> tag "myBtn"
var button = document.getElementById("myBtn");

//4. Create a variable to count through the array
var count = 0;


//5. Add event listener to the HTML button "myBtn"
button.addEventListener("click", displayQuote);


//6. Create a function to display a quote
function displayQuote() {
	quote.innerHTML = myArray[count];
	count++;
	if(count==myArray.length){
		count = 0;
	}
}


//Get the button:
toTopButton1 = document.getElementById("toTop1");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    toTopButton1.style.display = "block";
  } else {
    toTopButton1.style.display = "none";
  }
	console.log("run");
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {

  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
