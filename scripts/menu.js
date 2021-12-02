document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".menu-button").addEventListener("click", (e) => {
    document.querySelector(".menu-list").classList.toggle("shown");
    const logo = document.querySelector(".logo");
    if (!logo.style || logo.style.display == "none") {
      logo.style.display = "block";
    } else {
      logo.style.display = "none";
    }
  });
});
