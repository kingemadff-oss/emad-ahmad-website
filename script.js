/* =========================================
   AE — EMAD_AHMAD
   Arabic / English Language System
========================================= */

let currentLanguage = "en";

function toggleLanguage() {
    if (currentLanguage === "en") {
        setArabic();
    } else {
        setEnglish();
    }
}

/* =========================================
   ENGLISH
========================================= */

function setEnglish() {

    currentLanguage = "en";

    document.documentElement.lang = "en";
    document.documentElement.dir = "ltr";
    document.body.dir = "ltr";

    /* Header */
    document.querySelector(".language-btn").textContent = "العربية";

    const navigation = document.querySelectorAll(".navigation a");

    navigation[0].textContent = "Home";
    navigation[1].textContent = "About";
    navigation[2].textContent = "Services";
    navigation[3].textContent = "Work";
    navigation[4].textContent = "Contact";

    /* Hero */
    document.querySelector(".eyebrow").textContent =
        "AI • PERSONAL BRAND • PROMPT ENGINEERING";

    document.querySelector(".hero h1").innerHTML =
        'BUILD YOUR <span>PERSONAL BRAND</span> WITH AI.';

    document.querySelector(".hero-description").textContent =
        "I help people and businesses transform ideas into powerful digital experiences using Artificial Intelligence and Prompt Engineering.";

    const heroButtons = document.querySelectorAll(".hero-buttons .btn");

    heroButtons[0].textContent = "Explore My Work";
    heroButtons[1].textContent = "Work With Me";

    /* About */
    const sections = document.querySelectorAll(".section");

    sections[0].querySelector(".section-number").textContent =
        "01 — ABOUT";

    sections[0].querySelector("h2").innerHTML =
        'Turning ideas into <span>intelligent possibilities.</span>';

    sections[0].querySelector("p:not(.section-number)").textContent =
        "EMAD_AHMAD is a personal brand focused on Personal Branding, Prompt Engineering and Artificial Intelligence.";

    /* Services */
    sections[1].querySelector(".section-number").textContent =
        "02 — SERVICES";

    sections[1].querySelector("h2").innerHTML =
        'What I <span>Do.</span>';

    const services = sections[1].querySelectorAll(".service");

    services[0].querySelector("h3").textContent =
        "Personal Branding";

    services[0].querySelector("p").textContent =
        "Building a strong digital identity that represents who you are.";

    services[1].querySelector("h3").textContent =
        "Prompt Engineering";

    services[1].querySelector("p").textContent =
        "Designing powerful prompts that unlock the potential of AI.";

    services[2].querySelector("h3").textContent =
        "AI Solutions";

    services[2].querySelector("p").textContent =
        "Turning AI capabilities into practical solutions for people and businesses.";

    /* Work */
    sections[2].querySelector(".section-number").textContent =
        "03 — WORK";

    sections[2].querySelector("h2").innerHTML =
        'Selected <span>Work.</span>';

    sections[2].querySelector("p:not(.section-number)").textContent =
        "Projects and experiments in AI, Prompt Engineering and Personal Branding will appear here.";

    /* Contact */
    sections[3].querySelector(".section-number").textContent =
        "04 — CONTACT";

    sections[3].querySelector("h2").innerHTML =
        "Let's create something <span>intelligent.</span>";

    sections[3].querySelector(".btn").textContent =
        "Get In Touch";

    /* Footer */
    document.querySelector("footer p").textContent =
        "© 2026 EMAD_AHMAD — All Rights Reserved.";
}


/* =========================================
   ARABIC
========================================= */

