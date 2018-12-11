function initBackHome(view) {
      var request = new XMLHttpRequest();

      if (view === 1) {
            var contentBreathe         = document.getElementById("contentBreathe");
            request.onreadystatechange = function () {
                  contentBreathe.innerHTML =
                        this.responseText;
                  homeJS();
            };
            request.open('GET', '/', true);
            request.send();
      }

      if (view === 2) {
            var contentStudy           = document.getElementById("contentStudy");
            request.onreadystatechange = function () {
                  contentStudy.innerHTML =
                        this.responseText;
                  homeJS();
            };
            request.open('GET', '/', true);
            request.send();
      }

      if (view === 3) {
            var contentGain            = document.getElementById("contentGain");
            request.onreadystatechange = function () {
                  contentGain.innerHTML =
                        this.responseText;
                  homeJS();
            };
            request.open('GET', '/', true);
            request.send();
      }
}
