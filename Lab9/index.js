const calculator = document.querySelector('.container');
const result = document.getElementById('result');

calculator.addEventListener('click', function (event){
if(!event.target.classList.contains('btn')) 
return;



console.log(event.target.innerText);

const value = event.target.innerText;

switch(value){
  case 'c':
    result.innerText = '';
    break;
  case '=':
    result.innerText = eval(result.innerText);
    break;
  default:
    result.innerText += value;
    break;
}


});