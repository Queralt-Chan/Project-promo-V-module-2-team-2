'use strict'

const reset = document.querySelector('.js-cardReset');

//al poner querySelectorAll selecciona todos los elementos que contienen esa clasa y los alamacena en la variable inputsForm creando una NodeList (similar a un array).

//Una NodeList es una colección de nodos que resulta de operaciones de selección y se utiliza para acceder y manipular conjuntos de elementos en un HTML. Es similar a un array aunque no tiene todos sus métodos.

//El valor forEach itera sobre cada elemento del NodeList (sobre cada input.value en este caso)

const resetForm = ()=>{
    console.log('click')
  const inputsForm = document.querySelectorAll(".js-input");
  //inputsForm.value = '';  --> No funciona porque coge sólo el valor del primer elemento y al poner el querySelectorAll s eha creado una NodeList, por lo que no es un elemento individual, son varios
  inputsForm.forEach((input) =>{
    input.value = '';
});
};

reset.addEventListener('click', resetForm);