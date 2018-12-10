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
            if (radius >= 50 && radius <= 199) {
                  radius += 1;
                  console.log("1ANIMATE on est dans le PREMIER IFF ");
            } else if (radius == 200) {
                  window.cancelAnimationFrame(myReq);
                  goesBack();
                  console.log("2ANIMATE on est dans PREMIER else if  ");
            } else if (bigRadius <= 50 && bigRadius <= 199) {
                  goesBack();
                  console.log("3ANIMATE on est dans DEUXIEME else if ");
            }
      }

      function goesBack() {
            requestAnimationFrame(goesBack);
            c.clearRect(0, 0, innerWidth, innerHeight);
            c.beginPath();
            c.arc(600, 200, bigRadius, 0, Math.PI * 2);
            c.strokeStyle = "red";
            c.stroke();
            if (bigRadius <= 200 && bigRadius >= 51) {
                  bigRadius -= 1;
            } else if (bigRadius <= 51) {
                  radius = bigRadius;
                  console.log("Voici radius dans else if de goesback : " + radius);
                  animate();
            }
      }

      canvasBreathe.addEventListener("click", function () {
            console.log("JJJE CLICK");
            animate();
      });
}


