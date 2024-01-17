'use strict';

function at() {
  const linkGithub = inputGithub.value;
  if (linkGithub.includes('@')) {
    previewGithub.href = 'https://github.com/' + linkGithub.replace(/@/, '');
  } else {
    previewGithub.href = 'https://github.com/' + linkGithub;
  }
}

function linkedinFunction() {
  const linkedinVal = inputLinkedin.value;
  if (linkedinVal.includes('https://www.')) {
    previewLinkedin.href = linkedinVal.replace('https://www.', '');
  } else if (linkedinVal.includes('linkedin.com/in/')) {
    previewLinkedin.href = 'https://www.' + linkedinVal;
  } else if (linkedinVal.includes('https://www.linkedin.com/in/')) {
    previewLinkedin.href = linkedinVal;
  } else {
    previewLinkedin.href = linkedinVal;
  }
}
// function linkedinFuction() {
//   const linkedinVal = inputLinkedin.value;
//   if (linkedinVal.includes('https://www.')) {
//     previewLinkedin.href = linkedinVal.replace(
//       'https://www.','');
//   } else if (linkedinVal.includes('linkedin.com/in/')) {
//     previewLinkedin.href = 'https://www.' + linkedinVal;
//   } else if (linkedinVal.includes('https://www.linkedin.com/in/')) {
//     previewLinkedin.href =  linkedinVal;
//   } else {
//     previewLinkedin.href =  linkedinVal;
//   }
// }

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
    const valueLinkedin = event.target.value;
    if (valueLinkedin.includes('https://www.linkedin.com/in/')) {
      data.linkedin = valueLinkedin.replace('https://www.linkedin.com/in/', '');
    } else {
      data.linkedin = inputLinkedin.value;
    }
    console.log(valueLinkedin);
    console.log(inputLinkedin.value);

    linkedinFunction();
  } else if (inputId === 'github') {
    const valueGitHub = event.target.value;
    if(valueGitHub.includes('@')){
      data.github = valueGitHub.replace(/@/, '');
    } else {
      data.github = inputGithub.value;
    }
    at();
  } else if (inputId === 'photo') {
    data.photo;
  }
console.log(data);
}
console.log(data.linkedin);
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

const shareHidden = () => {
  createLink.style.display = 'flex';
  btnOrange.classList.add('btnGrey');
};

btnOrange.addEventListener('click', createCard);

function createCard(event) {
  event.preventDefault();
  console.log(data);
  fetch('https://dev.adalab.es/api/card/', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-type': 'application/json' },
  })
    .then((response) => response.json())
    .then((result) => {
      shareHidden();
      showURL(result);
    })
    .catch((error) => console.log(error));
}

function showURL(result) {
  if (result.success) {
    linkCard.href = result.cardURL;
    linkCard.innerHTML = result.cardURL;
    btnOrange.disabled = true;
    shareError.innerHTML = 'La tarjeta ha sido creada: ';
    
  }else{
    shareError.innerHTML = 'Error: revisa los datos introducidos y haz click de nuevo en Crear Tarjeta';
    btnOrange.disabled = false;
    btnOrange.classList.remove('btnGrey');
  }
}
