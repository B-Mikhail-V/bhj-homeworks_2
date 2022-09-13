const sliderItem = document.querySelectorAll('.slider__item')
const arr1 = Array.from(sliderItem)

function getCounter(start) {
    let counter = start
    return function (pl) {
            switch(pl){
            case '+': result = counter++ % sliderItem.length;
            break;
            case '-': result = counter-- % sliderItem.length;
            break;
            }    

        return result;      
    }
    
} 
counter1 = getCounter(100000)

function deactiveSlider(arr) {
    const allSubMenu = document.querySelectorAll('.menu_active');
    arr.forEach(element => {
      element.classList.remove('slider__item_active')
    })
  }


const nextClick = document.querySelector('.slider__arrow_next')
nextClick.onclick = () => {
    console.log(counter1('+'));
    // deactiveSlider(arr1)
    // sliderItem[counter1('+')].classList.add('slider__item_active')
}

const prevClick = document.querySelector('.slider__arrow_prev')
prevClick.onclick = () => {
    currCount = counter1('-') 
    counter2 = getCounter(currCount - 2)
    console.log(counter2('-'));
    // deactiveSlider(arr1)
    // sliderItem[counter1('-')].classList.add('slider__item_active')
}