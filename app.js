/* GOORAK — vanilla JavaScript. Edit the settings below before publishing. */
const GOORAK_CONFIG = {
  // شماره واتساپ با کد کشور، فقط عدد؛ نمونه ایران: 989121234567
  whatsappNumber: "989000000000",
  // نشانی دقیق را در متن‌های index.html نیز جایگزین کنید.
  businessName: "GOORAK"
};

const menuItems = [
  {id:1,cat:"cold",icon:"❋",price:"",fa:"لیموناد نعنا",en:"Mint Lemonade",descFa:"لیمو تازه، نعنا و خنکیِ دلچسب",descEn:"Fresh lemon, mint and a refreshing finish"},
  {id:2,cat:"cold",icon:"✺",price:"",fa:"آیس‌تی هلو",en:"Peach Iced Tea",descFa:"چای سرد با عطر هلو و یخ",descEn:"Chilled tea with peach notes and ice"},
  {id:3,cat:"cold",icon:"◌",price:"",fa:"موهیتو بدون الکل",en:"Virgin Mojito",descFa:"نعنا، لیمو و آب گازدار",descEn:"Mint, lime and sparkling water"},
  {id:4,cat:"cold",icon:"✧",price:"",fa:"آیس‌کافی",en:"Iced Coffee",descFa:"قهوه خنک برای بعدازظهرهای گرم",descEn:"Chilled coffee for warm afternoons"},
  {id:5,cat:"tea",icon:"❀",price:"",fa:"دمنوش به‌لیمو",en:"Lemon Verbena Tea",descFa:"عطری گیاهی و لطیف؛ مناسب لحظه آرامش",descEn:"Gentle herbal aroma for a quiet moment"},
  {id:6,cat:"tea",icon:"☼",price:"",fa:"دمنوش گل‌گاوزبان",en:"Borage Herbal Tea",descFa:"طعم ملایم گل‌ها؛ سرو به‌صورت گرم",descEn:"Soft floral taste, served warm"},
  {id:7,cat:"tea",icon:"❋",price:"",fa:"چای دارچین و سیب",en:"Apple Cinnamon Tea",descFa:"ترکیبی معطر و دلنشین",descEn:"A fragrant and comforting blend"},
  {id:8,cat:"sweet",icon:"♡",price:"",fa:"کیک روز",en:"Cake of the Day",descFa:"انتخاب تازه روز؛ موجودی را بپرسید",descEn:"Fresh daily selection — ask what is available"},
  {id:9,cat:"sweet",icon:"▱",price:"",fa:"چیزکیک",en:"Cheesecake",descFa:"برشی لطیف برای کنار قهوه",descEn:"A smooth slice to enjoy with coffee"},
  {id:10,cat:"ready",icon:"◒",price:"",fa:"هات‌چاکلت",en:"Hot Chocolate",descFa:"شکلات گرم و خامه‌ای",descEn:"Warm, creamy chocolate"},
  {id:11,cat:"ready",icon:"◇",price:"",fa:"بیسکویت و کوکی",en:"Cookies & Biscuits",descFa:"آیتم‌های آماده سرو، مناسب همراه نوشیدنی",descEn:"Ready-to-serve treats alongside your drink"},
  {id:12,cat:"ready",icon:"☕",price:"",fa:"قهوه دمی / اسپرسو",en:"Brewed Coffee / Espresso",descFa:"برای دوست‌داران طعم کلاسیک قهوه",descEn:"A classic coffee choice"}
];
const shopItems = [
  {id:1,cat:"clothes",art:"clothes",fa:"پوشاک دست‌دوز",en:"Handmade Clothing",descFa:"لباس‌های خاص با جزئیات دست‌ساز",descEn:"Distinctive pieces with handmade details"},
  {id:2,cat:"bags",art:"bags",fa:"کیف‌های دست‌دوز",en:"Handmade Bags",descFa:"کیف‌های کاربردی با بافت و دوخت خاص",descEn:"Everyday bags with unique texture and stitching"},
  {id:3,cat:"shoes",art:"shoes",fa:"کفش دست‌دوز",en:"Handmade Shoes",descFa:"مدل‌ها و سایزهای موجود را استعلام کنید",descEn:"Ask us about available styles and sizes"}
];

