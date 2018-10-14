var button = document.querySelector (".page-header__menu--button");
var user_list = document.querySelector (".page-header__user-list");
var nav_list = document.querySelector (".page-header__nav-list");

button.addEventListener("click", function(evt) {
evt.preventDefault();
user_list.classList.toggle("page-header_list--on");
nav_list.classList.toggle("page-header_list--on");
});
