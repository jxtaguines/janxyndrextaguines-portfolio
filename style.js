/* =========================================
   WAIT FOR PAGE TO LOAD
========================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =========================================
       SECTION SCROLL REVEAL
    ========================================= */

    const sections = document.querySelectorAll(
        "section:not(.hero)"
    );

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },
        {
            threshold: 0.1
        }
    );

    sections.forEach(function (section) {

        observer.observe(section);

    });



    /* =========================================
       CHANGING ABILITIES
    ========================================= */

    const abilities = [

        "WEB DEVELOPER",

        "COMPUTER SCIENCE STUDENT",

        "JAVA PROGRAMMER",

        "C++ PROGRAMMER",

        "JAVASCRIPT DEVELOPER",

        "DATABASE MANAGEMENT & DEVELOPER",

        "CREATIVE PROBLEM SOLVER"

    ];


    const changingText =
        document.getElementById("changing-text");


    let abilityIndex = 0;


    if (changingText) {

        setInterval(function () {

            abilityIndex++;

            if (
                abilityIndex >=
                abilities.length
            ) {

                abilityIndex = 0;

            }


            changingText.style.animation =
                "none";

            void changingText.offsetWidth;

            changingText.style.animation =
                "textFade .5s ease";


            changingText.textContent =
                abilities[abilityIndex];

        }, 1500);

    }



    /* =========================================
       BACK TO TOP
    ========================================= */

    const backToTop =
        document.getElementById("backToTop");


    if (backToTop) {

        window.addEventListener(
            "scroll",
            function () {

                if (window.scrollY > 500) {

                    backToTop.classList.add("show");

                } else {

                    backToTop.classList.remove("show");

                }

            }
        );


        backToTop.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                window.scrollTo({

                    top: 0,

                    behavior: "smooth"

                });

            }
        );

    }



    /* =========================================
       WEBSITE EXPERIENCE SLIDER
    ========================================= */

    const experienceLaptopImage =
        document.getElementById(
            "experienceLaptopImage"
        );


    const experienceTrack =
        document.querySelector(
            ".website-projects"
        );


    let experienceIndex = 0;

    let experienceRunning = false;



    /* =========================================
       PROJECT IMAGES
    ========================================= */

    const experienceImages = [

        "assets/grade.png",

        "assets/portal.png",

        "assets/index1.png",

        "assets/attendance.png",

        "assets/profiling.png",

        "assets/index.png",

        "assets/index2.png",

        "assets/index3.png",

        "assets/index4.png",

        "assets/index5.png",

        "assets/index6.png"

    ];



    /* =========================================
       MOVE WEBSITE PROJECTS
    ========================================= */

    function moveExperienceProjects() {

        if (
            experienceRunning ||
            !experienceTrack ||
            !experienceLaptopImage
        ) {

            return;

        }


        experienceRunning = true;


        const firstProject =
            experienceTrack.firstElementChild;


        if (!firstProject) {

            experienceRunning = false;

            return;

        }


        const projectWidth =
            firstProject.offsetWidth;


        const gap =
            parseFloat(
                getComputedStyle(
                    experienceTrack
                ).gap
            ) || 0;



        /* =====================================
           MOVE PROJECT CARDS
        ===================================== */

        experienceTrack.style.transition =
    "transform .8s cubic-bezier(.65,0,.35,1)";


        experienceTrack.style.transform =
            `translateX(-${projectWidth + gap}px)`;



        /* =====================================
           CHANGE LAPTOP SCREEN
        ===================================== */

        setTimeout(function () {

            experienceIndex++;


            if (
                experienceIndex >=
                experienceImages.length
            ) {

                experienceIndex = 0;

            }


            experienceLaptopImage.style.opacity =
                "0";


            experienceLaptopImage.style.transform =
                "scale(.96)";


            setTimeout(function () {

                experienceLaptopImage.src =
                    experienceImages[
                        experienceIndex
                    ];


                experienceLaptopImage.style.opacity =
                    "1";


                experienceLaptopImage.style.transform =
                    "scale(1)";

            }, 250);

        }, 500);



        /* =====================================
           RESET PROJECT TRACK
        ===================================== */

        setTimeout(function () {

            experienceTrack.appendChild(
                firstProject
            );


            experienceTrack.style.transition =
                "none";


            experienceTrack.style.transform =
                "translateX(5vw)";


            experienceRunning = false;

        }, 1300);

    }



    /* =========================================
       START AUTOMATIC MOVEMENT
    ========================================= */

    if (
        experienceTrack &&
        experienceLaptopImage
    ) {

        setInterval(function () {
    moveExperienceProjects();
}, 2200);

    }



    /* =========================================
       CASE STUDY MODAL
       
       HTML already uses:
       onclick="openCaseStudy('grading')"
       
       So we DO NOT add another click
       event to .view-project here.
    ========================================= */

    const modals =
        document.querySelectorAll(
            ".case-study-modal"
        );


    /* =========================================
       CLOSE BUTTONS
    ========================================= */

    const closeButtons =
        document.querySelectorAll(
            ".case-study-close"
        );


    closeButtons.forEach(
        function (closeButton) {

            closeButton.addEventListener(
                "click",
                function () {

                    const modal =
                        this.closest(
                            ".case-study-modal"
                        );


                    if (modal) {

                        modal.classList.remove(
                            "show"
                        );

                    }


                    document.body.style.overflow =
                        "";

                }
            );

        }
    );



    /* =========================================
       CLOSE MODAL OUTSIDE
    ========================================= */

    modals.forEach(
        function (modal) {

            modal.addEventListener(
                "click",
                function (event) {

                    if (
                        event.target ===
                        modal
                    ) {

                        modal.classList.remove(
                            "show"
                        );

                        document.body.style.overflow =
                            "";

                    }

                }
            );

        }
    );



    /* =========================================
       ESC KEY
    ========================================= */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key ===
                "Escape"
            ) {

                modals.forEach(
                    function (modal) {

                        modal.classList.remove(
                            "show"
                        );

                    }
                );


                document.body.style.overflow =
                    "";

            }

        }
    );

});
