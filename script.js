window.addEventListener("DOMContentLoaded", event => {
  const savedName = localStorage.getItem("PlayerName");
  if (savedName) {
    document.getElementById("nameSelected").innerText = savedName;
  }
});

let timer = sessionStorage.getItem("lastTimerValue") ? parseInt(sessionStorage.getItem("lastTimerValue")) : 0;
const h3 = document.getElementById("timer");
const intervallo = setInterval(() => {
  timer += 1;
  h3.innerText = timer;
  sessionStorage.setItem("lastTimerValue", timer);
}, 1000);

const savePlayerName = function (event) {
  event.preventDefault();
  const playerName = document.getElementById("selectedName").value;
  localStorage.setItem("PlayerName", playerName);
  let h3 = document.getElementById("nameSelected");
  h3.innerText = playerName;
};

const removePlayerName = function () {
  localStorage.removeItem("PlayerName");
  document.getElementById("nameSelected").innerText = "";
};
