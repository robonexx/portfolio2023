const mailBtn = document.querySelector('.mail_btn');
const submitBtn = document.querySelector('.submit_btn');
const inner = document.querySelector('.inner');
const wrapper = document.querySelector('.wrapper');
const formWrapper = document.querySelector('.contact_form_wrapper');
const form = document.querySelector('#form');
const contactInfo = document.querySelector('.contact_info_container');
const formContainer = document.querySelector('.form_container');

mailBtn.addEventListener('click', () => {
  formWrapper.classList.toggle('active');
  wrapper.classList.toggle('active');
  contactInfo.classList.toggle('active');
  formContainer.classList.toggle('active');
  mailBtn.classList.toggle('active');
  inner.classList.toggle('active');
  console.log(mailBtn.hasAttribute('disabled'));
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
    document.forms.reset();
  }
}

submitBtn.addEventListener('click', (e) => {
  /* e.preventDefault(); */
  validateForm();
});
