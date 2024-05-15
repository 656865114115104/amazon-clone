
const images = document.querySelectorAll('.hero-slider ul img');
const prevButton = document.querySelector('.slidebutton_prev');
const nextButton = document.querySelector('.slidebutton_next');
let n = 0;

function changeSlide() {
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = 'none';
    }
    images[n].style.display = 'block';
}

changeSlide();

prevButton.addEventListener('click',function(){
    if (n > 0) {
        n = n - 1;
    } else {
        n = images.length - 1;
    }
    changeSlide();
});
nextButton.addEventListener('click',function(){
    if(n < images.length - 1){
        n=n+1;
    }
    else{
        n =0;
    }
    changeSlide();
});

const scrollContainers = document.querySelectorAll(".product-slider .products");

scrollContainers.forEach(container => {
    container.addEventListener('wheel', function(e) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
    });
});
const scrollContainers2 = document.querySelectorAll(".Products");

scrollContainers2.forEach(container2 => {
    container2.addEventListener('wheel', function(e) {
        e.preventDefault();
        container2.scrollLeft += e.deltaY;
    });
});
var myBack = document.querySelector('.my-ex')
myBack.addEventListener('click',function(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
})