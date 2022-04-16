const buttonClicked = document.querySelector(".final-btn");
const ratingComponent = document.getElementById("rating");
const thankYouComponent = document.getElementById("thankyou");
var thankyouMessage = document.querySelector(".t-message");
const ratings = document.querySelectorAll(".btn");
var ratingNumber = "";

ratings.forEach((rating) => {
  rating.addEventListener("click", (e) => {
    ratingNumber = e.target.textContent;
    ratings.forEach((rating) => {
      rating.classList.remove("selected");
    });
    rating.classList.add("selected");
  });
});
buttonClicked.addEventListener("click", function () {
  ratingComponent.classList.add("hide");
  thankYouComponent.classList.remove("hide");
  thankyouMessage.innerHTML = "You selected " + ratingNumber + " out of 5";
});
