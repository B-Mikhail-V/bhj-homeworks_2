const menuLink = document.querySelectorAll('.menu__link')
// console.log(menuLink.length);
// console.log(menuLink[0].href);
Array.from(menuLink).forEach(element => {
  console.log(element.className);
  console.log(element.closest('.menu_sub'))

  // if(!element.href.includes('html')) {
  //   // console.log(element.closest('.menu_sub'));
  //   console.log(element.parentElement.parentElement.className);
  //    console.log(element.href); 
    //  element.parentElement.parentElement.className = 'menu_active'
    //  element.closest('.menu_sub').className = 'menu_active'

  }

);


// arrMenu = Array.from(menuLink)

// console.log(arrMenu);

// arrMenu.forEach(element => {
//         // console.log(element.href.includes('html'));

//     if (element.closest('.menu_sub')) {
//         // console.log(element.closest('.menu_sub'));
//         // console.log(element.closest('.menu_sub').className);

//           element.onclick = () => {
//         element.closest('.menu_sub').textContent = 'menu_active';
//         // console.log(element.closest('.menu_sub').className);
//     }  
//     }

//     // console.log(element.href.includes('netology'));
// });


