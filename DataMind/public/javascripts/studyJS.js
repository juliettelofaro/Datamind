// Called by homeJS.js and gainJS.js through ajaxCalls.js
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

// Called by timerUpJS.js   Display timer + button to stop with its events
function studyDisplayTimerAndButton() {
      var buttonStopStudy              = document.getElementById("buttonStopStudy");
      var beforeGiveUpMsg              = document.getElementById("beforeGiveUpMsg");
      var divButtonStopStudy           = document.getElementById("divButtonStopStudy");
      divButtonStopStudy.style.display = "block";
      buttonStopStudy.addEventListener("mouseenter", function () {
            beforeGiveUpMsg.style.display = "block";
      });
      buttonStopStudy.addEventListener("mouseout", function () {
            beforeGiveUpMsg.style.display = "none";
      });
}

// Called by timerUpJS.js   Redirect to gain page a + msg + 1 new star
function onceSessionStudyDone() {
      var contentStudy = document.getElementById("contentStudy");
      var request      = new XMLHttpRequest();
      var url          = "/gain";
      var methodToCall = initGainJS;
      starCount();
      alert("Congratulations ! You won one star ! You'll now be redirected to your Star Page :)");
      onePageToAnother(contentStudy, request, url, methodToCall);
}
