// * Variables
const slide1 = document.querySelector('.slide1');
const slide2 = document.querySelector('.slide2');
const slide3 = document.querySelector('.slide3');
const right = document.querySelector('.controlRight');
const left = document.querySelector('.controlLeft');
const mNav = document.querySelector('.open');
const exitbtn = document.querySelector('.open button')
const menu = document.querySelector('header img');
const headerT = document.querySelector('header');
let count = 1;

slide2.classList.add("hidden");
slide3.classList.add("hidden");
mNav.classList.add("zero");

// * Events
document.addEventListener('keydown', keyControls);
exitbtn.addEventListener('click',close);
menu.addEventListener('click', open);
right.addEventListener('click', rightCounter);
left.addEventListener('click', leftCounter);

// * Functions
function rightCounter(){
    if(count < 3){
        count += 1;
    }
    else if (count == 3){
        count = 1;
    }
}
function rightSwap(){
    if(count == 1){// * at 1
        slide2.classList.remove("hidden");
        slide1.classList.add("hidden");
    }
    if(count == 2 ){// * at 2
        slide3.classList.remove("hidden");
        slide2.classList.add("hidden");
    }
    if(count == 3){// * at 3
        slide1.classList.remove("hidden");
        slide3.classList.add("hidden");
    }
}
function leftCounter(){
    if(count <= 3 && count > 1){
        count -= 1;
    }
    else{
        count = 3;
    }
}
function leftSwap(){
    if(count == 1){// * at 1
        slide3.classList.remove("hidden");
        slide1.classList.add("hidden");
    }
    if(count == 2 ){// * at 2
        slide1.classList.remove("hidden");
        slide2.classList.add("hidden");
    }
    if(count == 3){// * at 3
        slide2.classList.remove("hidden");
        slide3.classList.add("hidden");
    }
}
function close(){
    mNav.classList.add("zero");
    headerT.classList.remove("hidden");
}
function open(){
    mNav.classList.remove("zero");
    headerT.classList.add("hidden");
}
function keyControls(controls){
    if(controls.key === "ArrowRight"){
        rightSwap();
        rightCounter();
    }
    if(controls.key === "ArrowLeft"){
        leftSwap();
        leftCounter();
    }
}