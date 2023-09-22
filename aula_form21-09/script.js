const formulario = document.getElementById('meuFormulario');
const barraDeProgresso = document.getElementById('progresso');
const batata = document.getElementById('batata');

formulario.addEventListener('input', () => {
  const perguntas = formulario.querySelectorAll('input').length;
  const respostas = formulario.querySelectorAll('input[type="text"]:valid').length;

  const progresso = (respostas / perguntas) * 100;
  barraDeProgresso.style.width = `${progresso}%`;
});

if (progresso=0) {
    batata=null;
}