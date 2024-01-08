'use strict'

const reset = document.querySelector('.js-cardReset');

function resetData () {
  Object.assign(data, newData);
};

const resetForm = ()=>{
    console.log('click');
  const inputsForm = document.querySelectorAll(".js-input");
  for (let i = 0; i < inputsForm.length; i++){
    inputsForm[i].value = '';
  }
  resetData(data);
  };

reset.addEventListener('click', resetForm);