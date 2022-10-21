const secHand = document.querySelector("[data-second]");
const minHand = document.querySelector("[data-minute]");
const hourHand = document.querySelector("[data-hour]");

function setClock() {
  const currentDate = new Date();
  const seconds = currentDate.getSeconds() / 60;
  const minutes = (currentDate.getMinutes() + seconds) / 60;
  const hours = (currentDate.getHours() + minutes) / 12;

  setRotation(secHand, seconds);
  setRotation(minHand, minutes);
  setRotation(hourHand, hours);
}

function setRotation(hand, rotation) {
  hand.style.setProperty("--rotation", rotation * 360);
}

setInterval(setClock, 1000);
setClock();
