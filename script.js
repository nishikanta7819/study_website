gsap.from(".page1 .box1", {
  scale: 0,
  opacity: 2,
  duration: 2,
  delay: 1,
  borderRadius: "50px",
});
gsap.from("h1", {
  y: 50,
  duration: 2,
  delay: 3,
  opacity: 0,
  stagger: 1,
});

document.querySelectorAll(".box").forEach((box) => {
  gsap.to(box, {
    scale: 0.7,
    opacity: 0,
    scrollTrigger: {
      trigger: box,
      start: "top 5%",
      end: "bottom 10%",
      // markers: true,
      scrub: true,
    },
  });
});

document.getElementById("learnhtml").addEventListener("click", function () {
  window.location.href = "learnhtml.html";
});

document.getElementById("learncss").addEventListener("click",function(){
  window.location.href="learncss.html";
})