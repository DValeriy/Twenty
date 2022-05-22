const switchBut = document.querySelectorAll(".switch-lang");
const textNodes = {
  hero__topic: document.querySelector(".hero__topic"),
  hero__paragraph: document.querySelector(".hero__paragraph"),
  about__paragraph: document.querySelector(".about__paragraph"),
};
let flag = false;
switchBut.forEach((elem) => elem.addEventListener("click", click));

function click(event) {
  event.preventDefault();
  if (flag) {
    flag = false;
    textNodes.hero__topic.innerHTML =
      "Digitales Corporate Marketing für Ihre Digital revolution:Partner-schaftlich. Agil. Data-Driven";
    textNodes.hero__paragraph.innerHTML =
      "TWNTY ist ihre digitale Full-Service-Unit. Wir agieren ausschließlich mit datengestützten Maßnahmen – für den perfekten Return-OF-Invest.";
    textNodes.about__paragraph.innerHTML =
      "Uns vertrauen namhafte Konzerne, zukunftsorientierte Startups,mittelständische Unternehmen und bekannte Marken – gehören sie dazu!";
  } else {
    flag = true;
    textNodes.hero__topic.innerHTML =
      "Digital corporate marketing for your digital revolution: based on partnership. Agile. data driven";
    textNodes.hero__paragraph.innerHTML =
      "TWNTY is your digital full service unit. We act exclusively with data-supported measures - for the perfect Return-OF-Invest.";
    textNodes.about__paragraph.innerHTML =
      "Well-known corporations, future-oriented startups, medium-sized companies and well-known brands trust us - they belong to them!";
  }
}
