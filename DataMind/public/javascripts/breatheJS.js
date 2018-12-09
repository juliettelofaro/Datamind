function circlecanvasBreathe() {
      var canvasBreathe    = document.getElementById("canvasBreathe");
      canvasBreathe.height = window.innerHeight;
      canvasBreathe.width  = window.innerWidth;
      var c                = canvasBreathe.getContext("2d");

      var radius = 50;
      var bigRadius = 200;
      var x      = 100;
      var y      = 50;

      function animate() {
            requestAnimationFrame(animate);
            c.clearRect(0, 0, innerWidth, innerHeight);
            c.beginPath();
            c.arc(600, 200, radius, 0, Math.PI * 2);
            c.strokeStyle = "red";
            c.stroke();
            if (radius >= 50 && radius <= 199) {
                  radius += 1;
                  console.log(radius)
            } else if (radius == 200) {
                  goesBack();
                  console.log("on est dans else if")
            }

            /*
           if (radius <= 50) {
                 radius += 1;
           } else if (radius == 200) {
                 radius -= 1;
           }
           console.log(radius)*/
            /*
            if (radius >= 100) {
                  x = -x;
            }
            radius += x;
            if (radius <= 50) {
                  y+=0.1;
            }
            radius += y;*/

      }
      function goesBack() {
            requestAnimationFrame(animate);
            c.clearRect(0, 0, innerWidth, innerHeight);
            c.beginPath();
            c.arc(600, 200, bigRadius, 0, Math.PI * 2);
            c.strokeStyle = "red";
            bigRadius -= 0.1;
            c.stroke();



      }
      animate();
}


