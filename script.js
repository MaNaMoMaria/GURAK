
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

let language = "fa";
let activeMood = "calm";

const moodData = {
  calm: {
    type: "CALM & COMFORT",
    title: {
      fa: "بابونه و به‌لیمو",
      en: "Chamomile & lemon verbena"
    },
    desc: {
      fa: "عطری لطیف و مرکباتی برای یک مکث آرام. بابونه به‌طور سنتی در دمنوش‌های آرامش‌بخش استفاده می‌شود و به‌لیمو رایحه‌ای تازه و دلپذیر دارد.",
      en: "A gentle floral-citrus pause. Chamomile is traditionally enjoyed in calming infusions, while lemon verbena brings a fresh, bright aroma."
    },
    tags: {
      fa: ["بدون کافئین", "عطر ملایم", "گرم و لطیف"],
      en: ["Caffeine-free", "Soft aroma", "Comforting"]
    }
  },

  low: {
    type: "A LITTLE COMFORT",
    title: {
      fa: "هات چاکلت وانیلی",
      en: "Vanilla hot chocolate"
    },
    desc: {
      fa: "شکلات گرم و لطیف با رایحه‌ی وانیل؛ یک انتخاب دلگرم‌کننده برای وقتی که دلت طعمی شیرین و آشنا می‌خواهد.",
      en: "Warm, mellow chocolate with vanilla notes — a sweet, comforting choice for a softer moment."
    },
    tags: {
      fa: ["شکلاتی", "وانیل لطیف", "گرم و شیرین"],
      en: ["Chocolate", "Soft vanilla", "Warm & sweet"]
    }
  },

  energy: {
    type: "BRIGHT & FRESH",
    title: {
      fa: "چای سبز و نعناع",
      en: "Green tea & mint"
    },
    desc: {
      fa: "طعم خنک نعناع در کنار چای سبز. چای سبز کافئین دارد؛ اگر به کافئین حساس هستی، گزینه بدون کافئین را انتخاب کن.",
      en: "Fresh mint meets green tea. Green tea contains caffeine, so choose a caffeine-free option if you are sensitive to it."
    },
    tags: {
      fa: ["دارای کافئین", "طعم تازه", "نعناع"],
      en: ["Contains caffeine", "Fresh taste", "Mint"]
    }
  },

  smoke: {
    type: "HERBAL MOMENT",
    title: {
      fa: "دمنوش مریم‌گلی",
      en: "Sage herbal infusion"
    },
    desc: {
      fa: "مریم‌گلی گیاهی معطر است که به‌صورت سنتی برای تهیه دمنوش استفاده می‌شود. این نوشیدنی آسیب ریه ناشی از سیگار را پاک یا درمان نمی‌کند؛ برای کاهش آسیب، ترک سیگار و دریافت کمک تخصصی مؤثرتر است.",
      en: "Sage is an aromatic herb traditionally brewed as an infusion. It does not cleanse or repair lungs damaged by smoking; quitting and professional support are the effective ways to reduce harm."
    },
    tags: {
      fa: ["گیاهی و معطر", "بدون کافئین", "طعم گیاهی"],
      en: ["Herbal & aromatic", "Caffeine-free", "Herbal taste"]
    }
  }
};


// MOOD SELECTOR
function renderMood(key) {
  activeMood = key;

  $$(".mood-option").forEach(button => {
    button.classList.toggle(
      "selected",
      button.dataset.mood === key
    );
  });

  const data = moodData[key];

  $("#suggestionType").textContent = data.type;
  $("#suggestionTitle").textContent = data.title[language];
  $("#suggestionDescription").textContent = data.desc[language];

  $("#suggestionTags").innerHTML =
    data.tags[language]
      .map(tag => `<span>${tag}</span>`)
      .join("");
}

$$(".mood-option").forEach(button => {
  button.addEventListener("click", () => {
    renderMood(button.dataset.mood);
  });
});


// LANGUAGE SWITCHER
function setLanguage(next) {
  language = next;

  document.documentElement.lang = next;
  document.documentElement.dir =
    next === "fa" ? "rtl" : "ltr";

  $("#language").textContent =
    next === "fa" ? "EN" : "FA";

  $$("[data-fa][data-en]").forEach(element => {
    element.innerHTML = element.dataset[next];
  });

  renderMood(activeMood);

  const active = $(".filter.active");

  if (active) {
    filterMenu(active.dataset.filter);
  }

  const flavour = $(".flavour.active");

  if (flavour) {
    selectFlavour(flavour.dataset.flavour);
  }
}

