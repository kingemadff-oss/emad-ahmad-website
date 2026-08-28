/* ==================================================
   AE — EMAD_AHMAD
   Language Switcher
   English ↔ Arabic
================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const languageButton = document.querySelector(".language-btn");

    if (!languageButton) {
        return;
    }


    /* ==================================================
       TRANSLATIONS
    ================================================== */

    const translations = {

        en: {

            nav: {
                home: "Home",
                about: "About",
                services: "Services",
                work: "Work",
                contact: "Contact"
            },

            eyebrow: "AI • PERSONAL BRAND • PROMPT ENGINEERING",

            heroTitle:
                "BUILD YOUR <span>PERSONAL BRAND</span> WITH AI.",

            heroDescription:
                "I help people and businesses transform ideas into powerful digital experiences using Artificial Intelligence and Prompt Engineering.",

            exploreWork: "Explore My Work",
            workWithMe: "Work With Me",

            aboutNumber: "01 — ABOUT",

            aboutTitle:
                "Turning ideas into <span>intelligent possibilities.</span>",

            aboutText:
                "EMAD_AHMAD is a personal brand focused on Personal Branding, Prompt Engineering and Artificial Intelligence.",

            servicesNumber: "02 — SERVICES",

            servicesTitle:
                "What I <span>Do.</span>",

            service1Title:
                "Personal Branding",

            service1Text:
                "Building a strong digital identity that represents who you are.",

            service2Title:
                "Prompt Engineering",

            service2Text:
                "Designing powerful prompts that unlock the potential of AI.",

            service3Title:
                "AI Solutions",

            service3Text:
                "Turning AI capabilities into practical solutions for people and businesses.",

            workNumber: "03 — WORK",

            workTitle:
                "Selected <span>Work.</span>",

            workText:
                "Projects and experiments in AI, Prompt Engineering and Personal Branding will appear here.",

            contactNumber: "04 — CONTACT",

            contactTitle:
                "Let's create something <span>intelligent.</span>",

            contactButton:
                "Get In Touch",

            footer:
                "© 2026 EMAD_AHMAD — All Rights Reserved.",

            button:
                "العربية"
        },


        ar: {

            nav: {
                home: "الرئيسية",
                about: "من أنا",
                services: "الخدمات",
                work: "الأعمال",
                contact: "تواصل معي"
            },

            eyebrow:
                "الذكاء الاصطناعي • العلامة الشخصية • هندسة الأوامر",

            heroTitle:
                "ابْنِ <span>علامتك الشخصية</span> باستخدام الذكاء الاصطناعي.",

            heroDescription:
                "أساعد الأفراد والشركات على تحويل الأفكار إلى تجارب رقمية قوية باستخدام الذكاء الاصطناعي وهندسة الأوامر.",

            exploreWork:
                "استكشف أعمالي",

            workWithMe:
                "اعمل معي",

            aboutNumber:
                "01 — من أنا",

            aboutTitle:
                "نحوّل الأفكار إلى <span>إمكانيات ذكية.</span>",

            aboutText:
                "EMAD_AHMAD هي علامة شخصية متخصصة في بناء العلامات الشخصية، وهندسة الأوامر والذكاء الاصطناعي.",

            servicesNumber:
                "02 — الخدمات",

            servicesTitle:
                "ماذا <span>أقدم؟</span>",

            service1Title:
                "بناء العلامة الشخصية",

            service1Text:
                "بناء هوية رقمية قوية تعبّر عن شخصيتك وتميزك.",

            service2Title:
                "هندسة الأوامر",

            service2Text:
                "تصميم أوامر احترافية تساعد على إطلاق الإمكانات الكاملة للذكاء الاصطناعي.",

            service3Title:
                "حلول الذكاء الاصطناعي",

            service3Text:
                "تحويل إمكانات الذكاء الاصطناعي إلى حلول عملية للأفراد والشركات.",

            workNumber:
                "03 — الأعمال",

            workTitle:
                "أعمال <span>مختارة.</span>",

            workText:
                "ستظهر هنا المشاريع والتجارب المتعلقة بالذكاء الاصطناعي وهندسة الأوامر وبناء العلامة الشخصية.",

            contactNumber:
                "04 — تواصل معي",

            contactTitle:
                "لنصنع شيئًا <span>ذكيًا.</span>",

            contactButton:
                "تواصل معي",

            footer:
                "© 2026 EMAD_AHMAD — جميع الحقوق محفوظة.",

            button:
                "English"
        }

    };


    /* ==================================================
       ELEMENTS
    ================================================== */

    const navLinks = document.querySelectorAll(".navigation a");

    const eyebrow = document.querySelector(".eyebrow");

    const heroTitle = document.querySelector(".hero h1");

    const heroDescription =
        document.querySelector(".hero-description");

    const heroButtons =
        document.querySelectorAll(".hero-buttons .btn");

    const sections =
        document.querySelectorAll(".section");

    const aboutNumber =
        document.querySelector("#about .section-number");

    const aboutTitle =
        document.querySelector("#about h2");

    const aboutText =
        document.querySelector("#about > p:not(.section-number)");

    const servicesNumber =
        document.querySelector("#services .section-number");

    const servicesTitle =
        document.querySelector("#services h2");

    const serviceCards =
        document.querySelectorAll(".service");

    const workNumber =
        document.querySelector("#work .section-number");

    const workTitle =
        document.querySelector("#work h2");

    const workText =
        document.querySelector("#work > p:not(.section-number)");

    const contactNumber =
        document.querySelector("#contact .section-number");

    const contactTitle =
        document.querySelector("#contact h2");

    const contactButton =
        document.querySelector("#contact .btn");

    const footerText =
        document.querySelector("footer p");


    /* ==================================================
       APPLY LANGUAGE
    ================================================== */

    function applyLanguage(language) {

        const text = translations[language];

        if (!text) {
            return;
        }


        /* ----------------------------------------------
           HTML LANGUAGE
        ---------------------------------------------- */

        document.documentElement.lang = language;


        /* ----------------------------------------------
           DIRECTION
        ---------------------------------------------- */

        if (language === "ar") {

            document.documentElement.dir = "rtl";
            document.body.dir = "rtl";

        } else {

            document.documentElement.dir = "ltr";
            document.body.dir = "ltr";

        }


        /* ----------------------------------------------
           NAVIGATION
        ---------------------------------------------- */

        if (navLinks.length >= 5) {

            navLinks[0].textContent = text.nav.home;
            navLinks[1].textContent = text.nav.about;
            navLinks[2].textContent = text.nav.services;
            navLinks[3].textContent = text.nav.work;
            navLinks[4].textContent = text.nav.contact;

        }


        /* ----------------------------------------------
           HERO
        ---------------------------------------------- */

        if (eyebrow) {
            eyebrow.textContent = text.eyebrow;
        }

        if (heroTitle) {
            heroTitle.innerHTML = text.heroTitle;
        }

        if (heroDescription) {
            heroDescription.textContent =
                text.heroDescription;
        }


        /* ----------------------------------------------
           HERO BUTTONS
        ---------------------------------------------- */

        if (heroButtons.length >= 2) {

            heroButtons[0].textContent =
                text.exploreWork;

            heroButtons[1].textContent =
                text.workWithMe;

        }


        /* ----------------------------------------------
           ABOUT
        ---------------------------------------------- */

        if (aboutNumber) {
            aboutNumber.textContent =
                text.aboutNumber;
        }

        if (aboutTitle) {
            aboutTitle.innerHTML =
                text.aboutTitle;
        }

        if (aboutText) {
            aboutText.textContent =
                text.aboutText;
        }


        /* ----------------------------------------------
           SERVICES
        ---------------------------------------------- */

        if (servicesNumber) {
            servicesNumber.textContent =
                text.servicesNumber;
        }

        if (servicesTitle) {
            servicesTitle.innerHTML =
                text.servicesTitle;
        }

        if (serviceCards.length >= 3) {

            serviceCards[0].querySelector("h3").textContent =
                text.service1Title;

            serviceCards[0].querySelector("p").textContent =
                text.service1Text;


            serviceCards[1].querySelector("h3").textContent =
                text.service2Title;

            serviceCards[1].querySelector("p").textContent =
                text.service2Text;


            serviceCards[2].querySelector("h3").textContent =
                text.service3Title;

            serviceCards[2].querySelector("p").textContent =
                text.service3Text;

        }


        /* ----------------------------------------------
           WORK
        ---------------------------------------------- */

        if (workNumber) {
            workNumber.textContent =
                text.workNumber;
        }

        if (workTitle) {
            workTitle.innerHTML =
                text.workTitle;
        }

        if (workText) {
            workText.textContent =
                text.workText;
        }


        /* ----------------------------------------------
           CONTACT
        ---------------------------------------------- */

        if (contactNumber) {
            contactNumber.textContent =
                text.contactNumber;
        }

        if (contactTitle) {
            contactTitle.innerHTML =
                text.contactTitle;
        }

        if (contactButton) {
            contactButton.textContent =
                text.contactButton;
        }


        /* ----------------------------------------------
           FOOTER
        ---------------------------------------------- */

        if (footerText) {
            footerText.textContent =
                text.footer;
        }


        /* ----------------------------------------------
           LANGUAGE BUTTON
        ---------------------------------------------- */

        languageButton.textContent =
            text.button;


        /* ----------------------------------------------
           SAVE LANGUAGE
        ---------------------------------------------- */

        localStorage.setItem(
            "ae-language",
            language
        );

    }


    /* ==================================================
       TOGGLE LANGUAGE
    ================================================== */

    function toggleLanguage() {

        const currentLanguage =
            document.documentElement.lang === "ar"
                ? "ar"
                : "en";

        const newLanguage =
            currentLanguage === "en"
                ? "ar"
                : "en";

        applyLanguage(newLanguage);
    }


    /* ==================================================
       BUTTON CLICK
    ================================================== */

    languageButton.addEventListener(
        "click",
        toggleLanguage
    );


    /* ==================================================
       LOAD SAVED LANGUAGE
    ================================================== */

    const savedLanguage =
        localStorage.getItem("ae-language");


    if (savedLanguage === "ar") {

        applyLanguage("ar");

    } else {

        applyLanguage("en");

    }

});
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
