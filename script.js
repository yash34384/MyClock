let hour = document.querySelector('.hour');
let min = document.querySelector('.min');
let sec = document.querySelector('.sec');
let day = document.querySelector('.day');
let dig_hour = document.querySelector('.dig_hour');
let dig_min = document.querySelector('.dig_min');
let date = document.querySelector('.date');

setInterval(function () {
  // normal clock working
  let now_sec = new Date().getSeconds();
  sec.style.transform = `translateX(-50%) rotate(${180 + (now_sec * 6)}deg)`;
  let now_hour = new Date().getHours();
  hour.style.transform = `translateX(-50%) rotate(${180 + (now_hour * 30)}deg)`;
  let now_min = new Date().getMinutes();
  min.style.transform = `translateX(-50%) rotate(${180 + (now_min * 6)}deg)`;
  // end of normal clock working

  // digital clock working
  if (now_hour == 0) {
    now_hour = 12;
  }
  if (now_hour > 12) {
    now_hour = now_hour - 12;
  }
  now_hour = now_hour = (now_hour < 10 ? '0' : '') + now_hour;
  dig_hour.textContent = now_hour;
  now_min = (now_min < 10 ? '0' : '') + now_min;
  dig_min.textContent = now_min;
  // end of digital clock working 

  // showing day
  const now_day = new Date().getDay();
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  day.textContent = days[now_day - 1];
  // end of showing day

  // showing date 
  let now_date = new Date().getDate();
  now_date = (now_date < 10 ? '0' : '') + now_date;
  let now_month = new Date().getMonth() + 1;
  now_month = (now_month < 10 ? '0' : '') + now_month;
  const now_year = new Date().getFullYear();
  date.textContent = `${now_date}-${now_month}-${now_year}`;
  // end of showing date
}, 1000);
