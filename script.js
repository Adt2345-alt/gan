// Ganpati Digital Invitation Master Controller with Multi-Language Support (MR, HI, EN)

// Localized Default Data per Language
const LOCALIZED_DEFAULTS = {
  mr: {
    host: "वाघचौरे कुटुंब",
    addressText: "राम लक्ष्मण टॉवर रूम नं.107B वाशी, नवी मुंबई, ४००७०३",
    dateText: "सोमवार, १४ सप्टेंबर २०२६",
    timeText: "सकाळी १०:०० वाजता"
  },
  hi: {
    host: "वाघचौरे परिवार",
    addressText: "राम लक्ष्मण टॉवर रूम नं.107B वाशी, नवी मुंबई, ४००७०३",
    dateText: "सोमवार, १४ सितंबर २०२६",
    timeText: "प्रातः १०:०० बजे"
  },
  en: {
    host: "Waghchaure Family",
    addressText: "Ram Laxman Tower Room No. 107B, Vashi, Navi Mumbai - 400703",
    dateText: "Monday, 14 September 2026",
    timeText: "10:00 AM Morning"
  }
};

const COMMON_DEFAULTS = {
  isoDate: "2026-09-14T10:00",
  mapUrl: "https://maps.google.com/?q=Ram+Laxman+Tower+Vashi+Navi+Mumbai"
};

