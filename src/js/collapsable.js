'use strict';


const option = document.querySelectorAll('.options');
const containerShare = document.querySelector('.containerButton');
const containerDesign = document.querySelector('.colours');





function handleClickFieldset (event){
    console.log('click');
    const fieldsetClicked = event.target;
    console.log(fieldsetClicked);
    if(fieldsetClicked.classList.contains('hidden')) {
        containerDesign.classList.toggle('hidden');
        formContainer.classList.toggle('hidden'); 
        formContainer.classList.toggle('hidden'); 
    } else {
        containerDesign.classList.toggle('hidden');
        formContainer.classList.toggle('hidden');
        containerShare.classList.toggle('hidden');
    }
}

option.forEach((oneFieldset) => oneFieldset.addEventListener('click', handleClickFieldset));



