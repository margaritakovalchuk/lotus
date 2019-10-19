window.onload = function () {
    new fullpage('#fullpage', {
        //Navigation
        lockAnchors: false,
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage', 'seventhPage', 'eighthPage'],

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        // scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: true,
        // loopTop: false,
        // loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        dragAndMove: false,
        offsetSections: false,
        resetSliders: false,
        fadingEffect: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        scrollOverflowReset: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true,
        sectionsColor: ['#f9f5f4', '#f9f5f4', '#f9f5f4', '#f9f5f4', '#f9f5f4', '#f9f5f4', '#f9f5f4', '#f9f5f4'],
        paddingTop: '50px',
        paddingBottom: '50px',
        // fixedElements: '#header',
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveSlides: false,
        // parallax: false,
        // parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
        cards: false,
        cardsOptions: {perspective: 100, fadeContent: true, fadeBackground: true},

        //Custom selectors
        sectionSelector: '.section',
        // slideSelector: '.slide',

        lazyLoading: true,

        //events
        onLeave: function (origin, destination, direction) {
        },
        afterLoad: function (origin, destination, direction) {
        },
        afterRender: function () {
        },
        afterResize: function (width, height) {
        },
        afterReBuild: function () {
        },
        afterResponsive: function (isResponsive) {
        },
        afterSlideLoad: function (section, origin, destination, direction) {
        },
        onSlideLeave: function (section, origin, destination, direction) {
        }
    });
};

var form = (function () {
    const form = document.querySelector('.registry'),
        discountBlock = document.querySelector('.discount'),
        notification = document.querySelector('.col-md-5 .alert__notification'),
        pager = document.querySelector('.alert__notification + .col-md-1'),
        priceBlock = document.querySelector('.prices'),
        priceList = document.querySelector('.prices__list'),
        response = document.querySelector('.response-block'),
        contacts = document.querySelector('.contact .button__sign-in'),
        closeForm = document.querySelector('.close-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        discountBlock.classList.add('d-none');
        notification.classList.remove('d-none');
        pager.classList.remove('offset-md-1');
    });

    priceList.addEventListener('submit', function (event) {
        event.preventDefault();
        priceBlock.classList.remove('prices');
        priceBlock.classList.add('alert__notification');
        // priceList.classList.add();
    });

    contacts.addEventListener('click', function (event) {
        event.preventDefault();
        document.querySelector('.contact').classList.add('d-none');
        response.classList.remove('d-none');
    });

    closeForm.addEventListener('click', function (event) {
        event.preventDefault();
        response.classList.add('d-none');
        document.querySelector('.contact').classList.remove('d-none');
    });

})();

// var nav = (function () {
//     var nav = document.querySelector('.nav__burger'),
//         lineShort = document.querySelector('.short-line');
//     nav.addEventListener('click', function () {
//         lineShort.classList.add('d-none');
//     })
//
// })();


