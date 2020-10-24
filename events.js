let figure = document.getElementById("figure");
let img = document.getElementById("img");
const eventTranslation = () => {
  if (figure) {
    figure.style.animationName = "translation";
    figure.style.animationDuration = "2.5s";
    figure.style.animationIterationCount = "infinite";
  }
};

const eventRotation = () => {
  if (figure) {
    // figure.classList.toggle("rotation");
    figure.style.animationName = "rotation";
    figure.style.animationDuration = "3s";
    figure.style.animationIterationCount = "infinite";
  }
};

const eventEscalation = () => {
  if (figure) {
    figure.style.animationName = "escalation";
    figure.style.animationDuration = "3s";
    figure.style.animationIterationCount = "infinite";
  }
};
