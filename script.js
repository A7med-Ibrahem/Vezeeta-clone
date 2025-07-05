// فتح وإغلاق القائمة الجانبية
const menuToggle = document.getElementById('menu-toggle');
const sideMenu = document.getElementById('side-menu');

menuToggle.addEventListener('click', function () {
  sideMenu.classList.toggle('open');
});

// إغلاق القائمة عند الضغط على عنصر داخلها
sideMenu.addEventListener('click', function (e) {
  if (['LI', 'I', 'SPAN'].includes(e.target.tagName)) {
    sideMenu.classList.remove('open');
  }
});

// إغلاق القائمة عند الضغط خارجها (اختياري)
document.addEventListener('click', function (e) {
  if (!sideMenu.contains(e.target) && e.target !== menuToggle && !menuToggle.contains(e.target)) {
    sideMenu.classList.remove('open');
  }
});

// تغيير العلم واسم الدولة عند اختيار دولة من القائمة
const countryOptions = document.querySelectorAll('.country-option');
const countryFlag = document.getElementById('country-flag');
const countryDropdown = document.getElementById('countryDropdown');

countryOptions.forEach(option => {
  option.addEventListener('click', function (e) {
    e.preventDefault(); // منع التنقل عند الضغط
    const country = this.getAttribute('data-country');
    const flag = this.getAttribute('data-flag');

    // تحديث العلم والنص
    countryFlag.src = `https://flagcdn.com/w40/${flag}.png`;
    countryDropdown.innerHTML = `<img id="country-flag" src="https://flagcdn.com/w40/${flag}.png" alt="${country}" class="flag me-2"> ${country}`;
  });
});

// السلايدر التلقائي (تغيير الصور كل 3 ثواني)
const slides = document.querySelectorAll(".slide");
let current = 0;
setInterval(() => {
  slides[current].classList.remove("active");
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");
}, 3000);

// التبديل بين تبويبات البحث (سطح المكتب)
function switchTab(type) {
  document.querySelectorAll(".hero-content .tabs button").forEach(btn => btn.classList.remove("active"));
  if (type === 'clinic') {
    document.querySelector(".hero-content .tabs button:first-child").classList.add("active");
    document.getElementById("clinic-form").style.display = "flex";
    document.getElementById("call-form").style.display = "none";
  } else {
    document.querySelector(".hero-content .tabs button:last-child").classList.add("active");
    document.getElementById("clinic-form").style.display = "none";
    document.getElementById("call-form").style.display = "flex";
  }
}

// التبديل بين تبويبات البحث (الموبايل)
function switchMobile(type) {
  document.querySelectorAll(".mobile-tabs .tabs button").forEach(btn => btn.classList.remove("active"));
  document.getElementById("mobile-clinic").style.display = "none";
  document.getElementById("mobile-medicine").style.display = "none";
  document.getElementById("mobile-call").style.display = "none";
  document.querySelector(`.mobile-tabs .tabs button[onclick*="${type}"]`).classList.add("active");
  document.getElementById("mobile-" + type).style.display = "flex";
}

// اسلايدر Owl Carousel رقم 1
$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    rtl: true,
    autoplay: false,
    autoplayTimeout: 3000,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 }
    }
  });

  // حدث الضغط على الكارت
  $('.card').on('click', function () {
    const index = $(this).data('index');
    alert("تم الضغط على الكارت رقم: " + index);
  });
});

// اسلايدر Owl Carousel رقم 2 (مع الأسهم والتنقل)
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    rtl: true,
    loop: true,
    margin: 15,
    nav: true,
    dots: false,
    navText: ["<span>&#x276E;</span>", "<span>&#x276F;</span>"],
    slideBy: 4,
    responsive: {
      0: { items: 1, slideBy: 1 },
      576: { items: 2, slideBy: 2 },
      768: { items: 3, slideBy: 3 },
      992: { items: 4, slideBy: 4 }
    }
  });
});


  $(document).ready(function(){
    $(".second-slider").owlCarousel({
      rtl: true,
      loop: true,
      margin: 15,
      nav: true,
      dots: false,
      navText: ["<span>&#x276E;</span>", "<span>&#x276F;</span>"],
      slideBy: 4,
      responsive:{
        0:{ items:1, slideBy: 1 },
        576:{ items:2, slideBy: 2 },
        768:{ items:3, slideBy: 3 },
        992:{ items:4, slideBy: 4 }, /* 4 صور دايمًا فوق 992px */
        1200:{ items:4, slideBy: 4 }  /* 4 صور للشاشات الكبيرة جدًا */
      }
    });
  });


  $(document).ready(function () {
    $(".owl-carousel-specialty").owlCarousel({
      rtl: true,
      loop: true,
      margin: 15,
      nav: true,
      dots: false,
      navText: ["<span>&#x276E;</span>", "<span>&#x276F;</span>"],
      slideBy: 4,
      responsive: {
        0: { items: 1, slideBy: 1 },
        576: { items: 2, slideBy: 2 },
        768: { items: 3, slideBy: 3 },
        992: { items: 4, slideBy: 4 }
      }
    });
  });
