function homeJS() {
      var breatheButton = document.getElementById("breatheButton");
      var studyButton   = document.getElementById("studyButton");
      var gainButton    = document.getElementById("gainButton");
      var contentHome   = document.getElementById("contentHome");
      var request                = new XMLHttpRequest();


      breatheButton.addEventListener("click", function (e) {
            var breathe = "/breathe";
            var methodToCall = circlecanvasBreathe;
           onePageToAnother(contentHome, request, breathe, methodToCall);
      });

      studyButton.addEventListener("click", function (e) {


      });

      gainButton.addEventListener("click", function (e) {


      });
}
