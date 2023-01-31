let menuBtn = document.querySelector('#hamburger');
let menu = document.querySelector('nav > ul');
let theme = document.querySelector('.toggleMode');

menuBtn.addEventListener('click', () => {
  console.log('clicked button');
  menuBtn.classList.toggle('active');
  menu.classList.toggle('open');
  /* 
  links.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `liFadeIn 0.3s ease-in forwards ${
        index / 8 + 0.5
      }s`;
    }
  }); */
});

const header = document.querySelector('header');
/* let head = document.querySelector('header > a > h3');
let coffee = [...document.querySelectorAll('.coffee_cup > path')]; */

if (window.innerWidth > 768) {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollpos = window.pageYOffset;
    let nav = document.querySelector('nav');
    if (prevScrollpos > currentScrollpos) {
      nav.style.top = '60px';
      nav.classList.remove('border');
      /*  head.style.color = 'var(--color-alt'; */
      header.classList.add('header_bg');
      theme.style.transform = 'translateX(0px)';
      /* coffee.forEach((c) => {
        c.style.fill = 'var(--color-alt)';
        c.style.stroke = 'var(--color-alt)';
      }); */
    } else {
      nav.style.top = '0px';
      nav.classList.add('border');
      /*  head.style.color = 'var(--color-alt)'; */
      header.classList.remove('header_bg');
      theme.style.transform = 'translateX(100px) translateY(-0.2rem)';
      /* coffee.forEach((c) => {
        c.style.fill = 'var(--color-alt)';
        c.style.stroke = '#ededed';
      }); */
    }
    prevScrollpos = currentScrollpos;
  };
}

if (window.innerWidth < 768) {
  var prevScrollpos = window.pageYOffset;
  header.classList.add('header_bg_mobile');
  /*  head.style.color = 'var(--color-alt)';
  coffee.forEach((c) => {
    c.style.fill = 'var(--color-alt)';
    c.style.stroke = '#ededed';
  }); */
  window.onscroll = function () {
    var currentScrollpos = window.pageYOffset;
    if (prevScrollpos > currentScrollpos) {
      header.style.top = '0px';

      header.classList.add('header_bg_mobile');
    } else {
      header.style.top = '-70px';

      header.classList.remove('header_bg_mobile');
    }
    prevScrollpos = currentScrollpos;
  };
}
