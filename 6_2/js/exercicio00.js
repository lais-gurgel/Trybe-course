window.onload = function () {
  var picker = new Pikaday({
    field: document.getElementById('datepicker'),
    format: 'DD/MM/YYYY',
    toString(date, format = 'DD/MM/YYYY') {
        // you should do formatting based on the passed format,
        // but we will just return 'D/M/YYYY' for simplicity
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    },
    parse(dateString, format = 'DD/MM/YYYY') {
        // dateString is the result of `toString` method
        const parts = dateString.split('/');
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1;
        const year = parseInt(parts[2], 10);
        return new Date(day, month, year);
    }
  });

  new window.JustValidate('.curriculum-form', {
    rules: {
      name: {
        required: true,
      },
      email: {
        required: true,
        email: true
      },
      cpf: {
        required: true,
      },
      address: {
        required: true,
      },
      city: {
        required: true,
      },
      state: {
        required: true,
      },
      radio: {
        required: true,
      },
      resume: {
        required: true,
      },
      role: {
        required: true,
      },
      roleDescription: {
        required: true,
      },
      datepicker: {
        required: true,
      },
      
    },
    messages: {
      email: {
        required: 'O campo é obrigatório',
        email: 'O email digitado não é válido'
      },
      name: {
        required: 'O campo é obrigatório',
      },
      cpf: {
        required: 'O campo é obrigatório',
      },
      address: {
        required: 'O campo é obrigatório',
      },
      city: {
        required: 'O campo é obrigatório',
      },
      state: {
        required: 'O campo é obrigatório',
      },
      radio: {
        required: 'O campo é obrigatório',
      },
      resume: {
        required: 'O campo é obrigatório',
      },
      role: {
        required: 'O campo é obrigatório',
      },
      roleDescription: {
        required: 'O campo é obrigatório',
      },
      datepicker: {
        required: 'O campo é obrigatório',
      },
    },

    submitHandler: function (form, values) {
      console.log(form, values);
    },
  });  
}

const elementsID = ['name', 'email', 'cpf', 'address', 'city', 'state', 'complement', 'resume', 'role', 'roleDescription', 'datepicker']
function createAttributes () {
  for (let i = 0; i < elementsID.length; i += 1) {
  let element = document.getElementById(elementsID[i])
    element.setAttribute('name', elementsID[i]);
    element.setAttribute('data-validate-field', elementsID[i]);
  }
}
createAttributes();

// Utilize estruturas de repetição via JavaScript para gerar os <option>
const state = document.querySelector('#state');
const states = ['', 'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
let value = '';

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

// Crie um botão Limpar que limpa todos os campos do formulário e a <div> com seu currículo também

// const informations = ['nome', 'email', 'cpf', 'endereço', 'cidade', 'curriculo', 'cargo', 'descricaoCargo', 'data'];
// const clearButton = document.getElementById('limpar');

// function clearInformations () {
//   
//}
//clearButton.addEventListener('click', clearButton)
