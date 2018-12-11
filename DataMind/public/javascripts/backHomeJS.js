function initBackHome(view) {

      if (view === 1) {
            var contentBreathe         = document.getElementById("contentBreathe");
            var request                = new XMLHttpRequest();
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
            var request                = new XMLHttpRequest();
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
            var request                = new XMLHttpRequest();
            request.onreadystatechange = function () {
                  contentGain.innerHTML =
                        this.responseText;
                  homeJS();
            };
            request.open('GET', '/', true);
            request.send();
      }
}
