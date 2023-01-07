// JavaScript Document
$(function () {
	var windoww = $(window).width();
	$('.sp_nav').click(function () {
		$('.sp_nav').toggleClass('sp_nav_se');
		$('.sjj_nav').toggleClass('nav_show');
		$('.links').toggleClass('links_show');
	});
	
	$('.sjj_nav ul li i').click(function () {
		$(this).parent().children('ul').slideToggle().parent().siblings().children('ul').slideUp();
		$(this).toggleClass('sjj_nav_i_se');
		$(this).parent().siblings().find('i').removeClass('sjj_nav_i_se');
	});
	
	//$('.sp_nav_xjb').html('<svg t="1496193951932" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="995" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"> <path d="M768.468 428.876l-84.723-84.723-170.711 170.711-170.711-170.711-84.723 84.723 170.711 170.711-0.092 0.091 84.723 84.724 0.092-0.092 0.092 0.092 84.723-84.724-0.092-0.091z" p-id="996"></path></svg>');
	
});


/*$(function() {
   $(".sidebar_title").click(function() {
        $(this).next("ul").stop().slideToggle(300).siblings("ul").stop().slideUp(300);
        $(this).toggleClass("sidebar-active").siblings(".sidebar_title").stop().removeClass("sidebar-active");
    });
});*/

var listBtn = $('<i class="sp_nav_xjb"></i>');
$('.sjj_nav_ul li ul').prev("a").stop().after(listBtn);


$(function(){
  $('.menu_lang_box').on('click', function(){
    $('.menu_lang_link').toggleClass('menuopen');
  });
});