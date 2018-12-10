function initGainJS() {
      var btnBackToStudy   = document.getElementById("btnBackToStudy");
      var btnBackToBreathe = document.getElementById("btnBackToBreathe");
      var contentGain      = document.getElementById("contentGain");

      btnBackToStudy.addEventListener("click", function () {
            var request                = new XMLHttpRequest();
            request.onreadystatechange = function () {
                  contentGain.innerHTML =
                        this.responseText;
                  countUp();
            };
            request.open('GET', '/study', true);
            request.send();
      });

      btnBackToBreathe.addEventListener("click", function () {
            var request                = new XMLHttpRequest();
            request.onreadystatechange = function () {
                  contentHome.innerHTML =
                        this.responseText;
            };
            request.open('GET', '/breathe');
            request.send();
      });

}
