const langToggle = document.getElementById("langToggle");
let currentLang = "es";

function updateLanguage(lang) {
  document.documentElement.lang = lang;

  const elements = document.querySelectorAll("[data-es][data-en]");
  elements.forEach((el) => {
    el.textContent = el.dataset[lang];
  });

  if (langToggle) {
    langToggle.textContent = lang === "es" ? "EN" : "ES";
  }
}

if (langToggle) {
  langToggle.addEventListener("click", () => {
    currentLang = currentLang === "es" ? "en" : "es";
    updateLanguage(currentLang);
  });
}

updateLanguage(currentLang);
