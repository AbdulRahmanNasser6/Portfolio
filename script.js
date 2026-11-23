(function () {
  var root = document.documentElement;
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var fine = window.matchMedia && window.matchMedia("(hover: hover)").matches;
  var themeHooks = [];
  var EMAIL = "abdulrahmannasserelgiar@gmail.com", PHONE = "01126488431";

  /* =====================================================================
     Language: English is read from the page itself, Arabic is written here
     ===================================================================== */
  var T = { en: {}, ar: {
    "brand": "عبدالرحمن",
    "nav.about": "نبذة", "nav.projects": "المشاريع", "term": "التيرمنال",
    "pill": "مصر · أمن سيبراني · تطوير متكامل",
    "name1": "عبدالرحمن", "name2": "ناصر الجيار",
    "role": "الأمن السيبراني | مطوّر متكامل (Full-Stack)",
    "brief": "مطوّر في مجال الأمن السيبراني بخبرة عملية في بناء تطبيقات الويب المتكاملة وتطبيقات سطح المكتب وأدوات الأمان. أبني منتجات حقيقية من الألف إلى الياء، من <b>محاكاة التصيّد</b> و<b>فحص المواقع</b> إلى منصات المخزون والفواتير والأسواق الإلكترونية.",
    "cta.email": "أرسل بريداً", "cta.wa": "واتساب", "cta.cv": "حمّل السيرة الذاتية",
    "stat.projects": "مشاريع", "stat.domains": "مجالات", "stat.languages": "لغات",
    "bg.eyebrow": "الخلفية", "bg.h": "التعليم والمهارات",
    "edu.degree": "بكالوريوس الأمن السيبراني", "edu.school": "HITU، مصر", "edu.meta": "التخرج المتوقع 2028",
    "cw1": "الشبكات", "cw2": "أنظمة التشغيل", "cw3": "التشفير",
    "lang.h": "اللغات", "lang.ar": "العربية", "lang.ar.l": "اللغة الأم", "lang.en": "الإنجليزية",
    "sk.sec": "الأمن", "sk.be": "الخلفية (Backend)", "sk.fe": "الواجهة (Frontend)", "sk.desk": "سطح المكتب",
    "sec1": "محاكاة التصيّد", "sec2": "فحص ثغرات الويب", "sec3": "التوعية الأمنية", "sec4": "بيئات لينكس",
    "proj.eyebrow": "أعمال مختارة", "proj.h": "المشاريع",
    "f.all": "الكل", "f.security": "الأمن", "f.desktop": "سطح المكتب", "f.web": "الويب",
    "p1.tag": "SaaS · أمن", "p1.t": "منصة محاكاة التصيّد والتوعية الأمنية", "p1.d": "منصة مستضافة لتشغيل محاكاة هجمات التصيّد وتدريب المؤسسات على الوعي الأمني. أول منتج منشور على الإنترنت.",
    "p2.tag": "فاحص أمني", "p2.t": "SafeScan", "p2.d": "خدمة فحص أمني تفحص المواقع بحثاً عن الثغرات قبل إطلاقها.",
    "p3.tag": "تعليم · أمن", "p3.t": "Project OS", "p3.d": "محاكي سطح مكتب لينكس يعمل داخل المتصفح لممارسة مهارات الأمن دون أي إعداد محلي.",
    "p4.t": "Vault", "p4.d": "نظام متكامل لإدارة المخزون.",
    "p5.tag": "سوق إلكتروني", "p5.t": "شاطر", "p5.d": "سوق مصري يربط العملاء بالفنيين.",
    "p6.tag": "سطح المكتب", "p6.t": "فاتورة تك (InvoicePro)", "p6.d": "تطبيق فواتير عربي يعمل بدون إنترنت، مبني لعميل حقيقي.",
    "p7.tag": "ويب", "p7.t": "منصة إدارة المدرّس", "p7.d": "الطلاب والمجموعات وحضور QR والمصروفات والاختبارات والمحاضرات وميزات الذكاء الاصطناعي، مع بوابتين للمساعد والطالب.",
    "view": "عرض المشروع", "toast": "رابط المشروع قريباً",
    "foot.l": "عبدالرحمن ناصر الجيار", "foot.top": "للأعلى", "scroll": "مرّر", "foot.r": "HITU · مصر",
    "theme.dark": "داكن", "theme.light": "فاتح", "count": "المعروض: {n}",
    "title": "عبدالرحمن ناصر الجيار | الأمن السيبراني ومطوّر متكامل",
    "desc": "عبدالرحمن ناصر الجيار، مطوّر في الأمن السيبراني وتطوير الويب المتكامل من مصر. محاكاة التصيّد وفحص أمان المواقع ومنصات SaaS وسطح المكتب والأسواق الإلكترونية."
  } };
  var lang = "en", gen = 0;
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    var k = el.getAttribute("data-i18n");
    if (!(k in T.en)) T.en[k] = el.hasAttribute("data-i18n-html") ? el.innerHTML : el.textContent;
  });
  T.en["theme.dark"] = "Dark"; T.en["theme.light"] = "Light"; T.en["count"] = "{n} shown";
  T.en["title"] = document.title;
  var metaDesc = document.querySelector('meta[name="description"]');
  T.en["desc"] = metaDesc ? metaDesc.getAttribute("content") : "";
  function t(k) { return (T[lang] && T[lang][k] != null) ? T[lang][k] : (T.en[k] != null ? T.en[k] : k); }

  var langBtn = document.getElementById("lang"), tbtn = document.getElementById("theme");
  var cvLink = document.getElementById("cv"), count = document.getElementById("count"), lastCount = 7;
  function curTheme() {
    var th = root.getAttribute("data-theme");
    if (th) return th;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }
  function cssHex(name) { return getComputedStyle(root).getPropertyValue(name).trim(); }
  function themeLabel() { tbtn.textContent = t(curTheme() === "dark" ? "theme.dark" : "theme.light"); }
  function setCount(n) { lastCount = n; count.textContent = t("count").replace("{n}", n); }

  function applyLang(l, remember) {
    lang = l === "ar" ? "ar" : "en"; gen++;
    root.lang = lang; root.dir = lang === "ar" ? "rtl" : "ltr";
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var v = t(el.getAttribute("data-i18n"));
      if (el.hasAttribute("data-i18n-html")) el.innerHTML = v; else el.textContent = v;
    });
    document.querySelectorAll("h1 span").forEach(function (s) { s.removeAttribute("data-final"); });
    document.title = t("title");
    if (metaDesc) metaDesc.setAttribute("content", t("desc"));
    langBtn.textContent = lang === "ar" ? "EN" : "عربي";
    langBtn.setAttribute("aria-label", lang === "ar" ? "Switch to English" : "التبديل إلى العربية");
    var file = "AbdulRahman-Nasser-El-Giar-CV-" + (lang === "ar" ? "AR" : "EN") + ".pdf";
    cvLink.setAttribute("href", file); cvLink.setAttribute("download", file);
    themeLabel(); setCount(lastCount);
    if (remember) { try { localStorage.setItem("cv-lang", lang); } catch (e) {} }
  }

  /* ---------- theme ---------- */
  function setTheme(next, remember) {
    root.setAttribute("data-theme", next);
    if (remember) { try { localStorage.setItem("cv-theme", next); } catch (e) {} }
    themeLabel();
    themeHooks.forEach(function (fn) { fn(); });
  }
  try { var savedTheme = localStorage.getItem("cv-theme"); if (savedTheme === "light" || savedTheme === "dark") root.setAttribute("data-theme", savedTheme); } catch (e) {}
  tbtn.addEventListener("click", function () { setTheme(curTheme() === "dark" ? "light" : "dark", true); });
  langBtn.addEventListener("click", function () { applyLang(lang === "ar" ? "en" : "ar", true); });

  var wanted = null;
  try { wanted = new URLSearchParams(location.search).get("lang"); } catch (e) {}
  if (wanted !== "ar" && wanted !== "en") { try { wanted = localStorage.getItem("cv-lang"); } catch (e) {} }
  if (wanted !== "ar" && wanted !== "en") wanted = (navigator.language || "").toLowerCase().indexOf("ar") === 0 ? "ar" : "en";
  applyLang(wanted, false);

  /* ---------- project filter ---------- */
  var cards = Array.prototype.slice.call(document.querySelectorAll("#grid .card"));
  var buttons = Array.prototype.slice.call(document.querySelectorAll(".filters button"));
  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var key = btn.getAttribute("data-f");
      buttons.forEach(function (b) { b.setAttribute("aria-pressed", b === btn ? "true" : "false"); });
      cards.forEach(function (c) {
        c.hidden = !(key === "all" || c.getAttribute("data-tags").split(" ").indexOf(key) !== -1);
      });
      var visible = cards.filter(function (c) { return !c.hidden; });
      setCount(visible.length);
    });
  });

  /* ---------- "View project": opens the link when one is set, otherwise says it is coming ---------- */
  var toast = document.getElementById("toast"), toastTimer = 0;
  document.querySelectorAll(".view").forEach(function (a) {
    a.addEventListener("click", function (e) {
      var href = (a.getAttribute("href") || "").trim();
      if (href === "" || href === "#") {
        e.preventDefault();
        toast.classList.add("show");
        clearTimeout(toastTimer);
        toastTimer = setTimeout(function () { toast.classList.remove("show"); }, 2200);
      }
    });
  });

  /* ---------- light follows the pointer: spotlight, tilt, magnetic buttons, page glow ---------- */
  document.querySelectorAll(".glass").forEach(function (el) {
    el.addEventListener("pointermove", function (e) {
      var r = el.getBoundingClientRect();
      el.style.setProperty("--mx", (e.clientX - r.left) + "px");
      el.style.setProperty("--my", (e.clientY - r.top) + "px");
    });
  });
  if (fine && !reduce) {
    document.querySelectorAll(".btn").forEach(function (b) {
      b.addEventListener("pointermove", function (e) {
        var r = b.getBoundingClientRect();
        var dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2);
        b.style.transform = "translate(" + (dx * 0.18).toFixed(1) + "px," + (dy * 0.28).toFixed(1) + "px)";
      });
      b.addEventListener("pointerleave", function () { b.style.transform = ""; });
    });
  }
  var glow = document.getElementById("glow");
  var gx = 0, gy = 0, gtx = 0, gty = 0, grun = false;
  function glowLoop() {
    gx += (gtx - gx) * 0.14; gy += (gty - gy) * 0.14;
    glow.style.transform = "translate(" + gx + "px," + gy + "px)";
    if (Math.abs(gtx - gx) > 0.5 || Math.abs(gty - gy) > 0.5) requestAnimationFrame(glowLoop); else grun = false;
  }
  var mouse = { x: -9999, y: -9999, nx: 0, ny: 0 };
  window.addEventListener("pointermove", function (e) {
    mouse.x = e.clientX; mouse.y = e.clientY;
    mouse.nx = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.ny = -((e.clientY / window.innerHeight) * 2 - 1);
    if (fine) {
      gtx = e.clientX; gty = e.clientY; glow.classList.add("on");
      if (!grun) { grun = true; requestAnimationFrame(glowLoop); }
    }
  }, { passive: true });

  /* ---------- gold cursor ring + preloader cleanup ---------- */
  var cur = document.getElementById("cur");
  if (cur && fine && !reduce) {
    var cx = 0, cy = 0, ctx2 = 0, cty = 0, crun = false;
    var cloop = function () {
      cx += (ctx2 - cx) * 0.2; cy += (cty - cy) * 0.2;
      cur.style.transform = "translate(" + cx.toFixed(1) + "px," + cy.toFixed(1) + "px)";
      if (Math.abs(ctx2 - cx) > 0.3 || Math.abs(cty - cy) > 0.3) requestAnimationFrame(cloop); else crun = false;
    };
    window.addEventListener("pointermove", function (e) {
      ctx2 = e.clientX; cty = e.clientY; cur.classList.add("on");
      if (!crun) { crun = true; requestAnimationFrame(cloop); }
      cur.classList.toggle("hot", !!(e.target.closest && e.target.closest("a, button, .card, .chip")));
    }, { passive: true });
    document.documentElement.addEventListener("pointerleave", function () { cur.classList.remove("on"); });
  }
  setTimeout(function () { var p = document.getElementById("pre"); if (p && p.parentNode) p.parentNode.removeChild(p); }, 2800);

  /* ---------- scroll progress ---------- */
  var bar = document.getElementById("progress");
  function scrollP() {
    var h = root.scrollHeight - root.clientHeight;
    return h > 0 ? Math.min(1, Math.max(0, (window.pageYOffset || root.scrollTop) / h)) : 0;
  }
  function onScroll() { bar.style.transform = "scaleX(" + scrollP() + ")"; }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- the name decodes itself ---------- */
  var heading = document.querySelector("h1");
  var parts = Array.prototype.slice.call(heading.querySelectorAll("span"));
  var glyphs = "01{}<>/\\|#$%&*+=?", busy = false;
  function decode() {
    if (busy || reduce) return;
    busy = true;
    var g = gen, finals = parts.map(function (p) { return p.textContent; });
    var total = finals.join("").length, start = performance.now(), dur = 1100 + total * 18;
    (function frame(now) {
      if (g !== gen) { busy = false; return; }
      var p = Math.min(1, (now - start) / dur), shown = Math.floor(p * total), seen = 0;
      parts.forEach(function (el, k) {
        var out = "", f = finals[k];
        for (var i = 0; i < f.length; i++) {
          var ch = f.charAt(i);
          out += (ch === " " || seen + i < shown) ? ch : glyphs.charAt((Math.random() * glyphs.length) | 0);
        }
        seen += f.length;
        el.textContent = p < 1 ? out : f;
      });
      if (p < 1) requestAnimationFrame(frame); else busy = false;
    })(start);
  }
  decode();
  heading.addEventListener("pointerenter", decode);

  /* ---------- counters ---------- */
  document.querySelectorAll("[data-count]").forEach(function (el) {
    var to = parseInt(el.getAttribute("data-count"), 10);
    if (reduce) { el.textContent = to; return; }
    var t0 = performance.now() + 500, dur = 1400;
    el.textContent = "0";
    (function step(now) {
      var p = Math.min(1, Math.max(0, (now - t0) / dur)), e = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(to * e);
      if (p < 1) requestAnimationFrame(step);
    })(t0);
  });

  /* ---------- reveal on scroll: only things below the fold are hidden, and a timer always shows them ---------- */
  (function () {
    if (reduce || !("IntersectionObserver" in window)) return;
    var targets = document.querySelectorAll("section > .eyebrow, section > h2, .marquee, .bento, .filters, #grid .card, footer .wm");
    var vh = window.innerHeight, pending = [];
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
    targets.forEach(function (el) {
      if (el.getBoundingClientRect().top > vh * 0.92) { el.classList.add("rv"); pending.push(el); io.observe(el); }
    });
    setTimeout(function () { pending.forEach(function (el) { el.classList.add("in"); }); }, 4000);
  })();

  /* =====================================================================
     Terminal
     ===================================================================== */
  var term = document.getElementById("term"), tout = document.getElementById("term-out"),
      tform = document.getElementById("term-form"), tinp = document.getElementById("term-input"),
      tchips = document.getElementById("term-chips"), history = [], hpos = 0, booted = false, lastFocus = null;

  var TT = {
    en: {
      hello: ["AbdulRahman Nasser El-Giar", "Type 'help' to see what you can do.", "Tip: press Tab to complete, ↑ for history."],
      unknown: "command not found: {c}. Try 'help'.",
      helpTitle: "Available commands",
      cmds: [
        ["help", "show this list"], ["whoami", "who I am"], ["about", "short summary"], ["skills", "what I work with"],
        ["projects", "list my projects"], ["project <name>", "details, e.g. project safescan"], ["education", "education and coursework"],
        ["languages", "languages I speak"], ["email", "write me an email"], ["whatsapp", "open WhatsApp"], ["cv", "download my CV"],
        ["theme dark|light", "switch theme"], ["lang en|ar", "switch language"], ["clear", "clear the screen"], ["exit", "close the terminal"]
      ],
      usage: "usage: project <name>. names: ", notfound: "no such project: {c}",
      link: "link", nolink: "link: coming soon", stack: "stack",
      openingMail: "Opening your mail app to write to {e} ...", openingWa: "Opening WhatsApp ...", cv: "Downloading the CV ...",
      themeSet: "theme set to {v}", themeUse: "usage: theme dark|light", langSet: "language set to English", langUse: "usage: lang en|ar",
      sudo: "permission denied: nice try.", nmap: "Scanning portfolio ... 7 projects found, 0 open vulnerabilities.", hack: "Access granted. Just kidding, try 'projects'.",
      sections: "about  education  skills  projects  languages", chipsList: ["help", "projects", "skills", "education", "email", "whatsapp", "cv", "clear"]
    },
    ar: {
      hello: ["عبدالرحمن ناصر الجيار", "اكتب 'help' لعرض الأوامر المتاحة.", "نصيحة: Tab للإكمال التلقائي و ↑ لسجل الأوامر."],
      unknown: "الأمر غير موجود: {c}. جرّب 'help'.",
      helpTitle: "الأوامر المتاحة",
      cmds: [
        ["help", "عرض هذه القائمة"], ["whoami", "من أنا"], ["about", "نبذة قصيرة"], ["skills", "المهارات"],
        ["projects", "قائمة المشاريع"], ["project <name>", "تفاصيل مشروع، مثل: project safescan"], ["education", "التعليم والمواد"],
        ["languages", "اللغات"], ["email", "أرسل لي بريداً"], ["whatsapp", "افتح واتساب"], ["cv", "حمّل السيرة الذاتية"],
        ["theme dark|light", "تغيير المظهر"], ["lang en|ar", "تغيير اللغة"], ["clear", "مسح الشاشة"], ["exit", "إغلاق التيرمنال"]
      ],
      usage: "الاستخدام: project <name>. الأسماء: ", notfound: "لا يوجد مشروع بهذا الاسم: {c}",
      link: "الرابط", nolink: "الرابط: قريباً", stack: "التقنيات",
      openingMail: "جارٍ فتح البريد لمراسلة {e} ...", openingWa: "جارٍ فتح واتساب ...", cv: "جارٍ تحميل السيرة الذاتية ...",
      themeSet: "تم ضبط المظهر: {v}", themeUse: "الاستخدام: theme dark|light", langSet: "تم التبديل إلى العربية", langUse: "الاستخدام: lang en|ar",
      sudo: "تم رفض الصلاحية: محاولة جيدة.", nmap: "جارٍ فحص الموقع ... 7 مشاريع، 0 ثغرات مفتوحة.", hack: "تم منح الوصول. أمزح، جرّب 'projects'.",
      sections: "about  education  skills  projects  languages", chipsList: ["help", "projects", "skills", "education", "email", "whatsapp", "cv", "clear"]
    }
  };
  function tt() { return TT[lang]; }
  function print(text, cls) {
    var d = document.createElement("div");
    d.className = "ln" + (cls ? " " + cls : "");
    d.setAttribute("dir", "auto");
    d.textContent = text;
    tout.appendChild(d); tout.scrollTop = tout.scrollHeight;
  }
  function gap() { print("", "gap"); }
  function txt(sel) { var el = document.querySelector(sel); return el ? el.textContent.trim().replace(/\s+/g, " ") : ""; }
  function projectData() {
    return cards.map(function (c) {
      var a = c.querySelector(".view"), href = (a.getAttribute("href") || "").trim();
      return {
        id: c.getAttribute("data-id"), title: c.querySelector("h3").textContent.trim(),
        tag: (c.querySelector(".tags") || {}).textContent || "", desc: c.querySelector("p").textContent.trim(),
        stack: Array.prototype.map.call(c.querySelectorAll(".chip"), function (x) { return x.textContent.trim(); }),
        link: (href && href !== "#") ? href : ""
      };
    });
  }
  function clickEl(sel) { var el = document.querySelector(sel); if (el) el.click(); }

  var commands = {
    help: function () { print(tt().helpTitle, "h"); tt().cmds.forEach(function (c) { print("  " + c[0] + "  —  " + c[1]); }); },
    whoami: function () { print(txt("h1")); print(txt(".role"), "dim"); },
    about: function () { print(txt(".brief")); },
    skills: function () {
      document.querySelectorAll("[data-skill]").forEach(function (s) {
        var chips = Array.prototype.map.call(s.querySelectorAll(".chip"), function (c) { return c.textContent.trim(); });
        print(s.querySelector("h3").textContent.trim() + ":", "h"); print("  " + chips.join(" · "));
      });
    },
    projects: function () {
      projectData().forEach(function (p, i) { print((i + 1) + ". " + p.title + "  [" + p.id + "]", "h"); print("   " + p.desc, "dim"); });
      gap(); print(tt().usage + projectData().map(function (p) { return p.id; }).join(", "), "dim");
    },
    project: function (args) {
      var q = (args[0] || "").toLowerCase(), list = projectData();
      if (!q) { print(tt().usage + list.map(function (p) { return p.id; }).join(", ")); return; }
      var p = list.filter(function (x, i) { return x.id === q || String(i + 1) === q || x.title.toLowerCase().indexOf(q) !== -1; })[0];
      if (!p) { print(tt().notfound.replace("{c}", q), "err"); return; }
      print(p.title, "h"); print(p.tag, "dim"); print(p.desc);
      if (p.stack.length) print(tt().stack + ": " + p.stack.join(", "));
      print(p.link ? tt().link + ": " + p.link : tt().nolink, "dim");
    },
    education: function () {
      print(txt("#edu h3"), "h"); print(txt("#edu p:nth-of-type(1)")); print(txt("#edu .meta"), "dim");
      print(Array.prototype.map.call(document.querySelectorAll("#edu .chip"), function (c) { return c.textContent.trim(); }).join(" · "));
    },
    languages: function () {
      document.querySelectorAll("#langs .lang-row").forEach(function (r) { print(r.children[0].textContent.trim() + "  —  " + r.children[1].textContent.trim()); });
    },
    email: function () { print(tt().openingMail.replace("{e}", EMAIL), "dim"); print(EMAIL, "h"); clickEl(".btn.primary"); },
    whatsapp: function () { print(tt().openingWa, "dim"); print(PHONE, "h"); clickEl(".btn.wa"); },
    cv: function () { print(tt().cv, "dim"); clickEl("#cv"); },
    theme: function (args) {
      var v = (args[0] || "").toLowerCase();
      if (v !== "dark" && v !== "light") { print(tt().themeUse, "err"); return; }
      setTheme(v, true); print(tt().themeSet.replace("{v}", v), "dim");
    },
    lang: function (args) {
      var v = (args[0] || "").toLowerCase();
      if (v !== "en" && v !== "ar") { print(tt().langUse, "err"); return; }
      applyLang(v, true); renderChips(); print(tt().langSet, "dim");
    },
    clear: function () { tout.textContent = ""; },
    exit: function () { closeTerm(); },
    ls: function () { print(tt().sections); },
    pwd: function () { print("/home/abdulrahman"); },
    date: function () { print(new Date().toString()); },
    echo: function (args) { print(args.join(" ")); },
    sudo: function () { print(tt().sudo, "err"); },
    nmap: function () { print(tt().nmap); },
    hack: function () { print(tt().hack); }
  };
  var visibleCommands = ["help", "whoami", "about", "skills", "projects", "project", "education", "languages", "email", "whatsapp", "cv", "theme", "lang", "clear", "exit", "ls", "pwd", "date", "echo", "sudo", "nmap", "hack"];

  function run(line) {
    var raw = line.trim();
    if (!raw) return;
    print(raw, "in");
    history.push(raw); hpos = history.length;
    var bits = raw.split(/\s+/), name = bits[0].toLowerCase();
    if (commands.hasOwnProperty(name)) commands[name](bits.slice(1));
    else print(tt().unknown.replace("{c}", bits[0]), "err");
  }
  function renderChips() {
    tchips.textContent = "";
    tt().chipsList.forEach(function (c) {
      var b = document.createElement("button");
      b.type = "button"; b.textContent = c;
      b.addEventListener("click", function () { run(c); tinp.focus(); });
      tchips.appendChild(b);
    });
  }
  function openTerm() {
    lastFocus = document.activeElement;
    term.hidden = false; root.classList.add("no-scroll");
    if (!booted) { booted = true; renderChips(); tt().hello.forEach(function (l, i) { print(l, i === 0 ? "h" : "dim"); }); gap(); }
    setTimeout(function () { tinp.focus(); }, 30);
  }
  function closeTerm() {
    term.hidden = true; root.classList.remove("no-scroll");
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  document.getElementById("open-term").addEventListener("click", openTerm);
  document.getElementById("term-x").addEventListener("click", closeTerm);
  term.addEventListener("pointerdown", function (e) { if (e.target === term) closeTerm(); });
  tform.addEventListener("submit", function (e) { e.preventDefault(); var v = tinp.value; tinp.value = ""; run(v); });
  tinp.addEventListener("keydown", function (e) {
    if (e.key === "ArrowUp") { e.preventDefault(); if (hpos > 0) { hpos--; tinp.value = history[hpos]; } }
    else if (e.key === "ArrowDown") { e.preventDefault(); if (hpos < history.length - 1) { hpos++; tinp.value = history[hpos]; } else { hpos = history.length; tinp.value = ""; } }
    else if (e.key === "Tab") {
      e.preventDefault();
      var v = tinp.value, bits = v.split(/\s+/);
      if (bits.length === 1) {
        var m = visibleCommands.filter(function (c) { return c.indexOf(bits[0].toLowerCase()) === 0; });
        if (m.length === 1) tinp.value = m[0] + " "; else if (m.length > 1) print(m.join("   "), "dim");
      } else if (bits[0].toLowerCase() === "project") {
        var ids = projectData().map(function (p) { return p.id; }).filter(function (i) { return i.indexOf((bits[1] || "").toLowerCase()) === 0; });
        if (ids.length === 1) tinp.value = "project " + ids[0];
      }
    } else if (e.key === "l" && e.ctrlKey) { e.preventDefault(); commands.clear(); }
  });
  window.addEventListener("keydown", function (e) {
    var tag = (e.target && e.target.tagName) || "";
    if (e.key === "Escape" && !term.hidden) { closeTerm(); return; }
    if ((e.key === "`" || (e.key === "k" && (e.ctrlKey || e.metaKey))) && tag !== "INPUT" && tag !== "TEXTAREA") { e.preventDefault(); term.hidden ? openTerm() : closeTerm(); }
  });

  /* =====================================================================
     WebGL: one particle cloud that becomes a sphere, a knot, then a vault as you scroll
     ===================================================================== */
  function initGL() {
    if (!window.THREE) return false;
    var cv = document.getElementById("gl"), renderer;
    try { renderer = new THREE.WebGLRenderer({ canvas: cv, alpha: true, antialias: false, powerPreference: "high-performance" }); }
    catch (e) { return false; }
    if (!renderer.getContext()) return false;

    var small = window.innerWidth < 900;
    var N = small ? 7000 : 14000;
    var A = new Float32Array(N * 3), B = new Float32Array(N * 3), C = new Float32Array(N * 3), R = new Float32Array(N);
    var i, k, TAU = Math.PI * 2;
    for (i = 0; i < N; i++) {
      k = i * 3; R[i] = Math.random();
      var y = 1 - 2 * (i + 0.5) / N, rr = Math.sqrt(1 - y * y), th = i * 2.399963, rad = 1.35 * (0.96 + 0.08 * Math.random());
      A[k] = Math.cos(th) * rr * rad; A[k + 1] = y * rad; A[k + 2] = Math.sin(th) * rr * rad;
      var tk = Math.random() * TAU, rk = Math.cos(3 * tk) + 2;
      B[k] = rk * Math.cos(2 * tk) * 0.55 + (Math.random() - 0.5) * 0.2;
      B[k + 1] = rk * Math.sin(2 * tk) * 0.55 + (Math.random() - 0.5) * 0.2;
      B[k + 2] = -Math.sin(3 * tk) * 0.55 + (Math.random() - 0.5) * 0.2;
      var ax = (Math.random() * 3) | 0, sg = Math.random() < 0.5 ? -1 : 1, p3 = [0, 0, 0], u = Math.random() * 2 - 1, v = Math.random() * 2 - 1;
      if (Math.random() < 0.35) { if (Math.random() < 0.5) u = u < 0 ? -1 : 1; else v = v < 0 ? -1 : 1; }
      p3[ax] = sg; p3[(ax + 1) % 3] = u; p3[(ax + 2) % 3] = v;
      C[k] = p3[0] * 1.05; C[k + 1] = p3[1] * 1.05; C[k + 2] = p3[2] * 1.05;
    }
    var geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(A, 3));
    geo.setAttribute("aB", new THREE.BufferAttribute(B, 3));
    geo.setAttribute("aC", new THREE.BufferAttribute(C, 3));
    geo.setAttribute("aRand", new THREE.BufferAttribute(R, 1));

    var uniforms = {
      uTime: { value: 0 }, uMorph: { value: 0 }, uSize: { value: small ? 5 : 5.8 },
      uPixel: { value: 1 }, uMouse: { value: new THREE.Vector2(9, 9) },
      uC1: { value: new THREE.Color("#19e6c1") }, uC2: { value: new THREE.Color("#4da3ff") }, uAlpha: { value: 1 }
    };
    var mat = new THREE.ShaderMaterial({
      uniforms: uniforms, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      vertexShader: [
        "uniform float uTime, uMorph, uSize, uPixel; uniform vec2 uMouse; uniform vec3 uC1, uC2;",
        "attribute vec3 aB; attribute vec3 aC; attribute float aRand;",
        "varying vec3 vCol; varying float vPush;",
        "void main(){",
        "  float m = clamp(uMorph, 0.0, 2.0);",
        "  vec3 p = m < 1.0 ? mix(position, aB, smoothstep(0.0, 1.0, m)) : mix(aB, aC, smoothstep(0.0, 1.0, m - 1.0));",
        "  float t = uTime * 0.45 + aRand * 6.2831;",
        "  p += 0.045 * vec3(sin(t + p.y * 2.0), cos(t * 1.3 + p.z * 2.0), sin(t * 0.9 + p.x * 2.0));",
        "  float mid = 1.0 - abs(fract(m) * 2.0 - 1.0); mid *= step(0.0001, fract(m));",
        "  p += normalize(p + 0.0001) * mid * 0.9 * (aRand - 0.5);",
        "  vec4 mv = modelViewMatrix * vec4(p, 1.0);",
        "  vec4 clip = projectionMatrix * mv;",
        "  vec2 ndc = clip.xy / clip.w;",
        "  float d = distance(ndc, uMouse);",
        "  float push = smoothstep(0.24, 0.0, d);",
        "  mv.xy += normalize(ndc - uMouse + 0.0001) * push * 0.4;",
        "  gl_Position = projectionMatrix * mv;",
        "  gl_PointSize = uSize * uPixel * (0.55 + aRand * 0.9) * (1.0 + push * 1.6) * (0.7 + 0.6 * sin(uTime * 1.3 + aRand * 60.0)) / max(0.5, -mv.z) * 5.0;",
        "  vCol = mix(uC1, uC2, clamp(0.5 + p.y * 0.35 + (aRand - 0.5) * 0.4, 0.0, 1.0));",
        "  vPush = push;",
        "}"
      ].join("\n"),
      fragmentShader: [
        "precision mediump float; uniform float uAlpha; varying vec3 vCol; varying float vPush;",
        "void main(){ vec2 c = gl_PointCoord - 0.5; float d = length(c); if (d > 0.5) discard;",
        "  float a = smoothstep(0.5, 0.0, d); a = a * a; gl_FragColor = vec4(vCol + vPush * 0.3, a * uAlpha); }"
      ].join("\n")
    });
    var points = new THREE.Points(geo, mat);
    points.frustumCulled = false;
    var group = new THREE.Group(); group.add(points);
    var scene = new THREE.Scene(); scene.add(group);
    var camera = new THREE.PerspectiveCamera(45, 1, 0.1, 50); camera.position.z = 5.4;

    var baseAlpha = 0.9;
    function colors() {
      var dark = curTheme() === "dark";
      uniforms.uC1.value.set(cssHex("--accent")); uniforms.uC2.value.set(cssHex("--accent-2"));
      mat.blending = dark ? THREE.AdditiveBlending : THREE.NormalBlending;
      baseAlpha = (dark ? 0.9 : 0.75) * (window.innerWidth < 900 ? 0.55 : 1);
      mat.needsUpdate = true;
    }
    function layout() {
      var w = window.innerWidth, h = window.innerHeight, dpr = Math.min(window.devicePixelRatio || 1, 1.75);
      renderer.setPixelRatio(dpr); renderer.setSize(w, h, false);
      uniforms.uPixel.value = dpr;
      camera.aspect = w / h; camera.updateProjectionMatrix();
      var side = root.dir === "rtl" ? -1 : 1;
      if (w > 900) { group.position.set(1.8 * side, 0, 0); group.scale.setScalar(0.88); }
      else { group.position.set(0, 1.1, 0); group.scale.setScalar(0.66); }
    }
    colors(); layout();
    themeHooks.push(function () { colors(); layout(); if (reduce) renderer.render(scene, camera); });
    window.addEventListener("resize", function () { colors(); layout(); if (reduce) renderer.render(scene, camera); });
    new MutationObserver(function () { layout(); }).observe(root, { attributes: true, attributeFilter: ["dir"] });
    cv.classList.add("on");

    if (reduce) { renderer.render(scene, camera); return true; }
    var mx = 0, my = 0, rotY = 0;
    (function frame(now) {
      var t = now / 1000, p = scrollP();
      var target = Math.min(1, Math.max(0, (p - 0.06) / 0.86)) * 2;
      uniforms.uTime.value = t;
      uniforms.uMorph.value += (target - uniforms.uMorph.value) * 0.05;
      uniforms.uAlpha.value = baseAlpha * (1 - 0.6 * Math.min(1, uniforms.uMorph.value));
      mx += (mouse.nx - mx) * 0.05; my += (mouse.ny - my) * 0.05;
      uniforms.uMouse.value.set(mouse.x < -9000 ? 9 : mouse.nx, mouse.x < -9000 ? 9 : mouse.ny);
      rotY += 0.0022;
      group.rotation.y = rotY + mx * 0.45 + p * 2.2;
      group.rotation.x = -my * 0.25 + Math.sin(t * 0.25) * 0.06;
      renderer.render(scene, camera);
      requestAnimationFrame(frame);
    })(performance.now());
    return true;
  }

  /* ---------- fallback when WebGL is unavailable: a plain 2D network ---------- */
  function initNet() {
    var net = document.getElementById("net"), nctx = net.getContext("2d");
    net.hidden = false;
    var nodes = [], NW = 0, NH = 0, col = "212,175,97";
    function readAccent() {
      var m = /^#([0-9a-f]{6})$/i.exec(cssHex("--accent"));
      if (m) { var n = parseInt(m[1], 16); col = ((n >> 16) & 255) + "," + ((n >> 8) & 255) + "," + (n & 255); }
    }
    readAccent(); themeHooks.push(function () { readAccent(); draw(); });
    function size() {
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      NW = window.innerWidth; NH = window.innerHeight; net.width = NW * dpr; net.height = NH * dpr; nctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var n = Math.round(Math.max(26, Math.min(90, (NW * NH) / 15000))); nodes = [];
      for (var i = 0; i < n; i++) nodes.push({ x: Math.random() * NW, y: Math.random() * NH, vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4, r: 1 + Math.random() * 1.4 });
    }
    function step() {
      nodes.forEach(function (a) {
        var dx = a.x - mouse.x, dy = a.y - mouse.y, d2 = dx * dx + dy * dy;
        if (d2 < 22500 && d2 > 1) { var d = Math.sqrt(d2), f = (150 - d) / 150 * 0.06; a.vx += dx / d * f; a.vy += dy / d * f; }
        var sp = Math.sqrt(a.vx * a.vx + a.vy * a.vy); if (sp > 0.7) { a.vx *= 0.7 / sp; a.vy *= 0.7 / sp; }
        a.x += a.vx; a.y += a.vy; if (a.x < 0 || a.x > NW) a.vx *= -1; if (a.y < 0 || a.y > NH) a.vy *= -1;
      });
    }
    function draw() {
      nctx.clearRect(0, 0, NW, NH);
      for (var i = 0; i < nodes.length; i++) {
        var a = nodes[i];
        for (var j = i + 1; j < nodes.length; j++) {
          var b = nodes[j], dx = a.x - b.x, dy = a.y - b.y, d2 = dx * dx + dy * dy;
          if (d2 < 22500) { nctx.strokeStyle = "rgba(" + col + "," + ((1 - Math.sqrt(d2) / 150) * 0.3).toFixed(3) + ")"; nctx.beginPath(); nctx.moveTo(a.x, a.y); nctx.lineTo(b.x, b.y); nctx.stroke(); }
        }
        nctx.fillStyle = "rgba(" + col + ",0.7)"; nctx.beginPath(); nctx.arc(a.x, a.y, a.r, 0, 6.2832); nctx.fill();
      }
    }
    size(); draw(); window.addEventListener("resize", function () { size(); draw(); });
    if (!reduce) (function loop() { step(); draw(); requestAnimationFrame(loop); })();
  }

  if (!initGL()) initNet();
})();
