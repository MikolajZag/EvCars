const hamburger = document.getElementsByClassName('hamburger')[0];
const nav = document.getElementsByClassName('navbar-links')[0];

const handleClick = () =>{
    hamburger.classList.toggle('hamburger--active');
    nav.classList.toggle('active');
}

hamburger.addEventListener('click', handleClick);
