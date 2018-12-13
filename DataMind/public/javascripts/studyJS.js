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
            giveUpMsg.style.display = "none";
      });
}
