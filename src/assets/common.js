import 'uno.css';

// header 滚动变色
const updateHeader = () => {
  const header = document.querySelector('header');
  if (window.scrollY > 100) header.classList.add("header-over");
  else header.classList.remove("header-over");
}
window.addEventListener('scroll', updateHeader);

// 移动端菜单按钮
document.querySelector('.menu-btn').addEventListener('click', e => {
  document.querySelector('.header').classList.toggle('open');
});
window.addEventListener('resize', e => {
  if (window.screen.width >= 960){
    document.querySelector('.header').classList.remove('open');
  }
});

// 返回顶部
document.querySelector('.scroll-to-top-btn').addEventListener('click', e => {
  window.scrollTo(0, 0);
});