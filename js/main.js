gsap.registerPlugin(ScrollTrigger);
var lt = gsap.timeline();
var lt2 = gsap.timeline();
lt
.from (".caja-2", {xPercent: 100})
.from (".caja-3", {xPercent: -100})
.from (".caja-4", {yPercent: 100, xPercent:100})
.to (".caja-4", {delay:0.5,opacity:1}, "-=.38");




ScrollTrigger.create ({
    animation: lt,
    trigger: "#seccion-2",
    start: "top top",
    end: "+=3000",
    scrub: true,
    pin: true,
    anticipatePin:1
});

lt2.from ("#seccion-3", {
    scrollTrigger:{
        trigger: "#seccion-3",
        start: "top center",
        end: "top top",
        scrub: true,
     
    },
    xPercent:-100,
    opacity:0,
})
lt2.from ("#t1", {
    scrollTrigger:{
        trigger: "#t1",
        start: "top top",
        scrub: true,
    },
    y:-100,
    opacity:0,
})


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

