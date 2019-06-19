const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM  Is  Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navItems = Array.from(document.querySelectorAll("a"));
navItems.forEach((item, index) => {
  item.textContent = siteContent["nav"][`nav-item-${index+1}`];
  item.style.color = "green";
});

// append and prepend nav a elements

let prependedAnchor = document.createElement("a");
prependedAnchor.textContent = "Prepend";
prependedAnchor.style.color = "green";
document.querySelector("nav").prepend(prependedAnchor);

let appendedAnchor = document.createElement("a");
appendedAnchor.textContent = "Append";
appendedAnchor.style.color = "green";
document.querySelector("nav").appendChild(appendedAnchor);

// cta

let ctaText = document.querySelector("h1");
let interim = siteContent["cta"]["h1"].split(" ");

ctaText.textContent = interim[0];
let ctaText2 = document.createElement("h1");
ctaText2.textContent = interim[2];
document.querySelector(".cta-text").insertBefore(ctaText2, document.querySelector("button"));
let ctaText3 = document.createElement("h1");
ctaText3.textContent = interim[4];
document.querySelector(".cta-text").insertBefore(ctaText3, document.querySelector("button"));

const ctaH1s = document.querySelectorAll("h1");
ctaH1s.forEach((item) => item.style.marginBottom = 0);

let ctaButton = document.querySelector("button");
ctaButton.textContent = siteContent["cta"]["button"];

let ctaImg = document.querySelector("#cta-img");
ctaImg.src = siteContent["cta"]["img-src"];

// top content

let featuresH4 = document.querySelector(".top-content .text-content:first-child h4");
featuresH4.textContent = siteContent["main-content"]["features-h4"];

let featuresP = document.querySelector(".top-content .text-content:first-child p");
featuresP.textContent = siteContent["main-content"]["features-content"];

let aboutH4 = document.querySelector(".top-content .text-content:last-child h4");
aboutH4.textContent = siteContent["main-content"]["about-h4"];

let aboutP = document.querySelector(".top-content .text-content:last-child p");
aboutP.textContent = siteContent["main-content"]["about-content"];

// middle image

let middleImg = document.querySelector("#middle-img");
middleImg.src = siteContent["main-content"]["middle-img-src"];

// bottom content

let servicesH4 = document.querySelector(".bottom-content .text-content:first-child h4");
servicesH4.textContent = siteContent["main-content"]["services-h4"];

let servicesP = document.querySelector(".bottom-content .text-content:first-child p");
servicesP.textContent = siteContent["main-content"]["services-content"];

let productH4 = document.querySelector(".bottom-content .text-content:nth-child(2) h4");
productH4.textContent = siteContent["main-content"]["product-h4"];

let productP = document.querySelector(".bottom-content .text-content:nth-child(2) p");
productP.textContent = siteContent["main-content"]["product-content"];

let visionH4 = document.querySelector(".bottom-content .text-content:last-child h4");
visionH4.textContent = siteContent["main-content"]["vision-h4"];

let visionP = document.querySelector(".bottom-content .text-content:last-child p");
visionP.textContent = siteContent["main-content"]["vision-content"];

// contact

let contactH4 = document.querySelector(".contact h4");
contactH4.textContent = siteContent["contact"]["contact-h4"];

let contactAddress = document.querySelector(".contact p:nth-child(2)");
contactAddress.textContent = siteContent["contact"]["address"];

let contactPhone = document.querySelector(".contact p:nth-child(3)");
contactPhone.textContent = siteContent["contact"]["phone"];

let contactEmail = document.querySelector(".contact p:last-child");
contactEmail.textContent = siteContent["contact"]["email"];

// footer

let footer = document.querySelector("footer p");
footer.textContent = siteContent["footer"]["copyright"];