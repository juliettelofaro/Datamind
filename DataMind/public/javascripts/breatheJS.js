function circlecanvasBreathe() {
      var horn                  = new Audio('images/mymusic.mp3');
      var canvasBreathe         = document.getElementById("canvasBreathe");
      canvasBreathe.height      = 450;
      canvasBreathe.width       = window.innerWidth;
      var c                     = canvasBreathe.getContext("2d");
      var radius                = 50;
      var buttonStartBreathing  = document.getElementById("buttonStartBreathing");
      var x                     = 625;
      var y                     = 200;
      var xText                 = 600;
      var yText                 = 210;
      var deeppink              = "deeppink";
      var lightpink             = "lightpink";
      var buttonHomePageBreathe = document.getElementById("buttonHomePageBreathe");
      var paraBreathe           = document.getElementById("paraBreathe");
      var timeGo;

      function animate() {
            var myReq = requestAnimationFrame(animate);
            c.clearRect(0, 0, innerWidth, innerHeight);
            c.beginPath();
            c.arc(x, y, radius, 0, Math.PI * 2);
            c.fillText("Breathe In", xText, yText);
            c.fillStyle   = deeppink;
            c.strokeStyle = lightpink;
            c.stroke();
            if (radius >= 50 && radius <= y) {
                  radius += 0.6;
            }
            if (radius >= y && radius <= 201) {
                  window.cancelAnimationFrame(myReq);
                  goesBack();
                  return radius;
            }
      }

      function goesBack() {
            var goesBackRequest = requestAnimationFrame(goesBack);
            c.clearRect(0, 0, innerWidth, innerHeight);
            c.beginPath();
            c.arc(x, y, radius, 0, Math.PI * 2);
            c.fillText("Breathe Out", xText, yText);
            c.fillStyle   = lightpink;
            c.strokeStyle = deeppink;
            c.stroke();
            if (radius <= 201 && radius >= 51) {
                  radius -= 0.4;
            } else if (radius <= 52) {
                  window.cancelAnimationFrame(goesBackRequest);
                  animate();
                  return radius;
            }
      }


      buttonStartBreathing.addEventListener("click", function () {
            playMusic();
            animate();
            timeTenMin();
      });

      function playMusic() {
            horn.play();
            timeGo = window.setTimeout(playMusic, 100);
      }

      buttonHomePageBreathe.addEventListener("click", function () {
            horn.pause();
            clearTimeout(timeGo);
            var type = 1;
            initBackHome(type);
      });

}




