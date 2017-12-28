var link = document.querySelector(".searching-hotels__link");
var searchingform = document.querySelector(".searching-form");

if (link && searchingform) {
    link.addEventListener("click", function (evt) {
        evt.preventDefault();
        searchingform.classList.toggle("display_flex");
    });
}
