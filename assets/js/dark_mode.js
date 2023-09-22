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
  
  if (currentSrc === 'icons/sun.svg') {
    imgElement.setAttribute('src', '/blog/icons/moon.svg');
    // 将 dark 模式状态存储在本地存储中
    localStorage.setItem('darkMode', 'on');
  } else {
    imgElement.setAttribute('src', '/blog/icons/sun.svg');
    // 将 dark 模式状态存储在本地存储中
    localStorage.setItem('darkMode', 'off');
  }
}

// 在页面加载时，检查本地存储中的 dark 模式状态并应用
window.onload = function () {
  var darkMode = localStorage.getItem('darkMode');
  if (darkMode === 'on') {
    document.body.classList.add('dark-mode');
    document.getElementById('toggleImg').setAttribute('src', '/blog/icons/moon.svg');
  }
};