// Translations Dictionary
const TRANSLATIONS = {
  mr: {
    shree_ganeshay_namah: "॥ श्री गणेशाय नमः ॥",
    bappa_aagaman: "बाप्पाचे आगमन",
    bappa_sub_invitation: "आपणास सस्नेह निमंत्रण !",
    btn_share: "शेअर करा",
    envelope_title: "गणेशोत्सव निमंत्रण",
    envelope_sub: "सप्रेम निमंत्रण स्वीकारण्यासाठी खाली क्लिक करा",
    open_invite_btn: "निमंत्रण पत्रिका उघडा",
    ring_bell: "घंटी वाजवा",
    shower_flowers: "पुष्पवृष्टी",
    light_diya: "आरती ओवाळा",
    scroll_down: "खाली स्क्रोल करा",
    open_maps_btn: "Open Maps",
    welcome_blessing: "आपल्या सहकुटुंब उपस्थितीने उत्सवाची शोभा वाढवा",
    save_dates_subtitle: "SAVE THE DATES",
    save_dates_title_prefix: "उत्सवाचे",
    save_dates_title_highlight: "क्षण",
    event_arrival_label: "BAPPA'S ARRIVAL",
    event_arrival_marathi: "गणपती बाप्पांचे मंगल आगमन",
    event_arrival_time: "(सकाळी १०:०० वाजता)",
    event_utsav_label: "GANPATI UTSAV",
    event_utsav_marathi: "आरती • दर्शन • प्रसाद",
    event_visarjan_label: "VISARJAN",
    event_visarjan_marathi: "पुढच्या वर्षी लवकर या!",
    countdown_subtitle: "उत्सवाची उत्सुकता",
    countdown_title_prefix: "आगमनाला",
    countdown_title_highlight: "उरलेला वेळ",
    unit_days: "दिवस",
    unit_hours: "तास",
    unit_minutes: "मिनिटे",
    unit_seconds: "सेकंद",
    rsvp_subtitle: "उपस्थिती नोंदणी",
    rsvp_title_prefix: "तुम्ही",
    rsvp_title_highlight: "येणार ना?",
    rsvp_desc: "तुमची उपस्थिती नोंदवा म्हणजे आम्हास नियोजन करणे सोपे जाईल.",
    label_guest_name: "आपले नाव *",
    label_guest_count: "एकूण सदस्य संख्या",
    label_guest_message: "बाप्पांसाठी संदेश / सदिच्छा (पर्यायी)",
    placeholder_name: "उदा. अमोल पाटील",
    placeholder_msg: "बाप्पांच्या चरणी सदिच्छा...",
    opt_1: "१ व्यक्ती",
    opt_2: "२ व्यक्ती",
    opt_3: "३ व्यक्ती",
    opt_4: "४ व्यक्ती",
    opt_5: "५ किंवा अधिक",
    submit_rsvp_btn: "✨ नक्की येणार (उपस्थिती नोंदवा)",
    thankyou_title: "धन्यवाद!",
    thankyou_desc: "आपली उपस्थिती नोंदवली गेली आहे. बाप्पांच्या आगमनाला नक्की भेटूया!",
    wishes_title: "भक्तांच्या सदिच्छा",
    sample_wish: "✨ \"गणपती बाप्पा मोरया! उत्सवाच्या हार्दिक शुभेच्छा!\" — वाघचौरे कुटुंब",
    footer_quote: "आपली उपस्थिती हीच आमच्यासाठी बाप्पांची कृपा.",
    morya_prefix: "गणपती बाप्पा",
    morya_highlight: "मोरया!",
    footer_sub_credit: "डिजिटल गणेशोत्सव निमंत्रण पत्रिका",
    modal_share_title: "📲 WhatsApp निमंत्रण शेअर करा",
    share_preview_label: "शेअर केला जाणारा मेसेज:",
    btn_send_whatsapp: "💬 WhatsApp वर पाठवा",
    btn_copy_message: "📋 मेसेज कॉपी करा"
  },
  hi: {
    shree_ganeshay_namah: "॥ श्री गणेशाय नमः ॥",
    bappa_aagaman: "बाप्पा का आगमन",
    bappa_sub_invitation: "आप सहपरिवार सादर आमंत्रित हैं!",
    btn_share: "शेयर करें",
    envelope_title: "गणेशोत्सव निमंत्रण",
    envelope_sub: "सप्रेम निमंत्रण स्वीकारने के लिए नीचे क्लिक करें",
    open_invite_btn: "निमंत्रण कार्ड खोलें",
    ring_bell: "घंटी बजाएं",
    shower_flowers: "पुष्पवर्षा",
    light_diya: "आरती उतारें",
    scroll_down: "नीचे स्क्रॉल करें",
    open_maps_btn: "Open Maps",
    welcome_blessing: "आपकी सहकुटुंब उपस्थिति से उत्सव की शोभा बढ़ाएं",
    save_dates_subtitle: "SAVE THE DATES",
    save_dates_title_prefix: "उत्सव के",
    save_dates_title_highlight: "पावन क्षण",
    event_arrival_label: "BAPPA'S ARRIVAL",
    event_arrival_marathi: "श्री गणेश का मंगल आगमन",
    event_arrival_time: "(प्रातः १०:०० बजे)",
    event_utsav_label: "GANPATI UTSAV",
    event_utsav_marathi: "आरती • दर्शन • प्रसाद",
    event_visarjan_label: "VISARJAN",
    event_visarjan_marathi: "अगले वर्ष जल्दी आना!",
    countdown_subtitle: "उत्सव की उत्सुकता",
    countdown_title_prefix: "आगमन में",
    countdown_title_highlight: "शेष समय",
    unit_days: "दिन",
    unit_hours: "घंटे",
    unit_minutes: "मिनट",
    unit_seconds: "सेकंड",
    rsvp_subtitle: "उपस्थिति पंजीकरण",
    rsvp_title_prefix: "क्या आप",
    rsvp_title_highlight: "आ रहे हैं?",
    rsvp_desc: "अपनी उपस्थिति दर्ज करें ताकि हम व्यवस्था कर सकें।",
    label_guest_name: "आपका नाम *",
    label_guest_count: "कुल सदस्यों की संख्या",
    label_guest_message: "बाप्पा के लिए संदेश / शुभकामनाएं (वैकल्पिक)",
    placeholder_name: "जैसे: अमोल पाटिल",
    placeholder_msg: "बाप्पा के चरणों में शुभकामनाएं...",
    opt_1: "१ व्यक्ति",
    opt_2: "२ व्यक्ति",
    opt_3: "३ व्यक्ति",
    opt_4: "४ व्यक्ति",
    opt_5: "५ या अधिक",
    submit_rsvp_btn: "✨ जरूर आएंगे (उपस्थिति दर्ज करें)",
    thankyou_title: "धन्यवाद!",
    thankyou_desc: "आपकी उपस्थिति दर्ज हो गई है। बाप्पा के आगमन पर जरूर मिलें!",
    wishes_title: "भक्तों की शुभकामनाएं",
    sample_wish: "✨ \"गणपति बाप्पा मोरया! गणेश चतुर्थी की हार्दिक शुभकामनाएं!\" — वाघचौरे परिवार",
    footer_quote: "आपकी उपस्थिति ही हमारे लिए बाप्पा की कृपा है।",
    morya_prefix: "गणपति बाप्पा",
    morya_highlight: "मोरया!",
    footer_sub_credit: "डिजिटल गणेशोत्सव निमंत्रण कार्ड",
    modal_share_title: "📲 WhatsApp पर निमंत्रण शेयर करें",
    share_preview_label: "शेयर किया जाने वाला मैसेज:",
    btn_send_whatsapp: "💬 WhatsApp पर भेजें",
    btn_copy_message: "📋 मैसेज कॉपी करें"
  },
  en: {
    shree_ganeshay_namah: "|| Shree Ganeshay Namah ||",
    bappa_aagaman: "Arrival of Bappa",
    bappa_sub_invitation: "You are cordially invited!",
    btn_share: "Share Invite",
    envelope_title: "Ganesh Utsav Invitation",
    envelope_sub: "Click below to accept our heartfelt invitation",
    open_invite_btn: "Open Invitation Card",
    ring_bell: "Ring Bell",
    shower_flowers: "Shower Flowers",
    light_diya: "Light Diya",
    scroll_down: "Scroll Down",
    open_maps_btn: "Open Maps",
    welcome_blessing: "Grace the auspicious occasion with your family & blessings",
    save_dates_subtitle: "SAVE THE DATES",
    save_dates_title_prefix: "Auspicious",
    save_dates_title_highlight: "Moments",
    event_arrival_label: "BAPPA'S ARRIVAL",
    event_arrival_marathi: "Grand Arrival of Lord Ganesha",
    event_arrival_time: "(10:00 AM Morning)",
    event_utsav_label: "GANPATI UTSAV",
    event_utsav_marathi: "Aarti • Darshan • Mahaprasad",
    event_visarjan_label: "VISARJAN",
    event_visarjan_marathi: "Pudchya Varshi Lavkar Ya!",
    countdown_subtitle: "Grand Festivities Await",
    countdown_title_prefix: "Time Left For",
    countdown_title_highlight: "Bappa's Arrival",
    unit_days: "Days",
    unit_hours: "Hours",
    unit_minutes: "Mins",
    unit_seconds: "Secs",
    rsvp_subtitle: "RSVP Registration",
    rsvp_title_prefix: "Will You Be",
    rsvp_title_highlight: "Attending?",
    rsvp_desc: "Kindly confirm your arrival so we can make warm arrangements.",
    label_guest_name: "Your Name *",
    label_guest_count: "Number of Guests",
    label_guest_message: "Wishes / Message for Bappa (Optional)",
    placeholder_name: "e.g. Amol Patil",
    placeholder_msg: "Blessings & wishes for Bappa...",
    opt_1: "1 Person",
    opt_2: "2 Persons",
    opt_3: "3 Persons",
    opt_4: "4 Persons",
    opt_5: "5 or More Persons",
    submit_rsvp_btn: "✨ Confirm Attendance (RSVP)",
    thankyou_title: "Thank You!",
    thankyou_desc: "Your RSVP has been registered. Looking forward to welcoming you!",
    wishes_title: "Devotees' Wishes & Blessings",
    sample_wish: "✨ \"Ganpati Bappa Morya! Best wishes on Ganeshotsav!\" — Waghchaure Family",
    footer_quote: "Your presence is Lord Ganesha's greatest blessing to us.",
    morya_prefix: "Ganpati Bappa",
    morya_highlight: "Morya!",
    footer_sub_credit: "Digital Ganeshotsav Invitation Card",
    modal_share_title: "📲 Share Invitation via WhatsApp",
    share_preview_label: "WhatsApp Message Preview:",
    btn_send_whatsapp: "💬 Send on WhatsApp",
    btn_copy_message: "📋 Copy Invite Text"
  }
};

