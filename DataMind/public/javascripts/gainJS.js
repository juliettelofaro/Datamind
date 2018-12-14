//Appelé par studyJS
function initGainJS() {
      var btnBackToStudy       = document.getElementById("btnBackToStudy");
      var btnBackToBreathe     = document.getElementById("btnBackToBreathe");
      var divNumberStars       = document.getElementById("divNumberStars");
      var stars                = localStorage.getItem("stars");
      var contentGain          = document.getElementById("contentGain");
      var buttonHomePageGain   = document.getElementById("buttonHomePageGain");
      var url;
      var methodToCall;
      divNumberStars.innerHTML = stars;

      btnBackToStudy.addEventListener("click", function () {
            url          = "/study";
            methodToCall = initStudyJS;
            onePageToAnother(contentGain, url, methodToCall);
      });

      btnBackToBreathe.addEventListener("click", function () {
            url          = "/breathe";
            methodToCall = circlecanvasBreathe;
            onePageToAnother(contentGain, url, methodToCall);
      });

      buttonHomePageGain.addEventListener("click", function () {
            url          = "/";
            methodToCall = homeJS;
            onePageToAnother(contentGain, url, methodToCall);
      });

}



