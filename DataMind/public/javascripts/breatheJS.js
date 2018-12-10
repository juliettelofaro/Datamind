function circlecanvasBreathe() {
      var canvasBreathe    = document.getElementById("canvasBreathe");
      canvasBreathe.height = window.innerHeight;
      canvasBreathe.width  = window.innerWidth;
      var c                = canvasBreathe.getContext("2d");
      var radius           = 50;
      var bigRadius        = 200;

      function animate() {
            var myReq = requestAnimationFrame(animate);
            c.clearRect(0, 0, innerWidth, innerHeight);
            c.beginPath();
            c.arc(600, 200, radius, 0, Math.PI * 2);
            c.strokeStyle = "red";
            c.stroke();
            if (radius >= 50 && radius <= 200) {
                  radius += 0.7;
                  console.log("1. radius : " + radius + ", bigRadius" + bigRadius);
            }
            if (radius >= 200 && radius <= 201) {
                  console.log("2. radius : " + radius + ", bigRadius" + bigRadius);
                  window.cancelAnimationFrame(myReq);
                  goesBack();
                  return radius;
            } else if (bigRadius <= 50 && bigRadius <= 200) {
                  console.log("3. radius : " + radius + ", bigRadius" + bigRadius);
                  goesBack();
            }

      }

      function goesBack() {

            console.log(bigRadius);
            var goesBackRequest = requestAnimationFrame(goesBack);
            c.clearRect(0, 0, innerWidth, innerHeight);
            c.beginPath();
            c.arc(600, 200, radius, 0, Math.PI * 2);
            c.strokeStyle = "red";
            c.stroke();
            if (radius <= 201 && radius >= 51) {
                  console.log("4GO. radius : " + radius + ", radius" + radius);
                  radius -= 1;
            } else if (radius <= 52) {
                  console.log("5GO. radius : " + radius + ", bigRadius" + bigRadius);


                  window.cancelAnimationFrame(goesBackRequest);
                  animate();
                  return radius;
            }
      }

      canvasBreathe.addEventListener("click", function () {
            animate();
      });
}
