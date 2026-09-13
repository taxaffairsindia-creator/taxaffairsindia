(function () {
  "use strict";

  // Thin progress bar at the top of the page, fills as you scroll.
  var bar = document.createElement("div");
  bar.className = "scroll-progress";
  document.body.appendChild(bar);
  function updateProgress() {
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    var docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = pct + "%";
  }
  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);
  updateProgress();

  // Respect reduced-motion and older browsers: skip the reveal animation
  // entirely rather than risk content staying hidden.
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion || !("IntersectionObserver" in window)) {
    return;
  }

  // Fade-up reveal as content scrolls into view. The "reveal" class is
  // added here in JS, not in the HTML, so if this script fails to load
  // for any reason, every element simply stays at its normal, visible
  // default styling.
  var selector = [
    ".hero .eyebrow", ".hero h1", ".hero p.lede", ".hero .cta-row", ".hero .stat-row",
    ".section-head", ".pcard", ".pillar", ".sector-card", ".faq-item",
    ".panel", ".town-card", ".info-card", ".field"
  ].join(",");
  var targets = document.querySelectorAll(selector);

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -30px 0px" });

  targets.forEach(function (el, i) {
    el.classList.add("reveal");
    el.style.transitionDelay = (Math.min(i % 6, 5) * 55) + "ms";
    observer.observe(el);
  });
})();
