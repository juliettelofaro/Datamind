function circlecanvasBreathe() {
      var horn             = new Audio('images/mymusic.mp3');
      var canvasBreathe    = document.getElementById("canvasBreathe");
      canvasBreathe.height = 450;
      canvasBreathe.width  = window.innerWidth;
      var c                = canvasBreathe.getContext("2d");
      var radius           = 50;
      var buttonStartBreathing = document.getElementById("buttonStartBreathing");

      function animate() {
            var myReq = requestAnimationFrame(animate);
            c.clearRect(0, 0, innerWidth, innerHeight);
            c.beginPath();
            c.arc(625, 200, radius, 0, Math.PI * 2);
            c.fillText("Breathe In",600,210);
            c.fillStyle = "deeppink";
            c.strokeStyle = "lightpink";
            c.stroke();
            if (radius >= 50 && radius <= 200) {
                  radius += 0.6;
            }
            if (radius >= 200 && radius <= 201) {
                  window.cancelAnimationFrame(myReq);
                  goesBack();
                  return radius;
            }
      }

      function goesBack() {
            var goesBackRequest = requestAnimationFrame(goesBack);
            c.clearRect(0, 0, innerWidth, innerHeight);
            c.beginPath();
            c.arc(625, 200, radius, 0, Math.PI * 2);
            c.fillText("Breathe Out",600,210);
            c.fillStyle = "lightpink";
            c.strokeStyle = "deeppink";
            c.stroke();
            if (radius <= 201 && radius >= 51) {
                  radius -= 0.4;
            } else if (radius <= 52) {
                  window.cancelAnimationFrame(goesBackRequest);
                  animate();
                  return radius;
            }
      }

      function playMusic() {
            horn.play();
      }

      buttonStartBreathing.addEventListener("click", function () {
            animate();
            setInterval(playMusic, 50);
            playMusic();
      });
}
