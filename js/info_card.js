const cardContainer = [...document.querySelectorAll('.cards')];

console.log(cardContainer);

cardContainer.forEach((c) => {
  c.addEventListener('click', (e) => {
    const cardInfoBtn = e.target.closest('.card_more_info');
    const cardLessBtn = e.target.closest('.card_less_info');

    if (cardInfoBtn) {
      cardInfoBtn.parentNode.parentNode.classList.add('card_open');
      cardInfoBtn.parentNode.children[0].style.opacity = '0.3';
    }

    if (cardLessBtn) {
      cardLessBtn.parentNode.parentNode.classList.remove('card_open');
      cardLessBtn.parentNode.children[0].style.opacity = '1';
    }
  });
});
