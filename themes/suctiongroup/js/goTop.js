// JavaScript Document

$(function(){
	
	$("#goTop").click(function(){
		$("html,body").animate({scrollTop:0},300);
		return false;
	});

});

$(document).ready(function(){
  $(".search_pic").click(function(){
    $(".search").stop().addClass('search_open');
    $(".search_btn").stop().addClass('search_btn_open');
  });
  $(".footerA").click(function(){
    $(".footerA").next('ul').stop().toggleClass('active');
    $(".footerA").stop().toggleClass('open_F');
  });
  $(".footerB").click(function(){
    $(".footerB").next('ul').stop().toggleClass('active');
    $(".footerB").stop().toggleClass('open_F');
  });
  
  var bodyClass = document.body.classList;
  var lastScrollY = 10;
  window.addEventListener('scroll', function(){
    var st = this.scrollY;
    if( st < lastScrollY) {
      bodyClass.remove('hideUp');
      $(".search").stop().removeClass('search_open');
      $(".search_btn").stop().removeClass('search_btn_open');
    }else{
      bodyClass.add('hideUp');
      $(".search").stop().removeClass('search_open');
      $(".search_btn").stop().removeClass('search_btn_open');
    }
    lastScrollY = st;
  });
  
});

$(document).on("pagecreate","#slideTable",function(){
  $("#slideTable").on("swipe",function(){
    $(".slideTable").stop().hide();
  });                       
});

function isMobile() {
  try{ document.createEvent("TouchEvent"); return true; }
  catch(e){ return false;}
}

if(isMobile()){$(".slideTable").stop().show();}else{$(".slideTable").stop().hide();}
