//Appelé par studyJS
function initGainJS() {
      var btnBackToStudy       = document.getElementById("btnBackToStudy");
      var btnBackToBreathe     = document.getElementById("btnBackToBreathe");
      var divNumberStars       = document.getElementById("divNumberStars");
      var stars                = localStorage.getItem("stars");
      var contentGain            = document.getElementById("contentGain");
      var request                = new XMLHttpRequest();
      var url;
      var methodToCall;
      divNumberStars.innerHTML = stars;

      btnBackToStudy.addEventListener("click", function () {
            url = "/study";
            methodToCall = initStudyJS;
            onePageToAnother(contentGain, request, url, methodToCall)
      });

      btnBackToBreathe.addEventListener("click", function () {
            url = "/breathe";
            methodToCall = circlecanvasBreathe;
            onePageToAnother(contentGain, request, url, methodToCall)
      });

      var buttonHomePageGain = document.getElementById("buttonHomePageGain");
      buttonHomePageGain.addEventListener("click", function () {
            var type = 3;
            initBackHome(type);
      });

}



