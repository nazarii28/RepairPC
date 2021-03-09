const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

const content = document.getElementById("count");
document.addEventListener("scroll", function scroll(e) {

var scrolled = document.scrollingElement.scrollTop;
var position = content.offsetTop;


if(scrolled > position - 700){
startCountAnimation();
document.removeEventListener('scroll', scroll)
}

});


function startCountAnimation() {
	let numbers = document.querySelectorAll('.out');
	for(number of numbers) {
	let end = +number.dataset.max;
	let step = +number.dataset.step;
	count(number, end, step);
}
}


function count(number, end, step) {
let interval = setInterval(function() {
	number.innerHTML = +number.innerHTML + step;
	if(+number.innerHTML == end) {
		clearInterval(interval)
	}
}, 15);
}
