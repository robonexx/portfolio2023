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
    let nav = document.querySelector('nav');
    if (prevScrollpos > currentScrollpos) {
      nav.style.top = '60px';
      nav.classList.remove('border');
      head.style.color = '#121212';
      header.classList.add('header_bg');
      coffee.forEach((c) => {
        c.style.fill = '#181818';
        c.style.stroke = '#181818';
      });
    } else {
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

if (window.innerWidth < 768) {
  var prevScrollpos = window.pageYOffset;
  header.classList.add('header_bg_mobile');
  head.style.color = 'white';
  coffee.forEach((c) => {
    c.style.fill = '#fafafa';
    c.style.stroke = '#ededed';
  });
  window.onscroll = function () {
    let nav = document.querySelector('nav');
    var currentScrollpos = window.pageYOffset;
    if (prevScrollpos > currentScrollpos) {
      header.style.top = '0px';
      nav.style.top = '60px';
      header.classList.add('header_bg_mobile');
    } else {
      header.style.top = '-70px';
      nav.style.top = '-70px';
      header.classList.remove('header_bg_mobile');
    }
    prevScrollpos = currentScrollpos;
  };
}
