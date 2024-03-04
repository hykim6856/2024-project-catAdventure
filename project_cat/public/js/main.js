document.addEventListener("DOMContentLoaded", () => {
  const back = document.querySelector("i.fa");
  back.addEventListener("click", () => {
    location.replace("/");
  });
});
