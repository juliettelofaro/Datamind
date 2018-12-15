function starCount() {
      var numberStarStorage = 1;
      if (localStorage.getItem("stars") === null) {
            localStorage.setItem("stars", numberStarStorage);
      } else {
            var upOneNumberStars = localStorage.getItem("stars");
            upOneNumberStars++;
            localStorage.setItem("stars", upOneNumberStars);
      }
}
