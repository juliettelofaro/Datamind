function studyJS() {
      var nom = "juliette";
      var sendIt = document.getElementById("sendIt");
      sendIt.addEventListener("click", function(e) {
            console.log("ON CLICK")
            var request = new XMLHttpRequest();
            request.open('GET', '/gain/'+nom);
            request.send();
      })
}
