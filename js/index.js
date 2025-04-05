//menu
let lastScrollTop = 0;
document.addEventListener("scroll", function () {
  let stickyElement = document.querySelector(".header");
  let currentScroll = window.scrollY;

  if (currentScroll > 600) {
    // اسکرول به پایین
    stickyElement.classList.add("fixed");
  } else {
    // اسکرول به بالا
    stickyElement.classList.remove("fixed");
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// for click menu
document.getElementById("goto").addEventListener("click", function () {
  const targetElement = document.getElementById("receive");
  const targetPosition = targetElement.offsetTop;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 1000; // مدت زمان حرکت به میلی‌ثانیه (اینجا 1 ثانیه)
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  // تابع برای ایجاد حرکت آرام 
  function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return -c / 2(t(t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
});

//bg one
document.addEventListener("scroll", function () {
  let scrollValue = window.scrollY; 
  let offsetX = scrollValue * 0.1; 
  document.querySelector(
    ".bgone"
  ).style.backgroundPosition = `${-offsetX}px center`;
});

// bgtwo
document.addEventListener("scroll", function () {
  let scrollValue = window.scrollY; 
  let offsetX = scrollValue * 0.03; 
  document.querySelector(".bgtwo").style.backgroundPosition = `${offsetX}px`;
});

// bgthree
document.addEventListener("scroll", function () {
  let scrollValue = window.scrollY; 
  let bg = document.querySelector(".bgthree");
  bg.style.transform = `translateY(${scrollValue * 0.05}px)`;
});

// bgfour
document.addEventListener("scroll", function () {
  let scrollValue = window.scrollY; 
  let bg = document.querySelector(".bgfour");
  bg.style.transform = `translateY(${scrollValue * 0.01}px)`;
});


// Fine details
document.addEventListener("DOMContentLoaded", function () {
  const questions = document.querySelectorAll(".faq-question");

  questions.forEach((question) => {
    question.addEventListener("click", function () {
      const answer = this.nextElementSibling;
      if (answer.style.display === "block") {
        answer.style.display = "none";
      } else {
        answer.style.display = "block";
      }
    });
  });
});
