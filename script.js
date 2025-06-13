const audio = document.getElementById("audio");
const lines = [...document.querySelectorAll("#lyrics p")]

audio.addEventListener("timeupdate", () => {
  const currentTime = audio.currentTime;

  lines.forEach((line) => line.classList.remove("active"));

  let active = lines
    .filter((line) => parseFloat(line.dataset.start) <= currentTime)
    .pop();

  if (active) {
    active.classList.add("active");
    active.scrollIntoView({ behavior: "smooth", block: "center" });
  }
});
