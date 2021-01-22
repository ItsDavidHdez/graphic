const x = 300;
const y = 300;
const rotation = 10;

// LLamando al ID de la figura del HTML
const figure = document.getElementById("figure");

figure.style.left = `${x}px`;
figure.style.top = `${y}px`;

// Evento de translación
const eventTranslation = () => {
  figure.style.animationName = "highTranslation";
  figure.style.animationDuration = "2.5s";
  figure.style.animationIterationCount = "infinite";
  figure.style.backgroundSize = "210px";
};

// Evento de rotación
const eventRotation = () => {
  figure.style.animationName = "rotation2";
  figure.style.animationDuration = "3s";
  figure.style.animationIterationCount = "infinite";
  figure.style.transform = `rotate(${rotation}deg)`;
  figure.style.backgroundSize = "210px";
};

// Evento de escalación
const eventEscalation = () => {
  figure.style.animationName = "escalation";
  figure.style.animationDuration = "3s";
  figure.style.animationIterationCount = "infinite";
  figure.style.backgroundSize = "400px";
};
