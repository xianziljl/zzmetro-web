import 'uno.css';
const updateHeader = () => {
  const header = document.querySelector('header');
  if (window.scrollY > 100) header.classList.add("header-over");
  else header.classList.remove("header-over");
}
window.addEventListener('scroll', updateHeader);

document.querySelector('.menu-btn').addEventListener('click', e => {
  document.querySelector('.header').classList.toggle('open');
});
window.addEventListener('resize', e => {
  if (window.screen.width >= 960){
    document.querySelector('.header').classList.remove('open');
  }
});