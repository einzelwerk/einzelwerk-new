import { gsap } from "gsap";
let isOpen = false;
document.addEventListener("click", (e) => {
  if (!e.target.closest(".js-toolbox") && isOpen) {
    document.querySelectorAll(".js-toolbox-content").forEach((elem) => {
      gsap.to(elem, {
        duration: 0.2,
        display: "none",
        opacity: 0,
        y: 20,
      });
      isOpen = false;
    });
  } else if ( e.target.closest(".js-toolbox")) {
    const tl = gsap.timeline();
    const toolbox = e.target.closest(".js-toolbox").querySelector(".js-toolbox-content");
    tl.fromTo(
      toolbox,
      {
        duration: 0.2,
        display: "none",
        opacity: 0,
        y: 20,
      },
      {
        duration: 0.2,
        display: "block",
        opacity: 1,
        y: 0,
      }
    );
    isOpen = true;
  }
});
