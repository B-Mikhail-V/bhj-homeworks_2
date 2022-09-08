const menuLink = document.querySelectorAll('.menu__link')
console.log(menuLink);
arrMenu = Array.from(menuLink)

console.log(arrMenu);

arrMenu.forEach(element => {
        // console.log(element.href.includes('html'));

    if (element.closest('.menu_sub')) {
        // console.log(element.closest('.menu_sub'));
        // console.log(element.closest('.menu_sub').className);

          element.onclick = () => {
        element.closest('.menu_sub').textContent = 'menu_active';
        // console.log(element.closest('.menu_sub').className);
    }  
    }

    // console.log(element.href.includes('netology'));
});


