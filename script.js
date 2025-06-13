const subtitles = [
  { start: 0, text: "Пришла и оторвала голову нам чумачечая весна" },
  { start: 5, text: "И нам не до сна. И от любви схожу я с ума" },
  { start: 10, text: "Чумачечая весна, чумачечая. Я иду" },
  { start: 15, text: "По улице словна чумачеччи" },
];

const lyrics = document.getElementById("lyrics");
subtitles.forEach((item) => {
  const span = document.createElement("span");
  span.textContent = item.text;
  span.dataset.start = item.start;
  lyrics.appendChild(span);
  lyrics.innerHTML += "<br>";
});

const audio = document.getElementById("audio");
audio.addEventListener("timeupdate", () => {
  const current = audio.currentTime;
  const spans = [...lyrics.querySelectorAll("span")];

  spans.forEach((span) => {
    const start = parseFloat(span.dataset.start);
    const next =
      subtitles[subtitles.findIndex((s) => s.start === start) + 1]?.start ||
      audio.duration;

    if (current >= start && current < next) {
      span.classList.add("active");
    } else {
      span.classList.remove("active");
    }
  });
});