const translations = {
  fa:{
    brandSub:"CAFE · GALLERY · KANGAN",navMenu:"منو",navGallery:"گالری",navStory:"درباره گوراک",navVisit:"تماس و رزرو",lightsOn:"چراغ روشن",lightsOff:"چراغ خاموش",
    heroEyebrow:"یک مکثِ خوش‌طعم کنار دریا",heroTitle:"خنکای جنوب،<br><em>گرمای دورهمی.</em>",heroText:"در گوراک، نوشیدنی تازه‌ای انتخاب کن، میان دست‌ساخته‌ها قدم بزن و لحظه‌ای برای خودت نگه دار.",viewMenu:"دیدن منو",reserveSeat:"رزرو دورهمی",heroNote:"ساخته‌شده برای روزهای آفتابی جنوب",sideNote:"کافه · گالری · بوتیک دست‌ساز",
    introEyebrow:"حال‌وهوای گوراک",introText:"جایی برای نوشیدن، کشف کردن و <em>باهم بودن.</em>",introSmall:"از طعم‌های خنک و دمنوش‌های آرام تا لباس‌ها و اکسسوری‌های دست‌دوز؛ هر گوشه قصه‌ای کوچک دارد.",
    menuEyebrow:"چیزی تازه انتخاب کن",menuTitle:"منوی گوراک",menuIntro:"برای هوای گرم کنگان، با طعم‌های ساده و دوست‌داشتنی.",all:"همه",coldDrinks:"نوشیدنی خنک",herbalTea:"دمنوش",sweet:"شیرینی و کیک",ready:"آماده سرو",menuFootnote:"ترکیبات و موجودی روز ممکن است تغییر کند. برای اطلاع از موجودی امروز پیام بده.",
    featureEyebrow:"لحظه‌ای برای خودت",featureTitle:"ساده، تازه،<br><em>از جنس جنوب.</em>",featureText:"نوشیدنی خنک در دست، نور گرم روی میز و صدای زندگی در پس‌زمینه؛ همین لحظه‌های کوچک، خاطره می‌شوند.",findUs:"ما را پیدا کن",
    shopEyebrow:"دست‌ساز، با حوصله",shopTitle:"گالری و بوتیک",shopIntro:"تکه‌هایی خاص برای استفاده هر روز؛ بافت، دوخت و جزئیات دست‌ساز.",clothes:"لباس",bags:"کیف",shoes:"کفش",shopNote:"هر محصول می‌تواند جزئیات و تفاوت‌های کوچک خودش را داشته باشد. برای دیدن عکس‌های بیشتر، سایزبندی و سفارش مستقیم در واتساپ پیام بده.",orderWhatsApp:"استعلام در واتساپ",
    visitEyebrow:"در کنگان منتظرت هستیم",visitTitle:"قرار بعدی،<br><em>گوراک.</em>",visitText:"برای میز دوستانه، دورهمی کوچک یا پرسیدن درباره محصولات، از همین‌جا با ما در ارتباط باش.",addressLabel:"نشانی",addressValue:"کنگان، استان بوشهر — نشانی دقیق را اینجا وارد کنید",hoursLabel:"ساعات فعالیت",hoursValue:"هر روز · ساعت کاری را اعلام کنید",whatsappUs:"گفت‌وگو در واتساپ",formKicker:"یک پیام کوتاه برای ما",formTitle:"رزرو یا پرسش",nameLabel:"نام شما",countLabel:"تعداد نفرات",dateLabel:"تاریخ پیشنهادی",messageLabel:"پیام شما",sendWhatsApp:"ارسال درخواست در واتساپ",formHint:"با زدن دکمه، واتساپ با متن آماده باز می‌شود؛ رزرو پس از تأیید مجموعه قطعی است.",openMap:"باز کردن در نقشه گوگل ↗",footerText:"یک گوشه گرم و سبز در جنوب ایران.",backTop:"بازگشت به بالا ↑",namePlaceholder:"نام و نام خانوادگی",messagePlaceholder:"مثلاً برای عصر جمعه میز می‌خواهیم..."
  },
  en:{
    brandSub:"CAFE · GALLERY · KANGAN",navMenu:"Menu",navGallery:"Gallery",navStory:"Our story",navVisit:"Visit & booking",lightsOn:"Lights on",lightsOff:"Lights off",
    heroEyebrow:"A delicious pause by the sea",heroTitle:"Southern freshness,<br><em>warm company.</em>",heroText:"Choose a fresh drink, explore handmade pieces and save a little moment for yourself at Goorak.",viewMenu:"Explore menu",reserveSeat:"Plan a gathering",heroNote:"Made for sunny days in the south",sideNote:"Cafe · Gallery · Handmade boutique",
    introEyebrow:"The Goorak feeling",introText:"A place to sip, discover and <em>be together.</em>",introSmall:"From cooling drinks and calming herbal teas to handmade clothing and accessories, every corner has a little story.",
    menuEyebrow:"Find your refreshment",menuTitle:"The Goorak menu",menuIntro:"Simple, lovely flavours for Kangan's warm weather.",all:"All",coldDrinks:"Cold drinks",herbalTea:"Herbal tea",sweet:"Cakes & sweets",ready:"Ready to serve",menuFootnote:"Daily ingredients and availability may vary. Message us to check today's selection.",
    featureEyebrow:"A moment for yourself",featureTitle:"Simple, fresh,<br><em>made of the south.</em>",featureText:"A cool drink in hand, warm light on the table and the sound of life around you. Small moments become memories.",findUs:"Find us",
    shopEyebrow:"Handmade with care",shopTitle:"Gallery & boutique",shopIntro:"Distinctive everyday pieces, textures, stitching and thoughtful handmade details.",clothes:"Clothing",bags:"Bags",shoes:"Shoes",shopNote:"Every piece may have its own small details and variations. Message us on WhatsApp for more photos, sizing and direct orders.",orderWhatsApp:"Ask on WhatsApp",
    visitEyebrow:"See you in Kangan",visitTitle:"Your next stop,<br><em>Goorak.</em>",visitText:"For a table with friends, a small gathering or product enquiries, get in touch here.",addressLabel:"Address",addressValue:"Kangan, Bushehr Province — add your exact address here",hoursLabel:"Opening hours",hoursValue:"Daily · Please add your opening hours",whatsappUs:"Chat on WhatsApp",formKicker:"A quick note to us",formTitle:"Booking or enquiry",nameLabel:"Your name",countLabel:"Guests",dateLabel:"Preferred date",messageLabel:"Your message",sendWhatsApp:"Send request on WhatsApp",formHint:"WhatsApp opens with a prepared message. Your booking is confirmed only after our reply.",openMap:"Open in Google Maps ↗",footerText:"A warm, green corner in southern Iran.",backTop:"Back to top ↑",namePlaceholder:"Full name",messagePlaceholder:"e.g. We'd like a table for Friday evening..."
  }
};

