$(document).ready(function () {
    $(".open").click(function () {
        $("body").addClass("toggle");
    });
});
$(document).ready(function () {
    $(".closebutton").click(function () {
        $("body").removeClass("toggle");
    });
});

// $(document).ready(function () {
//     $(window).scroll(function () {
//         var header = $("header");
//         header.toggleClass("sticky", $(window).scrollTop() > 0);
//     });
// });


// document.addEventListener("DOMContentLoaded", function() {
//     const searchIcon = document.getElementById("search-icon");
//     const popup = document.getElementById("search-popup");
//     const close = document.querySelector(".close");

//     searchIcon.addEventListener("click", function(event) {
//         // event.preventDefault();
//         popup.style.display = "block";
//     });

//     close.addEventListener("click", function() {
//         popup.style.display = "none";
//     });

//     window.addEventListener("click", function(event) {
//         if (event.target == popup) {
//             popup.style.display = "none";
//         }
//     });
// });
(function () {
    "use strict";

    var cookieAlert = document.querySelector(".cookie-alert");
    var acceptCookies = document.querySelector(".accept-cookies");

    cookieAlert.offsetHeight; // Force browser to trigger reflow (https://stackoverflow.com/a/39451131)

    if (!getCookie("acceptCookies")) {
        cookieAlert.classList.add("show");
    }

    acceptCookies.addEventListener("click", function () {
        setCookie("acceptCookies", true, 60);
        cookieAlert.classList.remove("show");
    });
})();

// Cookie functions 
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

