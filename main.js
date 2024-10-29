gsap.registerPlugin(ScrollTrigger);

// Hero Section
const heroTl = gsap.timeline({
          scrollTrigger: {
                    trigger: "#hero",
                    start: "top bottom",
                    toggleActions: "play none restart none",
          },
});

heroTl.from(".gsap-nav-item", {
          y: -30,
       opacity: 0,
       ease: "back",
       stagger: 0.1
})
heroTl.from(".gsap__hero__item", {
          y: 30,
       opacity: 0,
       stagger: 0.1
})
heroTl.from(".hero__illustration", {
          y: 30,
       opacity: 0,

})
heroTl.from(".hero__illustration__img", {
         rotate: -90,
         repeat: -1,
         yoyo: true,
         duration: 15,
})

gsap.to(".hero__illustration__text", {
         y: "-155px",
         repeat: -1,
         duration: 10,
         yoyo: true, 
         opacity: 1,
         delay: 3
});

// Projects Section

const horizontalSections = gsap.utils.toArray(".horizontal");

horizontalSections.forEach((section) =>{
   let animeWrap = section.querySelector(".horizontal__animation-wrap");
   let animeContentWrap = section.querySelector(".animation__content__wrap");

   let getTovalue = () => -(animeContentWrap?.scrollWidth  - window.innerWidth/2);

   if(window.innerWidth<650){
          getTovalue = () => -(animeContentWrap?.scrollWidth - window.innerWidth / 2 - 140);
}

      gsap.fromTo(
             animeWrap,
             {x: () => (animeWrap.classList.contains("to--right") ? 0 : getTovalue())},
             {x: () => (animeWrap.classList.contains("to--right") ? getTovalue() : 0) ,
                    ease: "none",
                    scrollTrigger: {
                              trigger: animeWrap,
                              start: "top top",
                              end: () => "+=" + (animeContentWrap?.scrollWidth - window.innerWidth / 2 - 120),
                              pin: animeWrap,
                              invalidateOnRefresh: true,
                              scrub: true,
                    },
             }
      )
});

const projectTl = gsap.timeline({
          scrollTrigger: {
                    trigger: ".projects",
                    start: "top bottom",
                    toggleActions: "restart none none none",
          },
})

projectTl.from(".title",{
          scale: 0.5,
          opacity: 0,
          duration: 1,
          ease: "back"
          
});
projectTl.from(".gsap-project__item",{
          y: 30,
          opacity: 0,
          stagger: 0.2  
});
 

//About Section

const aboutTl = gsap.timeline({
       scrollTrigger: {
                 trigger: ".about",
                 start: "top bottom",
                 toggleActions: "restart none restart none",
       },
})

aboutTl.from(".gsap-about__item",{
       y: 30,
       opacity: 0,
       stagger: 0.3 
});


//  Resume Section
const resumeTl = gsap.timeline({
       scrollTrigger: {
                 trigger: ".resume",
                 start: "top bottom",
                 toggleActions: "restart none restart none",
       },
})

resumeTl.from(".gsap-resume__item",{
       y: 30,
       opacity: 0,
       stagger: 0.3 
});

// Services Section

const servicesTl = gsap.timeline({  
       scrollTrigger: {
         trigger: ".services",
         start: "top top",
         end: "+=4000",
         scrub: true,
         pin: true,
         anticipatePin: true
       },
})

const animateServiceTl = gsap.timeline({
       scrollTrigger: {
         trigger: ".services",
         start: "top bottom",
        toggleActions: "restart none restart none",
       },
})

servicesTl.from(".gsap-service-item-1", {xPercent: -100});
servicesTl.from(".gsap-service-item-2", {yPercent: -100});
servicesTl.from(".gsap-service-item-3", {xPercent: 100});
servicesTl.from(".gsap-service-item-4", {yPercent: 100});

animateServiceTl.from(".gsap-services-item",{
       y: 30,
       opacity: 0,
       delay: 0.8,
       stagger: 0.3,
});

// Skills Section

const techTl = gsap.timeline({
       scrollTrigger: {
         trigger: ".tech",
         start: "top bottom",
        toggleActions: "restart none restart none",
       },
});

techTl.from(".gsap-tech__item",{
       opacity: 0,
       scale: 0.5,
       ease: "back",
       duration: 0.5,
       stagger: 0.3,
});

// Contact Section

const contactTl = gsap.timeline({
       scrollTrigger: {
         trigger: ".contact",
         start: "top bottom",
        toggleActions: "restart none restart none",
       },
});

contactTl.from(".gsap-contact__item",{
       y: 30,
       opacity: 0,
       delay: 0.5,
       stagger: 0.3,
});


