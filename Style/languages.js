// titles
let translations = {
    en: {
        // Start nav
        Home:       "Home",
        Offers:     "Offers",
        Flights:    "Flights",
        Hotels:     "Hotels",
        Rent_a_Car: "Rent_a_Car",
        Cruises:    "Cruises",
        About_Us:    "About_Us",
        Contacts:   "Contacts",
        Login:      "Login",
        Language:   "Language",
        English:    "English",
        العربية:   "العربية", 
        //End nav
        // Start hero section
        Discover_The_World: "Discover_The_World",
        Discover: "Discover",
        SEE_MORE: "SEE_MORE",
        Italy: "Italy",
        San_Francisco: "San_Francisco",
        London: "London",
        paris: "paris",
        // End hero section
        // Start About section
        Dahab:"Dahab",
        Dubai:"Dubai",
        Maldives:"Maldives",
        Mecca:"Mecca",
        ALL_TRIPS:"ALL_TRIPS",
        // End About section

        // Start Offer section
        DETAILS : "DETAILS",
        // End offer section

        // Start Slider_section section
        POPULAR_CRUISES:"POPULAR_CRUISES",
        Spain:"Spain",
        Holland:"Holland",
        Portugal:"Portugal",
        Bahamas:"Bahamas",
        Reviews:"Reviews",
        Night:"Night",
        ALL_CRUISES:"ALL_CRUISES",
        // End Slider_Section section
        // Start footer section
        Follow_Us :"Follow_Us",
        Flights :"Flights",
        CRUISES :"CRUISES",
        Newsletter: "Newsletter",
        Quick_Links:"Quick_Links",
        Customer_Support : "Customer_Support",
        // END footer section
    },

    ar: {
        // Start nav
        Home:      "الصفحة الرئيسية",
        Offers:     "عروض",
        Flights:    "الرحلات الجوية",
        Hotels:     "الفنادق",
        Rent_a_Car:  "استئجار سيارة",
        Cruises:    "الرحلات البحرية",
        About_Us:      "من نحن",
        Contacts:   "تواصل معنا",
        Login:     "تسجيل الدخول",
        Language:   "إختر لغة",
        English:   "English",
        العربية:   "العربية",
        //End nav
        // Start hero section
        Discover_The_World: "اكتشف_العالم",
        Discover: "اكتشف",
        SEE_MORE: "المزيد",
        Italy: "إيطاليا",
        San_Francisco: "سان فرانسيسكو",
        London: "لندن",
        paris: "باريس",
        // End hero section
        // Start About section
        Dahab:"دهب",
        Dubai:"دبي",
        Maldives:"جزر المالديف",
        Mecca:"مكة",
        ALL_TRIPS:"جميع الرحلات",
        // End About section

        // Start Offer section
        DETAILS : "تفاصيل",
        // End offer section

        // Start Slider_section section
        POPULAR_CRUISES:"أشهر الرحلات البحرية..",
        // End Slider_Section section

        // Start Slider_section section
        Spain:"إسبانيا",
        Holland:"هولندا",
        Portugal:"البرتغال",
        Bahamas:"جزر البهاما",
        Reviews:"تقييمات    ",
        Night:"ليالي",
        ALL_CRUISES:"جميع الرحلات البحرية",
        // End Slider_Section section
        // Start footer section
        Follow_Us :"تابعنا علي",
        Flights :"الرحلات الجوية",
        CRUISES :"الرحلات البحرية",
        Newsletter: "النشرة الإخبارية",
        Quick_Links:"روابط سريعة",
        Customer_Support : "دعم العملاء",
        // END footer section
    },
};



let selectLanguage = document.getElementById("select_lang");
selectLanguage.addEventListener("change", (e) => {
    setLanguage(e.target.value);
    localStorage.setItem("lang", e.target.value)
});

document.addEventListener("DOMContentLoaded", () => {
    setLanguage(localStorage.getItem("lang"));
});

