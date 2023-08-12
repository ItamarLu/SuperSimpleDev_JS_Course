const jsButton = document.querySelector('.js-button');
// Check if a element has a class
console.log(jsButton.classList.contains('js-button'));


function isToggled(elm) {
  const button = document.querySelector(elm);

  (toggleCheck(button)) ? (button.classList.remove('is-toggled')) : (button.classList.add('is-toggled'));
}

const gamingBtn = document.querySelector('.js-gaming2-button');
const musicBtn = document.querySelector('.js-music2-button');
const techBtn = document.querySelector('.js-tech2-button');

function isToggled2(elm) {
  const button = document.querySelector(elm);

  (toggleCheck(button)) ? (button.classList.remove('is-toggled')) : (button.classList.add('is-toggled'));

  onlyOneOn(button)
}

function toggleCheck(btn) {
  const toggleCheck = btn.classList.contains('is-toggled');
  return toggleCheck;
}

function onlyOneOn(button) {
  if (button === gamingBtn) {
    musicBtn.classList.remove('is-toggled');
    techBtn.classList.remove('is-toggled');
    return;
  }
  else if (button === musicBtn) {
    gamingBtn.classList.remove('is-toggled');
    techBtn.classList.remove('is-toggled');
    return;
  }
  else if (button === techBtn) {
    gamingBtn.classList.remove('is-toggled');
    musicBtn.classList.remove('is-toggled');
    return;
  }
}