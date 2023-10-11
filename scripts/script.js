// Navbar appear when scrolled
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Toggle navbar collapse
function toggleNavLinksAndHeader() {
  const navLinks = document.querySelector("#navbarText ul");
  navLinks.classList.toggle("nav-collapse");

  const header = document.getElementById("header");
  header.classList.toggle("d-flex");
}

const logo = document.getElementById("logo");
logo.addEventListener("click", toggleNavLinksAndHeader);

// Logo Change
function changeImage() {
  var image = document.getElementById("logo");
  image.style.opacity = 0;
  setTimeout(function () {
    image.src = "img/Logo.png";
    image.style.opacity = 1;
  }, 150);
}

function resetImage() {
  var image = document.getElementById("logo");
  image.style.opacity = 0;
  setTimeout(function () {
    image.src = "img/LogoInvert.png";
    image.style.opacity = 1;
  }, 150);
}

function toggleImage() {
  var image = document.getElementById("logo");

  if (image.src.endsWith("LogoInvert.png")) {
    image.style.opacity = 0;
    setTimeout(function () {
      image.src = "img/Logo.png";
      image.style.opacity = 1;
    }, 150);
  } else {
    image.style.opacity = 0;
    setTimeout(function () {
      image.src = "img/LogoInvert.png";
      image.style.opacity = 1;
    }, 150);
  }
}

// Typewriter
var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  if (this.txt === "") {
    this.el.innerHTML =
      '<span class="wrap" style="color: transparent;">&nbsp;</span>';
  } else {
    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";
  }

  var that = this;
  var delta = 300;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 100;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  var css = document.createElement("style");
  css.innerHTML =
    ".typewrite > .wrap { border-right: 0.08em solid #fff transition: width 0.5s ease-in-out;}";
  document.body.appendChild(css);
};

// Back to top
let mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Navbar href
document.addEventListener("DOMContentLoaded", function () {
  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = document.querySelector(".fixed-top").offsetHeight;
      const sectionPosition = section.offsetTop - navbarHeight;

      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      });
    }
  }

  const navbarLinks = document.querySelectorAll(".nav-link");

  navbarLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetSectionId = this.getAttribute("href").substring(1);
      scrollToSection(targetSectionId);
    });
  });
});

//Animate scroll down animations
const elements = document.querySelectorAll(".animate-up");

function checkAnimation() {
  elements.forEach((element, index) => {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    if (rect.top <= windowHeight && !element.classList.contains("animated")) {
      setTimeout(() => {
        element.classList.add("animated");
        element.style.opacity = 1;
        element.style.transform = "translateY(0)";
      }, index * 110);
    }
  });
}
window.addEventListener("scroll", checkAnimation);
window.addEventListener("resize", checkAnimation);
window.addEventListener("load", checkAnimation);

// Email Button Animation
const emailButton = document.getElementById("emailBtn");

emailButton.addEventListener("click", () => {
  emailButton.classList.add("clicked");

  setTimeout(() => {
    emailButton.classList.remove("clicked");
  }, 200);
});