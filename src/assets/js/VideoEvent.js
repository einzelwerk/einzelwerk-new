import { gsap } from "gsap";

document.addEventListener("click", (e) => {
  if (e.target.closest(".js-start-video")) {
    const icon = e.target.closest(".js-start-video").querySelector(".video__play");
    const video = e.target.closest(".js-start-video").querySelector(".video__src");
    video.muted = !video.muted;
  }
});
