const menuBtn = document.querySelector(".menu-btn");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
    if (!menuOpen) {
        menuBtn.classList.add("open");
        menuOpen = true;
    } else {
        menuBtn.classList.remove("open");
        menuOpen = false;
    }
});

$(document).ready(function () {
    // Go-to-top gomb
    $("body").append('<div id="go-to-top"></div>'); //gomb beillesztése
    $("#go-to-top").click(function () {
        $("html, body").animate(
            {
                scrollTop: 0,
            },
            800
        ); //sebesség
        return false;
    });

    // Smooth onclick esemély
    $("nav ul li a").click(function () {
        $("html, body").animate(
            {
                scrollTop: $($(this).attr("href")).offset().top - 100,
            },
            500
        );
        return false;
    });

    $("#topdiv a").click(function () {
        $("html, body").animate(
            {
                scrollTop: $($(this).attr("href")).offset().top,
            },
            500
        );
        return false;
    });

    // Sticyky menü
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $("header").addClass("sticky");
        } else {
            $("header").removeClass("sticky");
        }
    });

    $(".menu-btn").click(function () {
        $("nav ul").animate({
            height: "toggle",
            width: "toggle",
        });
        $("header").toggleClass("menu-btn-open");
    });
});
