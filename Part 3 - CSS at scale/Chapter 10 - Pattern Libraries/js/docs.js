(() => {
  let dropdowns = document.querySelectorAll(".dropdown__toggle");
  Array.prototype.forEach.call(dropdowns, (dropdown) => {
    dropdown.addEventListener('click', (e) => {
      e.target.parentNode.classList.toggle('is-open');
    });
  });
})();