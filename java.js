// Side Menu Toggle
    document.getElementById('menu-toggle').addEventListener('click', function() {
      document.getElementById('side-menu').classList.toggle('open');
    });

    // Country Dropdown
    const countryOptions = document.querySelectorAll('.country-option');
    countryOptions.forEach(option => {
      option.addEventListener('click', function(e) {
        e.preventDefault();
        const country = this.getAttribute('data-country');
        const flag = this.getAttribute('data-flag');
        document.getElementById('country-flag').src = `https://flagcdn.com/w40/${flag}.png`;
        document.querySelector('.dropdown-toggle').innerHTML = `
          <img id="country-flag" src="https://flagcdn.com/w40/${flag}.png" alt="${country}" class="flag me-2">
          ${country}
        `;
      });
    });

    // Toggle Specialties
    function toggleSpecialties(e) {
      e.preventDefault();
      const moreSpecialties = document.querySelector('.more-specialties');
      const showMoreLink = document.querySelector('.show-more');
      
      if (moreSpecialties.classList.contains('hidden')) {
        moreSpecialties.classList.remove('hidden');
        showMoreLink.textContent = 'إخفاء';
      } else {
        moreSpecialties.classList.add('hidden');
        showMoreLink.textContent = 'المزيد...';
      }
    }

    // Show More Reviews
    function showMoreReviews() {
      const hiddenReviews = document.querySelectorAll('.review-card.hidden');
      hiddenReviews.forEach(card => {
        card.classList.remove('hidden');
      });
      document.querySelector('.more').style.display = 'none';
    }

    // Time Slot Selection
    const timeSlots = document.querySelectorAll('.time-slot');
    timeSlots.forEach(slot => {
      slot.addEventListener('click', function() {
        timeSlots.forEach(s => s.classList.remove('active'));
        this.classList.add('active');
      });
    });
  </script>

  //CREATE ELEMENTS
  <script>
var titleProject=["p1,p2,p3,p4,p5,p6"]




for(let i=0;i<=20;i++){
 var container=document.createElement("div");
 var img=document.createElement("img");
 var title=document.createElement("h2");
 var price=document.createElement("h4");
 var btn=document.createElement("button");
//add value
img.src="./4.jpg";
title.innerHTML="product1";
price.innerHTML="10$";
btn.innerHTML="add to start";
img.style.width="300px";
img.style.height="300px"
//add to body
container.appendChild(img);
container.appendChild(title);
container.appendChild(price);
container.appendChild(btn);
document.body.appendChild(container);}
