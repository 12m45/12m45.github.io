function hideNavLinks() {

  const menuCheckbox = document.querySelector('.js-menu-checkbox');

  document.querySelectorAll('.nav-link')
    .forEach((navLink) => {
      navLink.addEventListener('click', () => {
        if (menuCheckbox.checked) {
          menuCheckbox.checked = false;
        }
      })
    })
}

hideNavLinks();

