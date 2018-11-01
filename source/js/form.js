var button = document.querySelector(".page-header__menu--button");
var user_list = document.querySelector(".page-header__user-list");
var nav_list = document.querySelector(".page-header__nav-list");
var menu = document.querySelector(".page-header__nav-list");
var button_pop = document.querySelector(".popup-btn");
var popup = document.querySelector(".popup");

if(menu) {
  user_list.classList.add("page-header_list--off");
  nav_list.classList.add("page-header_list--off");
  button.classList.toggle("button-off");
}

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  user_list.classList.toggle("page-header_list--off");
  nav_list.classList.toggle("page-header_list--off");
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
