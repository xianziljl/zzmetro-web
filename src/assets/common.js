import 'uno.css';
const updateHeader = () => {
  const header = document.querySelector('header');
  if (window.scrollY > 100) header.classList.add("header-over");
  else header.classList.remove("header-over");
}
window.addEventListener('scroll', updateHeader);