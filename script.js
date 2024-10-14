gsap.from(".page1 .box1", {
  scale: 0,
  opacity: 2,
  duration: 2,
  delay: 1,
  borderRadius: "50px",
});
gsap.from(" .texts h1", {
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
      scrub: true,
    },
  });
});

function toggleSunAndMoon() {
  const currentHour = new Date().getHours();
  const sun = document.getElementById("sun");
  const moon = document.getElementById("moon");
  const dayNightDiv = document.querySelector(".day-night");

  if (currentHour >= 6 && currentHour < 18) {
    sun.style.display = "block";
    moon.style.display = "none";
    dayNightDiv.style.backgroundColor = "lightblue";
  } else {
    sun.style.display = "none";
    moon.style.display = "block";
    dayNightDiv.style.backgroundColor = "black";
  }
}
window.onload = toggleSunAndMoon;
