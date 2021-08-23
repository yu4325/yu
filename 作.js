'use strict';

function countdown(due){
  const now = new Date();
  const rest = due.getTime() - now.getTime();
  const sec = Math.floor(rest/1000) % 60;
  const min = Math.floor(rest/1000/60) % 60;
  const hours = Math.floor(rest/1000/60/60) % 24;
  const count = [hours, min, sec];

  return count;
}

let goal = new Date();
goal.setHours(23);
goal.setMinutes(59);
goal.setSeconds(59);

function recalc() {
  const counter = countdown(goal);
  const time = `${counter[0]}時間${counter[1]}分${counter[2]}秒`;
  document.getElementById('timer').textContent = time;
  refresh();
}

function refresh() {
  setTimeout(recalc, 1000);
}

recalc();
