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

// active hamburger menu icon
const toggleButton = document.getElementById("label-toggle");
const header = document.querySelector(".header");

toggleButton.addEventListener("click", function () {
  header.classList.toggle("active");
});

// for click menu
const items = document.querySelectorAll("a[data-target]");
items.forEach((item) => {
  item.addEventListener("click", function (e) {
    // e.preventDefault();
    const targetId = this.getAttribute("data-target");
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
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
  bg.style.transform = `translateY(${scrollValue * 0.03}px)`;
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
