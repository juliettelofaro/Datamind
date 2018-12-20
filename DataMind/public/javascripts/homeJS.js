function homeJS() {
      var breatheButton = document.getElementById("breatheButton");
      var studyButton   = document.getElementById("studyButton");
      var gainButton    = document.getElementById("gainButton");
      var contentHome   = document.getElementById("contentHome");
      var iconFistHome  = document.getElementById("iconFistHome");
      var dateStorage   = localStorage.getItem("date");
      var dateHome    = new Date(dateStorage);
      var currentDate = new Date();
      var url;
      var methodToCall;

      if (dateStorage !== null && dateHome.getDay() !== currentDate.getDay()) {
            localStorage.clear();
      }

      breatheButton.addEventListener("click", function (e) {
            url          = "/breathe";
            methodToCall = circlecanvasBreathe;
            onePageToAnother(contentHome, url, methodToCall);
      });

      studyButton.addEventListener("click", function (e) {
            url          = "/study";
            methodToCall = initStudyJS;
            onePageToAnother(contentHome, url, methodToCall);

      });

      gainButton.addEventListener("click", function (e) {
            url          = "/gain";
            methodToCall = initGainJS;
            onePageToAnother(contentHome, url, methodToCall);

      });


      iconFistHome.addEventListener("click", function(e) {
            url          = "/motivated";
            methodToCall = initMotivatedJS;
            onePageToAnother(contentHome, url, methodToCall);
      })

}



