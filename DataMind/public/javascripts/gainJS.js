//Appelé par studyJS
function initGainJS() {
      var btnBackToStudy       = document.getElementById("btnBackToStudy");
      var btnBackToBreathe     = document.getElementById("btnBackToBreathe");
      var divNumberStars       = document.getElementById("divNumberStars");
      var stars                = localStorage.getItem("stars");
      divNumberStars.innerHTML = stars;

      btnBackToStudy.addEventListener("click", function () {
            fromGainToStudy();
      });

      btnBackToBreathe.addEventListener("click", function () {
            fromGainToBreathe();
      });

      var buttonHomePageGain = document.getElementById("buttonHomePageGain");
      buttonHomePageGain.addEventListener("click", function () {
            var type = 3;
            initBackHome(type);
      });

}
