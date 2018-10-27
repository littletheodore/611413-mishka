var button = document.querySelector(".page-header__menu--button");
var user_list = document.querySelector(".page-header__user-list");
var nav_list = document.querySelector(".page-header__nav-list");

var button_pop = document.querySelector(".promo-item__buy");
var popup = document.querySelector(".popup");


button.addEventListener("click", function (evt) {
  evt.preventDefault();
  user_list.classList.toggle("page-header_list--on");
  nav_list.classList.toggle("page-header_list--on");
  button.classList.toggle("button-off");
});

button_pop.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("popup-off");
});

popup.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("popup-off");
});
