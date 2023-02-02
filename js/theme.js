var checkbox = document.querySelector('input[name=theme]');

let mode = 'light';

mode = localStorage.getItem('theme');

document.documentElement.setAttribute('data-theme', mode);

if (mode == 'dark') {
  checkbox.setAttribute('checked', true);
} else {
  checkbox.removeAttribute('checked');
}

checkbox.addEventListener('change', function () {
  if (this.checked) {
    trans();
    mode = 'dark';
    document.documentElement.setAttribute('data-theme', mode);
    localStorage.setItem('theme', mode);
    checkbox.setAttribute('checked', true);
  } else {
    trans();
    mode = 'light';
    document.documentElement.setAttribute('data-theme', mode);
    localStorage.setItem('theme', mode);
    checkbox.removeAttribute('checked');
  }
  console.log(mode);
});

let trans = () => {
  document.documentElement.classList.add('transition');
  window.setTimeout(() => {
    document.documentElement.classList.remove('transition');
  }, 500);
};

console.log(mode, checkbox.attributes);
