function circlecanvasBreathe() {
      var canvasBreathe    = document.getElementById("canvasBreathe");
      canvasBreathe.height = window.innerHeight;
      canvasBreathe.width  = window.innerWidth;
      var c                = canvasBreathe.getContext("2d");
      var radius           = 50;

      function animate() {
            var myReq = requestAnimationFrame(animate);
            c.clearRect(0, 0, innerWidth, innerHeight);
            c.beginPath();
            c.arc(600, 200, radius, 0, Math.PI * 2);
            c.strokeStyle = "red";
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
            c.arc(600, 200, radius, 0, Math.PI * 2);
            c.strokeStyle = "red";
            c.stroke();
            if (radius <= 201 && radius >= 51) {
                  radius -= 0.2;
            } else if (radius <= 52) {
                  window.cancelAnimationFrame(goesBackRequest);
                  animate();
                  return radius;
            }
      }

      canvasBreathe.addEventListener("click", function () {
            animate();
      });
}
