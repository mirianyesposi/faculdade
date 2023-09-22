const formulario = document.getElementById('meuFormulario');
const barraDeProgresso = document.getElementById('progresso');

formulario.addEventListener('input', () => {
  const perguntas = formulario.querySelectorAll('input[type="text"]').length;
  const respostas = formulario.querySelectorAll('input[type="text"]:valid').length;

  const progresso = (respostas / perguntas) * 100;
  barraDeProgresso.style.width = `${progresso}%`;
});