$("#language").addEventListener("click", () => {
  setLanguage(language === "fa" ? "en" : "fa");
});


// MOBILE NAVIGATION
$("#menuToggle").addEventListener("click", () => {
  $("nav.main-nav").classList.toggle("open");
});

$$(".main-nav a").forEach(link => {
  link.addEventListener("click", () => {
    $("nav.main-nav").classList.remove("open");
  });
});


// MENU FILTERS
function filterMenu(category) {
  $$(".drink-card").forEach(card => {
    card.style.display =
      category === "all" ||
      card.dataset.category === category
        ? ""
        : "none";
  });

  $$(".filter").forEach(button => {
    button.classList.toggle(
      "active",
      button.dataset.filter === category
    );
  });
}

$$(".filter").forEach(button => {
  button.addEventListener("click", () => {
    filterMenu(button.dataset.filter);
  });
});


// HOT CHOCOLATE FLAVOURS
const flavourCopy = {
  dark: {
    fa: "برای وقتی که دلت یک طعم عمیق و جدی می‌خواهد.",
    en: "For moments when you want something deep and intense."
  },

  vanilla: {
    fa: "لطیف، خامه‌ای و کمی نوستالژیک؛ مثل یک عصر آرام.",
    en: "Soft, creamy, and nostalgic — like a slow afternoon."
  },

  spice: {
    fa: "گرمای دارچین برای یک تجربه‌ی پرادویه و ماجراجو.",
    en: "A cinnamon warmth for a gently adventurous sip."
  },

  caramel: {
    fa: "شیرینی کارامل با یک پایان نمکی و خاص.",
    en: "Caramel sweetness with a delicate salty finish."
  }
};

function selectFlavour(key) {
  $$(".flavour").forEach(button => {
    button.classList.toggle(
      "active",
      button.dataset.flavour === key
    );
  });

  $("#flavourResult").textContent =
    flavourCopy[key][language];
}

$$(".flavour").forEach(button => {
  button.addEventListener("click", () => {
    selectFlavour(button.dataset.flavour);
  });
});


// DRINK SELECTION
$("#chooseDrink").addEventListener("click", () => {
  const message =
    language === "fa"
      ? `«${moodData[activeMood].title.fa}» انتخاب شد. برای ثبت سفارش با کافه تماس بگیر.`
      : `${moodData[activeMood].title.en} selected. Contact the café to place your order.`;

  toast(message);
});


// TOAST NOTIFICATION
function toast(message) {
  const element = $("#toast");

  element.textContent = message;
  element.classList.add("show");

  clearTimeout(window.toastTimer);

  window.toastTimer = setTimeout(() => {
    element.classList.remove("show");
  }, 3500);
}


// PAGE ANIMATIONS
window.addEventListener("load", () => {

  const loader = $(".loader");

  if (window.gsap) {

    gsap.to(".loader-line i", {
      width: "100%",
      duration: 0.7
    });

    gsap.delayedCall(1.15, () => {
      loader.classList.add("done");
    });

    gsap.from(".hero-copy .reveal", {
      y: 35,
      opacity: 0,
      stagger: 0.13,
      duration: 1,
      ease: "power3.out",
      delay: 1.05
    });

    gsap.from(".hero-visual", {
      y: 40,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      delay: 1.1
    });

  } else {

    setTimeout(() => {
      loader.classList.add("done");
    }, 900);

  }


  // LENIS SMOOTH SCROLL
  if (window.Lenis) {

    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    if (window.gsap && window.ScrollTrigger) {

      lenis.on("scroll", ScrollTrigger.update);

      gsap.ticker.add(time => {
        lenis.raf(time * 1000);
      });

      gsap.ticker.lagSmoothing(0);
    }
  }


  // SCROLL ANIMATIONS
  if (window.gsap && window.ScrollTrigger) {

    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray([
      ".section-index",
      ".story-title",
      ".story-body",
      ".menu-heading",
      ".drink-card",
      ".gallery-card",
      ".visit-copy",
      ".map-panel"
    ]).forEach((element, index) => {

      gsap.from(element, {
        y: 45,
        opacity: 0,
        duration: 0.85,
        ease: "power2.out",

        scrollTrigger: {
          trigger: element,
          start: "top 86%",
          once: true
        },

        delay: element.classList.contains("drink-card")
          ? (index % 4) * 0.08
          : 0
      });

    });


    // FLOATING STAMP ANIMATION
    gsap.to(".floating-stamp", {
      rotation: 370,
      duration: 24,
      repeat: -1,
      ease: "none"
    });

  }

});


// INITIALIZE WEBSITE
setLanguage("fa");
