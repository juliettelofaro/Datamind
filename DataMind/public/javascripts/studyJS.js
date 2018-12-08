function studyJS() {
      var stars = 0;
      var sendIt = document.getElementById("sendIt");
      sendIt.addEventListener("click", function(e) {
            console.log("ON CLICK")
            stars += 1;
            var request = new XMLHttpRequest();
            request.onreadystatechange = function() {
                  contentHome.innerHTML =
                        this.responseText;
            };
            request.open('GET', '/gain/'+stars);
            request.send();
      })
}

var totalSeconds = 0;

function countUp() {
      var startSessionButton = document.getElementById("startSessionButton")
      startSessionButton.addEventListener("click", function() {
            var timerVar     = setInterval(countGo, 1000);

      })
}

function countGo() {
      ++totalSeconds;
      var hour = Math.floor(totalSeconds/3600);
      var minute = Math.floor((totalSeconds - hour*3600)/60);
      var second = totalSeconds - (hour*3600 + minute*60);
      if (minute == 55) {
            totalSeconds = 0;
      }
      document.getElementById("paraStudy").innerHTML = hour + ":" + minute +":"+second;



}

