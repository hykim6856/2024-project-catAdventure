document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("mainImage")
    .addEventListener("click", function () {
      var currentSrc = this.getAttribute("src");
      var newSrc =
        currentSrc === "/images/home.png"
          ? "/images/home1.png"
          : "/images/home.png";
      this.setAttribute("src", newSrc);
    });
});
