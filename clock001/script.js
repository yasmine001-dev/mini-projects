const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");

const now = new Date();
const hour = now.getHours(); //0 -23
const mints = now.getMinutes(); //0 -59
const second = now.getSeconds(); //0-59
let secondDegree = (second / 60) * 360 + 90;
let minDegree = (mints / 60) * 360 + 90;
let hourDegree = (hour / 12) * 360 + 90;
secondHand.style.transform = `rotate(${secondDegree}deg)`;
minHand.style.transform = `rotate(${minDegree}deg)`;
hourHand.style.transform = `rotate(${hourDegree}deg)`;

//+(minutes / 60) * 30
setInterval(() => {
  secondDegree += 6; // 360 ÷ 60 = 6°
  secondHand.style.transform = `rotate(${secondDegree}deg)`;
}, 1000);

//1000ms=== 1s

setInterval(() => {
  minDegree += 6; //// 360 ÷ 60 = 6°
  minHand.style.transform = `rotate(${minDegree}deg)`;
}, 60000);
setInterval(() => {
  hourDegree += 30; // 360 ÷ 12=30°
  hourHand.style.transform = `rotate(${hourDegree}deg)`;
}, 3600000);
