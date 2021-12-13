// lzx change
// footer sticky
let promo_bar = document.getElementById('shopify-section-promo-bar');
let top_bar = document.getElementById('shopify-section-top-bar');
let header_zx = document.getElementById('shopify-section-header');
let footer_top = document.getElementById('shopify-section-footer-top');
let footer_bottom = document.getElementsByClassName('footer color- gradient my_footer_bottom_color')[0];
let footer_bottom_height = document.getElementsByClassName('footer color- gradient my_footer_bottom_color')[0].scrollHeight;
let my_footer_sticky = document.getElementsByClassName('footer color- gradient my_footer_sticky')[0];
let main = document.getElementById('MainContent');
let sticky = document.getElementsByClassName('my_footer_sticky');

// header fixed layout 
let all_header_height = promo_bar.scrollHeight + top_bar.scrollHeight + header_zx.scrollHeight;
let header_wrapper = document.getElementsByClassName('header-wrapper')[0];
let header_wrapper_height = document.getElementsByClassName('header-wrapper')[0].scrollHeight;
let header = document.getElementsByClassName('header')[0];
let content = document.getElementsByClassName('content')[0];
let my_header_sticky = document.getElementsByClassName('my_header_sticky');
let my_backtop = document.getElementById('my_backtop');

// backtop 
function gotoTop() {
  $("#my_backtop").click(
    function () {
      $('html,body').animate({ scrollTop: '0px' }, 'slow');
    })
};
gotoTop();

window.onscroll = function () {
  //获取距离页面顶部的距离
  let toTop = document.documentElement.scrollTop || document.body.scrollTop;
  if(my_header_sticky.length > 0) {
    if(toTop >= all_header_height) {
      content.style.position = 'fixed';
      content.style.width = '100%';
      header_wrapper.style.height = header_wrapper_height + 'px';
    } else {
      content.style.position = 'relative';
    }
    if(content.style.position == 'fixed') {
      top_bar.style.zIndex = 4;
      header_zx.style.zIndex = 3;
      content.classList.add('my_header_sticky_settings');
      header.classList.add('my_header_sticky_settings');
      content.style.transition = 'transform .3s';
      content.style.top = -(content.scrollHeight) + 'px';
      //             content.style.transform = 'translateY(' + (content.scrollHeight) + 'px)';
      content.style.transform = 'translate3d(0,' + content.scrollHeight + 'px, 0)';
    } else if(content.style.position == 'relative') {
      top_bar.style.zIndex = 3;
      header_zx.style.zIndex = 2;
      content.classList.remove('my_header_sticky_settings');
      header.classList.remove('my_header_sticky_settings');
      content.style.top = 0 + 'px';
      content.style.transform = 'none';
      content.style.transition = 'none';
    }
  }

  // backtop 
  if(toTop >= all_header_height) {
    my_backtop.style.opacity = 1;
    my_backtop.style.visibility = 'visible';
    my_backtop.style.cursor = "pointer";
  } else {
    my_backtop.style.opacity = 0;
    my_backtop.style.visibility = 'hidden';
    my_backtop.style.cursor = "default";
  }
}

window.onload = function(){
 	
  if(sticky.length > 0) {      
    if(document.body.clientWidth < 1024) {
      main.style.marginBottom = 0 + "px";
    }
    else if(document.body.clientWidth >= 1024) {
      let my_footer_sticky_height = document.getElementsByClassName('footer color- gradient my_footer_sticky')[0].scrollHeight - 55;
      main.style.background = '#ffffff';
      main.style.zIndex = 2;
      main.style.marginBottom = my_footer_sticky_height + footer_bottom_height + "px";
      my_footer_sticky.style.marginBottom = footer_bottom_height + "px";
      promo_bar.style.zIndex = 1;
      top_bar.style.zIndex = 2;
      header_zx.style.zIndex = 1;
      footer_bottom.style.position = 'fixed';
      footer_bottom.style.bottom = 0;
      footer_bottom.style.width = '100%';
    }
  }
  else {
    main.style.marginBottom = 0 + "px";
  }
  console.log("页面加载完成!!!");
}