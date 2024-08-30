// section-1 animation
gsap.to(
  ".section-1 img",
  {
    top: "7%",
    duration: 7,
  },
  "cloud"
);
gsap.to(
  ".overlay",
  {
    opacity: 0,
    duration: 2,
  },
  "cloud"
);
gsap.to(
  ".section-1 h1",
  {
    fontSize: "8vw",
    duration: 10,
    delay: 2,
  },
  "cloud"
);
// section-1 ends

document.addEventListener("mousemove", function (details) {
  document.querySelectorAll(".img").forEach((ele) => {
    var value = ele.getAttribute("value");
 
    var x = (details.clientX - window.innerHeight * value) / 50;
    var y = (details.clientX - window.innerWidth * value) / 50;
   

    ele.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
});
