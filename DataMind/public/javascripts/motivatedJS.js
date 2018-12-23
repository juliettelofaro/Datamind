function initMotivatedJS() {
      var buttonHomePageMotivated = document.getElementById("buttonHomePageMotivated");
      var contentMotivated = document.getElementById("contentMotivated")
      var url = "/";
      var methodToCall = homeJS;

      buttonHomePageMotivated.addEventListener("click", function (e) {
            onePageToAnother(contentMotivated, url, methodToCall)
      });

}
