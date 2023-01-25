let form = document.querySelector('.input_form');
let userName = JSON.parse(localStorage.getItem('userName'));

let answer = document.querySelector('.answer');
let name = '';

console.log('username from ls ' + userName);

if (!userName || userName === undefined || userName === '') {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    name = document.querySelector('.input_name').value;
    showMsg(name);
    console.log('name from submit ' + name);
  });
} else {
  form.remove();
  answer.textContent = `Hi again ${userName}, how can I help you today? :D`;
}

function showMsg(name) {
  if (name === '' || name === null || name === undefined) {
    form.remove();
    answer.textContent = `Hi there Friend, nice to meet you :D`;
  } else {
    form.remove();
    answer.textContent = `Hi there ${name}, nice to meet you :D`;
    localStorage.setItem('userName', JSON.stringify(name));
  }
}
