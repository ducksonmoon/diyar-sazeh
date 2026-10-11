(function () {
  const PHONE = "09353066900";

  // Mobile menu
  const toggle = document.querySelector(".nav__toggle");
  const menu = document.getElementById("menu");
  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  menu.addEventListener("click", (e) => {
    if (e.target.closest("a")) {
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });

  // Reveal on scroll
  const items = document.querySelectorAll(".sec-head, .card, .style, .steps li, .gallery a, .faq details, .svc li, .photo, .form");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          io.unobserve(en.target);
        }
      });
    }, { rootMargin: "0px 0px -40px 0px" });
    items.forEach((el) => { el.classList.add("reveal"); io.observe(el); });
  }

  // Estimate form -> pre-filled SMS to the company
  const form = document.getElementById("estimateForm");
  const err = form.querySelector(".form__err");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(form));
    if (!d.name.trim() || !d.phone.trim()) {
      err.hidden = false;
      return;
    }
    err.hidden = true;
    const lines = [
      "درخواست برآورد هزینه ساخت - دیار سازه",
      "نام: " + d.name,
      "تماس: " + d.phone,
      "نوع پروژه: " + d.type,
      d.land && "متراژ زمین: " + d.land,
      d.area && "متراژ بنا: " + d.area,
      d.city && "محدوده: " + d.city,
      d.budget && "بودجه: " + d.budget,
    ].filter(Boolean);
    const sep = /iPhone|iPad|iPod/i.test(navigator.userAgent) ? "&" : "?";
    window.location.href = "sms:" + PHONE + sep + "body=" + encodeURIComponent(lines.join("\n"));
  });

  document.getElementById("year").textContent = new Date().toLocaleDateString("fa-IR", { year: "numeric" });
})();
