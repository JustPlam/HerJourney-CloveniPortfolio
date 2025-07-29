// Animations on load
window.onload = function () {
  document.querySelector(".main").classList.add("fade-in");
  document.querySelector(".main h1").classList.add("fade-in");
  document.querySelector(".main h3").classList.add("fade-in");
  document.querySelector(".main h6").classList.add("fade-in");

  document.getElementById("bioImg")?.classList.add("slide-in");

  const eduImages = document.getElementsByClassName("expand-img");
  for (let i = 0; i < eduImages.length; i++) {
    eduImages[i].classList.add("edu-fade-in");
  }
};

// Modal Logic
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById("galleryModal");
  const modalImg = document.getElementById("expandedImg");
  const closeBtn = document.querySelector(".close");

  document.querySelectorAll('.expandable-img').forEach(img => {
    img.addEventListener('click', function () {
      modal.style.display = "block";
      modalImg.src = this.src;
    });
  });

  closeBtn.addEventListener('click', function () {
    modal.style.display = "none";
  });

  modal.addEventListener('click', function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});


// Scroll-triggered fade-in
document.addEventListener('DOMContentLoaded', () => {
  const faders = document.querySelectorAll('.fade-in-on-scroll');

  const options = {
    threshold: 0.2
  };

  const fadeInOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Animate only once
      }
    });
  }, options);

  faders.forEach(fader => {
    fadeInOnScroll.observe(fader);
  });
});