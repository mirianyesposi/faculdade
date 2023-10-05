const formulario = document.getElementById('meuFormulario');
const barraDeProgresso = document.getElementById('progresso');
const batata = document.getElementById('batata');

formulario.addEventListener('input', () => {
  const perguntas = formulario.querySelectorAll('input').length;
  const respostas = formulario.querySelectorAll('input:valid').length;

  const progresso = (respostas / perguntas) * 100;
  barraDeProgresso.style.width = `${progresso}%`;
});

if (progresso=0) {
    batata=null;
}

document.addEventListener('DOMContentLoaded', function() {
  var formulario = document.getElementById('meuFormulario');
  var resultado = document.getElementById('resultado');

  formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário padrão

    // Aqui você pode processar os dados do formulário, se desejar

    // Exibe o "xablau" após o envio do formulário
    resultado.style.display = 'block';
  });
});