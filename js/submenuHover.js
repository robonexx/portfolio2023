/* menu was in dynamic nav first but using it here instead */

let links = [...document.querySelectorAll('.nav_item')];

links.forEach((l) => {
  l.addEventListener('mouseenter', (e) => {
    /* console.log(e.target.childNodes[1].className); */
    if (e.target.lastChild.className == 'submenu') {
      e.target.lastChild.classList.add('active');
    } else {
      /*  document.querySelector('.submenu').classList.add('active'); */
    }
  });

  l.addEventListener('mouseleave', (e) => {
    if (!e.target.lastChild.className === 'submenu') {
      console.log('no submenu');
    } else {
      document.querySelector('.submenu').classList.remove('active');
    }
  });
});
