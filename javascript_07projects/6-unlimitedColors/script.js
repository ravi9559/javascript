//generate a random color

const randomColor = function () {
  const hex = "0123456789abcdef";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let interval;

const startChangingColor = function () {
  if (!interval) {
    interval = setInterval(changeBgColor, 1000);
  }
};

function changeBgColor() {
  document.body.style.backgroundColor = randomColor();
}

document.querySelector("#start").addEventListener("click", startChangingColor);

document.querySelector("#stop").addEventListener("click", function () {
  clearInterval(interval);
  interval = null;
});
