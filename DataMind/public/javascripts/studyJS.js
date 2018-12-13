function initStudyJS() {
      var startSessionButton = document.getElementById("startSessionButton");
      startSessionButton.addEventListener("click", function (e) {
            initTimerUp(50, 0);
      });
}
