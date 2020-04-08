var tl = gsap.timeline({defaults:{duration: 1}});

tl.from(".inner-content", {y: -50, opacity: 0})
  .from("li", {y: 50, opacity: 0, stagger: 0.5}, "-=.5")
  .from(".phone", {y: 30, opacity: 0}, "-=1.8");
  
document.getElementById('cta').addEventListener('click', () => {
    tl.reversed() ? tl.play() : tl.reverse();
})