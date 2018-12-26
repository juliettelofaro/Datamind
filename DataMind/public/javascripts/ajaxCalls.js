// Puisque cette méthode est générique il faut que tout à l'intérieur soit générique
// 1 seul paramètres pour 1 fonction, le reste doit allé ds 1 objet
function onePageToAnother(contentToReplace, url, methodToCall) {
      var requestObject = new XMLHttpRequest();
      requestObject.onreadystatechange = function () {
            contentToReplace.innerHTML =
                  this.responseText;
            methodToCall();
      };
      requestObject.open("GET", url, true);
      requestObject.send();
}



