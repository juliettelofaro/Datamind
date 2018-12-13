function initTimerUp(study, breathe) {
      function fromStudyToGain() {
            var request                = new XMLHttpRequest();
            request.onreadystatechange = function () {
                  contentHome.innerHTML =
                        this.responseText;
                  initGainJS();
            };
            request.open('GET', '/gain');
            request.send();
      }

      function fromBreatheToHome() {
            var type = 1;
            initBackHome(type);
      }

      var totalSeconds = 0;
      var timerVar     = setInterval(countGo, 1000);

      function countGo() {
            ++totalSeconds;
            var hour              = Math.floor(totalSeconds / 3600);
            var minute            = Math.floor((totalSeconds - hour * 3600) / 60);
            var second            = totalSeconds - (hour * 3600 + minute * 60);
            var numberStarStorage = 1;
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

            if (study === 50) {
                  var paraStudy       = document.getElementById("paraStudy");
                  var buttonStopStudy = document.getElementById("buttonStopStudy");
                  var beforeGiveUpMsg = document.getElementById("beforeGiveUpMsg");
                  paraStudy.innerHTML = sentence;
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
                        if (localStorage.getItem("stars") === null) {
                              localStorage.setItem("stars", numberStarStorage);
                        } else {
                              var upOneNumberStars = localStorage.getItem("stars");
                              upOneNumberStars++;
                              localStorage.setItem("stars", upOneNumberStars);
                        }
                        alert("Congratulations ! You won one star ! You'll now be redirected to your Star Page :)");
                        fromStudyToGain();
                        clearInterval(timerVar);
                  }
            }

            if (breathe === 10) {
                  var paraBreathe       = document.getElementById("paraBreathe");
                  paraBreathe.innerHTML = sentence;
                  if (second === 10) {
                        clearInterval(timerVar);
                        fromBreatheToHome()
                  }
            }

      }
}
