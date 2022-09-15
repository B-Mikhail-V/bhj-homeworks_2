const sliderItem = document.querySelectorAll('.slider__item')
arr1 = Array.from(sliderItem)
console.log(arr1);



function activeSlide() {
   const actSl = document.querySelector('.slider__item_active') 
   return actSl;
} 

acc = activeSlide()
console.log(acc);

console.log(arr1.findIndex(activeSlide));
