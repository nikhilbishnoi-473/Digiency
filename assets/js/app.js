$('.responsive').slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: false,
    nextArrow: ".next_btn",
    prevArrow: ".prev_btn",
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
        {
            breakpoint: 2000,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
            }
        },
        {
            breakpoint: 1440,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 1040,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay:true,
            }
        }

    ]
});  