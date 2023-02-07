let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const btn = document.getElementById('btn');

btn.addEventListener('click', function handleClick(event) {
	
  event.preventDefault();

  const feedbackInput = document.getElementById('feedback');

  console.log(feedbackInput.value);
  
  feedbackInput.value = '';
});