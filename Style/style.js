// Start Drop down menu code 

let btn_menu = document.getElementById("btn_menu");
let dropdown = document.getElementById("myDropdown");

btn_menu.onclick = function () {
    dropdown.classList.toggle("show");
}



// Close the dropdown if the user clicks outside of it

window.onclick = (e) => {
    if(!e.target.matches("#btn_menu")){
        let myDropdown = document.getElementById("myDropdown");
        if(myDropdown.classList.contains("show")) {
            myDropdown.classList.remove("show");
        }
    } 
}


// End Drop down menu code 




// ---------------------------



let nav_pages = document.getElementById('nav_pages'),
    navToggle = document.getElementById('nav_toggle'),
    navClose = document.getElementById('close_button')
    /*===== MENU SHOW =====*/
    /* Validate if constant exists */
    if(navToggle){
        navToggle.addEventListener('click', () => {
            nav_pages.classList.add('show_menu');
        });
    }

    /*===== MENU HIDDEN =====*/
    /* Validate if constant exists */
    if(navClose){
        navClose.addEventListener('click', () =>{
            nav_pages.classList.remove('show_menu');
        })
    }
    /*=============== REMOVE MENU MOBILE ===============*/
    let navLink = document.querySelectorAll('.menu_link')
    let linkAction = () =>{
        const nav_pages = document.getElementById('nav_pages');
        // When we click on each nav__link, we remove the show-menu class
        nav_pages.classList.remove('show_menu');
    }
    navLink.forEach(n => n.addEventListener('click', linkAction));



    
// ---------------------------
// Start language Settings 

let langBtn = document.getElementById("btn_lang");
let box_select_language = document.getElementById("box_select_language");

langBtn.onclick = _ => {
    box_select_language.classList.toggle("show_lang");
}

// Remove menu when chose language
let option_lang = document.getElementById("select_lang");
let langAction = () => {
    const box_select_language = document.getElementById("box_select_language");
    box_select_language.classList.remove("show_lang");
}
option_lang.addEventListener("change", langAction);


// End language Settings 





// START HeroSection Slider 
//step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}

// END HeroSection Slider 







// Start slide [slider_section HOME PAGE]

var top_selling_section = new Swiper(".slider_wrapper", {
    slidesPerView: 0,
    spaceBetween: 20,
    sliderPerGroup: 4,
    loop: false,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    navigation: {
    nextEl: ".btn_next",
    prevEl: ".btn_prev",
    },  

    breakpoints: {
    0: {
        slidesPerView: 1,
    },
    520: {
        slidesPerView: 1,
    },
    768: {
        slidesPerView: 1,
    },
    1000: {
        slidesPerView: 2,
    },
    1200: {
        slidesPerView: 3,
    },
    },
});

// End slide [slider_section HOME PAGE]




// Start slide [Happy_section]

const land_section = new Swiper('.slider_comments', {
    autoplay:{
        delay:3000,
        disableOnInteraction: false,
    },
    loop: true,
    grabCursor: "true",
});



// End slide [Happy_section]






// Scroll REVEAL ANIMATION

let sr = ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:400,
    // reset:true,
})


sr.reveal('.about_section_title',{origin:'top'});
sr.reveal('.about_card_one , .about_card_two',{origin:'left'});
sr.reveal('.about_card_three , .about_card_four',{origin:"right"});
sr.reveal('.about_box_bnt',{origin:"bottom"});
sr.reveal('.offer_box_content',{origin:"right"});
sr.reveal('.slider_section_header',{origin:"top"});
sr.reveal('.slider_section_box_slider',{interval:500});
sr.reveal('.slider_section_btn',{origin:"bottom"});
sr.reveal('.happy_section_left_side',{origin:"left"});
sr.reveal('.happy_section_right_side',{origin:"right"});


