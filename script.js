/* =====================================================
AE — EMAD_AHMAD
LANGUAGE + MOBILE MENU
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =================================================
    ELEMENTS
    ================================================= */

    const languageButton = document.getElementById("languageToggle");
    const menuButton = document.getElementById("menuBtn");
    const navigation = document.getElementById("siteNav");


    /* =================================================
    TRANSLATIONS
    ================================================= */

    const translations = {

        en: {

            pageTitle: "AE | EMAD_AHMAD",

            languageButton: "العربية",

            navHome: "Home",
            navAbout: "About",
            navServices: "Services",
            navWork: "Work",
            navImpact: "Impact",
            navContact: "Contact",


            /* HERO */

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


            /* ABOUT */

            aboutNumber:
                "01 — ABOUT",

            aboutTitle:
                "Turning ideas into <span>intelligent possibilities.</span>",

            aboutText:
                "I help individuals and businesses build meaningful digital identities and unlock the potential of Artificial Intelligence. Through Personal Branding and Prompt Engineering, I transform ideas into clear strategies, powerful content and intelligent digital experiences.",

            aboutPoint1Title:
                "Think",

            aboutPoint1Text:
                "Understanding the idea, the person and the goal before turning them into a clear digital direction.",

            aboutPoint2Title:
                "Engineer",

            aboutPoint2Text:
                "Designing thoughtful prompts, systems and AI workflows that turn complexity into useful results.",

            aboutPoint3Title:
                "Build",

            aboutPoint3Text:
                "Creating practical digital experiences that connect technology, creativity and real-world value.",


            /* SERVICES */

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


            /* WORK */

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


            /* IMPACT */

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


            /* CONTACT */

            contactNumber:
                "05 — CONTACT",

            contactTitle:
                "Let's create something <span>intelligent.</span>",

            contactText:
                "Have an idea, a project or a challenge? Let's turn it into something meaningful.",

            contactButton:
                "Get In Touch",


            /* FOOTER */

            footerText:
                "© 2026 EMAD_AHMAD — All Rights Reserved."
        },


        /* =================================================
        ARABIC
        ================================================= */

        ar: {

            pageTitle: "AE | EMAD_AHMAD",

            languageButton: "English",

            navHome: "الرئيسية",
            navAbout: "من أنا",
            navServices: "الخدمات",
            navWork: "أعمالي",
            navImpact: "الأثر",
            navContact: "تواصل معي",


            /* HERO */

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


            /* ABOUT */

            aboutNumber:
                "01 — من أنا",

            aboutTitle:
                'نحوّل الأفكار إلى <span>إمكانات ذكية.</span>',

            aboutText:
                "أساعد الأفراد والشركات على بناء هويات رقمية مؤثرة واستثمار إمكانات الذكاء الاصطناعي. ومن خلال بناء العلامة الشخصية وهندسة الأوامر، أحوّل الأفكار إلى استراتيجيات واضحة، ومحتوى مؤثر، وتجارب رقمية ذكية.",

            aboutPoint1Title:
                "نفكّر",

            aboutPoint1Text:
                "أفهم الفكرة والشخص والهدف أولًا، ثم أحوّلها إلى اتجاه رقمي واضح ومدروس.",

            aboutPoint2Title:
                "نهندس",

            aboutPoint2Text:
                "أصمّم الأوامر والأنظمة وسير العمل بالذكاء الاصطناعي لتحويل التعقيد إلى نتائج مفيدة.",

            aboutPoint3Title:
                "نبني",

            aboutPoint3Text:
                "أنشئ تجارب رقمية عملية تربط بين التقنية والإبداع والقيمة الحقيقية.",


            /* SERVICES */

            servicesNumber:
                "02 — الخدمات",

            servicesTitle:
                'ماذا <span>أقدّم؟</span>',

            service1Title:
                "بناء العلامة الشخصية",

            service1Text:
                "بناء هوية رقمية قوية تعبّر عن شخصيتك، خبرتك وما تقدمه، وتساعدك على بناء حضور أكثر وضوحًا وتأثيرًا.",

            service2Title:
                "هندسة الأوامر",

            service2Text:
                "تصميم أوامر وأنظمة عمل منظمة تساعدك على الحصول على نتائج أفضل وأوضح وأكثر فائدة من الذكاء الاصطناعي.",

            service3Title:
                "حلول الذكاء الاصطناعي",

            service3Text:
                "تحويل إمكانات الذكاء الاصطناعي إلى حلول عملية للأفراد وصنّاع المحتوى والشركات.",

            serviceLink:
                "اكتشف المزيد",


            /* WORK */

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
                "أنظمة Prompts مصممة للحصول على نتائج أكثر دقة وتحكمًا وفائدة.",


            /* IMPACT */

            impactNumber:
                "04 — الأثر",

            impactTitle:
                'يجب أن تصنع التقنية <span>قيمة.</span>',

            impactText:
                "هدفي ليس فقط استخدام الذكاء الاصطناعي، بل جعله أكثر وضوحًا وعملية وفائدة للأفراد والشركات، وتحويله من تقنية معقدة إلى أداة يمكن الاستفادة منها بوعي.",

            impact1Title:
                "التثقيف",

            impact1Text:
                "تبسيط الذكاء الاصطناعي وجعله أسهل للفهم والتعلّم والاستخدام.",

            impact2Title:
                "التمكين",

            impact2Text:
                "مساعدة الناس وأصحاب المشاريع على تحويل أفكارهم إلى فرص ونتائج عملية.",

            impact3Title:
                "الابتكار",

            impact3Text:
                "بناء أفكار وحلول ذات معنى باستخدام الذكاء الاصطناعي.",


            /* CONTACT */

            contactNumber:
                "05 — تواصل معي",

            contactTitle:
                'لنصنع شيئًا <span>ذكيًا.</span>',

            contactText:
                "لديك فكرة أو مشروع أو تحدٍّ؟ لنحوّله معًا إلى شيء عملي وذي قيمة.",

            contactButton:
                "تواصل معي",


            /* FOOTER */

            footerText:
                "© 2026 EMAD_AHMAD — جميع الحقوق محفوظة."
        }

    };


    /* =================================================
    APPLY LANGUAGE
    ================================================= */

    function applyLanguage(language) {

        const content = translations[language];

        if (!content) {
            return;
        }

        document.documentElement.lang = language;

        document.documentElement.dir =
            language === "ar" ? "rtl" : "ltr";

        document.title = content.pageTitle;


        const elements =
            document.querySelectorAll("[data-i18n]");


        elements.forEach((element) => {

            const key =
                element.getAttribute("data-i18n");

            if (
                Object.prototype.hasOwnProperty.call(
                    content,
                    key
                )
            ) {
                element.innerHTML = content[key];
            }

        });


        if (languageButton) {
            languageButton.textContent =
                content.languageButton;
        }


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
            () => {

                const currentLanguage =
                    document.documentElement.lang || "en";

                const nextLanguage =
                    currentLanguage === "en"
                        ? "ar"
                        : "en";

                applyLanguage(nextLanguage);
            }
        );

    }


    /* =================================================
    MOBILE MENU
    ================================================= */

    if (menuButton && navigation) {

        menuButton.addEventListener(
            "click",
            () => {

                const isOpen =
                    navigation.classList.toggle("active");

                menuButton.classList.toggle(
                    "active",
                    isOpen
                );

                menuButton.setAttribute(
                    "aria-expanded",
                    isOpen ? "true" : "false"
                );

            }
        );


        /* CLOSE MENU AFTER CLICKING A LINK */

        const navLinks =
            navigation.querySelectorAll("a");


        navLinks.forEach((link) => {

            link.addEventListener(
                "click",
                () => {

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

        });

    }


    /* =================================================
    INITIAL LANGUAGE
    ================================================= */

    let savedLanguage =
        localStorage.getItem("AE_language");


    if (
        savedLanguage !== "ar" &&
        savedLanguage !== "en"
    ) {
        savedLanguage = "en";
    }


    applyLanguage(savedLanguage);

});
