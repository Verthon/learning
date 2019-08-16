const toggleMenu = () => {
  menu.classList.toggle('side-menu--active');
}

const hamburger = document.querySelector("#nav-btn");
const menu = document.querySelector("#side-menu");
const closeBtn = document.querySelector("#nav-close");
hamburger.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);


