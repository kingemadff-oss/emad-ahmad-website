/* =========================================
   AE — EMAD_AHMAD
   LANGUAGE SYSTEM
   Arabic / English
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const languageButton = document.getElementById("languageToggle");

    if (!languageButton) {
        console.error("Language button not found.");
        return;
    }

    let language = localStorage.getItem("AE_language") || "en";


    /* =========================================
       TRANSLATION DATA
    ========================================= */

    const translations = {

        en: {

            button: "العربية",

            nav: [
                "Home",
                "About",
                "Services",
                "Work",
                "Contact"
            ],

            eyebrow:
                "AI • PERSONAL BRAND • PROMPT ENGINEERING",

            heroTitle:
                'BUILD YOUR <span>PERSONAL BRAND</span> WITH AI.',

            heroDescription:
                "I help people and businesses transform ideas into powerful digital experiences using Artificial Intelligence and Prompt Engineering.",

            heroButtons: [
                "Explore My Work",
                "Work With Me"
            ],

            aboutNumber:
                "01 — ABOUT",

            aboutTitle:
                'Turning ideas into <span>intelligent possibilities.</span>',

            aboutText:
                "EMAD_AHMAD is a personal brand focused on Personal Branding, Prompt Engineering and Artificial Intelligence.",

            servicesNumber:
                "02 — SERVICES",

            servicesTitle:
                'What I <span>Do.</span>',

            services: [
                {
                    title: "Personal Branding",
                    text: "Building a strong digital identity that represents who you are."
                },
                {
                    title: "Prompt Engineering",
                    text: "Designing powerful prompts that unlock the potential of AI."
                },
                {
                    title: "AI Solutions",
                    text: "Turning AI capabilities into practical solutions for people and businesses."
                }
            ],

            workNumber:
                "03 — WORK",

            workTitle:
                'Selected <span>Work.</span>',

            workText:
                "Projects and experiments in AI, Prompt Engineering and Personal Branding will appear here.",

            contactNumber:
                "04 — CONTACT",

            contactTitle:
                "Let's create something <span>intelligent.</span>",

            contactButton:
                "Get In Touch",

            footer:
                "© 2026 EMAD_AHMAD — All Rights Reserved."
        },


        ar: {

            button: "English",

            nav: [
                "الرئيسية",
                "من أنا",
                "الخدمات",
                "أعمالي",
                "تواصل معي"
            ],

            eyebrow:
                "الذكاء الاصطناعي • العلامة الشخصية • هندسة الأوامر",

            heroTitle:
                'ابنِ <span>علامتك الشخصية</span> باستخدام الذكاء الاصطناعي.',

            heroDescription:
                "أساعد الأفراد والشركات على تحويل الأفكار إلى تجارب رقمية قوية باستخدام الذكاء الاصطناعي وهندسة الأوامر.",

            heroButtons: [
                "استكشف أعمالي",
                "اعمل معي"
            ],

            aboutNumber:
                "01 — من أنا",

            aboutTitle:
                'نحوّل الأفكار إلى <span>إمكانات ذكية.</span>',

            aboutText:
                "EMAD_AHMAD هي علامة شخصية متخصصة في بناء العلامات الشخصية، وهندسة الأوامر والذكاء الاصطناعي.",

            servicesNumber:
                "02 — الخدمات",

            servicesTitle:
                'ماذا <span>أقدم؟</span>',

            services: [
                {
                    title: "بناء العلامة الشخصية",
                    text: "بناء هوية رقمية قوية تعبّر عن شخصيتك وتميّزك."
                },
                {
                    title: "هندسة الأوامر",
                    text: "تصميم أوامر احترافية تساعدك على الاستفادة من قوة الذكاء الاصطناعي."
                },
                {
                    title: "حلول الذكاء الاصطناعي",
                    text: "تحويل إمكانات الذكاء الاصطناعي إلى حلول عملية للأفراد والشركات."
                }
            ],

            workNumber:
                "03 — أعمالي",

            workTitle:
                'نماذج من <span>أعمالي.</span>',

            workText:
                "ستظهر هنا المشاريع والتجارب المتعلقة بالذكاء الاصطناعي وهندسة الأوامر وبناء العلامات الشخصية.",

            contactNumber:
                "04 — تواصل معي",

            contactTitle:
                "لنُنشئ شيئًا <span>ذكيًا.</span>",

            contactButton:
                "تواصل معي",

            footer:
                "© 2026 EMAD_AHMAD — جميع الحقوق محفوظة."
        }

    };


    /* =========================================
       APPLY LANGUAGE
    ========================================= */

    function applyLanguage(lang) {

        const t = translations[lang];

        if (!t) {
            return;
        }

        /* HTML direction */
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

        document.body.dir = lang === "ar" ? "rtl" : "ltr";


        /* =====================================
           HEADER
        ===================================== */

        languageButton.textContent = t.button;

        const navLinks =
            document.querySelectorAll(".navigation a");

        navLinks.forEach(function (link, index) {

            if (t.nav[index]) {
                link.textContent = t.nav[index];
            }

        });


        /* =====================================
           HERO
        ===================================== */

        const eyebrow =
            document.querySelector(".eyebrow");

        if (eyebrow) {
            eyebrow.textContent = t.eyebrow;
        }


        const heroTitle =
            document.querySelector(".hero h1");

        if (heroTitle) {
            heroTitle.innerHTML = t.heroTitle;
        }


        const heroDescription =
            document.querySelector(".hero-description");

        if (heroDescription) {
            heroDescription.textContent =
                t.heroDescription;
        }


        const heroButtons =
            document.querySelectorAll(".hero-buttons .btn");

        if (heroButtons[0]) {
            heroButtons[0].textContent =
                t.heroButtons[0];
        }

        if (heroButtons[1]) {
            heroButtons[1].textContent =
                t.heroButtons[1];
        }


        /* =====================================
           SECTIONS
        ===================================== */

        const sections =
            document.querySelectorAll(".section");


        /* ABOUT */

        if (sections[0]) {

            const number =
                sections[0].querySelector(".section-number");

            const title =
                sections[0].querySelector("h2");

            const paragraph =
                sections[0].querySelector(
                    "p:not(.section-number)"
                );

            if (number) {
                number.textContent =
                    t.aboutNumber;
            }

            if (title) {
                title.innerHTML =
                    t.aboutTitle;
            }

            if (paragraph) {
                paragraph.textContent =
                    t.aboutText;
            }
        }


        /* SERVICES */

        if (sections[1]) {

            const number =
                sections[1].querySelector(".section-number");

            const title =
                sections[1].querySelector("h2");

            if (number) {
                number.textContent =
                    t.servicesNumber;
            }

            if (title) {
                title.innerHTML =
                    t.servicesTitle;
            }


            const serviceCards =
                sections[1].querySelectorAll(".service");


            serviceCards.forEach(function (card, index) {

                if (!t.services[index]) {
                    return;
                }

                const serviceTitle =
                    card.querySelector("h3");

                const serviceText =
                    card.querySelector("p");

                if (serviceTitle) {
                    serviceTitle.textContent =
                        t.services[index].title;
                }

                if (serviceText) {
                    serviceText.textContent =
                        t.services[index].text;
                }

            });
        }


        /* WORK */

        if (sections[2]) {

            const number =
                sections[2].querySelector(".section-number");

            const title =
                sections[2].querySelector("h2");

            const paragraph =
                sections[2].querySelector(
                    "p:not(.section-number)"
                );

            if (number) {
                number.textContent =
                    t.workNumber;
            }

            if (title) {
                title.innerHTML =
                    t.workTitle;
            }

            if (paragraph) {
                paragraph.textContent =
                    t.workText;
            }
        }


        /* CONTACT */

        if (sections[3]) {

            const number =
                sections[3].querySelector(".section-number");

            const title =
                sections[3].querySelector("h2");

            const button =
                sections[3].querySelector(".btn");

            if (number) {
                number.textContent =
                    t.contactNumber;
            }

            if (title) {
                title.innerHTML =
                    t.contactTitle;
            }

            if (button) {
                button.textContent =
                    t.contactButton;
            }
        }


        /* =====================================
           FOOTER
        ===================================== */

        const footerText =
            document.querySelector("footer p");

        if (footerText) {
            footerText.textContent =
                t.footer;
        }


        /* =====================================
           SAVE LANGUAGE
        ===================================== */

        localStorage.setItem(
            "AE_language",
            lang
        );

    }


    /* =========================================
       BUTTON CLICK
    ========================================= */

    languageButton.addEventListener(
        "click",
        function () {

            if (language === "en") {
                language = "ar";
            } else {
                language = "en";
            }

            applyLanguage(language);

        }
    );


    /* =========================================
       INITIAL LANGUAGE
    ========================================= */

    applyLanguage(language);

});    navigation[4].textContent = "Contact";

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
