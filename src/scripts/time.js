const timeDisplay = () => {
  const timeEl = document.querySelector(".main__time");
  const d = new Date();

  let n = `AM`;

  const h = d.getHours().toString().padStart(2, '0');
  const m = d.getMinutes().toString().padStart(2, '0');

  if (+h > 12) n = `PM`;

  timeEl.textContent = `${h}:${m} ${n}`;
};

setInterval(() => {
  timeDisplay();
}, 1e3);
