function toggleSpecialties() {
  const moreSpecialties = document.querySelector('.more-specialties');
  const showMoreLink = document.querySelector('.show-more');
  
  if (moreSpecialties.style.display === 'none') {
    moreSpecialties.style.display = 'inline';
    showMoreLink.textContent = 'أقل...';
  } else {
    moreSpecialties.style.display = 'none';
    showMoreLink.textContent = 'المزيد...';
  }
}

// Add active class to time slots when clicked
document.querySelectorAll('.time-slot').forEach(slot => {
  slot.addEventListener('click', function() {
    this.classList.toggle('active');
    
    // Remove active class from siblings
    const parent = this.parentElement;
    parent.querySelectorAll('.time-slot').forEach(sib => {
      if (sib !== this) {
        sib.classList.remove('active');
      }
    });
  });
});

// Side menu toggle
document.getElementById('menu-toggle').addEventListener('click', () => {
  document.getElementById('side-menu').classList.toggle('open');
});



// Initialize Bootstrap dropdown
var countryDropdown = new bootstrap.Dropdown(document.getElementById('countryDropdown'));

// Handle country selection
document.querySelectorAll('.country-option').forEach(item => {
  item.addEventListener('click', function(e) {
    e.preventDefault();
    const countryName = this.getAttribute('data-country');
    const countryFlag = this.getAttribute('data-flag');
    
    // Update selected country
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    dropdownToggle.innerHTML = `
      <img id="country-flag" src="https://flagcdn.com/w40/${countryFlag}.png" alt="${countryName}" class="flag me-2">
      ${countryName}
    `;
    
    // Close dropdown
    countryDropdown.hide();
  });
});




