function initTimerUp() {

      var totalSeconds = 0;
      var timerVar = setInterval(countGo,1000);

      function countGo() {
            ++totalSeconds;
            var hour              = Math.floor(totalSeconds / 3600);
            var minute            = Math.floor((totalSeconds - hour * 3600) / 60);
            var second = totalSeconds - (hour * 3600 + minute * 60);
            var sentence = minute + ":" + second;
            console.log(sentence)
      }
}
