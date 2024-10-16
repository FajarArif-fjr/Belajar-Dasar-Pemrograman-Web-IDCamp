const posters = document.querySelectorAll('.kajian-info img');
posters.forEach(poster => {
  poster.addEventListener('click', () => {
    poster.classList.add('pop');
    setTimeout(() => {
      poster.classList.remove('pop');
    }, 200);
  });
});
