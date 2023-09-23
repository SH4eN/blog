const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
});

function modMenu() {
  var modMenuUl = document.querySelectorAll('.mod-menu-ul')[0];
  modMenuUl.classList.toggle("mod-menu-open");
}

function myFunction() {
  let element = document.body;
  element.classList.toggle("dark-mode");
  let imgElement = document.getElementById('toggleImg');
  let currentSrc = imgElement.getAttribute('src');

  if (currentSrc === '/blog/icons/sun.svg') {
    imgElement.setAttribute('src', '/blog/icons/moon.svg');
    localStorage.setItem('darkMode', 'on');
  } else {
    imgElement.setAttribute('src', '/blog/icons/sun.svg');
    localStorage.setItem('darkMode', 'off');
  }
}


// 在页面加载时，检查本地存储中的 dark 模式状态并应用
window.onload = function () {
  let darkMode = localStorage.getItem('darkMode');
  let element = document.body;
  let imgElement = document.getElementById('toggleImg');

  if (darkMode === 'off') {
    imgElement.setAttribute('src', '/blog/icons/sun.svg');
    document.body.classList.remove('dark-mode');
  }else{
    imgElement.setAttribute('src', '/blog/icons/moon.svg');
    document.body.classList.add('dark-mode');
  }
};
