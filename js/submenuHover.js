/* menu was in dynamic nav first but using it here instead */

let links = [...document.querySelectorAll('.nav_item')];
let submenuLinks = [...document.querySelectorAll('.submenu_item')];
links.forEach((l) => {
  l.addEventListener('mouseenter', (e) => {
    /* console.log(e.target.childNodes[1].className); */
    if (!e.target.childNodes[1].className === 'submenu') {
    } else {
      document.querySelector('.submenu').classList.add('active');
    }
  });

  l.addEventListener('mouseleave', (e) => {
    if (!e.target.childNodes[1].className === 'submenu') {
      /* !e.target.childNodes[1].className === 'submenu' */
    } else {
      document.querySelector('.submenu').classList.remove('active');
    }
  });
});
