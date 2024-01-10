'use strict';

const mainOption = document.querySelectorAll('.js-options');
const fill = document.querySelector('.js-fill');
const design = document.querySelector('.js-design');
const share = document.querySelector('.js-share');
const fieldsetDesign = document.querySelector('.js-fieldsetDesign');
const fieldsetFill = document.querySelector('.js-fieldsetFill');
const fieldsetShare = document.querySelector('.js-fieldsetShare');

const fillOption = () => {
  fieldsetDesign.classList.add('hidden');
  fieldsetFill.classList.remove('hidden');
  fieldsetShare.classList.add('hidden');
};
const shareOption = () => {
  fieldsetDesign.classList.add('hidden');
  fieldsetFill.classList.add('hidden');
  fieldsetShare.classList.remove('hidden');
};
const designOption = () => {
  fieldsetDesign.classList.remove('hidden');
  fieldsetFill.classList.add('hidden');
  fieldsetShare.classList.add('hidden');
};

const handleMain = (event) => {
  const formOption = event.currentTarget;
  console.log(formOption);
  if (formOption === fill) {
    fillOption();
  } else if (formOption === share) {
    shareOption();
  } else {
    designOption();
  }
};

mainOption.forEach((option) => {
  option.addEventListener('click', handleMain);
});
