function onePageToAnother(contentToReplace, requestObject, url, methodToCall) {
      requestObject.onreadystatechange = function () {
            contentToReplace.innerHTML =
                  this.responseText;
            methodToCall();
      };
      requestObject.open("GET", url, true);
      requestObject.send();
}


// ALL THE GO BACK TO HOME PAGE
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

