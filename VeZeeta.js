// === قائمة الموبايل ===
const menuToggle = document.getElementById("menu-toggle");
const sideMenu = document.getElementById("side-menu");
const overlay = document.getElementById("overlay");

menuToggle.addEventListener("click", () => {
  sideMenu.classList.add("open");
  overlay.classList.add("show");
});

overlay.addEventListener("click", () => {
  sideMenu.classList.remove("open");
  overlay.classList.remove("show");
});

// === تغيير الدولة والعلم ===
document.querySelectorAll(".country-option").forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    const selectedCountry = this.getAttribute("data-country");
    const selectedFlag = this.getAttribute("data-flag");

    document.getElementById("countryDropdown").innerHTML = `
      <img id="country-flag" src="https://flagcdn.com/w40/${selectedFlag}.png" alt="${selectedCountry}" class="flag me-2">
      ${selectedCountry}
    `;
  });
});

// =============================================

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
  document
    .querySelectorAll(".hero-content .tabs button")
    .forEach((btn) => btn.classList.remove("active"));
  if (type === "clinic") {
    document
      .querySelector(".hero-content .tabs button:first-child")
      .classList.add("active");
    document.getElementById("clinic-form").style.display = "flex";
    document.getElementById("call-form").style.display = "none";
  } else {
    document
      .querySelector(".hero-content .tabs button:last-child")
      .classList.add("active");
    document.getElementById("clinic-form").style.display = "none";
    document.getElementById("call-form").style.display = "flex";
  }
}

// التبديل بين تبويبات البحث (الموبايل)
function switchMobile(type) {
  document
    .querySelectorAll(".mobile-tabs .tabs button")
    .forEach((btn) => btn.classList.remove("active"));
  document.getElementById("mobile-clinic").style.display = "none";
  document.getElementById("mobile-medicine").style.display = "none";
  document.getElementById("mobile-call").style.display = "none";
  document
    .querySelector(`.mobile-tabs .tabs button[onclick*="${type}"]`)
    .classList.add("active");
  document.getElementById("mobile-" + type).style.display = "flex";
}
