function homeJS() {
      var breatheButton = document.getElementById("breatheButton");
      var studyButton = document.getElementById("studyButton");
      var gainButton = document.getElementById("gainButton");
      var contentHome = document.getElementById("contentHome");

      breatheButton.addEventListener("click", function(e) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                  contentHome.innerHTML =
                        this.responseText;
            };
            xhttp.open("GET", "/breathe", true);
            xhttp.send();
      });

      studyButton.addEventListener("click", function(e) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                  contentHome.innerHTML = this.responseText;

                  countUp();
            };
            xhttp.open("GET", "/study", true);
            xhttp.send();

      });

}
