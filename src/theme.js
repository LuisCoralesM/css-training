const toggleThemeButton = document.querySelector(".theme__button");

const mainTheme = "light";
const secondaryTheme = "dark";

function getTheme() {
  return document.documentElement.getAttribute("data-theme");
}

function toggleTheme() {
  return document.documentElement.setAttribute(
    "data-theme",
    getTheme() === mainTheme ? secondaryTheme : mainTheme
  );
}

toggleThemeButton.addEventListener("click", () => toggleTheme());
