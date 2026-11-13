const ESTILO_CLARO = 'estilo-claro.css';
const ESTILO_OSCURO = 'estilo-oscuro.css';

function cambiarModo() {
  const stylesheet = document.getElementById('stylesheet');
  if (!stylesheet) return;

  const modoActual = stylesheet.getAttribute('href');
  stylesheet.setAttribute('href', modoActual === ESTILO_CLARO ? ESTILO_OSCURO : ESTILO_CLARO);
}

document.getElementById('cambiar-modo')?.addEventListener('click', cambiarModo);
