document.addEventListener("DOMContentLoaded", () => {
  const cancleHam = document.querySelector("li.cancleHam");
  const info = document.querySelector("li.info");
  const achieve = document.querySelector("li.achieve");
  const rank = document.querySelector("li.rank");
  const setting = document.querySelector("li.setting");
  const shop = document.querySelector("div.shop");
  const start = document.querySelector("div.start");
  const home = document.querySelector("div.home");

  cancleHam?.addEventListener("click", () => {
    location.replace("/");
  });
  info?.addEventListener("click", () => {
    location.replace("/info");
  });
  achieve?.addEventListener("click", () => {
    location.replace("/achieve");
  });
  rank?.addEventListener("click", () => {
    location.replace("/rank");
  });
  setting?.addEventListener("click", () => {
    location.replace("/setting");
  });
  shop?.addEventListener("click", () => {
    location.replace("/shop");
  });
  start?.addEventListener("click", () => {
    location.replace("/play");
  });
  home?.addEventListener("click", () => {
    location.replace("/house");
  });
});
