const botaomobile = document.getElementById('botao-mobile');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault()
    const nav = document.getElementById ('navegador');
    nav.classList.toggle('active');
} 
botaomobile.addEventListener('click', toggleMenu);
botaomobile.addEventListener('touchstart', toggleMenu);