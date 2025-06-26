
  window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.main-navbar');
    const scrollTrigger = 100; // Adjust this value as needed

    if (window.scrollY > scrollTrigger) {
      navbar.classList.add('fixed-navbar');
    } else {
      navbar.classList.remove('fixed-navbar');
    }
  });


  // On click, mark the clicked nav-link as active and remove from others
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function () {
      document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Same for dropdown items
  document.querySelectorAll('.dropdown-item').forEach(link => {
    link.addEventListener('click', function () {
      document.querySelectorAll('.nav-link, .dropdown-item').forEach(el => el.classList.remove('active'));
      this.classList.add('active');
    });
  });

