var key = document.querySelectorAll("input");
key.addEventListener("keydown", function (e) {
  if (
    !(
      (e.which >= 65 && e.which <= 90) ||
      (e.which >= 97 && e.which <= 122) ||
      e.which === 8
    )
  ) {
    e.preventDefault();
  }
});
