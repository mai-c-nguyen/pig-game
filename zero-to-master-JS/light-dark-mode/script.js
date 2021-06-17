const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

//OPTION 1
// Dark or Light Image
// function imageMode(color) {
//   image1.src = `img/undraw_proud_coder_${color}.svg`;
//   image2.src = `img/undraw_conceptual_idea_${color}.svg`;
//   image3.src = `img/undraw_feeling_proud_${color}.svg`;
// }
// // Dark Mode
// function darkMode() {
//   nav.style.backgroundColor = "rgb(0 0 0 / 50%)";
//   textBox.style.backgroundColor = "rgb(255 255 255 / 50%";
//   toggleIcon.children[0].textContent = "Dark Mode";
//   toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");
//   imageMode("dark");
// }

// function lightMode() {
//   nav.style.backgroundColor = "rgb(255 255 255 / 50%)";
//   textBox.style.backgroundColor = "rgb(0 0 0 / 50%)";
//   toggleIcon.children[0].textContent = "Light Mode";
//   toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");

//   imageMode("light");
// }

// OPTION 2
// function imageMode(color) {
//   image1.src = `img/undraw_proud_coder_${color}.svg`;
//   image2.src = `img/undraw_conceptual_idea_${color}.svg`;
//   image3.src = `img/undraw_feeling_proud_${color}.svg`;
// }
// function toggleDarkLightMode(isDark) {
//   nav.style.backgroundColor = isDark
//     ? "rgb(0 0 0 / 50%)"
//     : "rgb(255 255 255 / 50%)";
//   textBox.style.backgroundColor = isDark
//     ? "rgb(255 255 255/ 50%)"
//     : "rgb(0 0 0 / 50%)";
//   toggleIcon.children[0].textContent = isDark ? "Dark Mode" : "Light Mode";
//   isDark
//     ? toggleIcon.children[1].classList.replace("fa-sun", "fa-moon")
//     : toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
//   isDark ? imageMode("dark") : imageMode("light");
// }

// OPTION 3

function toggleDarkLightMode(color, navColor, textColor, sunIcon, moonIcon) {
  nav.style.backgroundColor = `rgb(${navColor} ${navColor} ${navColor} / 50%)`;
  textBox.style.backgroundColor = `rgb(${navColor} ${navColor} ${navColor} / 50%)`;
  toggleIcon.children[0].textContent = `${color} Mode`;
  toggleIcon.children[1].classList.replace(`fa-${sunIcon}`, `fa-${moonIcon}`);
  image1.src = `img/undraw_proud_coder_${color}.svg`;
  image2.src = `img/undraw_conceptual_idea_${color}.svg`;
  image3.src = `img/undraw_feeling_proud_${color}.svg`;
}
// Switch Theme Dynamically

function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    // darkMode();
    // toggleDarkLightMode(true);
    toggleDarkLightMode("Dark", 0, 255, "sun", "moon");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    // lightMode();
    // toggleDarkLightMode(false);
    toggleDarkLightMode("Light", 255, 0, "moon", "sun");
  }
}

toggleSwitch.addEventListener("change", switchTheme);

// Check Local Storage for Theme

const currentTheme = localStorage.getItem("theme");
console.log(currentTheme);
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
}

if (currentTheme === "dark") {
  toggleSwitch.checked = true;
  // darkMode();
  toggleDarkLightMode("Dark", 0, 255, "sun", "moon");
}
