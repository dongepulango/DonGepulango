//Animations
new WOW().init();

//Outdated Browsers
$(function() {
  outdatedBrowser({
    bgColor: '#f25648',
    color: '#ffffff',
    lowerThan: 'borderImage'
  });
});

//Hero Parallax
$(function() {
  var heroHeight = $('#dg-hero').outerHeight();
  $(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    if (wScroll <= heroHeight) {
      $('#dg-hero-text').css({
        'transform' : 'translate(0px, -'+ wScroll /9 +'%)'
      });
    }
    if (wScroll > heroHeight) {
      $('#dg-hero, #dg-works, #dg-nav').addClass('scroll-passed');
      
    } else {
      $('#dg-hero, #dg-works, #dg-nav').removeClass('scroll-passed');
    }
  });
  var target = $('#dg-hero-text');
  $(document).scroll(function(e){
    var scrollPercent = (700 - window.scrollY) / 700;
    if(scrollPercent >= 0){
      target.css('opacity', scrollPercent);
    }
  });
});
