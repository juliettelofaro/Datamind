function initStudyJS() {
      var startSessionButton = document.getElementById("startSessionButton");
      var giveUpMsg          = document.getElementById("giveUpMsg");
      startSessionButton.addEventListener("click", function (e) {

            initTimerUp(50, 0);
            giveUpMsg.style.display = "none";
      });
}
