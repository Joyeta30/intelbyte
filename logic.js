
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
 const form = document.getElementById("contactForm");
  const message = document.getElementById("responseMessage");
  const submitBtn = document.getElementById("submitBtn");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    message.textContent = "";
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";

    const formData = new FormData(form);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const result = await res.json();

      if (result.success) {
        message.textContent = "✅ Message sent successfully!";
        message.style.color = "green";
        form.reset();
      } else {
        message.textContent = "❌ Failed to send message. Try again.";
        message.style.color = "red";
      }
    } catch (error) {
      message.textContent = "❌ Network error. Please try later.";
      message.style.color = "red";
    }

    submitBtn.disabled = false;
    submitBtn.textContent = "Send";
  });
