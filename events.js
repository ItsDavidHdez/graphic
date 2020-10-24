// LLamando al ID de la figura del HTML
let figure = document.getElementById("figure");

// Evento de translación
const eventTranslation = () => {
  if (figure) {
    // Animaciones del evento
    // animationName hace referencia al @keyframe "translation" del archivo style.css
    figure.style.animationName = "translation";
    figure.style.animationDuration = "2.5s";
    figure.style.animationIterationCount = "infinite";
  }
};

// Evento de rotación
const eventRotation = () => {
  if (figure) {
    figure.style.animationName = "rotation";
    figure.style.animationDuration = "3s";
    figure.style.animationIterationCount = "infinite";
  }
};

// Evento de escalación
const eventEscalation = () => {
  if (figure) {
    figure.style.animationName = "escalation";
    figure.style.animationDuration = "3s";
    figure.style.animationIterationCount = "infinite";
  }
};
