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

  if (currentSrc === '/blog/icons/sun.svg') {
    imgElement.setAttribute('src', '/blog/icons/moon.svg');
  } else {
    imgElement.setAttribute('src', '/blog/icons/sun.svg');
  }
}
