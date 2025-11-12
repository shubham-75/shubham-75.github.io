function navbarToggle() {
	document.querySelector('.nav-cross').classList.toggle('show');
	document.querySelector('.nav-title').classList.toggle('show');
	document.querySelector('.nav-items').classList.toggle('show');
};

function navbarClose() {
	document.querySelector('.nav-cross').classList.remove('show');
	document.querySelector('.nav-title').classList.remove('show');
	document.querySelector('.nav-items').classList.remove('show');
};

window.onscroll = function() {
	scrollFunction()
};

function scrollFunction() {
	if (window.scrollY > 50 || window.scrollY > 50) {
		document.querySelector('.scroll-top').classList.add('show');
	} else {
		document.querySelector('.scroll-top').classList.remove('show');
	}
}
const audio = document.getElementById("hello-audio");
const playBtn = document.getElementById("play-hello");

playBtn.addEventListener("click", (event) => {
  event.stopPropagation(); // prevent triggering any parent clicks
  audio.currentTime = 0;
  audio.play();
});