let currentLang = "fa";
let menuFilter = "all";
let shopFilter = "all";
const $ = (selector, root=document) => root.querySelector(selector);
const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];

function waLink(message){
  const number = GOORAK_CONFIG.whatsappNumber.replace(/\D/g,"");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
function setLanguage(lang){
  currentLang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
  document.body.dir = lang === "fa" ? "rtl" : "ltr";
  $$("[data-i18n]").forEach(el=>{
    const key = el.dataset.i18n;
    if(translations[lang][key] !== undefined) el.innerHTML = translations[lang][key];
  });
  $("#languageToggle").textContent = lang === "fa" ? "EN" : "فا";
  $("#guestName").placeholder = translations[lang].namePlaceholder;
  $("#guestMessage").placeholder = translations[lang].messagePlaceholder;
  renderMenu();
  renderShop();
  updateWhatsAppLinks();
}
function renderMenu(){
  const items = menuItems.filter(item => menuFilter === "all" || item.cat === menuFilter);
  $("#menuGrid").innerHTML = items.map(item=>`
    <article class="menu-card">
      <div class="card-top"><span class="item-icon" aria-hidden="true">${item.icon}</span>${item.price ? `<span class="item-price">${item.price}</span>` : ""}</div>
      <div><h3>${currentLang==="fa"?item.fa:item.en}</h3><p>${currentLang==="fa"?item.descFa:item.descEn}</p></div>
    </article>`).join("");
}
function renderShop(){
  const items = shopItems.filter(item => shopFilter === "all" || item.cat === shopFilter);
  $("#shopGrid").innerHTML = items.map(item=>`
    <article class="shop-card">
      <div class="shop-art ${item.art}" role="img" aria-label="${currentLang==="fa"?item.fa:item.en}"></div>
      <div class="shop-card-content">
        <div class="shop-card-meta"><span class="shop-category">${translations[currentLang][item.cat]}</span><a class="shop-order" href="${waLink(currentLang==="fa"?`سلام، درباره ${item.fa} در گوراک اطلاعات و عکس‌های بیشتر می‌خواستم.`:`Hello, I'd like more details and photos of ${item.en} at Goorak.`)}" target="_blank" rel="noopener">${translations[currentLang].orderWhatsApp} ↗</a></div>
        <h3>${currentLang==="fa"?item.fa:item.en}</h3><p>${currentLang==="fa"?item.descFa:item.descEn}</p>
      </div>
    </article>`).join("");
}
function setupFilters(containerSelector, setter, renderer){
  const container = $(containerSelector);
  container.addEventListener("click", event=>{
    const button = event.target.closest("[data-filter]");
    if(!button) return;
    setter(button.dataset.filter);
    $$(".filter-chip",container).forEach(chip=>chip.classList.toggle("active",chip===button));
    renderer();
  });
}
function updateWhatsAppLinks(){
  const generalMessage = currentLang==="fa" ? "سلام گوراک، وقت بخیر. درباره منو و ساعات فعالیت مجموعه سوال داشتم." : "Hello Goorak, I'd like to ask about your menu and opening hours.";
  $("#whatsappDirect").href = waLink(generalMessage);
  $("#floatingWhatsApp").href = waLink(generalMessage);
}
function initLights(){
  const toggle = $("#lightToggle");
  toggle.addEventListener("click",()=>{
    const isOn = document.body.classList.toggle("lights-on");
    document.body.classList.toggle("lights-off",!isOn);
    toggle.setAttribute("aria-pressed",String(isOn));
    toggle.title = isOn ? "چراغ را خاموش کن" : "چراغ را روشن کن";
    $(".light-label",toggle).textContent = translations[currentLang][isOn?"lightsOn":"lightsOff"];
  });
}
function initReservation(){
  $("#reservationForm").addEventListener("submit",event=>{
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name")||"").trim();
    if(!name){$("#guestName").focus();return;}
    const count = form.get("count");
    const date = form.get("date") || (currentLang==="fa"?"تعیین نشده":"Not specified");
    const message = String(form.get("message")||"").trim() || (currentLang==="fa"?"درخواست رزرو میز دارم.":"I'd like to request a table.");
    const text = currentLang==="fa"
      ? `سلام گوراک 🌿\nمن ${name} هستم.\nتعداد نفرات: ${count}\nتاریخ پیشنهادی: ${date}\nپیام: ${message}\nلطفاً برای هماهنگی اطلاع دهید.`
      : `Hello Goorak 🌿\nMy name is ${name}.\nGuests: ${count}\nPreferred date: ${date}\nMessage: ${message}\nPlease let me know to confirm.`;
    window.open(waLink(text),"_blank","noopener");
  });
}
function initMobileMenu(){
  const button=$("#mobileMenuButton"), nav=$(".main-nav");
  button.addEventListener("click",()=>{
    const open=nav.classList.toggle("open");
    button.setAttribute("aria-expanded",String(open));
  });
  $$(".main-nav a").forEach(link=>link.addEventListener("click",()=>{
    nav.classList.remove("open");button.setAttribute("aria-expanded","false");
  }));
}
function initVideoFallback(){
  const video=$(".hero-video");
  video.addEventListener("error",()=>{video.style.display="none";});
  video.addEventListener("loadeddata",()=>{video.style.display="block";});
}
document.addEventListener("DOMContentLoaded",()=>{
  $("#year").textContent=new Date().getFullYear();
  setupFilters("#menuFilters",value=>menuFilter=value,renderMenu);
  setupFilters("#shopFilters",value=>shopFilter=value,renderShop);
  $("#languageToggle").addEventListener("click",()=>setLanguage(currentLang==="fa"?"en":"fa"));
  initLights();initReservation();initMobileMenu();initVideoFallback();
  setLanguage("fa");
});