// Analog clock
const hourHand = document.getElementById("hourHand");
const minuteHand = document.getElementById("minuteHand");
const secondHand = document.getElementById("secondHand");

function updateAnalogClock() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  
  const secondDeg = (seconds / 60) * 360;
  const minuteDeg = (minutes / 60) * 360 + (seconds / 60) * 6;
  const hourDeg = (hours % 12 / 12) * 360 + (minutes / 60) * 30;
  
  secondHand.style.transform = `translate(-50%, -50%) rotate(${secondDeg}deg)`;
  minuteHand.style.transform = `translate(-50%, -50%) rotate(${minuteDeg}deg)`;
  hourHand.style.transform = `translate(-50%, -50%) rotate(${hourDeg}deg)`;
}

setInterval(updateAnalogClock, 1000);

// Digital clock
const digitalTime = document.getElementById("digitalTime");

function updateDigitalClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  
  hours = hours % 12 || 12;
  
  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${ampm}`;
  digitalTime.textContent = formattedTime;
}

setInterval(updateDigitalClock, 1000);

// Swap functionality
const analogClock = document.getElementById("analogClock");
const digitalClock = document.getElementById("digitalClock");
const swapButton = document.getElementById("swapButton");

let isAnalogVisible = true;

function swapClocks() {
  if (isAnalogVisible) {
    analogClock.style.display = "none";
    digitalClock.style.display = "block";
  } else {
    analogClock.style.display = "block";
    digitalClock.style.display = "none";
  }
  isAnalogVisible = !isAnalogVisible;
}

swapButton.addEventListener("click", swapClocks);

// Initialize display
swapClocks();
