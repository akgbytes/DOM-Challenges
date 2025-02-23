const bulb = document.getElementById("bulb");

const toggleBtn = document.getElementById("toggleButton");

const state = document.getElementById("status");

toggleBtn.addEventListener("click", () => {
  bulb.classList.toggle("off");
  document.body.classList.toggle("dark-mode");
  if (toggleBtn.innerText === "Turn On") {
    toggleBtn.innerText = "Turn Off";
    state.innerText = "Status: On";
  } else {
    toggleBtn.innerText = "Turn On";
    state.innerText = "Status: Off";
  }
});
