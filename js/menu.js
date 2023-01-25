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

document.querySelector('header');

let head = document.querySelector('header > a > h3');

if (window.innerWidth > 768) {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollpos = window.pageYOffset;
    if (prevScrollpos > currentScrollpos) {
      let nav = document.querySelector('nav');
      nav.style.top = '60px';
      document.querySelector('header').classList.remove('border');
      head.style.color = '#181818';
    } else {
      let nav = document.querySelector('nav');
      nav.style.top = '0px';
      document.querySelector('header').classList.add('border');
      head.style.color = '#fafafa';
    }

    prevScrollpos = currentScrollpos;
  };
}
