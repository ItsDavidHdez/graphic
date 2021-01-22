const x = 300;
const y = 300;
const rotation = 10;

// LLamando al ID de la figura del HTML
const figure = document.getElementById("figure");
const figure2 = document.getElementById("figure2");
const figure3 = document.getElementById("figure3");
const figure4 = document.getElementById("figure4");
const figure5 = document.getElementById("figure5");

figure.style.left = `${x}px`;
figure.style.top = `${y}px`;

// Evento de relleno
const eventFilled = () => {
  figure.style.display = "block";
  figure2.style.display = "block";
  figure3.style.display = "block";
  figure4.style.display = "none";
  figure5.style.display = "none";
  figure.style.backgroundImage = "none";
  figure.style.backgroundColor = "orange";

  setTimeout(() => {
    figure.style.animationName = "filled";
    figure2.style.animationName = "filledTranslationFigure2";
    figure3.style.animationName = "filledTranslationFigure3";
  }, 1000);
};

// Evento de translación
const eventDegraded = () => {
  figure2.style.display = "none";
  figure3.style.display = "none";
  figure.style.display = "none";
  figure5.style.display = "none";

  figure4.style.display = "block";
  figure4.style.animationName = "degraded";
  figure4.style.animationDuration = "5s";
  figure4.style.animationIterationCount = "infinite";
};

// Evento de escalación
const eventTexture = () => {
  figure5.style.display = "block";
  figure.style.display = "none";
  figure2.style.display = "none";
  figure3.style.display = "none";
  figure4.style.display = "none";
  figure.style.animationName = "escalation";
  figure.style.animationDuration = "3s";
  figure.style.animationIterationCount = "infinite";
  figure.style.backgroundSize = "400px";
};