// State Management
localStorage.removeItem("ganpati_invitation_data");
let currentLang = localStorage.getItem("ganpati_invitation_lang") || "mr";

let customData = {
  ...COMMON_DEFAULTS,
  host: LOCALIZED_DEFAULTS.mr.host,
  addressText: LOCALIZED_DEFAULTS.mr.addressText,
  dateText: LOCALIZED_DEFAULTS.mr.dateText,
  timeText: LOCALIZED_DEFAULTS.mr.timeText,
  isCustomized: false
};

let audioCtx = null;
let isSoundOn = false;

// DOM Elements
const envelopeOverlay = document.getElementById("envelopeOverlay");
const openEnvelopeBtn = document.getElementById("openEnvelopeBtn");
const soundToggleBtn = document.getElementById("soundToggleBtn");
const soundIcon = document.getElementById("soundIcon");
const bgMusic = document.getElementById("bgMusic");

const shareInviteBtn = document.getElementById("shareInviteBtn");
const shareModal = document.getElementById("shareModal");
const closeShareBtn = document.getElementById("closeShareBtn");
const whatsappSendBtn = document.getElementById("whatsappSendBtn");
const copyShareBtn = document.getElementById("copyShareBtn");
const shareTextPreview = document.getElementById("shareTextPreview");

