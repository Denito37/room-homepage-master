// * Variables
const slide1 = document.querySelector('.slide1');
const slide2 = document.querySelector('.slide2');
const slide3 = document.querySelector('.slide3');
const right = document.querySelector('.right');
const left = document.querySelector('.left');
const right2 = document.querySelector('.right2');
const left2 = document.querySelector('.left2');
const right3 = document.querySelector('.right3');
const left3 = document.querySelector('.left3');
const closeM = document.querySelector('.open');
const exitbtn = document.querySelector('.open button')
const menu = document.querySelector('header img');
const headerT = document.querySelector('header');
let count = 1;

slide2.classList.add("hidden");
slide3.classList.add("hidden");
closeM.classList.add("hidden");

// * Events
exitbtn.addEventListener('click',close);
menu.addEventListener('click', open);
right.addEventListener('click', rightCounter);
right2.addEventListener('click', rightCounter);
right3.addEventListener('click', rightCounter);
left.addEventListener('click', leftCounter);
left2.addEventListener('click', leftCounter);
left3.addEventListener('click', leftCounter);

// * Function
function rightCounter(){
    if(count < 3){
        count += 1;
    }
    else if (count == 3){
        count = 1;
    }
    console.log(count);
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
    console.log(count);
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
    closeM.classList.add("hidden");
    headerT.classList.remove("hidden");
}
function open(){
    closeM.classList.remove("hidden");
    headerT.classList.add("hidden");
}