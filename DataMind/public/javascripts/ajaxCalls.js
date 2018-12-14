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

