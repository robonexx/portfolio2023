let intro = document.querySelector('.intro');
let btn = document.querySelector('#enter_btn');

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
  setTimeout(() => {
    window.location.href = `${window.location.href.replace(
      'pages/intro.html',
      'index.html'
    )}`;
  }, 1000);

  console.log(' href => ' + window.location.href);
  console.log(' host => ' + window.location.host);
  console.log(' hostname => ' + window.location.hostname);
  console.log(' port => ' + window.location.port);
  console.log(' protocol => ' + window.location.protocol);
  console.log(' pathname => ' + window.location.pathname);
  console.log(' hashpathname => ' + window.location.hash);
  console.log(' search=> ' + window.location.search);
});
