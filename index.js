const buttons = document.querySelectorAll('.btn');
const result = document.getElementById("result");


buttons.forEach((button) => {
  button.addEventListener ('click' , (e) => {
    result.textContent += (e.target.id);
  });
});

// "+=" dans la fonction au dessus permet de concaténer les chiffres dans la calculatrice. ex : 5 remplacé par 4 devient 54 grace à cet opérateur//

equal.addEventListener ('click' , () => {
  result.textContent = eval(result.textContent);
})

clear.addEventListener ('click' , () => {
  result.textContent = "";
})

