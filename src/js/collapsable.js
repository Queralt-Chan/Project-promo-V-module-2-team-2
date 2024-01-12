'use strict';

const mainOption = document.querySelectorAll('.js-options');
const fill = document.querySelector('.js-fill');
const design = document.querySelector('.js-design');
const share = document.querySelector('.js-share');
const fieldset = document.querySelectorAll('.js-fieldset');

// const fillOption = () => {
//   fieldsetDesign.classList.add('hidden');
//   fieldsetFill.classList.remove('hidden');
//   fieldsetShare.classList.add('hidden');
// };
// const shareOption = () => {
//   fieldsetDesign.classList.add('hidden');
//   fieldsetFill.classList.add('hidden');
//   fieldsetShare.classList.remove('hidden');
// };
// const designOption = () => {
//   fieldsetDesign.classList.remove('hidden');
//   fieldsetFill.classList.add('hidden');
//   fieldsetShare.classList.add('hidden');
// };

const handleMain = (event) => {
  const formOption = event.currentTarget;
  const parent = formOption.parentNode;
  console.log(parent);
  for (const titleFieldset of fieldset) {
    if (parent === titleFieldset) {
      titleFieldset.classList.remove('hidden');
    } else {
      titleFieldset.classList.add('hidden');
    }
    // console.log(formOption);
    // if (formOption === fill) {
    //   fillOption();
    // } else if (formOption === share) {
    //   shareOption();
    // } else {
    //   designOption();
    // }
  }
};

mainOption.forEach((option) => {
  option.addEventListener('click', handleMain);
});
