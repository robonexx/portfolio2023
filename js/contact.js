const mailBtn = document.querySelector('.mail_btn');
const submitBtn = document.querySelector('.submit_btn');
const inner = document.querySelector('.inner');
const wrapper = document.querySelector('.wrapper');
const formWrapper = document.querySelector('.contact_form_wrapper');
const form = document.querySelector('form');
const contactInfo = document.querySelector('.contact_info_container');
const formContainer = document.querySelector('.form_container');

const contactBg = document.querySelector('.contact_bg');

let checkTheme = localStorage.getItem('theme');
if (checkTheme === 'light') {
} else {
  contactBg.style.mixBlendMode = 'hard-light';
}

mailBtn.addEventListener('click', () => {
  formWrapper.classList.toggle('active');
  wrapper.classList.toggle('active');
  contactInfo.classList.toggle('active');
  formContainer.classList.toggle('active');
  mailBtn.classList.toggle('active');
  inner.classList.toggle('active');
  animate();
});

// anime js :D

const animate = () => {
  const tl = anime.timeline();
  if (mailBtn.className.includes('active')) {
    mailBtn.setAttribute('disabled', true);
    tl.add({
      targets: mailBtn,
      translateY: [0, -12, 0],
      scale: [1, 0.85, 1],
      rotate: 316,
      duration: 600,
      easing: 'easeInOutSine',
    })
      .add(
        {
          targets: '.icons .first',
          translateX: [0, '50vw'],
          scaleY: [0, 1],
          duration: 600,
          opacity: [
            {
              value: 1,
              duration: 0.3,
            },
          ],
          delay: anime.stagger(100),
          complete: function () {
            mailBtn.setAttribute('disabled', false);
          },
        }
        /* If you could add more icons and stagger also delay animations etc */
        /* '-=400' */
      )
      .add({
        targets: '.icons .first',
        delay: 600,
        zIndex: -1,
      });
  } else {
    mailBtn.setAttribute('disabled', false);
    tl.add({
      targets: mailBtn,
      rotate: 0,
      duration: 400,
      easing: 'easeInOutSine',
    }).add({
      targets: '.icons .icon',
      translateY: 0,
      opacity: {
        value: 0,
        duration: 0,
      },
      duration: 300,
      delay: 0,
      easing: 'easeInOutSine',
      complete: function () {
        mailBtn.setAttribute('disabled', false);
      },
    });
  }
};

/* Minor error handling, could be done much better */
let msg = document.querySelector('.form_answer');

function validateForm() {
  let x = document.forms['form']['name'].value;
  let y = document.forms['form']['email'].value;
  let z = document.forms['form']['message'].value;

  if (x == '') {
    msg.textContent = 'Name must be filled out';
    msg.style.color = 'tomato';
    msg.classList.add('show');
    setTimeout(() => {
      msg.textContent = '';
      msg.style.color = '#fff';
      msg.classList.remove('show');
    }, 5000);
    return false;
  }
  if (y == '') {
    msg.textContent = 'Email must be filled out';
    msg.classList.add('show');
    msg.style.color = 'tomato';
    setTimeout(() => {
      msg.textContent = '';
      msg.style.color = '#fff';
      msg.classList.remove('show');
    }, 5000);
    return false;
  }
  if (z == '') {
    msg.textContent = 'Message must be filled out';
    msg.classList.add('show');
    msg.style.color = 'tomato';
    setTimeout(() => {
      msg.textContent = '';
      msg.style.color = '#fff';
      msg.classList.remove('show');
    }, 5000);
    return false;
  }
  if (!x == '' && !y == '' && !z == '') {
    msg.textContent = "Thank you! We'll get back to you";
    msg.classList.add('show');
    msg.style.color = '#fff';
    setTimeout(() => {
      msg.textContent = '';
      msg.classList.remove('show');
    }, 5000);
    return true;
  }
}

submitBtn.addEventListener('click', (e) => {
  /* e.preventDefault(); */
  validateForm();
  setTimeout(() => {
    document.forms['form']['name'].value = '';
    document.forms['form']['email'].value = '';
    document.forms['form']['message'].value = '';
    form.reset();
  }, 10000);
  /* setTimeout(() => {
    formWrapper.classList.remove('active');
    wrapper.classList.remove('active');
    contactInfo.classList.remove('active');
    formContainer.classList.remove('active');
    mailBtn.classList.remove('active');
    mailBtn.style.transform = 'translateY(0), rotate(0deg)';
    inner.classList.remove('active');
    mailBtn.setAttribute('disabled', false);
  }, 4000); */
});

/* check local storage for name */
let greetName = JSON.parse(localStorage.getItem('userName'));
let n = '';
if (!greetName || greetName === undefined || greetName === '') {
  n = 'Friend';
} else {
  n = greetName;
}

/* contact page text typewriter effect */

export const randomGreets = [
  {
    text: `Hi there again ${n}, looking forward to see what you have in mind, click the email icon on the left to fill in the form, connect thru linkedin or check my pages on github, codepen`,
  },
  {
    text: `Hello there ${n}, clickedi clackedi on the email icon and you get some contact options, maybe you wanna check my projects on github or codepen too`,
  },
  {
    text: `Hi ${n}, I'd love to hear from you, just click the email icon and choose you prefered way to contact me, linkedin is fine too :D`,
  },
  {
    text: `Hey ${n}! Want to get in touch? just click the icon on the left and either fill in the form or connect thru linkedin, and if you want check my pages on github and codepen`,
  },
  {
    text: `Hi there ${n}, got an idea you want to bring to life? feel free to contact me, just click on the icon and fill in the form or connect thru linkedin`,
  },
  {
    text: `Hello my ${n}, I bet you wanna bring those ideas of yours to life asap, looking forward to heard whats on your mind`,
  },
];

let greet = document.querySelector('.greet');

const randomGreet = (array) => {
  let theGreet;
  let randomG;
  if (
    Array.isArray(array) &&
    array !== null &&
    array !== undefined &&
    array.length !== 0
  ) {
    randomG = array[Math.floor(Math.random() * array.length)];
    theGreet = randomG.text;
  } else {
    console.log('No array of words is found, need one to function');
  }
  return theGreet;
};

let dailyGreet;

function getGreet() {
  dailyGreet = randomGreet(randomGreets);
}
var i = 0;
var text;
var speed = 50;

function typeWriter() {
  text = dailyGreet;
  if (i < text.length) {
    greet.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

greet.textContent = '';
getGreet();
typeWriter();
