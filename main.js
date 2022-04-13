const menu = document.querySelector('.mobileMenu');
const options = document.querySelector('.navMenu');
const closeX = document.querySelector('.closeX');
const line = document.querySelector('.hamburguer')

menu.addEventListener('click', () => {
  options.classList.toggle('active');
  closeX.classList.add('active');
  line.classList.add('remove');
});

closeX.addEventListener('click', () => {
  options.classList.remove('active');
  closeX.classList.remove('active');
  line.classList.remove('remove');
});

document.querySelectorAll('.menu').forEach((n) => n.addEventListener('click', () => {
  options.classList.remove('active');
  closeX.classList.remove('active');
  line.classList.remove('remove');
}));
