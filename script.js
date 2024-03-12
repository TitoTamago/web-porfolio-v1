var typed = new Typed("#typing-text", {
  strings: ["Web Developer", "UI/UX Designer", "Email Developer"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});

const scrollerInner = document.querySelector(".scroller-inner");
const scrollerContent = Array.from(scrollerInner.children);

scrollerContent.forEach((item) => {
  const duplicateItem = item.cloneNode(true);
  duplicateItem.setAttribute("aria-hidden", true);
  scrollerInner.appendChild(duplicateItem);
});

// DOM Manipulation

let contentSwitch = document.querySelector(".content-switch");
let contactCallToActionOne = document.querySelector(".contact-calltoaction-1");
let contactCallToActionTwo = document.querySelector(".contact-calltoaction-2");
let contactQuestionaireOne = document.querySelector(".contact-questionaire-1");
let contactQuestionaireTwo = document.querySelector(".contact-questionaire-2");

function animationSlider() {
  if (window.screen.width >= 575) {
    if (contentSwitch.style.transform === "translateX(-100%)") {
      contactCallToActionOne.style.transform = "translateX(0%)";
      contactCallToActionTwo.style.transform = "translateX(-250%)";
      contactQuestionaireOne.style.transform = "translateX(0%)";
      contactQuestionaireTwo.style.transform = "translateX(250%)";
      contentSwitch.style.transform = "translateX(0%)";
      contentSwitch.style.borderRadius = "150px 0 0 100px";
    } else {
      contactCallToActionOne.style.transform = "translateX(300%)";
      contactCallToActionTwo.style.transform = "translateX(0%)";
      contactQuestionaireOne.style.transform = "translateX(-200%)";
      contactQuestionaireTwo.style.transform = "translateX(125%)";
      contentSwitch.style.transform = "translateX(-100%)";
      contentSwitch.style.borderRadius = "0 150px 100px 0";
    }
  } else {
    if (contactCallToActionTwo.style.transform === "translateY(300%)") {
      contactCallToActionOne.style.transform = "translateY(300%)";
      contactCallToActionTwo.style.transform = "translate(0%, 0%)";
      contactQuestionaireOne.style.transform = "translateY(-300%)";
      contactQuestionaireTwo.style.transform = "translateY(0%)";
    } else {
      contactCallToActionOne.style.transform = "translateY(0%)";
      contactCallToActionTwo.style.transform = "translateY(300%)";
      contactQuestionaireOne.style.transform = "translateY(0%)";
      contactQuestionaireTwo.style.transform = "translateY(-300%)";
    }
  }
}

//Intersection Observer

const hiddenLeft = document.querySelectorAll(".hidden-left");
const hiddenRight = document.querySelectorAll(".hidden-right");
const hiddenTop = document.querySelectorAll(".hidden-top");
const hiddenBottom = document.querySelectorAll(".hidden-bottom");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.5,
  }
);

hiddenLeft.forEach((left) => {
  observer.observe(left);
});
hiddenRight.forEach((right) => {
  observer.observe(right);
});
hiddenTop.forEach((top) => {
  observer.observe(top);
});

hiddenBottom.forEach((bottom) => {
  observer.observe(bottom);
});
