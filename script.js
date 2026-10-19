
/* =====================================
   MADRASA WEBSITE — JAVASCRIPT
   নিজের মাদ্রাসার তথ্য এখানে পরিবর্তন করো
===================================== */

// 1. মাদ্রাসার মূল তথ্য
const madrasa = {
    name:"জামিয়া ইসলামিয়া দারুল উলূম সাহেপ্রতাপ মাদরাসা, নরসিংদী ",
    established: 1963,

    description:
        "আমাদের মাদ্রাসা কুরআন-সুন্নাহভিত্তিক শিক্ষা, উত্তম চরিত্র গঠন এবং যোগ্য আলেম তৈরির উদ্দেশ্যে কাজ করে যাচ্ছে।",

    mission:
        "এমন একটি প্রজন্ম গড়ে তোলা, যারা দ্বীনি জ্ঞানে সমৃদ্ধ, আমলে নিষ্ঠাবান, চরিত্রে সুন্দর এবং সমাজের কল্যাণে নিবেদিত।",

    address: "সাহেপ্রতাব মোড়,শিলমান্দী ইউনিয়ন,নরসিংদী সদর,নরসিংদী",
    phone: "01715-899040",
    email: "jamiaislamiyadarulullomsaheprotab.info@gmail.com",

    map: "https://maps.app.goo.gl/oh1qb3Tj7mbgvZ7A9"
};


// 2. শিক্ষকমণ্ডলীর তথ্য
const teachers = [
     {
        name: "ড. মশিউর রহমান মৃধা",
        role: "সভাপতি অত্র জামিয়া",
        qualification: "শিক্ষাবিদ ও গবেষক",
        image:"./images/sovapoti.jpg"
    },
    {
        name: "হাফেজ মাওলানা মুফতি মুজিবুর রহমান নোমানী",
        role: "মুহতামিম ও শাইখুল হাদিস অত্র জামিয়া",
        qualification: "হাফেজ মাওলানা মুফতি",
        image:"./images/mujib numani.jpg"
    },
    {
        name: "মাওলানা সাদেকুর রহমান সিদ্দিকী ",
        role: "নায়েবে মুহতামিম ও মুহাদ্দিস অত্র জামিয়া",
        qualification: "মাওলানা",
        image: "./images/sadekur.jpg"
    },       
     {
        name: "মাওলানা মুফতি আলী হোসাইন কাসমী সাহেব (দা.বা.) ",
        role: "নাযেমে তালিমাত ও মুহাদ্দিস অত্র জামিয়া",
        qualification: "মাওলানা মুফতি",
        image: "./images/najem sab.jpeg"
    },      
    {
        name: "মাওলানা মুফতি সফিউল্লাহ সাহেব (দা.বা.)",
        role: "মুহাদ্দিস অত্র জামিয়া",
        qualification: "মাওলানা মুফতি",
        image: "./images/mufti sofiullah.jpeg"
    },
    {
        name: "হাফেজ মাওলানা মুফতি সালমান মাসরুর",
        role: "মুদাররিস ও দারুল ইকামা অত্র জামিয়া",
        qualification: "হাফেজ মাওলানা মুফতি",
        image: "./images/salman masrur.jpg"
    },
    {
        name: "মুফতি জাবেদ আযযাম",
        role: "মুহাদ্দিস ও দারুল ইকামা অত্র জামিয়া",
        qualification: "মাওলানা মুফতি",
        image: "./images/jabed sab.jpeg"
    },
     {
        name: "হাফেজ মাওলানা মুফতি আব্দুল কাদির সাহেব (দা.বা.)",
        role: "মুহাদ্দিস অত্র জামিয়া",
        qualification: "হাফেজ মাওলানা মুফতি",
        image: "./images/abdul kadir saheb.jpeg"
    },    
    {
        name: "মাওলানা মফিজুল ইসলাম",
        role: "মুহাদ্দিস অত্র জামিয়া",
        qualification: "মাওলানা মুফতি",
        image: "./images/morobbi hozor.jpeg"
    },    
    {
        name: "মুফতি আবু হুরায়রা",
        role: "মুহাদ্দিস অত্র জামিয়া",
        qualification: "মাওলানা মুফতি",
        image: "./images/mufti ahu horayra.jpg"
    }, 
     {
        name: "হাফেজ মাওলানা মুফতি আনিসুর রহমান সাহেব (দা.বা.)",
        role: "মুহাদ্দিস অত্র জামিয়া",
        qualification: "হাফেজ মাওলানা মুফতি",
        image: "./images/anis saheb.jpeg"
    }, 
    {
        name: "মুফতি নাঈম নওহাদ",
        role: "মুহাদ্দিস অত্র জামিয়া",
        qualification: "মাওলানা মুফতি",
        image: "./images/nayeem saheb.jpeg"
    },    {
        name: "মুফতি রফিক",
        role: "মুদাররিস অত্র জামিয়া",
        qualification: "মাওলানা মুফতি",
        image: "./images/rofik sab.jpeg"
    },    {
        name: "হাফেজ মাওলানা মুফতি রাকিবুল ইসলাম",
        role: "মুহাদ্দিস অত্র জামিয়া",
        qualification: "হাফেজ মাওলানা মুফতি",
        image: "./images/rakib saheb.jpeg"
    },    {
        name: "মাওলানা সায়েম স্যার",
        role: "জেনারেল শিক্ষক",
        qualification: "মাওলানা ",
        image: "./images/sayem sir.jpeg"
    },    
    {
        name: "হাফেজ সুলতান ",
        role: "প্রধান শিক্ষক হিফজ বিভাগ অত্র জামিয়া",
        qualification: "হাফেজ",
        image: "./images/sultan sab.jpeg"
    },    
    {
        name: "হাফেজ মাওলানা মোশারফ",
        role: "সিনিয়র শিক্ষক হিফজ বিভাগ অত্র জামিয়া",
        qualification: "হাফেজ মাওলানা",
        image: "./images/mosharof saheb.jpeg"
    },
];


