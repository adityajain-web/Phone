// hero section 

let slider1 = document.getElementById("glide_1");

if (slider1) {
    new Glide(slider1, {
        type: "carousel",
        startAt: 0,
        autoplay: 3000,
        hoverpause: true,
        perView: 1,
        animationDuration: 800,
        animationTimingFunc: "linear"
    }).mount();
}

let slider2 = document.getElementById("glide_2")
if (slider2) {
    new Glide(slider2, {
        type: "carousel",
        startAt: 0,
        rewin: false,
        perView: 4,
        animationDuration: 800,
        animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
        breakpoints: {
            1200: {
                perView: 3,
            },
            768: {
                perView: 2,
            },
        },
    }).mount();
}

// testimonial slider

let slider3 = document.getElementById("glide_3");

if (slider3) {
    new Glide(slider3, {
        type: "carousel",
        startAt: 0,
        perView: 1,
        animationDuration: 800,
        animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
    }).mount();
}

// Blog Section

let slider4 = document.getElementById("glide_4");

if (slider4) {
    new Glide(slider4, {
        type: "carousel",
        startAt: 0,
        perView: 3,
        autoplay: 3000,
        animationDuration: 800,
        animationTimingFunc: "linear",
        breakpoints: {
            1200: {
                perView: 3,
            },
            768: {
                perView: 2,
            },
            576: {
                perView: 1,
            }
        },
    }).mount();
}