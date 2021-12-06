document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".menu-button").addEventListener("click", (e) => {
    document.querySelector(".menu-list").classList.toggle("shown");
    const logo = document.querySelector(".logo");
  });
});