// 3. বিভাগ ও শ্রেণির তথ্য
const classes = [
    {
        name: "নূরানি বিভাগ",
        icon: "📖",
        students: 100,
        description: "শিশুদের কুরআন শিক্ষা, আরবি হরফ পরিচিতি এবং প্রাথমিক দ্বীনি শিক্ষার ব্যবস্থা।"
    },
    {
        name: "নাজেরা বিভাগ",
        icon: "📗",
        students: 80,
        description: "সহিহ উচ্চারণ ও তাজবিদের নিয়মে পবিত্র কুরআন তিলাওয়াত শেখানো হয়।"
    },
    {
        name: "হিফজ বিভাগ",
        icon: "🕌",
        students: 60,
        description: "অভিজ্ঞ শিক্ষকের তত্ত্বাবধানে পবিত্র কুরআন মুখস্থ ও নিয়মিত সবক শোনার ব্যবস্থা।"
    },
    {
        name: "ইবতেদায়ি",
        icon: "📘",
        students: 50,
        description: "প্রাথমিক স্তরে আরবি, বাংলা, গণিত ও প্রয়োজনীয় দ্বীনি শিক্ষার পাঠদান।"
    },
    {
        name: "মিযান",
        icon: "📘",
        students: 40,
        description: "আরবি ভাষা, ফিকহ, আকাইদ ও অন্যান্য কিতাবের প্রাথমিক পাঠ।"
    },
    {
        name: "নাহবেমীর",
        icon: "📘",
        students: 30,
        description: "উচ্চতর ইসলামি জ্ঞান, আরবি সাহিত্য, হাদিস, তাফসির ও ফিকহের পাঠদান।"
    },
    {
        name: "হেদায়াতুন্নাহু",
        icon: "",
        students: 25,
        description: "হাদিসের উচ্চতর অধ্যয়ন ও সংশ্লিষ্ট ইসলামি জ্ঞানচর্চার ব্যবস্থা।"
    },
    {
        name: "কাফিয়া",
        icon: "📘",
        students: 22,
        description: "হাদিসের উচ্চতর অধ্যয়ন ও সংশ্লিষ্ট ইসলামি জ্ঞানচর্চার ব্যবস্থা।"
    },
    {
        name: "শরহে জামি",
        icon: "📘",
        students: 20,
        description: "হাদিসের উচ্চতর অধ্যয়ন ও সংশ্লিষ্ট ইসলামি জ্ঞানচর্চার ব্যবস্থা।"
    },
    {
        name: "শরহে বেকায়া",
        icon: "📘",
        students: 28,
        description: "হাদিসের উচ্চতর অধ্যয়ন ও সংশ্লিষ্ট ইসলামি জ্ঞানচর্চার ব্যবস্থা।"
    },
    {
        name: "জালালাইন",
        icon: "📘",
        students: 18,
        description: "হাদিসের উচ্চতর অধ্যয়ন ও সংশ্লিষ্ট ইসলামি জ্ঞানচর্চার ব্যবস্থা।"
    },
    {
        name: "ফযীলত",
        icon: "📘",
        students: 25,
        description: "হাদিসের উচ্চতর অধ্যয়ন ও সংশ্লিষ্ট ইসলামি জ্ঞানচর্চার ব্যবস্থা।"
    },
    {
        name: "তাকমীল (দাওরায়ে হাদিস)",
        icon: "📘",
        students: 35,
        description: "হাদিসের উচ্চতর অধ্যয়ন ও সংশ্লিষ্ট ইসলামি জ্ঞানচর্চার ব্যবস্থা।"
    },
    {
        name: "ইফতা বিভাগ (তাখাসসুস ফিল ফিকহ)",
        icon: "📘",
        students: 2,
        description: "হাদিসের উচ্চতর অধ্যয়ন ও সংশ্লিষ্ট ইসলামি জ্ঞানচর্চার ব্যবস্থা।"
    },
];


