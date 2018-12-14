var horn = new Audio('images/mymusic.mp3');
var timeGo;
function playMusic() {
      horn.play();
      timeGo = window.setTimeout(playMusic, 100);
}
function stopMusic() {
      horn.currentTime = 0;
      horn.pause();
      clearTimeout(timeGo);
}