function setArabic() {

    currentLanguage = "ar";

    document.documentElement.lang = "ar";
    document.documentElement.dir = "rtl";
    document.body.dir = "rtl";

    /* Header */
    document.querySelector(".language-btn").textContent = "English";

    const navigation = document.querySelectorAll(".navigation a");

    navigation[0].textContent = "الرئيسية";
    navigation[1].textContent = "من أنا";
    navigation[2].textContent = "الخدمات";
    navigation[3].textContent = "أعمالي";
    navigation[4].textContent = "تواصل معي";

    /* Hero */
    document.querySelector(".eyebrow").textContent =
        "الذكاء الاصطناعي • العلامة الشخصية • هندسة الأوامر";

    document.querySelector(".hero h1").innerHTML =
        'ابنِ <span>علامتك الشخصية</span> باستخدام الذكاء الاصطناعي.';

    document.querySelector(".hero-description").textContent =
        "أساعد الأفراد والشركات على تحويل الأفكار إلى تجارب رقمية قوية باستخدام الذكاء الاصطناعي وهندسة الأوامر.";

    const heroButtons = document.querySelectorAll(".hero-buttons .btn");

    heroButtons[0].textContent = "استكشف أعمالي";
    heroButtons[1].textContent = "اعمل معي";

    /* About */
    const sections = document.querySelectorAll(".section");

    sections[0].querySelector(".section-number").textContent =
        "01 — من أنا";

    sections[0].querySelector("h2").innerHTML =
        'نحوّل الأفكار إلى <span>إمكانات ذكية.</span>';

    sections[0].querySelector("p:not(.section-number)").textContent =
        "EMAD_AHMAD هي علامة شخصية متخصصة في بناء العلامات الشخصية، وهندسة الأوامر والذكاء الاصطناعي.";

    /* Services */
    sections[1].querySelector(".section-number").textContent =
        "02 — الخدمات";

    sections[1].querySelector("h2").innerHTML =
        'ماذا <span>أقدم؟</span>';

    const services = sections[1].querySelectorAll(".service");

    services[0].querySelector("h3").textContent =
        "بناء العلامة الشخصية";

    services[0].querySelector("p").textContent =
        "بناء هوية رقمية قوية تعبّر عن شخصيتك وتميّزك.";

    services[1].querySelector("h3").textContent =
        "هندسة الأوامر";

    services[1].querySelector("p").textContent =
        "تصميم أوامر احترافية تساعدك على الاستفادة من قوة الذكاء الاصطناعي.";

    services[2].querySelector("h3").textContent =
        "حلول الذكاء الاصطناعي";

    services[2].querySelector("p").textContent =
        "تحويل إمكانات الذكاء الاصطناعي إلى حلول عملية للأفراد والشركات.";

    /* Work */
    sections[2].querySelector(".section-number").textContent =
        "03 — أعمالي";

    sections[2].querySelector("h2").innerHTML =
        'نماذج من <span>أعمالي.</span>';

    sections[2].querySelector("p:not(.section-number)").textContent =
        "ستظهر هنا المشاريع والتجارب المتعلقة بالذكاء الاصطناعي وهندسة الأوامر وبناء العلامات الشخصية.";

    /* Contact */
    sections[3].querySelector(".section-number").textContent =
        "04 — تواصل معي";

    sections[3].querySelector("h2").innerHTML =
        "لنُنشئ شيئًا <span>ذكيًا.</span>";

    sections[3].querySelector(".btn").textContent =
        "تواصل معي";

    /* Footer */
    document.querySelector("footer p").textContent =
        "© 2026 EMAD_AHMAD — جميع الحقوق محفوظة.";
}


/* =========================================
   SAVE LANGUAGE
========================================= */

function saveLanguage() {
    localStorage.setItem("AE_language", currentLanguage);
}


/* =========================================
   LOAD SAVED LANGUAGE
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const savedLanguage = localStorage.getItem("AE_language");

    if (savedLanguage === "ar") {
        setArabic();
    } else {
        setEnglish();
    }

    /* Save whenever language changes */
    const originalToggle = window.toggleLanguage;

    window.toggleLanguage = function () {

        originalToggle();

        saveLanguage();
    };

});