// 4. নোটিশ বোর্ডের তথ্য
const notices = [
    {
        day: "১৫",
        month: "অক্টোবর",
        title: "নতুন শিক্ষাবর্ষে ভর্তি বিজ্ঞপ্তি",
        description: "ভর্তি সংক্রান্ত তথ্যের জন্য মাদ্রাসা অফিসে যোগাযোগ করুন।"
    },
    {
        day: "২০",
        month: "অক্টোবর",
        title: "মাসিক পরীক্ষার বিজ্ঞপ্তি",
        description: "সকল শিক্ষার্থীকে পরীক্ষার প্রস্তুতি নেওয়ার অনুরোধ করা হচ্ছে।"
    },
    {
        day: "২৫",
        month: "অক্টোবর",
        title: "অভিভাবক সমাবেশ",
        description: "শিক্ষার্থীদের অগ্রগতি নিয়ে অভিভাবকদের সঙ্গে আলোচনা করা হবে।"
    }
];


// 5. বাংলা সংখ্যায় দেখানোর ফাংশন
function toBanglaNumber(number) {
    return Number(number).toLocaleString("bn-BD");
}


/* =====================================
   ANIMATED COUNTERS
===================================== */

function animateCounter(element, target, duration = 1500) {
    if (!element) return;

    const finalNumber = Number(target);

    if (!Number.isFinite(finalNumber) || finalNumber < 0) {
        element.textContent = "০";
        return;
    }

    const startTime = performance.now();

    element.textContent = "০";

    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Smooth animation
        const easedProgress = 1 - Math.pow(1 - progress, 3);

        const currentNumber = Math.floor(
            finalNumber * easedProgress
        );

        element.textContent = toBanglaNumber(currentNumber);

        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = toBanglaNumber(finalNumber);
        }
    }

    requestAnimationFrame(updateCounter);
}



// 6. মাদ্রাসার তথ্য ওয়েবসাইটে দেখানো
function renderMadrasaInfo() {
    document.title = `${madrasa.name} | ইসলামি শিক্ষার আলো`;

    document.getElementById("madrasaName").textContent =
        madrasa.name;

    document.getElementById("footerName").textContent =
        madrasa.name;

    document.getElementById("aboutText").textContent =
        madrasa.description;

    document.getElementById("heroDescription").textContent =
        madrasa.description;

    document.getElementById("missionText").textContent =
        madrasa.mission;

    document.getElementById("contactAddress").textContent =
        madrasa.address;

    document.getElementById("contactPhone").textContent =
        madrasa.phone;

    document.getElementById("contactEmail").textContent =
        madrasa.email;

animateCounter(
    document.getElementById("aboutYear"),
    madrasa.established
);

animateCounter(
    document.getElementById("yearCount"),
    madrasa.established
);

// ফোন নম্বর থেকে স্পেস, হাইফেন ইত্যাদি সরিয়ে নেওয়া
const cleanPhone = madrasa.phone.replace(/\D/g, "");

document.getElementById("phoneLink").href =
    `tel:${cleanPhone}`;

    document.getElementById("mapLink").href =
        madrasa.map;

    document.getElementById("currentYear").textContent =
        toBanglaNumber(new Date().getFullYear());
}


