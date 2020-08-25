const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((item) => {
  item.addEventListener("click", (e) => {
    let currentActive = document.querySelector(".nav-item.active");
    currentActive.classList.remove("active");
    e.target.parentElement.classList.add("active");

    let sectionId = e.target.getAttribute("href");

    // smoothScroll(sectionId, 1500);
  });
});

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
});

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
