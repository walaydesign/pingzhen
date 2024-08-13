AOS.init({startEvent: 'load'});
window.addEventListener('load', AOS.refresh);


function sendEmail(){
    Email.send({
        SecureToken: "8207c7d7-4a6c-4797-870d-d16ee71023ce",
        To : "yl30831114@gmail.com",
        From : "walayydesign@gmail.com",
        Subject : "平鎮源邸預約賞屋",
        Body : "!!!",
        // Body : "姓名:" + document.getElementById("name").value
        //         + "<br>手機:" + document.getElementById("phone").value
        //         + "<br>居住地區:" + document.getElementById("area").value
        //         + "<br>留言:" + document.getElementById("remark").value
    }).then(
        message => alert("感謝您的來信！我們很快就會和您聯繫！"),
    );
}

$(".header_item").click(function(){
    let target = $(this).data("target");
    var top = $(target).offset().top - 70;
    $("html, body").animate({ scrollTop: top }, parseInt(300));
})

$(".btn-top").click(function(){
    $("html, body").animate({scrollTop: 0},300);
})

var swiperFloor = new Swiper(".floor_swiper", {
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    speed: 800,
})

var swiperMaterial = new Swiper(".material_swiper", {
    slidesPerView: 1,
    effect: "fade",
    speed: 800,
    allowTouchMove: false,
})
$(".material_brand_item").click(function(){
    $(this).addClass("active").siblings(".material_brand_item").removeClass("active");
    let li_index = $(this).index();
    swiperMaterial.slideTo(li_index, 1000, true);
})

