//toggle active class with click -- don't need if using bootstrap scrollspy
//const navLink = document.querySelectorAll(".nav-link");
// navLink.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     let currentActive = document.querySelector(".nav-link.active");
//     currentActive.classList.remove("active");
//     e.target.classList.add("active");

//     let sectionId = e.target.getAttribute("href");

//     // smoothScroll(sectionId, 1500);
//   });
// });

// jQuery Smooth Scroll
// $(".navbar a").on("click", function (e) {
//   if (this.hash) {
//     e.preventDefault();

//     const hash = this.hash;

//     $("html, body").animate(
//       {
//         scrollTop: $(hash).offset().top,
//       },
//       800
//     );
//   }
// });

//Smoothscroll -- GitHub
let scroll = new SmoothScroll('.navbar a[href*="#"]', {
  speed: 800,
  emitEvents: true,
});

/* these eventlisteners are needed if you don't want smooth scroll to add active class to each nav-link
 ** while the window is scrolling to the clicked section -- Smoothscroll
 */

//this event fires when srooll animation is started and stops the scrollspy
document.addEventListener(
  "scrollStart",
  () => {
    $('[data-spy="scroll"]').each(function () {
      $(this).scrollspy("dispose");
    });
  },
  false
);

//this event fires when scroll animation is stopped and starts the scrollspy again
document.addEventListener(
  "scrollStop",
  () => {
    $('[data-spy="scroll"]').each(function () {
      $(this).scrollspy("refresh");
    });
  },
  false
);

// Smooth Scrolling Function --DevEd -- Not working properly
function smoothScroll(target, duration) {
  let targetElm = document.querySelector(target);
  let targetElmPos = targetElm.getBoundingClientRect().top;
  let startPos = window.pageYOffset;
  let distance = targetElmPos - startPos;
  let startTime = null;

  function animationScroll(currentTime) {
    if (startTime === null) startTime = currentTime;

    let timeElaspsed = currentTime - startTime;
    let run = easing(timeElaspsed, startPos, distance, duration);
    window.scrollTo(0, run);

    if (timeElaspsed < duration) requestAnimationFrame(animationScroll);
  }

  //easing function from gizma.com
  function easing(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  //requset for 60fps animation
  requestAnimationFrame(animationScroll);
}
