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

const eyeOpen =
  'M205.507 162.156C202.676 164.071 199.267 164.891 195.941 165.676C192.492 166.489 189.044 167.303 185.596 168.116C183.971 168.499 182.215 168.874 180.677 168.223C175.74 166.133 170.802 164.043 165.865 161.953C164.272 161.279 161.786 161.019 161.415 162.709C161.234 163.534 159.804 163.245 159.597 162.425C159.39 161.606 159.927 160.802 160.436 160.126C163.644 155.866 167.451 151.249 172.752 150.665C178.532 150.028 184.313 149.391 190.093 148.754C191.227 148.63 192.416 148.512 193.471 148.945C194.37 149.315 195.066 150.045 195.727 150.759C199.129 154.433 202.393 158.236 205.507 162.156ZM183.723 152.462C185.715 153.063 187.272 154.906 187.531 156.97C187.79 159.033 186.736 161.204 184.955 162.278C185.343 162.518 185.841 162.433 186.287 162.341C190.878 161.39 195.468 160.439 200.059 159.488C198.157 157.326 196.255 155.163 194.353 153C193.869 152.448 193.363 151.882 192.696 151.576C192.096 151.3 191.416 151.261 190.756 151.258C188.365 151.247 185.974 151.657 183.723 152.462ZM174.551 153.425C171.872 152.842 168.901 153.936 167.241 156.118C166.809 156.686 166.613 157.739 167.305 157.916C169.179 158.395 170.969 159.197 172.572 160.278C173.015 160.116 172.874 159.467 172.714 159.023C171.994 157.033 172.792 154.601 174.551 153.425ZM193.008 164.608C193.38 164.522 193.858 164.18 193.624 163.878C189.54 164.545 185.47 165.305 181.42 166.156C181.143 166.639 182.007 166.93 182.554 166.824C186.052 166.149 189.537 165.41 193.008 164.608Z';

const eyeClosed =
  'M205.507 162.156C201.5 159.5 199.5 159.5 197.5 159C195.5 158.5 190.5 158.5 190.5 158.5C188.654 158.5 184 159 180.5 158.5C174.5 158.5 167.635 158.5 166.5 158.5C164.907 157.826 161.786 161.019 161.415 162.709C161.234 163.534 159.804 163.245 159.597 162.425C159.39 161.606 159.927 160.802 160.436 160.126C163.644 155.866 166.199 155.084 171.5 154.5C177.281 153.863 182.874 155.137 188.654 154.5C189.788 154.375 190.945 154.067 192 154.5C192.9 154.87 196.839 153.786 197.5 154.5C201.793 157.5 202.393 158.236 205.507 162.156ZM182.554 155.932C185 155.932 185.75 155.236 188.654 156.118C190.248 156.118 194.281 155.426 192.5 156.5C192.888 156.74 193.024 156.593 193.471 156.5C198.061 155.549 199 157 199.5 156.5C197 155.932 196.5 156.118 195.727 155.932C194.5 155.932 194.138 156.424 193.471 156.118C192.87 155.842 192.661 156.121 192 156.118C189.61 156.107 184.805 155.126 182.554 155.932ZM173.5 156.118C170.5 156.118 171 156.5 167.5 156.5C166.985 156.426 166.5 156.5 167.5 156.5C171 157 171 155.932 173.5 156.5C173.943 156.338 182.16 156.375 182 155.932C178.5 155.932 177.5 155.932 173.5 156.118ZM193.471 157.5C193.471 157.5 194.734 157.302 194.5 157C194.5 157 183.453 156.149 179.403 157C179.126 157.484 184 157 184 157C184 157 188 156.667 193.471 157.5Z';

const timeline2 = anime.timeline({
  targets: '.loader',
  duration: 1200,
  easing: 'easeOutSine',
});

timeline2.add({
  targets: '.loader',
  opacity: [0, 1],
  width: ['0', '40vw'],
  duration: 2000,
  delay: 0,
  innerHTML: [0, 100 + '%'],
  round: 10,
});

const timeline = anime.timeline({
  targets: '.intro',
  duration: 1500,
  easing: 'easeOutSine',
});
timeline
  .add({
    targets: '.intro_head',
    translateY: ['-100vh', '0'],
    delay: 200,
    duration: 400,
  })
  .add({
    targets: '.rob .lines path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 600,
    stroke: '#888',
    delay: function (el, i) {
      return i * 100;
    },
    direction: 'forwards',
    loop: false,
  })
  .add({
    targets: '.eye',
    opacity: [0, 1],
    delay: 0,
    duration: 300,
  })

  .add({
    targets: '.eye',
    d: [eyeOpen, eyeClosed, eyeOpen],
    easing: 'easeInOutSine',
    duration: 300,
  })
  .add({
    targets: btn,
    duration: 300,
    translateY: ['25vh', '0'],
    opacity: [0, 1],
  });

btn.addEventListener('click', () => {
  console.log('clicked');
  document.querySelector('.rob').style.position = 'absolute';
  let timeline = anime.timeline({
    targets: '.intro',
    duration: 500,
    easing: 'easeOutSine',
  });
  timeline
    .add({
      targets: '.rob',
      delay: 0,
      easing: 'easeInOutSine',
      duration: 400,
      left: '1rem',
      top: '1rem',
      width: 46,
      height: 46,
      direction: 'forwards',
    })
    .add({
      translateY: '-100vh',
      duration: 300,
      complete: function () {
        intro.remove();
      },
    });
  localStorage.setItem('hasVisitedBefore', true);
  const navline = anime.timeline({
    targets: nav,
    duration: 300,
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
