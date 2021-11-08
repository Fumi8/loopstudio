gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({

  //1024px以上
  "(min-width: 1024px)" : function(){
    // //CONCEPT 
    let masks = document.querySelectorAll('.mask');
    // let image = document.querySelectorAll('.mask-img')

    masks.forEach( mask => {
    let image = mask.querySelector('.mask-img');

    let tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.l-concept',
      start: 'top center',
      toggleActions: "play none none none",
    }
  });

  tl.set( mask, {autoAlpha: 1});

    tl.from( mask, 2, {
      xPercent: -100,
      ease:Power2.out
    });
    tl.from(image, 2, {
      xPercent: 100,
      // scale: 1.3,
      delay: -2,
      ease: Power2.out
    });
  });

  },
//1023px以下
  "(max-width: 1023px)" : function(){
    // //CONCEPT 
    let masks = document.querySelectorAll('.mask');
    // let image = document.querySelectorAll('.mask-img')

    masks.forEach( mask => {
    let image = mask.querySelector('.mask-img');

    let tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.l-concept',
      start: 'top center',
      toggleActions: "play none none none",
    }
  });

  tl.set( mask, {autoAlpha: 1});

    tl.from( mask, 2, {
      xPercent: -130,
      ease:Power2.out
    });
    tl.from(image, 2, {
      xPercent: 100,
      // scale: 1.3,
      delay: -2,
      ease: Power2.out
    });
  });
  
  }


})


//CONTENT 
//
  gsap.defaults({ease: "power2"});
  gsap.set(".js__content-img", {opacity:0});
  
  ScrollTrigger.batch(".js__content-img", {
    markers: true,
    start: "top 50%",  
    onEnter: (elements, triggers) =>{
        gsap.to(elements, {opacity:1, stagger: 0.15});
        console.log(elements.length, "elements entered");
    },
    // onLeave: (elements, trigger) => {
    //     gsap.to(elements, { opacity:0, stagger: 0.2});
    //     console.log(elements.length, "elements left");
    // }
  });