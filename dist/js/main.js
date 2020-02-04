$(document).ready(function () {
  $(".menu-button").on("click", function () {
    $(this).toggleClass("close");
    $(".menu").toggleClass("close");
  });

  $(".menu .menu-nav").on("click", function () {
    $(".menu").removeClass("close");
    $(".menu-button").removeClass("close");
    $(".nav-list").removeClass("close");
  });

  $('nav a[href *= "#"]').on("click", function () {
    $("html,body").animate({
      scrollTop: $($(this).attr("href")).offset().top - 100
    }, 2000);
  });
  $("#up").on("click", function () {
    $("html,body").animate({
      scrollTop: 0
    }, 2000);
  });

  AOS.init({easing: "ease", duration: 2000});
});
