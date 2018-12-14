function initTimerUp(study, breathe) {

      var totalSeconds = 0;
      var timerVar     = setInterval(countGo, 1000);
      var timeGo;

      // FUNCTION WATCH
      function countGo() {
            ++totalSeconds;
            var hour   = Math.floor(totalSeconds / 3600);
            var minute = Math.floor((totalSeconds - hour * 3600) / 60);
            var second = totalSeconds - (hour * 3600 + minute * 60);

            var sentence;

            if (minute < 10 && second < 10) {
                  sentence = "0" + minute + ":" + "0" + second;
            } else if (minute > 10 && second < 10) {
                  sentence = minute + ":" + "0" + second;
            } else if (minute < 10 && second >= 10) {
                  sentence = "0" + minute + ":" + second;
            } else {
                  sentence = minute + ":" + second;
            }

            // STUDY WATCH
            if (study === 50) {
                  var buttonStopStudy = document.getElementById("buttonStopStudy");
                  var paraStudy       = document.getElementById("paraStudy");
                  paraStudy.innerHTML = sentence;
                  studyDisplayTimerAndButton();
                  buttonStopStudy.addEventListener("click", function () {
                        startSessionButton.disabled = false;
                        totalSeconds                = 0;
                        clearInterval(timerVar);
                        giveUpMsg.style.display = "block";
                  });
                  if (second === 5) {
                        onceSessionStudyDone();
                        clearInterval(timerVar);
                  }
            }

            // BREATHE WATCH
            if (breathe === 10) {
                  var paraBreathe       = document.getElementById("paraBreathe");
                  paraBreathe.innerHTML = sentence;
                  if (second === 5) {
                        clearInterval(timerVar);
                        onceBreathingDone();
                  }
            }
      }

}