// Bells & Rituals
const bellLeft = document.getElementById("bellLeft");
const bellRight = document.getElementById("bellRight");
const ringBellBtn = document.getElementById("ringBellBtn");
const showerFlowersBtn = document.getElementById("showerFlowersBtn");
const lightDiyaBtn = document.getElementById("lightDiyaBtn");

// RSVP Form
const rsvpForm = document.getElementById("rsvpForm");
const rsvpThankyou = document.getElementById("rsvpThankyou");
const wishesList = document.getElementById("wishesList");

// Language Switcher Function
function switchLanguage(lang) {
  if (!TRANSLATIONS[lang]) return;
  currentLang = lang;
  localStorage.setItem("ganpati_invitation_lang", lang);

  // Update active state on language buttons
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  // Update all data-i18n elements
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (TRANSLATIONS[lang][key]) {
      el.textContent = TRANSLATIONS[lang][key];
    }
  });

  // Update all data-i18n-placeholder elements
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (TRANSLATIONS[lang][key]) {
      el.placeholder = TRANSLATIONS[lang][key];
    }
  });

  renderInvitationData();
}

// Language Switcher Click Event Handlers
document.querySelectorAll(".lang-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    switchLanguage(btn.dataset.lang);
  });
});

// Render Dynamic User Data
function renderInvitationData() {
  const lang = currentLang;

  // Resolve Host, Address, Date & Time
  let hostVal = customData.isCustomized ? customData.host : LOCALIZED_DEFAULTS[lang].host;
  let addressVal = customData.isCustomized ? customData.addressText : LOCALIZED_DEFAULTS[lang].addressText;
  let dateVal = customData.isCustomized ? customData.dateText : LOCALIZED_DEFAULTS[lang].dateText;
  let timeVal = customData.isCustomized ? customData.timeText : LOCALIZED_DEFAULTS[lang].timeText;

  const hostDisplay = document.getElementById("displayHostVenue");
  const addressDisplay = document.getElementById("displayAddressLine");
  const dateDisplay = document.getElementById("displayDate");
  const timeDisplay = document.getElementById("displayTime");
  const mapsLink = document.getElementById("googleMapsLink");
  const footerHost = document.getElementById("footerHostDisplay");

  if (hostDisplay) hostDisplay.textContent = hostVal;
  if (addressDisplay) addressDisplay.textContent = addressVal;
  if (dateDisplay) dateDisplay.textContent = dateVal;
  if (timeDisplay) timeDisplay.textContent = timeVal;
  if (mapsLink) mapsLink.href = customData.mapUrl || COMMON_DEFAULTS.mapUrl;
  if (footerHost) footerHost.textContent = `— ${hostVal} —`;
}

// Web Audio Temple Bell Synthesizer (Disabled alarm sound per request)
function playTempleBellSound() {
  return;
}

function triggerBellRing(bellElement) {
  playTempleBellSound();
  if (bellElement) {
    bellElement.style.animation = 'none';
    bellElement.offsetHeight; // trigger reflow
    bellElement.style.animation = 'swingBell 0.4s ease-in-out 3 alternate';
  }
}

// Audio Toggle Button
if (soundToggleBtn) {
  soundToggleBtn.addEventListener("click", () => {
    isSoundOn = !isSoundOn;
    if (isSoundOn) {
      soundIcon.textContent = "🔔";
      bgMusic.play().catch(() => {});
    } else {
      soundIcon.textContent = "🎵";
      bgMusic.pause();
    }
  });
}

// Envelope Unlock
if (openEnvelopeBtn) {
  openEnvelopeBtn.addEventListener("click", () => {
    envelopeOverlay.classList.add("opened");
    playTempleBellSound();
    spawnFlowerShower(50);
  });
}

