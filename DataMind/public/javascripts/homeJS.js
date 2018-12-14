function homeJS() {
      var breatheButton = document.getElementById("breatheButton");
      var studyButton   = document.getElementById("studyButton");
      var gainButton    = document.getElementById("gainButton");
      var contentHome   = document.getElementById("contentHome");
      var request                = new XMLHttpRequest();
      var url;
      var methodToCall;

      breatheButton.addEventListener("click", function (e) {
            url = "/breathe";
            methodToCall = circlecanvasBreathe;
           onePageToAnother(contentHome, request, url, methodToCall);
      });

      studyButton.addEventListener("click", function (e) {
            url = "/study";
            methodToCall = initStudyJS;
            onePageToAnother(contentHome, request, url, methodToCall);

      });

      gainButton.addEventListener("click", function (e) {
            url = "/gain";
            methodToCall = initGainJS;
            onePageToAnother(contentHome, request, url, methodToCall);

      });
}
