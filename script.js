const images = [
    "./assets/1.jpg",
    "./assets/2.jpg",
    "./assets/3.jpg",
    
    ];

// console.log(images[0])

let num = 0;

let prev = document.querySelector('#prev');
let next = document.querySelector('#next');
let slider = document.querySelector('#slider');
console.log(slider.src)


next.addEventListener('click', function(){
    num++;
    if(num>= images.length) {
        num = 0;
    }
    slider.src =  images[num];
})
prev.addEventListener('click', function(){
    num--;
    if(num<0) {
        num =  images.length-1;
    }
    slider.src =  images[num];
})