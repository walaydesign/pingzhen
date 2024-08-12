// AOS.init({startEvent: 'load'});
// window.addEventListener('load', AOS.refresh);

$(".header_item").click(function(){
    let target = $(this).data("target");
    var top = $(target).offset().top - 70;
    $("html, body").animate({ scrollTop: top }, parseInt(300));
})

$(".btn-top").click(function(){
    $("html, body").animate({scrollTop: 0},300);
})



function sendEmail(){
    Email.send({
        SecureToken: "8207c7d7-4a6c-4797-870d-d16ee71023ce",
        To : "zhulixdesign@gmail.com, zhuleservice@gmail.com, spdnbhj@gmail.com",
        From : "walayydesign@gmail.com",
        Subject : "玖都預約賞屋",
        Body : "貴賓稱謂:" + document.getElementById("name").value
                + "<br>聯絡電話:" + document.getElementById("phone").value
                + "<br>Email信箱:" + document.getElementById("email").value
                + "<br>聯繫時段:" + document.getElementById("time_from").value + "時-" + document.getElementById("time_to").value + "時"
    }).then(
        message => alert("感謝您的來信！我們很快就會和您聯繫！"),
    );
}