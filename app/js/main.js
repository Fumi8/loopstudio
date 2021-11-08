const textWrapper = document.querySelector(".loader__intro-title");
textWrapper.innerHTML = textWrapper.textContent.replace(
    /([^\x00-\x80]|\w)/g,
    "<span class='letter'>$&</span>"
);

anime
    .timeline({ loop: false })
    .add({
        targets: ".loader__intro-title .letter",
        translateX: [140, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1000,
        delay: function(el, i) {
            return 400 + 50 * i;
        }
    })
    .add({
        targets: ".loader__intro-title .letter",
        translateX: [0, -140],
        opacity: [1, 0],
        easing: "easeInExpo",
        duration: 800,
        delay: function(el, i) {
            return 100 + 50 * i;
        }
    });

    tlKv = new TimelineMax();
    tlKv.to(".loader", 2.2,{
        top: "-110%",
        ease:Expo.easeInOut
    }, 2)
    .addLabel('up')
    .from(".header", 2,{
        y:'10',
        opacity: 0,
        ease:Expo.easeInOut
    }, 'up+=0.5')
    .from(".top__kv_text-box", 1.4,{
            y:10,
            opacity: 0,
            ease: Expo.easeInOut
    }, 'up+=0.3');