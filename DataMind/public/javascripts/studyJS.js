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

function countUp() {
      var startSessionButton = document.getElementById("startSessionButton");
      startSessionButton.addEventListener("click", function () {
            var timerVar              = setInterval(countGo, 1000);
            var buttonStopStudy       = document.createElement("button");
            buttonStopStudy.innerText = "Stop";
            document.body.appendChild(buttonStopStudy);
            buttonStopStudy.addEventListener("click", function () {
                  //Vous avez abandonné, pas d'étoiles ! counter disparaît
                  totalSeconds = 0;
            });
      });
}

function countGo() {
      ++totalSeconds;
      var hour   = Math.floor(totalSeconds / 3600);
      var minute = Math.floor((totalSeconds - hour * 3600) / 60);
      var second = totalSeconds - (hour * 3600 + minute * 60);
      if (second == 10) {
            //Bravo vous avez réussi, voici une étoile ! counter disparaît et l'étoile est créé -> studyJS est appelé
            alert("Congratulations ! You won one star ! You'll now be redirected to your Star Page :)");
            totalSeconds = 0;
            studyJS();
      }
      document.getElementById("paraStudy").innerHTML = hour + ":" + minute + ":" + second;

}

