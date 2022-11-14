const slide1 = document.querySelector('.slide1');
const slide2 = document.querySelector('.slide2');
const slide3 = document.querySelector('.slide3');

slide2.classList.add("hidden");
slide3.classList.add("hidden");

function rightSwap(){
    slide1.classList.add("hidden");
    slide2.classList.remove("hidden");
}
function leftSwap(){
    slide1.classList.remove("hidden");
    slide2.classList.add("hidden");
}