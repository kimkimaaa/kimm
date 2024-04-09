     var swiper2 = new Swiper(".s2", {
        direction: "vertical",
        autoplay: {
          delay:2000,
          disableOnInteraction: false,
        },
      });
      var swiper = new Swiper(".s3", {
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: ".swiper-pagination",
                },
            });

            var swiper = new Swiper(".s4", {
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
      },
    });
    var swiper3 = new Swiper(".s5", {
        slidesPerView: 3,
        spaceBetween: 5,
      });