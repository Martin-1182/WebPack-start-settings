import { TweenMax, TweenLite } from "gsap";

import AOS from "aos";
AOS.init();

// Animation
document.addEventListener("DOMContentLoaded", function() {
	TweenLite;
	TweenMax.to("#git", 1, {
    opacity: 1,
    x: 0,
    delay: 1,
    duration: 2.5,
    ease: "elastic.out(1, 0.3)"
  });
});
