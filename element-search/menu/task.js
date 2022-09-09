const menuLink = document.querySelectorAll('.menu__link')
// console.log(menuLink);
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

// foo();

// function foo () {

var childs = function (select) {
  return document.querySelectorAll(select)
}

chld2 = childs('.menu__link')

console.log(chld2[2].closest('.menu_sub'));


for(let i = 0; i < chld2.length; i++) {
  // console.log(chld2[i].closest('.menu_sub'));
  chld2[i].onclick = () => {
    alert (i)
    if(chld2[i].closest('.menu_sub')) {
      console.log(chld2[i]);
      const ss = chld2[i].closest('.menu_sub')
      console.log(ss);
      ss.className = 'menu menu_sub menu_active'
  }
  
}
}
 
// function activeMenu (i) {
    // if(chld2[i].closest('.menu_sub')) {
    // console.log(chld2[i]);
    // const ss = chld2[i].closest('.menu_sub')
    // console.log(ss);
    // ss.className = 'menu menu_sub menu_active'
//   }

// }


// function activeMenu (i) {
// alert (i)
// }



// }


// for(let i = 0; i < chld2.length; i++) {
//   chld2[i].setAttribute('nn', i);
//   // console.log(this.getAttribute ('nn'));
//   chld2[i].onclick = function() {
//     activeMenu (this.getAttribute ('nn'))
//   }
// }


// }



// });


// console.log(childs('.menu'));
// let cld1 = childs('.menu')
// cld1.forEach(element => {
//   console.log(element.className);
//   if(element.className == 'menu menu_sub') {
//     element.className = 'menu menu_sub menu_active'
//   }
// });

// foo();
// function foo() {
// let el_el = childs('.menu__link')
// console.log(el_el);
// let el = Array.from(el_el)

// for(let i = 0; i < el.length; i++) {
//   el[i].onclick = () => {
//     // if(el[i].closest('.menu').className !== 'menu menu_sub') {
//             // alert('NO');
//             if(document.querySelectorAll('.menu menu_sub')){
//                          const pp = document.querySelectorAll('.menu menu_sub')
//                          alert(pp[0])
//             console.log(pp); 
//             }

//             // alert(pp)
//             // pp.cclassName = 'menu menu_sub menu_active'
//             // console.log(el[i].closest('.menu').className);
//             // el[i].closest('.menu').className = 'menu menu_sub menu_active'

//     // }
//   };
//   // console.log(el[i]);

//   }  

//   function activeMenu(i) {
//     if(el[i].closest('.menu').className == 'menu menu_sub') {
//       alert('YES');
//       console.log(el[i].closest('.menu').className);
//       el[i].closest('.menu').className = 'menu menu_sub menu_active'
//       } else {
//       return false
//     }

// }




  // if(el[i].closest('.menu').className == 'menu menu_sub') {
  //   // console.log(el[i].firstElementChild);
  //   console.log(el[i].closest('.menu').className);
  //   el[i].closest('.menu').className = 'menu menu_sub menu_active'


  // el[i].onclick = () => {
  //   console.log(el[i].closest('.menu').className);
  // if(el[i].closest('.menu').className == 'menu menu_sub') {
  //   el[i].closest('.menu').className = 'menu menu_sub menu_active'
  // }
  // // }
// }
  


// console.log(cld1[0]);
// cld1[0].onclick = () => [
//   alert('OK')
// ]

