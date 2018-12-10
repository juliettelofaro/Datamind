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
            if (radius > 49 && radius <= 199) {
                  radius += 1;
                  console.log("1. ANIMATE IF");
                  console.log("ANIMATE bigRadius dans animate : " + bigRadius);
            } else if (radius === 200) {
                  console.log("2. ANIMATE  ELSE IF");
                  window.cancelAnimationFrame(myReq);
                  goesBack();
            }
      }

      function goesBack() {
            if (bigRadius >= 49 && bigRadius <= 51) {
                  bigRadius = 200;
            }
            var goesBackRequest = requestAnimationFrame(goesBack);
            c.clearRect(0, 0, innerWidth, innerHeight);
            c.beginPath();
            c.arc(600, 200, bigRadius, 0, Math.PI * 2);
            c.strokeStyle = "red";
            c.stroke();
            //le pb,c qu'une fois qu'on passe une fois ici, bigRadius reste à 51, donc
            //la 2e fois qu'on passe il est encore à 50
            // donc le cercle se creer à 50,
            //ne passe pas dans la boucle ci-dessous
            //il faut que ce soit 50 ici
            //mais quand je mets 50 animate() n'est pas rappelé
            if (bigRadius <= 200 && bigRadius >= 50) {
                  console.log("3. GOESBACK IF");
                  console.log("3. GOESBACK bigRadius dans animate : " + bigRadius);
                  bigRadius -= 0.5;
            } else if (bigRadius === 50) {
                  console.log("4. GOESBACK  ELSE IF");
                  console.log("4 GOESBACK bigRadius dans animate : " + bigRadius);
                  radius = bigRadius;
                  window.cancelAnimationFrame(goesBackRequest);
                  animate();
            }
      }

      canvasBreathe.addEventListener("click", function () {
            animate();
      });
}


