const toggle = document.querySelector(".toggle");
const toggleSlider = document.querySelector(".toggle-slider");
const body = document.querySelector(".body");
const pattern = document.querySelector(".bg-pattern");
const accounts = document.querySelectorAll(".account");
const overviews = document.querySelectorAll(".overview");
const darkText1 = document.querySelectorAll(".dark-text1");
const darkText2 = document.querySelectorAll(".dark-text2");
const h2 = document.querySelector(".h2");

let theme = "light";

const darkTheme = () => {
  body.style.background = "hsl(230, 17%, 14%)";
  pattern.style.background = "hsl(232, 19%, 15%)";
  toggleSlider.style.background =
    "linear-gradient(to right, hsl(210, 78%, 56%) 0%, hsl(146, 68%, 55%) 100%)";
  toggleSlider.classList.add("dark-circle");
  accounts.forEach((account) => {
    account.style.background = "hsl(228, 28%, 20%)";
    account.classList.add("dark-mode");
  });
  overviews.forEach((overview) => {
    overview.style.background = "hsl(228, 28%, 20%)";
    overview.classList.add("dark-mode");
  });
  darkText1.forEach((text) => {
    text.style.color = "hsl(228, 34%, 66%)";
  });
  darkText2.forEach((text) => {
    text.style.color = "hsl(0, 0%, 100%)";
  });
  h2.style.color = "hsl(0, 0%, 100%)";
};

const lightTheme = () => {
  body.style.background = "hsl(0, 0%, 100%)";
  pattern.style.background = "hsl(225, 100%, 98%)";
  toggleSlider.style.background = "hsl(230, 22%, 74%)";
  toggleSlider.classList.remove("dark-circle");
  accounts.forEach((account) => {
    account.style.background = "hsl(227, 47%, 96%)";
    account.classList.remove("dark-mode");
  });
  overviews.forEach((overview) => {
    overview.style.background = "hsl(227, 47%, 96%)";
    overview.classList.remove("dark-mode");
  });
  darkText1.forEach((text) => {
    text.style.color = "hsl(228, 12%, 44%)";
  });
  darkText2.forEach((text) => {
    text.style.color = "hsl(230, 17%, 14%)";
  });
  h2.style.color = "hsl(228, 12%, 44%)";
};

toggle.addEventListener("click", () => {
  if (theme === "light") {
    theme = "dark";
    darkTheme();
  } else {
    theme = "light";
    lightTheme();
  }
});
