document.addEventListener("DOMContentLoaded", () => {
    // clouds
    const cloudClasses = ['.cloud1', '.cloud2', '.cloud3', '.cloud4', '.cloud5'];
    cloudClasses.forEach((cls, i) => {
        gsap.to(cls, {
            x: 600,
            duration: 12 + i * 3,
            repeat: -1,
            ease: 'linear'
        });
    });

    // stars
    const starAnimations = ['.star1', '.star2', '.star3'];
    starAnimations.forEach((star, i) => {
        gsap.to(star, {
            y: "+=20",
            x: "+=10",
            duration: 4 + i,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut"
        });
    });

    //day and night
    function cycleDayNight() {
        const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });

        // Daytime
        tl.to('.sun', { duration: 2, opacity: 1, y: 0 });
        tl.to('body', { backgroundColor: "lightskyblue", duration: 2 }, "<");
        tl.to(cloudClasses, { opacity: 1, duration: 1 }, "<");
        tl.to(['.moon', '.star1', '.star2', '.star3'], { opacity: 0, duration: 1 }, "<");

        // daytime duration
        tl.to({}, { duration: 5 });

        // Sunset 
        tl.to('.sun', { duration: 2, opacity: 0, y: 100 });
        tl.to('body', { backgroundColor: "midnightblue", duration: 3 }, "<");
        tl.to(cloudClasses, { opacity: 0.2, duration: 2 }, "<");
        tl.to(['.moon', '.star1', '.star2', '.star3'], { opacity: 1, duration: 2 }, "<");

        //nghttime duration
        tl.to({}, { duration: 5 });

        // sunrise
        tl.to('.moon', { duration: 2, opacity: 0, y: 100 });
        tl.to('body', { backgroundColor: "lightskyblue", duration: 3 }, "<");
        tl.to('.sun', { duration: 2, opacity: 1, y: 0 }, "<");
        tl.to(cloudClasses, { opacity: 1, duration: 2 }, "<");
        tl.to(['.star1', '.star2', '.star3'], { opacity: 0, duration: 2 }, "<");

        return tl;
    }

    cycleDayNight();
});
