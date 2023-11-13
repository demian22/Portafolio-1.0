
const iconoMenu = document.querySelector('#icono-menu-ham'),
    menu = document.querySelector('#menu');

iconoMenu.addEventListener('click', (e) => {
    //alternacion de estilos del meno y todo lo demas
    menu.classList.toggle('active');
    document.body.classList.toggle('opacidad')


});
