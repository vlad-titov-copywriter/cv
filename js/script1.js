$(document).ready(function() {
$('.header__burger,.header__menu').click(function(event) {
    $('.header__burger, .header__menu').toggleClass("active");
    $('body').toggleClass("lock");  
    })
});

let n = "";

function showPriceAnimation() {
    n = document.getElementById("priceBlock1");
    n.style.border = "2px solid black";
  }

function hidePriceAnimation() {
    n = document.getElementById("priceBlock1");
    n.style.border = "";
}
