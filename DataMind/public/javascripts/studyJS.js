function initStudyJS() {
      var buttonHomePageStudy = document.getElementById("buttonHomePageStudy");
      var startSessionButton  = document.getElementById("startSessionButton");
      var giveUpMsg           = document.getElementById("giveUpMsg");

      buttonHomePageStudy.addEventListener("click", function () {
            var type = 2;
            initBackHome(type);
      });

      startSessionButton.addEventListener("click", function (e) {
            initTimerUp(50, 0);
            giveUpMsg.style.display     = "none";
            startSessionButton.disabled = true;
      });
}

function onceSessionStudyDone() {
      var contentStudy = document.getElementById("contentStudy");
      var request      = new XMLHttpRequest();
      var url          = "/gain";
      var methodToCall = initGainJS;
      starCount();
      alert("Congratulations ! You won one star ! You'll now be redirected to your Star Page :)");
      onePageToAnother(contentStudy, request, url, methodToCall);
}
