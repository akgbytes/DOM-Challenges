const text = document.getElementById("mainHeading");

const colorBtns = document.getElementById("color-buttons");

colorBtns.addEventListener("click", (event) => {
  switch (event.target.id) {
    case "redButton":
      text.style.color = "#e74c3c";
      break;
    case "greenButton":
      text.style.color = "#2ecc71";
      break;
    case "blueButton":
      text.style.color = "#3498db";
      break;
    case "purpleButton":
      text.style.color = "#9b59b6";
      break;
    case "resetButton":
      text.style.color = "#34495e";
      break;
  }
});
