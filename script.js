const backgroundBox = document.getElementById('background-box');
const button01 = document.getElementById('button-01');
button01.addEventListener('click', (event) => changeColor(event));

/* Novo código criado depois da aula para checar a cor do botão clicado
e alterar na função changeColor */
const button02 = document.getElementById('button-02');
button02.addEventListener('click', (event) => changeColor(event));

const button03 = document.getElementById('button-03');
button03.addEventListener('click', (event) => changeColor(event));

function changeColor(receivedEvent) {
   console.log(receivedEvent)
   const clickedButtonStyle = window.getComputedStyle(document.getElementById(receivedEvent.target.id));
   backgroundBox.style.backgroundColor = clickedButtonStyle.backgroundColor;
}