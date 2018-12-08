function studyJS() {
      var stars = 0;
      console.log("ON CLICK");
      stars += 1;
      var request                = new XMLHttpRequest();
      request.onreadystatechange = function () {
            contentHome.innerHTML =
                  this.responseText;
      };
      request.open('GET', '/gain/' + stars);
      request.send();
}

var totalSeconds = 0;
var timerVar;

function countUp() {
      var startSessionButton = document.getElementById("startSessionButton");
      var stopCountMessage   = document.getElementById("stopCountMessage");
      startSessionButton.addEventListener("click", function (e) {
            //mettre un if sur countgo Pour que quand je clique sur stop countUp() arrête de l'appeler

            timerVar            = setInterval(countGo, 1000);
            var buttonStopStudy = document.getElementById("buttonStopStudy");
            console.log("on est dans countup et voici le bouton " + e.target);
            buttonStopStudy.style.display = "block";
            buttonStopStudy.addEventListener("click", function () {
                  //Vous avez abandonné, pas d'étoiles ! counter disparaît, var supprimé ?
                  totalSeconds = 0;
                  clearInterval(timerVar);
                  stopCountMessage.innerHTML = "You abandonned, you need to click on the Start button again to start a new session from zero. ";
            });

      });
}

function countGo() {
      console.log("countGo, on rentre ds la fonction, totalSeconds = " + totalSeconds);
      ++totalSeconds;
      var hour   = Math.floor(totalSeconds / 3600);
      var minute = Math.floor((totalSeconds - hour * 3600) / 60);
      var second = totalSeconds - (hour * 3600 + minute * 60);
      if (second == 10) {
            //Bravo vous avez réussi, voici une étoile ! counter disparaît et l'étoile est créé -> studyJS est appelé
            alert("Congratulations ! You won one star ! You'll now be redirected to your Star Page :)");
            totalSeconds = 0;
            studyJS();
            clearInterval(timerVar);
      }
      document.getElementById("paraStudy").innerHTML = hour + ":" + minute + ":" + second;
}

