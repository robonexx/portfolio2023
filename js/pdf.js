const cv = document.querySelector('#cv_rob');
const closeFrameBtn = document.querySelector('.close_frame_btn');
cv.addEventListener('click', () => {
  closeFrameBtn.classList.add('show');
  document.querySelector('.frame').classList.add('show');
});

closeFrameBtn.addEventListener('click', () => {
  document.querySelector('.frame').classList.remove('show');
  closeFrameBtn.classList.remove('show');
});

// download file using blob
/* 
const myData = `
robertwagar.gmail.com, robertwagar.se, pdf
`;

const blob = new Blob([data], { type: 'octet-stream' });

const href = URL.createObjectURL(blob);

const a = Object.assign(document.createElement('a'), {
  href,
  style: 'display:none',
  download: myData.csv,
});

a.textContent = 'CV';

const cv = document.querySelector('#cv_rob');
cv.appendChild(a);
a.click();
URL.revokeObjectURL(href);
a.remove();
 */
