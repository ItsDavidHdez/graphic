let x = prompt("Coordenada x: (Frame es de 600x600)");
let y = prompt("Coordenada y: (Frame es de 600x600)");

// LLamando al ID de la figura del HTML
let figure = document.getElementById("figure");

figure.style.left = `${x}px`;
figure.style.top = `${y}px`;

// Evento de translación
const eventTranslation = () => {
  const lessTranslation = () => {
    figure.style.animationName = "lessTranslation";
    figure.style.animationDuration = "2.5s";
    figure.style.animationIterationCount = "infinite";
  };

  const highTranslation = () => {
    figure.style.animationName = "highTranslation";
    figure.style.animationDuration = "2.5s";
    figure.style.animationIterationCount = "infinite";
  };

  if (x <= 200 || y <= 200) {
    lessTranslation();
  } else if (x >= 201 || y >= 201) {
    highTranslation();
  }
  // animationName hace referencia al @keyframe "translation" del archivo style.css
};

// Evento de rotación
const eventRotation = () => {
  const rotation = prompt("Ingrese los grados: ");

  const lessRotation = (grades) => {
    figure.style.animationName = "rotation1";
    figure.style.animationDuration = "3s";
    figure.style.animationIterationCount = "infinite";
    figure.style.transform = `rotate(${grades}deg)`;
  };

  const highRotation = (grades) => {
    figure.style.animationName = "rotation2";
    figure.style.animationDuration = "3s";
    figure.style.animationIterationCount = "infinite";
    figure.style.transform = `rotate(${grades}deg)`;
  };

  if (x <= 200 || y <= 200) {
    lessRotation(rotation);
  } else if (x >= 201 || y >= 201) {
    highRotation(rotation);
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
