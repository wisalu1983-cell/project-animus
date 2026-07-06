/* ============================================================
   动态骨架论纲展示页 — 交互脚本
   1. Hero「活着的世界」粒子关系网
   2. 滚动 reveal / 导航高亮 / 阅读进度
   ============================================================ */

(function () {
  "use strict";

  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- 阅读进度条 ---------- */
  var progressBar = document.getElementById("progressBar");
  function updateProgress() {
    var doc = document.documentElement;
    var max = doc.scrollHeight - window.innerHeight;
    progressBar.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + "%";
  }

  /* ---------- 导航显隐 + 高亮 ---------- */
  var nav = document.getElementById("topNav");
  var navLinks = Array.prototype.slice.call(nav.querySelectorAll(".nav-links a"));
  var sections = navLinks
    .map(function (a) { return document.querySelector(a.getAttribute("href")); })
    .filter(Boolean);

  function updateNav() {
    nav.classList.toggle("visible", window.scrollY > window.innerHeight * 0.6);
    var current = null;
    for (var i = 0; i < sections.length; i++) {
      if (sections[i].getBoundingClientRect().top <= 120) current = i;
    }
    navLinks.forEach(function (a, i) {
      a.classList.toggle("active", i === current);
    });
  }

  var ticking = false;
  window.addEventListener("scroll", function () {
    if (!ticking) {
      requestAnimationFrame(function () {
        updateProgress();
        updateNav();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
  updateProgress();
  updateNav();

  /* ---------- 滚动 reveal ---------- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reducedMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------- Hero 粒子关系网：一个"活着"的状态网络 ---------- */
  var canvas = document.getElementById("worldNet");
  if (!canvas || reducedMotion) return;

  var ctx = canvas.getContext("2d");
  var dpr = Math.min(window.devicePixelRatio || 1, 2);
  var W, H, nodes, mouse = { x: -9999, y: -9999 };
  var LINK_DIST = 150;

  function resize() {
    W = canvas.offsetWidth;
    H = canvas.offsetHeight;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    initNodes();
  }

  function initNodes() {
    var count = Math.floor((W * H) / 16000);
    count = Math.max(40, Math.min(count, 110));
    nodes = [];
    for (var i = 0; i < count; i++) {
      nodes.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 0.7,
        // 少量"重要节点"更亮，呼应重要 NPC / 超级个体
        key: Math.random() < 0.12
      });
    }
  }

  function step() {
    ctx.clearRect(0, 0, W, H);

    for (var i = 0; i < nodes.length; i++) {
      var n = nodes[i];
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < -20) n.x = W + 20; else if (n.x > W + 20) n.x = -20;
      if (n.y < -20) n.y = H + 20; else if (n.y > H + 20) n.y = -20;

      // 鼠标扰动：世界对"玩家"的响应
      var dxm = n.x - mouse.x, dym = n.y - mouse.y;
      var dm2 = dxm * dxm + dym * dym;
      if (dm2 < 14400 && dm2 > 0.01) {
        var dm = Math.sqrt(dm2);
        n.x += (dxm / dm) * 0.6;
        n.y += (dym / dm) * 0.6;
      }
    }

    // 连线
    for (var a = 0; a < nodes.length; a++) {
      for (var b = a + 1; b < nodes.length; b++) {
        var dx = nodes[a].x - nodes[b].x;
        var dy = nodes[a].y - nodes[b].y;
        var d2 = dx * dx + dy * dy;
        if (d2 < LINK_DIST * LINK_DIST) {
          var t = 1 - Math.sqrt(d2) / LINK_DIST;
          var strong = nodes[a].key || nodes[b].key;
          ctx.strokeStyle = strong
            ? "rgba(232, 163, 61, " + (t * 0.22).toFixed(3) + ")"
            : "rgba(236, 229, 216, " + (t * 0.08).toFixed(3) + ")";
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(nodes[a].x, nodes[a].y);
          ctx.lineTo(nodes[b].x, nodes[b].y);
          ctx.stroke();
        }
      }
    }

    // 节点
    for (var k = 0; k < nodes.length; k++) {
      var p = nodes[k];
      ctx.fillStyle = p.key ? "rgba(232, 163, 61, 0.85)" : "rgba(236, 229, 216, 0.45)";
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.key ? p.r + 0.9 : p.r, 0, Math.PI * 2);
      ctx.fill();
    }

    requestAnimationFrame(step);
  }

  var hero = document.querySelector(".hero");
  hero.addEventListener("mousemove", function (e) {
    var rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });
  hero.addEventListener("mouseleave", function () {
    mouse.x = -9999;
    mouse.y = -9999;
  });

  window.addEventListener("resize", resize);
  resize();
  requestAnimationFrame(step);
})();