let setLanguage = (language) => {
    let elements = document.querySelectorAll("[data-i18n]");
    elements.forEach((element) => {
        let translateKey = element.getAttribute("data-i18n");
        element.innerHTML = translations[language][translateKey] ;
        element.innerHTML = element.innerHTML.replaceAll("_"," ");
    });
    document.dir = language === "ar" ? "rtl" : "ltr";
    if (language === "ar"){
        // make the language selected when 
        let option = document.getElementById("Arabic");
        option.setAttribute("selected","selected");
        // change link Style to Arabic when Select Arabic language
        let link_css = document.getElementById("link_css");
        link_css.href = "Style/style_rtl.css";
        // make dir cards rtl when language Arabic
        let cards = document.querySelectorAll(".swiper-slide");
        for (i=0; i < cards.length; i++){
            cards[i].setAttribute("dir","rtl");
        }
    }else{
        let link_css = document.getElementById("link_css");
        link_css.href = "Style/style.css";
        // make dir cards rtl when language Arabic
        let cards = document.querySelectorAll(".swiper-slide");
        for (i=0; i < cards.length; i++){
            cards[i].setAttribute("dir","ltr"); 
        }
    }

    if (language === "ar"){
        // Translate Text [1] [Hero Section HOME Page]...
        let text_1 = document.querySelectorAll("#text_1");
        for (i=0; i < text_1.length; i++){
            text_1[i].innerHTML = "رحلة لمدة 7 أيام في أفضل فنادق البلاد مع برنامج سياحي رائع وزيارة أشهر وأفضل المعالم السياحية في البلاد وزيارة الشواطئ (الرحلة تشمل الإقامة وتذكرة الطائرة لعدد 3 أشخاص كحد أقصى)...";
        };
        // Translate Texts in  [About Section HOME Page] ...
        let text_2 = document.getElementById("question_1");
        let text_3 = document.getElementById("answer");
        let text_4 = document.getElementById("text_4");
        let text_5 = document.getElementById("text_5");
        let text_6 = document.getElementById("text_6");
        let text_7 = document.getElementById("text_7");
        text_2.innerHTML = "لماذا نحن الأفضل ؟";
        text_3.innerHTML = " لأننا نوفر لك كل ما تحتاجه في مكان واحد، يمكنك حجز فندق وتأجير سيارة من خلالنا، بالإضافة إلى رحلاتنا البرية والبحرية الممتازة.";
        text_4.innerHTML = "رحلة كاملة لمدة 7 أيام في أجمل الفنادق المطلة على البحر في دهب شاملة الإقامة ورحلات السفاري...";
        text_5.innerHTML = "رحلة سياحية في دبي لمدة 20 يوم لرؤية أجمل مدينة عربية في العالم وأكثرها زيارة اشهر المعالم السياحية في العالم ...";
        text_6.innerHTML = "رحلة صيفية لمدة 15 يوم إلى واحدة من أجمل جزر العالم..جزر المالديف..";
        text_7.innerHTML = "رحلات الحج والعمرة الإقامة تبدأ من 15 يوم إلى 60 يوم في أفضل الفنادق في المملكة المملكة العربية السعودية";
        // Translate Texts in [Ofeer Section HOME Page] ...
        let text_8  = document.getElementById("text_8");
        let text_9  = document.getElementById("text_9");
        let text_10 = document.getElementById("text_10");
        let text_11 = document.getElementById("text_11");
        text_8.innerHTML  = "رحلة إجازة الصيف";
        text_9.innerHTML  = "رحلة الصيف: عشرة أيام إلى أحد أجمل شواطئ العالم، جزر المالديف، في أجمل الفنادق وأرخص الأسعار..سعر الفرد 149.00 دولار";
        text_10.innerHTML = "من : مصر (القاهرة)";
        text_11.innerHTML = "للشخص";
        // Translate Texts in [Slider Section HOME Page] ...
        let text_12 = document.getElementById("text_12");
        let text_13 = document.querySelectorAll("#text_13");
        let text_14 = document.querySelectorAll("#text_14");
        text_12.innerHTML = "شاهد بعضًا من أفضل وأرخص الرحلات البحرية المميزة لدينا";
        for (i = 0; i < text_13.length && i < text_14.length; i++) {
            text_13[i].innerHTML = "مدة السفر 5 أيام على متن السفينة";
            text_14[i].innerHTML = "اقضي أجمل 15 يومًا مع عائلتك في واحدة من أجمل دول العالم";
        }
        // Translate Texts in [Happy Section HOME Page] ...
        let text_15 = document.getElementById("text_15");
        text_15.innerHTML="بعض تعليقات العملاء";
        // translate texts in [footer Section]
        let text_16 = document.getElementById("text_16");
        let text_17 = document.querySelectorAll("#text_17");
        text_16.innerHTML = "اكتشف العالم من خلالنا";
        text_17.forEach( (ele) => {
            ele.innerHTML="رقم هاتفي الشخصي";
        });
    }else{
        // Translate Text [1]...
        let text_1 = document.querySelectorAll("#text_1");
        for (i=0; i < text_1.length; i++){
            text_1[i].innerHTML = "A 7-day trip in the best hotels in the country with a great tourist program and visiting the most famous and best tourist attractions in the country and visiting the beaches (the trip includes accommodation and a plane ticket for a maximum of 3 people)...";
        };
        // Translate Texts in [About Section HOME page] ...
        let text_2 = document.getElementById("question_1");
        let text_3 = document.getElementById("answer");
        let text_4 = document.getElementById("text_4");
        let text_5 = document.getElementById("text_5");
        let text_6 = document.getElementById("text_6");
        let text_7 = document.getElementById("text_7");
        text_2.innerHTML = "WHY WE ARE THE BEST ?";
        text_3.innerHTML="we provide you with everything you need in one place, you can book a hotel and car rental through us, in addition to our excellent land and sea trips...";
        text_4.innerHTML = "A full trip for 7 days in the most beautiful hotels overlooking the sea in Dahab, including accommodation and safari trips...";
        text_5.innerHTML = "A 20-day tourist trip in Dubai to see the most beautiful Arab city in the world and visit the most famous tourist attractions in the world...";
        text_6.innerHTML = "A 15-day summer trip to one of the most beautiful islands in the world...the Maldives..";
        text_7.innerHTML = "Hajj and Umrah trips, accommodation starting from 15 days to 60 days in the best hotels in the Kingdom of Saudi Arabia";
        // Translate Texts in [Ofeer Section HOME page] ...
        let text_8  = document.getElementById("text_8");
        let text_9  = document.getElementById("text_9");
        let text_10 = document.getElementById("text_10");
        let text_11 = document.getElementById("text_11");   
        text_8.innerHTML  = "Summer vacation trip";
        text_9.innerHTML  = "Summer trip: ten days to one of the most beautiful beaches in the world, the Maldives, in the most beautiful hotels and the cheapest prices..The price per person is $149.00";
        text_10.innerHTML = "from: Egypt (Cairo)";
        text_11.innerHTML = "person";
        // Translate Texts in [Slider Section HOME page] ...
        let text_12 = document.getElementById("text_12");
        let text_13 = document.querySelectorAll("#text_13");
        let text_14 = document.querySelectorAll("#text_14");
        text_12.innerHTML = "See some of our best and cheapest premium cruises";
        for (i = 0; i < text_13.length && i < text_14.length; i++) {
            text_13[i].innerHTML = "Travel time is 5 days on the ship";
            text_14[i].innerHTML = "Spend the best 15 days with your family in one of the most beautiful countries in the world ";
        }
        // Translate Texts in [Happy Section HOME Page] ...
        let text_15 = document.getElementById("text_15");
        text_15.innerHTML="SOME CLIENTS COMMENTS";
        // translate texts in [footer Section]
        let text_16 = document.getElementById("text_16");
        let text_17 = document.querySelectorAll("#text_17");
        text_16.innerHTML = "Discover the world through us";
        text_17.forEach( (ele) => {
            ele.innerHTML="My personal phone number";
        });
    }

};








