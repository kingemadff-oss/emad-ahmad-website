/* =====================================================
   AE — EMAD_AHMAD
   LANGUAGE + MOBILE MENU
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* =================================================
       ELEMENTS
    ================================================= */

    const languageButton =
        document.getElementById("languageToggle");

    const menuButton =
        document.getElementById("menuBtn");

    const navigation =
        document.getElementById("siteNav");


    /* =================================================
       TRANSLATIONS
    ================================================= */

    const translations = {

        en: {

            pageTitle:
                "AE | EMAD_AHMAD",

            languageButton:
                "العربية",

            navHome:
                "Home",

            navAbout:
                "About",

            navServices:
                "Services",

            navWork:
                "Work",

            navImpact:
                "Impact",

            navContact:
                "Contact",


            heroEyebrow:
                "AI • PERSONAL BRAND • PROMPT ENGINEERING",

            heroTitle:
                "BUILD YOUR <span>PERSONAL BRAND</span> WITH AI.",

            heroDescription:
                "I help people and businesses transform ideas into powerful digital experiences using Artificial Intelligence and Prompt Engineering.",

            heroWorkButton:
                "Explore My Work",

            heroContactButton:
                "Work With Me",

            tagBrand:
                "Personal Branding",

            tagPrompt:
                "Prompt Engineering",

            tagAI:
                "Artificial Intelligence",

            visualSubtitle:
                "HUMAN × AI",


            aboutNumber:
                "01 — ABOUT",

            aboutTitle:
                "Turning ideas into <span>intelligent possibilities.</span>",

            aboutText:
                "EMAD_AHMAD is a personal brand focused on Personal Branding, Prompt Engineering and Artificial Intelligence.",

            aboutPoint1Title:
                "Think",

            aboutPoint1Text:
                "Turning ideas into clear digital direction.",

            aboutPoint2Title:
                "Engineer",

            aboutPoint2Text:
                "Designing effective AI workflows and prompts.",

            aboutPoint3Title:
                "Build",

            aboutPoint3Text:
                "Creating practical digital experiences.",


            servicesNumber:
                "02 — SERVICES",

            servicesTitle:
                "What I <span>Do.</span>",

            service1Title:
                "Personal Branding",

            service1Text:
                "Building a strong digital identity that represents who you are, what you know and what you offer.",

            service2Title:
                "Prompt Engineering",

            service2Text:
                "Designing structured prompts and AI workflows to achieve better, clearer and more useful results.",

            service3Title:
                "AI Solutions",

            service3Text:
                "Turning the capabilities of AI into practical solutions for individuals, creators and businesses.",

            serviceLink:
                "Discover",


            workNumber:
                "03 — WORK",

            workTitle:
                "Selected <span>Work.</span>",

            workText:
                "A growing collection of projects, experiments and creative work in AI, Prompt Engineering and Personal Branding.",

            work1Title:
                "AI Experiments",

            work1Text:
                "Practical experiments exploring the possibilities of artificial intelligence.",

            work2Title:
                "Personal Brand Systems",

            work2Text:
                "Visual and strategic systems designed to create a stronger personal presence.",

            work3Title:
                "Prompt Engineering",

            work3Text:
                "Prompt systems created for more controlled and useful AI results.",


            impactNumber:
                "04 — IMPACT",

            impactTitle:
                "Technology should create <span>value.</span>",

            impactText:
                "My goal is not only to use AI, but to make it more understandable, practical and useful for people and businesses.",

            impact1Title:
                "EDUCATE",

            impact1Text:
                "Make AI easier to understand and use.",

            impact2Title:
                "EMPOWER",

            impact2Text:
                "Help people turn ideas into opportunities.",

            impact3Title:
                "CREATE",

            impact3Text:
                "Build meaningful solutions with AI.",


            contactNumber:
                "05 — CONTACT",

            contactTitle:
                "Let's create something <span>intelligent.</span>",

            contactText:
                "Have an idea, a project or a challenge? Let's turn it into something meaningful.",

            contactButton:
                "Get In Touch",


            footerText:
                "© 2026 EMAD_AHMAD — All Rights Reserved."

        },


        ar: {

            pageTitle:
                "AE | EMAD_AHMAD",

            languageButton:
                "English",

            navHome:
                "الرئيسية",

            navAbout:
                "من أنا",

            navServices:
                "الخدمات",

            navWork:
                "أعمالي",

            navImpact:
                "الأثر",

            navContact:
                "تواصل معي",


            heroEyebrow:
                "الذكاء الاصطناعي • العلامة الشخصية • هندسة الأوامر",

            heroTitle:
                'ابنِ <span>علامتك الشخصية</span> باستخدام الذكاء الاصطناعي.',

            heroDescription:
                "أساعد الأفراد والشركات على تحويل الأفكار إلى تجارب رقمية قوية باستخدام الذكاء الاصطناعي وهندسة الأوامر.",

            heroWorkButton:
                "استكشف أعمالي",

            heroContactButton:
                "اعمل معي",

            tagBrand:
                "بناء العلامة الشخصية",

            tagPrompt:
                "هندسة الأوامر",

            tagAI:
                "الذكاء الاصطناعي",

            visualSubtitle:
                "الإنسان × الذكاء الاصطناعي",


            aboutNumber:
                "01 — من أنا",

            aboutTitle:
                'نحوّل الأفكار إلى <span>إمكانات ذكية.</span>',

            aboutText:
                "EMAD_AHMAD هي علامة شخصية تركز على بناء العلامة الشخصية، وهندسة الأوامر والذكاء الاصطناعي.",

            aboutPoint1Title:
                "نفكّر",

            aboutPoint1Text:
                "تحويل الأفكار إلى اتجاه رقمي واضح.",

            aboutPoint2Title:
                "نهندس",

            aboutPoint2Text:
                "تصميم أوامر وأنظمة عمل فعّالة للذكاء الاصطناعي.",

            aboutPoint3Title:
                "نبني",

            aboutPoint3Text:
                "إنشاء تجارب رقمية عملية وذات قيمة.",


            servicesNumber:
                "02 — الخدمات",

            servicesTitle:
                'ماذا <span>أقدّم؟</span>',

            service1Title:
                "بناء العلامة الشخصية",

            service1Text:
                "بناء هوية رقمية قوية تعبّر عن شخصيتك، معرفتك وما تقدمه.",

            service2Title:
                "هندسة الأوامر",

            service2Text:
                "تصميم أوامر وأنظمة عمل منظمة للحصول على نتائج أفضل وأوضح وأكثر فائدة من الذكاء الاصطناعي.",

            service3Title:
                "حلول الذكاء الاصطناعي",

            service3Text:
                "تحويل إمكانات الذكاء الاصطناعي إلى حلول عملية للأفراد وصنّاع المحتوى والشركات.",

            serviceLink:
                "اكتشف المزيد",


            workNumber:
                "03 — أعمالي",

            workTitle:
                'نماذج من <span>أعمالي.</span>',

            workText:
                "مجموعة متنامية من المشاريع والتجارب والأعمال الإبداعية في الذكاء الاصطناعي وهندسة الأوامر وبناء العلامة الشخصية.",

            work1Title:
                "تجارب الذكاء الاصطناعي",

            work1Text:
                "تجارب عملية لاستكشاف إمكانات الذكاء الاصطناعي.",

            work2Title:
                "أنظمة العلامة الشخصية",

            work2Text:
                "أنظمة بصرية واستراتيجية تساعد على بناء حضور شخصي أقوى.",

            work3Title:
                "هندسة الأوامر",

            work3Text:
                "أنظمة Prompts مصممة للحصول على نتائج أكثر دقة وفائدة.",


            impactNumber:
                "04 — الأثر",

            impactTitle:
                'يجب أن تصنع التقنية <span>قيمة.</span>',

            impactText:
                "هدفي ليس فقط استخدام الذكاء الاصطناعي، بل جعله أكثر وضوحًا وعملية وفائدة للأفراد والشركات.",

            impact1Title:
                "التثقيف",

            impact1Text:
                "جعل الذكاء الاصطناعي أسهل للفهم والاستخدام.",

            impact2Title:
                "التمكين",

            impact2Text:
                "مساعدة الناس على تحويل أفكارهم إلى فرص.",

            impact3Title:
                "الابتكار",

            impact3Text:
                "بناء حلول ذات معنى باستخدام الذكاء الاصطناعي.",


            contactNumber:
                "05 — تواصل معي",

            contactTitle:
                'لنصنع شيئًا <span>ذكيًا.</span>',

            contactText:
                "لديك فكرة أو مشروع أو تحدٍّ؟ لنحوّله معًا إلى شيء ذي قيمة.",

            contactButton:
                "تواصل معي",


            footerText:
                "© 2026 EMAD_AHMAD — جميع الحقوق محفوظة."

        }

    };


    /* =================================================
       APPLY LANGUAGE
    ================================================= */

    function applyLanguage(language) {

        const content =
            translations[language];

        if (!content) {
            return;
        }


        /* HTML LANGUAGE */

        document.documentElement.lang =
            language;


        /* RTL / LTR */

        document.documentElement.dir =
            language === "ar"
                ? "rtl"
                : "ltr";


        /* PAGE TITLE */

        document.title =
            content.pageTitle;


        /* TRANSLATABLE ELEMENTS */

        const elements =
            document.querySelectorAll(
                "[data-i18n]"
            );


        elements.forEach(function (element) {

            const key =
                element.getAttribute(
                    "data-i18n"
                );


            if (
                Object.prototype.hasOwnProperty.call(
                    content,
                    key
                )
            ) {

                element.innerHTML =
                    content[key];

            }

        });


        /* LANGUAGE BUTTON */

        if (languageButton) {

            languageButton.textContent =
                content.languageButton;

        }


        /* SAVE */

        localStorage.setItem(
            "AE_language",
            language
        );

    }


    /* =================================================
       LANGUAGE BUTTON
    ================================================= */

    if (languageButton) {

        languageButton.addEventListener(
            "click",
            function () {

                const currentLanguage =
                    document.documentElement.lang ||
                    "en";


                const nextLanguage =
                    currentLanguage === "en"
                        ? "ar"
                        : "en";


                applyLanguage(
                    nextLanguage
                );

            }
        );

    }


    /* =================================================
       MOBILE MENU
    ================================================= */

    if (
        menuButton &&
        navigation
    ) {

        menuButton.addEventListener(
            "click",
            function () {

                const isOpen =
                    navigation.classList.toggle(
                        "active"
                    );


                menuButton.classList.toggle(
                    "active",
                    isOpen
                );


                menuButton.setAttribute(
                    "aria-expanded",
                    isOpen
                        ? "true"
                        : "false"
                );

            }
        );


        /* CLOSE AFTER NAVIGATION */

        const navLinks =
            navigation.querySelectorAll(
                "a"
            );


        navLinks.forEach(
            function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        navigation.classList.remove(
                            "active"
                        );


                        menuButton.classList.remove(
                            "active"
                        );


                        menuButton.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    }
                );

            }
        );

    }


    /* =================================================
       INITIAL LANGUAGE
    ================================================= */

    const savedLanguage =
        localStorage.getItem(
            "AE_language"
        );


    const initialLanguage =
        savedLanguage === "ar"
            ? "ar"
            : "en";


    applyLanguage(
        initialLanguage
    );

});
