//Appelé par studyJS
function initGainJS() {
      var btnBackToStudy       = document.getElementById("btnBackToStudy");
      var btnBackToBreathe     = document.getElementById("btnBackToBreathe");
      var contentGain          = document.getElementById("contentGain");
      var divNumberStars       = document.getElementById("divNumberStars");
      var stars                = localStorage.getItem("stars");
      divNumberStars.innerHTML = stars;

      btnBackToStudy.addEventListener("click", function () {
            var request                = new XMLHttpRequest();
            request.onreadystatechange = function () {
                  contentGain.innerHTML =
                        this.responseText;
                  initStudyJS();
            };
            request.open('GET', '/study', true);
            request.send();
      });

      btnBackToBreathe.addEventListener("click", function () {
            var request                = new XMLHttpRequest();
            request.onreadystatechange = function () {
                  contentGain.innerHTML =
                        this.responseText;
                  circlecanvasBreathe();
            };
            request.open('GET', '/breathe');
            request.send();
      });
      var buttonHomePageGain = document.getElementById("buttonHomePageGain");
      buttonHomePageGain.addEventListener("click", function () {
            var type = 3;
            initBackHome(type);
      });

}
