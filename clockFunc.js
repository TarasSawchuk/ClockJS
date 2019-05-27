const clock = document.getElementById("clock"),
      color = document.getElementById("color");

let clockFunc = () => {
  let time = new Date(),
      hours = time.getHours().toString(),
      minutes = time.getMinutes().toString(),
      seconds = time.getSeconds().toString();

  if (hours.length < 2) {
        hours = "0" + hours;
      }
  if (minutes.length < 2) {
        minutes = "0" + minutes;
      }
  if (seconds.length < 2) {
        seconds = "0" + seconds;
      }

  let clockStr = `${hours} : ${minutes} : ${seconds}`,
      colorStr = `#${hours}${minutes}${seconds}`;
  
  clock.textContent = clockStr;
  color.textContent = `${colorStr} Hex address of color`;
  
  document.body.style.background = colorStr;
}

setInterval(clockFunc, 1000)