// FUNCTION DU CHRONOMETRE
function initTimerUp(study, breathe) {
      var buttonHomePageBreathe = document.getElementById("buttonHomePageBreathe");
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
      //bouton retour home de Breathe , mis ici pour que clearInterval fonctionne (pouvais pas mettre dans breatheJS)
      buttonHomePageBreathe.addEventListener("click", function () {
            url          = "/";
            methodToCall = homeJS;
            onePageToAnother(contentBreathe, url, methodToCall);
            stopMusic();
            clearInterval(timerVar);

      });
}


// Refaire ce script :
// ne pas faire de fonction qui englobent out
// juste direct commencer par déclarer les variable qu'il faut en globale,
// puis faire deux fonctions, je sais pas encore comment mais deux
// de sorte à ce quil y ait pas les parametres..?
// et qu'on accède au clearInterval, p-ê le placer dans une fonction à part qu'il suffira d'appeler
// pour ça : déclarer setInterval en global comme ça jaurai acces et pourrai faire clearINterval dans
// une fonction à part -> NON CA NE MARCHE PAS CA, LE SETINTERVAL EST JAMAIS APPELE SI IL EST PLACE COMME CA
// EN GLOBAL EST PAS DANS UNE FONCTION.
// DOnc il faudrait pas excatement ce que jai dis ^ mais avec setInterval directement dans breatheJS
// comme ça dans breatheJS j'aurai aussi accès à clearInterval

