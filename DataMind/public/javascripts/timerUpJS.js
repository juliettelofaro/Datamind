function initTimerUp(study, breathe) {

      var totalSeconds = 0;
      var timerVar     = setInterval(countGo, 1000);
      var timeGo;


      // FUNCTION WATCH
      function countGo() {
            ++totalSeconds;
            var hour              = Math.floor(totalSeconds / 3600);
            var minute            = Math.floor((totalSeconds - hour * 3600) / 60);
            var second            = totalSeconds - (hour * 3600 + minute * 60);

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
                  var paraStudy                    = document.getElementById("paraStudy");
                  var buttonStopStudy              = document.getElementById("buttonStopStudy");
                  var beforeGiveUpMsg              = document.getElementById("beforeGiveUpMsg");
                  paraStudy.innerHTML              = sentence;
                  divButtonStopStudy.style.display = "block";
                  buttonStopStudy.addEventListener("mouseenter", function () {
                        beforeGiveUpMsg.style.display = "block";
                  });
                  buttonStopStudy.addEventListener("mouseout", function () {
                        beforeGiveUpMsg.style.display = "none";
                  });
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
                  if (second === 55) {
                        clearInterval(timerVar);
                        stopMusic();
                        alert("You just finished the 10 mins. Now go back to work!");
                        var type = 1;
                        initBackHome(type);
                  }
            }
      }

}


