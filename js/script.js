﻿var link = document.querySelector(".searching-hotels__link");
var searchingform = document.querySelector(".searching-form");

var people = document.querySelector(".people");
var signminus = document.querySelectorAll(".sign_minus");
var signplus = document.querySelectorAll(".sign_plus");
var adults = document.getElementById("adults");
var children = document.getElementById("children");

if (link && searchingform) {
    link.addEventListener("click", function (evt) {
        evt.preventDefault();
        searchingform.classList.toggle("display_flex");
    });
}

if (people) {
    people.addEventListener("click", function (evt){
        if (evt.target.classList.contains("sign_minus") && evt.target.classList.contains("sign_adults")) {
            if (adults.value <= 0) {
                adults.value = 0;
            } else {
                adults.value = adults.value - 1;
            }
        }
        else if (evt.target.classList.contains("sign_plus") && evt.target.classList.contains("sign_adults")) {
            adults.value++;
        }
        else if (evt.target.classList.contains("sign_minus") && evt.target.classList.contains("sign_children")) {
            if (children.value <= 0) {
                children.value = 0;
            } else {
                children.value = children.value - 1;
            }
        }
        else if (evt.target.classList.contains("sign_plus") && evt.target.classList.contains("sign_children")) {
            children.value++;
        }
    });
}


