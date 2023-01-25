console.log('js connected');

let intro = document.querySelector('.intro');
let btn = document.querySelector('#enter_btn');
let nav = document.querySelector('nav');

// Hämta värde från localStorage om man besökt sidan tidigare
// För att antingen visa intro sidan eller ta bort
let hasVisitedBefore = JSON.parse(localStorage.getItem('hasVisitedBefore'));

console.log('visited', hasVisitedBefore);

if (!hasVisitedBefore) {
  intro.style.visibility = 'visible';
} else {
  intro.style.visibility = 'hidden';
}

const timeline = anime.timeline({
  targets: '.intro',
  duration: 2500,
  easing: 'easeOutSine',
});
timeline
  .add({
    scale: 1,
    duration: 300,
  })
  .add({
    targets: '.loader',
    opacity: [0, 1],
    width: ['0', '20vw'],
    duration: 600,
    delay: 100,
    innerHTML: [0, 100 + '%'],
    round: 10,
  })
  .add({
    targets: '.intro_head',
    translateY: ['-100vh', '0'],
    delay: 100,
    duration: 500,
  })
  .add({
    targets: '.intro_subhead',
    translateY: ['-100vh', '0'],
    delay: 100,
    duration: 500,
  })
  .add({
    targets: btn,
    duration: 600,
    translateY: ['25vh', '0'],
    opacity: [0, 1],
  });

btn.addEventListener('click', () => {
  console.log('clicked');
  let timeline = anime.timeline({
    targets: '.intro',
    duration: 500,
    easing: 'easeOutSine',
  });
  timeline.add({
    translateY: '-100vh',
    duration: 500,
    complete: function () {
      intro.remove();
    },
  });
  localStorage.setItem('hasVisitedBefore', true);
  const navline = anime.timeline({
    targets: nav,
    duration: 600,
    easing: 'easeOutSine',
  });
  navline
    .add({
      targets: nav,
      opacity: [0, 1],
      delay: 0,
    })
    .add({
      targets: '.nav ul li',
      translateY: ['-30vh', '0'],
      delay: anime.stagger(200),
      opacity: [0, 1],
    })
    .add({
      targets: '.hamburger',
      duration: 300,
      opacity: [0, 1],
    });

  setTimeout(() => {}, 1000);
});

let hi = document.querySelector('.hi');

function getDown() {
  hi.removeEventListener('mouseenter', getDown);
  hi.textContent = 'What up?!';
  setTimeout(() => {
    hi.textContent = 'Hola!';
  }, 1000);
  setTimeout(() => {
    hi.textContent = 'Tja!';
  }, 2000);
  setTimeout(() => {
    hi.textContent = 'Terve!';
  }, 3000);
  setTimeout(() => {
    hi.textContent = 'Hi there,';
    hi.addEventListener('mouseenter', getDown);
  }, 4000);
}

hi.addEventListener('mouseenter', getDown);

/* 
  console.log(' href => ' + window.location.href);
  console.log(' host => ' + window.location.host);
  console.log(' hostname => ' + window.location.hostname);
  console.log(' port => ' + window.location.port);
  console.log(' protocol => ' + window.location.protocol);
  console.log(' pathname => ' + window.location.pathname);
  console.log(' hashpathname => ' + window.location.hash);
  console.log(' search=> ' + window.location.search); */