// Hanging Bell Click Handlers
if (bellLeft) bellLeft.addEventListener("click", () => triggerBellRing(bellLeft));
if (bellRight) bellRight.addEventListener("click", () => triggerBellRing(bellRight));

// Ritual Buttons
if (ringBellBtn) {
  ringBellBtn.addEventListener("click", () => {
    triggerBellRing(bellLeft);
    triggerBellRing(bellRight);
  });
}

if (showerFlowersBtn) {
  showerFlowersBtn.addEventListener("click", () => {
    playTempleBellSound();
    spawnFlowerShower(40);
  });
}

if (lightDiyaBtn) {
  lightDiyaBtn.addEventListener("click", () => {
    playTempleBellSound();
    document.body.style.filter = "brightness(1.2) contrast(1.05)";
    setTimeout(() => document.body.style.filter = "none", 900);
  });
}

// Countdown Engine
function updateCountdown() {
  const targetIso = customData.isoDate || COMMON_DEFAULTS.isoDate;
  const eventTime = new Date(targetIso).getTime();
  const now = Date.now();
  const diff = eventTime - now;

  const values = diff > 0 ? {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60)
  } : { days: 0, hours: 0, minutes: 0, seconds: 0 };

  if (document.getElementById("days")) document.getElementById("days").textContent = String(values.days).padStart(2, "0");
  if (document.getElementById("hours")) document.getElementById("hours").textContent = String(values.hours).padStart(2, "0");
  if (document.getElementById("minutes")) document.getElementById("minutes").textContent = String(values.minutes).padStart(2, "0");
  if (document.getElementById("seconds")) document.getElementById("seconds").textContent = String(values.seconds).padStart(2, "0");
}

setInterval(updateCountdown, 1000);

// Marigold Petals Particle Canvas
const canvas = document.getElementById("petalCanvas");
const ctx = canvas.getContext("2d");
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});

const petals = [];
const petalColors = ["#ffd700", "#ff9800", "#ff5722", "#ffeb3b", "#e91e63"];

