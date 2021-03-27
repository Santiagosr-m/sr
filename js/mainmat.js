gsap.registerPlugin(ScrollTrigger);
var lt = gsap.timeline();
var lt2 = gsap.timeline();

lt
.from (".caja-2m", {xPercent: 100})
.from (".caja-3m", {xPercent: -100})





ScrollTrigger.create ({
    animation: lt,
    trigger: "#seccion-1m",
    start: "top top",
    end: "+=3000",
    scrub: true,
    pin: true,
    anticipatePin:1
});


lt2.from ("#t1", {
    scrollTrigger:{
        trigger: "#t1",
        start: "top top",
        scrub: true,
    },
    y:-100,
    opacity:0,
})

