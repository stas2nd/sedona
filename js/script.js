var link = document.querySelector(".searching-hotels__link");
var formwrapper = document.querySelector(".form-wrapper");

if (link && formwrapper) {
  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    formwrapper.classList.toggle("display_none");
  });
}
