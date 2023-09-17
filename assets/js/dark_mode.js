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
    imgElement.setAttribute('src', '{{ "/icons/moon.svg" | relative_url }}');
  } else {
    imgElement.setAttribute('src', '{{ "/icons/sun.svg" | relative_url }}');
  }
}
