function initStudyJS() {
      var buttonHomePageStudy = document.getElementById("buttonHomePageStudy");
      buttonHomePageStudy.addEventListener("click", function () {
            var type = 2;
            initBackHome(type);
      });

      function studyJS() {
            //ajouter cette valeur à un fichier JSON
            var request                = new XMLHttpRequest();
            request.onreadystatechange = function () {
                  contentHome.innerHTML =
                        this.responseText;
                  initGainJS();
            };
            request.open('GET', '/gain');
            request.send();
      }

      var totalSeconds = 0;
      var timerVar;

      function countUp() {
            var startSessionButton = document.getElementById("startSessionButton");
            var beforeGiveUpMsg    = document.getElementById("beforeGiveUpMsg");
            var giveUpMsg          = document.getElementById("giveUpMsg");
            startSessionButton.addEventListener("click", function (e) {
                  startSessionButton.disabled = true;
                  giveUpMsg.style.display     = "none";
                  timerVar                    = setInterval(countGo, 1000);

                  console.log("on est dans countup et voici le bouton " + e.target);

            });
      }

      function countGo() {
            ++totalSeconds;
            var buttonStopStudy   = document.getElementById("buttonStopStudy");
            var paraStudy         = document.getElementById("paraStudy");
            var hour              = Math.floor(totalSeconds / 3600);
            var minute            = Math.floor((totalSeconds - hour * 3600) / 60);
            var second            = totalSeconds - (hour * 3600 + minute * 60);
            var numberStarStorage = 1;

            if (second === 3) {
                  if (localStorage.getItem("stars") === null) {
                        localStorage.setItem("stars", numberStarStorage);
                  } else {
                        var upOneNumberStars = localStorage.getItem("stars");
                        upOneNumberStars++;
                        localStorage.setItem("stars",  upOneNumberStars);

                  }
                  alert("Congratulations ! You won one star ! You'll now be redirected to your Star Page :)");
                  totalSeconds = 0;
                  studyJS();
                  clearInterval(timerVar);
            }
            if (minute < 10 && second < 10) {
                  paraStudy.innerHTML = "0" + minute + ":" + "0" + second;
            } else if (minute > 10 && second < 10) {
                  paraStudy.innerHTML = minute + ":" + "0" + second;
            } else if (minute < 10 && second >= 10) {
                  paraStudy.innerHTML = "0" + minute + ":" + second;
            } else {
                  paraStudy.innerHTML = minute + ":" + second;
            }
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

      }

      countUp();

}
