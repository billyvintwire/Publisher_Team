$(function(){
    // 대시보드 베스트제품 슬라이더
    var bestProduct = new Swiper("#bestProduct", {
        pagination: {
            el: ".product-controls .swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".product-controls .swiper-button-next",
            prevEl: ".product-controls .swiper-button-prev",
        },
    });
});