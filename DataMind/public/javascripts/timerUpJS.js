function initTimerUp(study, breathe) {
      function studyJS() {
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
      var timerVar     = setInterval(countGo, 1000);

      function countGo() {
            ++totalSeconds;
            var hour              = Math.floor(totalSeconds / 3600);
            var minute            = Math.floor((totalSeconds - hour * 3600) / 60);
            var second            = totalSeconds - (hour * 3600 + minute * 60);
            var sentence          = minute + ":" + second;
            var numberStarStorage = 1;

            if (study === 50) {

                  var paraStudy       = document.getElementById("paraStudy");
                  paraStudy.innerHTML = sentence;
                  if (second === 5) {
                        if (localStorage.getItem("stars") === null) {
                              localStorage.setItem("stars", numberStarStorage);
                        } else {
                              var upOneNumberStars = localStorage.getItem("stars");
                              upOneNumberStars++;
                              localStorage.setItem("stars", upOneNumberStars);

                        }
                        alert("Congratulations ! You won one star ! You'll now be redirected to your Star Page :)");
                        studyJS();
                        clearInterval(timerVar);
                  }
            }

            if (breathe === 10) {
                  var paraBreathe       = document.getElementById("paraBreathe");
                  paraBreathe.innerHTML = sentence;
                  if (second === 10) {
                        clearInterval(timerVar);
                  }
            }

      }
}
