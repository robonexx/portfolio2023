let menuBtn = document.querySelector('#hamburger');
let menu = document.querySelector('nav > ul');

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
let head = document.querySelector('header > a > h3');
let coffee = [...document.querySelectorAll('.coffee_cup > path')];

if (window.innerWidth > 768) {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollpos = window.pageYOffset;
    if (prevScrollpos > currentScrollpos) {
      let nav = document.querySelector('nav');
      nav.style.top = '60px';
      nav.classList.remove('border');
      head.style.color = '#121212';
      header.classList.add('header_bg');
      coffee.forEach((c) => {
        c.style.fill = '#181818';
        c.style.stroke = '#181818';
      });
    } else {
      let nav = document.querySelector('nav');
      nav.style.top = '0px';
      nav.classList.add('border');
      head.style.color = '#fafafa';
      header.classList.remove('header_bg');
      coffee.forEach((c) => {
        c.style.fill = '#fafafa';
        c.style.stroke = '#ededed';
      });
    }

    prevScrollpos = currentScrollpos;
  };
}
