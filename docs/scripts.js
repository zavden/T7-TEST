"use strict";
(function () {
    const titulo = document.getElementById("titulo");
    titulo.style.color = "red";
    titulo.addEventListener("click", () => alert("Hiciste click en el título"));
})();
function openTAB(evt, cityName) {
    // Declare all variables
    var i, tablinks;
    // Get all elements with class="tabcontent" and hide them
    let tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    // evt.target.classList.toggle("active");
    evt.target.classList.toggle("active");
}
