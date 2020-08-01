// Utilize estruturas de repetição via JavaScript para gerar os <option>

const state = document.querySelector('#estado');
const states = ['Selecione seu estado', 'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
let value = 1;

function createListStates() {
    for (let index = 0; index < states.length; index += 1) {
    const option = document.createElement('option');
    option.value = value;
    option.innerHTML = states[index];
    state.appendChild(option);
    value += 1;
  }
}
createListStates();

// Chame uma função JavaScript e interrompa o fluxo automático do form utilizando o preventDefault(); 
// - Execute as validações que foram pedidas ao longo da montagem do formulário.
// - Monte uma <div> com o consolidado dos dados que foram inseridos no formulário.
document.getElementById("enviar").addEventListener("click", function(event){
  event.preventDefault()
});

// Crie um botão Limpar que limpa todos os campos do formulário e a <div> com seu currículo também