// 7. শিক্ষকমণ্ডলী Dynamicভাবে তৈরি করা
function renderTeachers() {
    const teacherGrid = document.getElementById("teacherGrid");

    teacherGrid.innerHTML = teachers.map(teacher => `
        <article class="teacher-card">
            <div class="teacher-photo">
                <img
                    src="${teacher.image}"
                    alt="${teacher.name}"
                    loading="lazy"
                    onerror="this.onerror=null;this.src='https://placehold.co/500x400/e5eee7/075b43?text=Teacher'">
            </div>

            <div class="teacher-info">
                <h3>${teacher.name}</h3>
                <div class="teacher-role">${teacher.role}</div>
                <p>যোগ্যতা: ${teacher.qualification}</p>
            </div>
        </article>
    `).join("");

animateCounter(
    document.getElementById("teacherCount"),
    teachers.length
);
}


// 8. বিভাগ ও শিক্ষার্থী Dynamicভাবে দেখানো
function renderClasses(searchText = "") {
    const classGrid = document.getElementById("classGrid");
    const emptyMessage = document.getElementById("emptyMessage");

    const filteredClasses = classes.filter(item =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
    );

    classGrid.innerHTML = filteredClasses.map(item => `
        <article class="class-card">
            <div class="class-icon">${item.icon}</div>

            <h3>${item.name}</h3>

            <p>${item.description}</p>

            <div class="class-meta">
                <span>শিক্ষার্থী সংখ্যা</span>
                <span class="student-badge">
                    ${toBanglaNumber(item.students)} জন
                </span>
            </div>
        </article>
    `).join("");

    emptyMessage.hidden = filteredClasses.length !== 0;

    // সব বিভাগের প্রকৃত মোট শিক্ষার্থী
    const totalStudents = classes.reduce(
        (total, item) => total + item.students,
        0
    );

animateCounter(
    document.getElementById("studentCount"),
    totalStudents
);

animateCounter(
    document.getElementById("classCount"),
    classes.length
);

animateCounter(
    document.getElementById("totalStudents"),
    totalStudents
);

// Total-এর শেষে "জন" যোগ করা
// Counter-এর HTML-এ সংখ্যার সঙ্গে জনও দেখানো হবে
}


// 9. বিভাগ সার্চ করার সুবিধা
document.getElementById("classSearch").addEventListener(
    "input",
    function () {
        renderClasses(this.value.trim());
    }
);


// 10. নোটিশ বোর্ড Dynamicভাবে তৈরি করা
function renderNotices() {
    const noticeList = document.getElementById("noticeList");

    noticeList.innerHTML = notices.map(notice => `
        <article class="notice-card">
            <div class="notice-date">
                <strong>${notice.day}</strong>
                <span>${notice.month}</span>
            </div>

            <div>
                <h3>${notice.title}</h3>
                <p>${notice.description}</p>
            </div>
        </article>
    `).join("");
}


// 11. মোবাইল নেভিগেশন মেনু
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});


// 12. Back to Top বাটন
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    backToTop.classList.toggle("visible", window.scrollY > 350);
});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// 13. ওয়েবসাইট চালু করা
function initWebsite() {
    renderMadrasaInfo();
    renderTeachers();
    renderClasses();
    renderNotices();
}

initWebsite();

const contactButtons = document.querySelectorAll(
    ".floating-contact .contact-btn"
);

contactButtons.forEach((button) => {
    button.addEventListener("click", function () {
        this.style.transform = "scale(0.92)";

        setTimeout(() => {
            this.style.transform = "";
        }, 150);
    });
});



/* =====================================
   DARK / LIGHT MODE
===================================== */

const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector("i");

// আগের পছন্দ লোড করা
const savedTheme = localStorage.getItem("madrasa-theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
}

function updateThemeButton() {
    const isDark = document.body.classList.contains("dark-mode");

    themeIcon.className = isDark
        ? "fa-solid fa-sun"
        : "fa-solid fa-moon";

    themeToggle.setAttribute(
        "aria-label",
        isDark ? "লাইট মোড চালু করুন" : "ডার্ক মোড চালু করুন"
    );

    themeToggle.title = isDark ? "Light Mode" : "Dark Mode";
}

updateThemeButton();

themeToggle.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-mode");

    localStorage.setItem(
        "madrasa-theme",
        isDark ? "dark" : "light"
    );

    updateThemeButton();
});
