// ==========================================
// AE — EMAD_AHMAD
// Main Website JavaScript
// ==========================================


// ==========================================
// MOBILE MENU
// ==========================================

function toggleMenu() {

    const navigation = document.getElementById("navigation");
    const menuBtn = document.getElementById("menuBtn");

    navigation.classList.toggle("active");
    menuBtn.classList.toggle("active");

    const isOpen = navigation.classList.contains("active");

    menuBtn.setAttribute("aria-expanded", isOpen);
}


// Close mobile menu after clicking a link

const navigationLinks = document.querySelectorAll(
    ".navigation a"
);

navigationLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        const navigation =
            document.getElementById("navigation");

        const menuBtn =
            document.getElementById("menuBtn");

        navigation.classList.remove("active");

        menuBtn.classList.remove("active");

        menuBtn.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});


// ==========================================
// LANGUAGE BUTTON
// ==========================================

function toggleLanguage() {

    alert(
        "Arabic / English language system will be added next."
    );

}
