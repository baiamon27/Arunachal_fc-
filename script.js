const nextMatch = new Date("May 17, 2026 17:30:00").getTime();

const timer = setInterval(function () {

  const now = new Date().getTime();

  const distance = nextMatch - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24))
    / (1000 * 60 * 60)
  );

  const minutes = Math.floor(
    (distance % (1000 * 60 * 60))
    / (1000 * 60)
  );

  const seconds = Math.floor(
    (distance % (1000 * 60))
    / 1000
  );

  document.getElementById("timer").innerHTML =
    days + " Days "
    + hours + " Hours "
    + minutes + " Minutes "
    + seconds + " Seconds ";

  if (distance < 0) {

    clearInterval(timer);

    document.getElementById("timer").innerHTML =
      "THE MATCH HAS STARTED";
  }

}, 1000);