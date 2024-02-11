const targetDate = new Date('2024-02-13T23:59:59'); // целевое время события

function updateCountdown() {
  const currentDate = new Date(); // добавляет текущую дату
  const difference = targetDate - currentDate; // вычисляет разницу между текущим временем и целевым

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.getElementById('days').innerText = days;
  document.getElementById('hours').innerText = hours;
  document.getElementById('minutes').innerText = minutes;
  document.getElementById('seconds').innerText = seconds;

  if (difference < 0) {
    clearInterval(interval); // останавливает обратный отсчет при достижении или прохождении целевой даты
    document.getElementById('timer').innerText = 'The event has started!'; // выводит сообщение о том, что событие началось
  }
}

const interval = setInterval(updateCountdown, 1000);


