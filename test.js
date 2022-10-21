const secHand = document.querySelector("[data-second]");
const minHand = document.querySelector("[data-minute]");
const hourHand = document.querySelector("[data-hour]");

function setClock() {
  console.log("Hello");

  const currentDate = new Date();
  let seconds = currentDate.getSeconds() / 60;
  let minutes = (currentDate.getMinutes() + seconds) / 60;
  let hours = currentDate.getHours();

  console.log(seconds);

  setRotation(secHand, seconds);
  setRotation(minHand, minutes);
  setRotation(hourHand, hours);
}

function setRotation(hand, rotation) {
  hand.style.setProperty("--rotation", rotation * 360);
}

setInterval(setClock, 1000);
setClock();