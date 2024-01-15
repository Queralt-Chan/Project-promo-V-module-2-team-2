'use strict';

function at() {
  const linkGithub = inputGithub.value;
  if (linkGithub.includes('@')) {
    previewGithub.href = 'https://github.com/' + linkGithub.replace(/@/, '');
  } else {
    previewGithub.href = 'https://github.com/' + linkGithub;
  }
}

function linkedinFuction() {
  const linkedinVal = inputLinkedin.value;
  if (linkedinVal.includes('https:///www.')) {
    previewLinkedin.href = linkedinVal.replace(
      'https://www.','');
  } else if (linkedinVal.includes('https://www.linkedin.com/in/')) {
    previewLinkedin.href =  linkedinVal;
  } else if (linkedinVal.includes('linkedin.com/in/')) {
    previewLinkedin.href = 'https://www.' + linkedinVal;
  } else {
    previewLinkedin.href = 'https://www.linkedin.com/in/' + linkedinVal;
  }
}

function handleForm(event) {
  const inputId = event.target.id;
  if (inputId === 'name') {
    data.name = event.target.value;
    previewName.innerHTML = inputName.value;
    console.log(data.name);
  } else if (inputId === 'job') {
    data.job = event.target.value;
    previewJob.innerHTML = inputJob.value;
  } else if (inputId === 'phone') {
    data.phone = event.target.value;
    previewMobile.href = 'tel:' + inputMobile.value;
  } else if (inputId === 'email') {
    data.email = event.target.value;
    previewMail.href = 'mailto:' + inputMail.value;
  } else if (inputId === 'linkedin') {
    data.linkedin = event.target.value;
    linkedinFuction();
    console.log(linkedinFuction);
  } else if (inputId === 'github') {
    data.github = event.target.value;
    at();
  } else if (inputId === 'photo') {
    data.photo = event.target.value;
  }
}

function handleDesign(event) {
  const inputPalette = event.target.value;
  previewCard.classList.remove('palette1', 'palette2', 'palette3');
  if (palette1.checked === true) {
    previewCard.classList.add('palette1');
  } else if (palette2.checked === true) {
    previewCard.classList.add('palette2');
  } else {
    previewCard.classList.add('palette3');
  }
  data.palette = inputPalette;
}

//campos de los links ( ayuda linkedin, mail y phone)

formContainer.addEventListener('input', handleForm);
formDesign.addEventListener('input', handleDesign);

//EVENTO DEL BOTÓN CREAR TARJETA

const shareHidden = (event) => {
  event.preventDefault();
  createLink.style.display = 'flex';
  btnOrange.classList.add('btnGrey');
};

btnOrange.addEventListener('click', shareHidden);
