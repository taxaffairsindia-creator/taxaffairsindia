(function () {
  "use strict";
  var toggle = document.getElementById("nav-toggle");
  var drawer = document.querySelector(".header-right");
  if (!toggle || !drawer) return;

  // Create overlay
  var overlay = document.createElement("div");
  overlay.className = "nav-overlay";
  document.body.appendChild(overlay);

  function open() {
    toggle.classList.add("open");
    toggle.setAttribute("aria-expanded", "true");
    drawer.classList.add("open");
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function close() {
    toggle.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    drawer.classList.remove("open");
    overlay.classList.remove("open");
    document.body.style.overflow = "";
  }

  toggle.addEventListener("click", function () {
    drawer.classList.contains("open") ? close() : open();
  });
  overlay.addEventListener("click", close);

  // Close on nav link click
  var links = drawer.querySelectorAll("a");
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", close);
  }

  // Close on ESC
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && drawer.classList.contains("open")) close();
  });
})();
