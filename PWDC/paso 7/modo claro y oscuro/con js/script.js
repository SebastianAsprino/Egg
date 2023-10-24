function cambiarModo() {
  const stylesheet = document.getElementById('stylesheet');
  const modoActual = stylesheet.getAttribute('href');
  
  if (modoActual === 'estilo-claro.css') {
      stylesheet.setAttribute('href', 'estilo-oscuro.css');
  } else {
      stylesheet.setAttribute('href', 'estilo-claro.css');
  }
}
