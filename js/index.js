// Nav
$("#nav-bars").click(() => {
  $(".nav-body").toggleClass("nav-show");
});
$("#nav-close .icon").click(() => {
  $(".nav-body").toggleClass("nav-show");
});
// Accordion
const btn = $(".btnAccordion"),
  AccordionBody = $(".AccordionBody"),
  subAccordion = $(".subAccordion");
for (let i = 0; i < btn.length; i++) {
  $(btn[i]).click(function () {
    $(subAccordion[i]).siblings().find(AccordionBody).slideUp(500);
    $(AccordionBody[i]).slideToggle(500);
    $(btn).not(btn[i]).removeClass("active");
    $(btn[i]).toggleClass("active");
  });
}
// Timer
let eventDate = "14 jan 2023";
let timerFunction = setInterval(() => {
  $("#event-date").text(eventDate);
  const curentDate = new Date().getTime();
  const finalDate = new Date(eventDate).getTime();
  const distanceTime = finalDate - curentDate;
  let days = distanceTime / (1000 * 60 * 60 * 24);
  let hours = (distanceTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60);
  let minutes = (distanceTime % (1000 * 60 * 60)) / (1000 * 60);
  let seconds = (distanceTime % (1000 * 60)) / 1000;
  if (distanceTime < 0) {
    clearInterval(timerFunction);
    days = 0
    hours = 0
    minutes = 0
    seconds = 0
  }
  $("#dayDiv").text(`${Math.trunc(days)} D`);
  $("#hourDiv").text(`${Math.trunc(hours)} H`);
  $("#minuteDiv").text(`${Math.trunc(minutes)} M`);
  $("#secondDiv").text(`${Math.trunc(seconds)} S`);
}, 1000);
// Input
$("#textarea").on("input", () => {
  $("#textCount").text(100 - $("#textarea").val().length);
  if ($("#textarea").val().length == 100) {
    $("#textCount").text("your available character finished");
    $("#counter-h4").text("");
  } else {
    $("#counter-h4").text("Characyer Reamining");
  }
});