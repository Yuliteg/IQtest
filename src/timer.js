
function time_remaining(endtime) {
  const t = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((t / 1000) % 60);
  const minutes = Math.floor((t / 1000 / 60) % 60);
  const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  const days = Math.floor(t / (1000 * 60 * 60 * 24));
  return { 'total': t, 'days': days, 'hours': hours, 'minutes': minutes, 'seconds': seconds };
}

export function run_clock(id, endtime) {
  const clock = document.getElementById("#clockdiv");
  function update_clock() {
    const t = time_remaining(endtime);
    clock.innerHTML = t.minutes + ':' + t.seconds + ' минут';
    if (t.total <= 0) { clearInterval(timeinterval); }
  }
  update_clock();
  const timeinterval = setInterval(update_clock, 1000);
}