class Petal {
  constructor() {
    this.reset();
  }
  reset() {
    this.x = Math.random() * width;
    this.y = -20 - Math.random() * 50;
    this.size = Math.random() * 8 + 6;
    this.speedY = Math.random() * 1.8 + 0.8;
    this.speedX = Math.random() * 1 - 0.5;
    this.rotation = Math.random() * 360;
    this.rotSpeed = Math.random() * 2 - 1;
    this.color = petalColors[Math.floor(Math.random() * petalColors.length)];
  }
  update() {
    this.y += this.speedY;
    this.x += this.speedX + Math.sin(this.y * 0.02) * 0.5;
    this.rotation += this.rotSpeed;
    if (this.y > height + 20) this.reset();
  }
  draw() {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate((this.rotation * Math.PI) / 180);
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.ellipse(0, 0, this.size, this.size * 0.5, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

for (let i = 0; i < 35; i++) {
  petals.push(new Petal());
}

function animatePetals() {
  ctx.clearRect(0, 0, width, height);
  petals.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animatePetals);
}
animatePetals();

function spawnFlowerShower(count = 30) {
  for (let i = 0; i < count; i++) {
    petals.push(new Petal());
  }
}

// WhatsApp Share Generator
function generateShareText() {
  const pageUrl = window.location.href;
  const lang = currentLang;
  const hostVal = customData.isCustomized ? customData.host : LOCALIZED_DEFAULTS[lang].host;
  const addressVal = customData.isCustomized ? customData.addressText : LOCALIZED_DEFAULTS[lang].addressText;
  const dateVal = customData.isCustomized ? customData.dateText : LOCALIZED_DEFAULTS[lang].dateText;
  const timeVal = customData.isCustomized ? customData.timeText : LOCALIZED_DEFAULTS[lang].timeText;

  if (lang === 'hi') {
    return `*॥ श्री गणेशाय नमः ॥*
🚩 *बाप्पा का आगमन - सप्रेम निमंत्रण* 🚩

हर वर्ष की भांति इस वर्ष भी हमारे घर *श्री गणराया* का आगमन हो रहा है। इस पावन समारोह में आप सहपरिवार उपस्थित होकर आरती एवं महाप्रसाद का लाभ लें।

📍 *निमंत्रक / स्थल:* ${hostVal}
🏠 *पता:* ${addressVal}
📅 *दिनांक:* ${dateVal}
⏰ *समय:* ${timeVal}

🗺️ *Google Maps:* ${customData.mapUrl || COMMON_DEFAULTS.mapUrl}

✨ *डिजिटल निमंत्रण कार्ड देखने के लिए नीचे दिए गए लिंक पर क्लिक करें:*
${pageUrl}

_आपकी उपस्थिति ही हमारा सौभाग्य है!_ 🙏`;
  } else if (lang === 'en') {
    return `*|| Shree Ganeshay Namah ||*
🚩 *Arrival of Lord Ganesha - Cordial Invitation* 🚩

With immense joy, we invite you to join us in welcoming *Lord Ganesha* at our home. Please grace us with your family's presence for Aarti & Mahaprasad.

📍 *Host / Venue:* ${hostVal}
🏠 *Address:* ${addressVal}
📅 *Date:* ${dateVal}
⏰ *Time:* ${timeVal}

🗺️ *Google Maps:* ${customData.mapUrl || COMMON_DEFAULTS.mapUrl}

✨ *Click the link below to view the interactive Digital Invitation Card:*
${pageUrl}

_Your presence and blessings mean the world to us!_ 🙏`;
  } else {
    return `*॥ श्री गणेशाय नमः ॥*
🚩 *बाप्पाचे आगमन - सप्रेम निमंत्रण* 🚩

दरवर्षाप्रमाणे यावर्षीही आमच्या घरी *श्री गणरायाचे* आगमन होत आहे. या मंगल सोहळ्यास आपण सहकुटुंब सहपरिवार उपस्थित राहून आरती व महाप्रसादाचा लाभ घ्यावा.

📍 *निमंत्रक / स्थळ:* ${hostVal}
🏠 *पत्ता:* ${addressVal}
📅 *दिनांक:* ${dateVal}
⏰ *वेळ:* ${timeVal}

🗺️ *Google Maps:* ${customData.mapUrl || COMMON_DEFAULTS.mapUrl}

✨ *डिजिटल निमंत्रण पत्रिका पाहण्यासाठी खालील लिंकवर क्लिक करा:*
${pageUrl}

_आपली उपस्थिती हेच आमचे अहोभाग्य!_ 🙏`;
  }
}

if (shareInviteBtn) {
  shareInviteBtn.addEventListener("click", () => {
    const shareText = generateShareText();
    shareTextPreview.textContent = shareText;
    shareModal.classList.add("active");
  });
}

if (closeShareBtn) {
  closeShareBtn.addEventListener("click", () => shareModal.classList.remove("active"));
}

if (whatsappSendBtn) {
  whatsappSendBtn.addEventListener("click", () => {
    const text = encodeURIComponent(generateShareText());
    window.open(`https://api.whatsapp.com/send?text=${text}`, "_blank");
  });
}

if (copyShareBtn) {
  copyShareBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(generateShareText()).then(() => {
      alert(currentLang === 'hi' ? 'व्हाट्सएप मैसेज कॉपी हो गया है!' : (currentLang === 'en' ? 'WhatsApp invitation message copied to clipboard!' : 'WhatsApp निमंत्रण मेसेज कॉपी झाला आहे!'));
    });
  });
}

// RSVP Submission
if (rsvpForm) {
  rsvpForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("guestName").value.trim();
    const count = document.getElementById("guestCount").value;
    const msg = document.getElementById("guestMessage").value.trim();

    if (!name) return;

    const wishItem = document.createElement("div");
    wishItem.className = "wish-card";
    const defaultWish = currentLang === 'hi' ? 'गणपति बाप्पा मोरया! हार्दिक शुभकामनाएं!' : (currentLang === 'en' ? 'Ganpati Bappa Morya! Best Wishes!' : 'गणपती बाप्पा मोरया! Utasavacha Hardik Shubhechha!');
    wishItem.innerHTML = `✨ "${msg || defaultWish}" — <strong>${name}</strong> (${count})`;
    wishesList.prepend(wishItem);

    rsvpForm.style.display = "none";
    rsvpThankyou.style.display = "block";
    spawnFlowerShower(40);
    playTempleBellSound();
  });
}

// Initial Load
document.addEventListener("DOMContentLoaded", () => {
  switchLanguage(currentLang);
  updateCountdown();
});
