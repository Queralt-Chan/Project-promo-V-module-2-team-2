'use strict';

//Variables previewCard
const previewName = document.querySelector('.js-cardName');
const previewJob = document.querySelector('.js-cardJob');
const previewMobile = document.querySelector('.js-mobileLink');
const previewMail = document.querySelector('.js-mailLink');
const previewLinkedin = document.querySelector('.js-linkedinLink');
const previewGithub = document.querySelector('.js-githubLink');
const formContainer = document.querySelector('.js-formContainer');
const previewCard= document.querySelector('.js-card');


//Variables Design
const palette1= document.querySelector('.js_palette1');
const palette2= document.querySelector('.js_palette2');
const palette3= document.querySelector('.js_palette3');
const formDesign= document.querySelector('.formDesign');

//Variables Fill
const inputName = document.querySelector('.js_inputName');
const inputJob = document.querySelector('.js_inputJob');
const inputMobile = document.querySelector('.js_inputPhone');
const inputMail = document.querySelector('.js_inputEmail');
const inputLinkedin = document.querySelector('.js_inputLinkedin');
const inputGithub = document.querySelector('.js_inputGithub');
const form= document.querySelector('.formStyle');
const data= {
    palette: 1,
    name: '',
    job: '',
    phone: '',
    email: '',
    linkedin: '',
    github: '',
    photo: '',
}


function handleForm(event) {
  console.log(event.currentTarget);
  console.log(event.target);
  const inputId= event.target.id;
  if (inputId === 'name') {
    data.name= event.target.value;
    previewName.innerHTML = inputName.value;
    console.log(data.name);
  } else if (inputId === 'job') {
    data.job= event.target.value;
    previewJob.innerHTML = inputJob.value;
  } else if (inputId === 'phone') {
    data.phone= event.target.value;
    previewMobile.href = 'tel:' + inputMobile.value;
  } else if (inputId === 'email') {
    data.email= event.target.value;
    previewMail.href = 'mailto:' + inputMail.value;
  } else if (inputId === 'linkedin') {
    data.linkedin= event.target.value;
    previewLinkedin.href = inputLinkedin.value;
  } else if (inputId === 'github') {
    data.github= event.target.value;
    previewGithub.href = 'https://github.com/' + inputGithub.value;
  }
};

function handleDesign(event) {
    previewCard.classList.remove('palette1', 'palette2', 'palette3');
    if (palette1.checked===true) {
        previewCard.classList.add('palette1');
    } else if (palette2.checked===true) {
        previewCard.classList.add('palette2');
    } else  {
        previewCard.classList.add('palette3');
    }
};



//campos de los links (@ github, ayuda linkedin, mail y phone)

formContainer.addEventListener('input', handleForm);

formDesign.addEventListener('input', handleDesign);