function studyJS() {
      var nom = "juliette";
      var sendIt = document.getElementById("sendIt");
      sendIt.addEventListener("click", function(e) {
            console.log("ON CLICK")
            var request = new XMLHttpRequest();
            request.onreadystatechange = function() {
                  content.innerHTML =
                        this.responseText;
            };
            request.open('GET', '/gain/'+nom);
            request.send();
      })
}
