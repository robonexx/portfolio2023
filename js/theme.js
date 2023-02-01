var checkbox = document.querySelector('input[name=theme]');

let mode = '';

mode = localStorage.getItem('theme');

document.documentElement.setAttribute('data-theme', mode);

if (mode === 'dark') {
  checkbox.setAttribute('checked', true);
} else {
  checkbox.setAttribute('checked', false);
}

checkbox.addEventListener('change', function () {
  if (this.checked) {
    trans();
    mode = 'dark';
    document.documentElement.setAttribute('data-theme', mode);
    localStorage.setItem('theme', mode);
  } else {
    trans();
    mode = 'light';
    document.documentElement.setAttribute('data-theme', mode);
    localStorage.setItem('theme', mode);
    checkbox.setAttribute('checked', false);
  }
  console.log(mode);
});

let trans = () => {
  document.documentElement.classList.add('transition');
  window.setTimeout(() => {
    document.documentElement.classList.remove('transition');
  }, 500);
};

console.log(mode);
