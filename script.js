document.addEventListener("DOMContentLoaded", function () {
  let progress = document.getElementById("progress");
  let song = document.getElementById("song");
  let ctrlIcon = document.getElementById("playBtn");
  let timerStart = document.getElementById("timer-start");
  let timerEnd = document.getElementById("timer-end");

  song.onloadedmetadata = function () {
    const durationMinutes = Math.floor(song.duration / 60);
    const durationSeconds = Math.floor(song.duration % 60);
    timerEnd.textContent = `${durationMinutes}:${durationSeconds}`;
  };

  function playPause() {
    if (ctrlIcon.classList.contains("fa-pause")) {
      song.pause();
      ctrlIcon.classList.remove("fa-pause");
      ctrlIcon.classList.add("fa-play");
    } else {
      song.play();
      ctrlIcon.classList.add("fa-pause");
      ctrlIcon.classList.remove("fa-play");
    }
  }

  song.addEventListener("timeupdate", function () {
    const currentTimeMinutes = Math.floor(song.currentTime / 60);
    const currentTimeSeconds = Math.floor(song.currentTime % 60);
    timerStart.textContent = `${currentTimeMinutes}:${currentTimeSeconds}`;

    progress.value = song.currentTime;
  });

  progress.onchange = function () {
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
  };

  ctrlIcon.addEventListener("click", playPause);
});
