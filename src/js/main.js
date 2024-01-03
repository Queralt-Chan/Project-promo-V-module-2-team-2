'use strict';

//Variables previewCard
const previewName = document.querySelector('.js-cardName');
const previewJob = document.querySelector('.js-cardJob');
const previewMobile = document.querySelector('.js-mobileLink');
const previewMail = document.querySelector('.js-mailLink');
const previewLinkedin = document.querySelector('.js-linkedinLink');
const previewGithub = document.querySelector('.js-githubLink');
const formContainer = document.querySelector('.js-formContainer');

//Variables Fill
const inputName = document.querySelector('.js_inputName');
const inputJob = document.querySelector('.js_inputJob');
const inputMobile = document.querySelector('.js_inputPhone');
const inputMail = document.querySelector('.js_inputEmail');
const inputLinkedin = document.querySelector('.js_inputLinkedin');
const inputGithub = document.querySelector('.js_inputGithub');

function handleForm(event) {
  console.log(event.currentTarget);
  console.log(event.target);
  if (event.target.id === 'name') {
    previewName.innerHTML = inputName.value;
  } else if (event.target.id === 'job') {
    previewJob.innerHTML = inputJob.value;
  } else if (event.target.id === 'phone') {
    previewMobile.href = inputMobile.value;
  } else if (event.target.id === 'email') {
    previewMail.href = inputMail.value;
  } else if (event.target.id === 'linkedin') {
    previewLinkedin.href = inputLinkedin.value;
  } else if (event.target.id === 'github') {
    previewGithub.href = 'https://github.com/' + inputGithub.value;
  }
};
//campos de los links (@ github, ayuda linkedin, mail y phone)

formContainer.addEventListener('input', handleForm);
