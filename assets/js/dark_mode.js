const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
});

function modMenu() {
  var modMenuUl = document.querySelectorAll('.mod-menu-ul')[0];
  modMenuUl.classList.toggle("mod-menu-open");
}

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  var imgElement = document.getElementById('toggleImg');
  var currentSrc = imgElement.getAttribute('src');
  var isDarkMode = element.classList.contains("dark-mode");

  if (isDarkMode) {
    imgElement.setAttribute('src', 'icons/moon.svg');
  } else {
    imgElement.setAttribute('src', 'icons/sun.svg');
  }

  // 將 dark-mode 狀態保存到 localStorage
  localStorage.setItem('darkMode', isDarkMode);
}

// 檢查 localStorage 中的 darkMode 狀態
window.addEventListener('load', function () {
  var savedDarkMode = localStorage.getItem('darkMode');
  if (savedDarkMode === 'true') {
    document.body.classList.add('dark-mode');
    document.getElementById('toggleImg').setAttribute('src', 'icons/moon.svg');
  }
});
