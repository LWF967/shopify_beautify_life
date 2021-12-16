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

// footer sticky
if(sticky.length > 0) {      
  if(document.body.clientWidth < 1024) {
    main.style.marginBottom = 0 + "px";
  }
  else if(document.body.clientWidth >= 1024) {
    let my_footer_sticky_height = document.getElementsByClassName('footer color- gradient my_footer_sticky')[0].scrollHeight - 55;
//     main.style.background = '#ffffff';
    main.style.zIndex = 899;
    main.style.marginBottom = my_footer_sticky_height + footer_bottom_height + "px";
    my_footer_sticky.style.marginBottom = footer_bottom_height + "px";
    promo_bar.style.zIndex = 898;
    top_bar.style.zIndex = 899;
    header_zx.style.zIndex = 898;
    footer_bottom.style.position = 'fixed';
    footer_bottom.style.bottom = 0;
    footer_bottom.style.width = '100%';
  }
}
else {
  main.style.marginBottom = 0 + "px";
}

// backtop 
function gotoTop() {
  $("#my_backtop").click(
    function () {
      $('html,body').animate({ scrollTop: '0px' }, 'slow');
    })
};
gotoTop();
let toTop = document.documentElement.scrollTop || document.body.scrollTop;
window.onscroll = function () {
  
  if(my_header_sticky.length > 0) {
    if(toTop >= all_header_height) {
      content.style.position = 'fixed';
      content.style.width = '100%';
      header_wrapper.style.height = header_wrapper_height + 'px';
    } else {
      content.style.position = 'relative';
    }
    if(content.style.position == 'fixed') {
      //       top_bar.style.zIndex = 13;
      //       header_zx.style.zIndex = 12;
      content.classList.add('my_header_sticky_settings');
      header.classList.add('my_header_sticky_settings');
      content.style.transition = 'transform .3s';
      // content.style.top = -(content.scrollHeight) + 'px';
      content.style.top = "-" + (header_wrapper.style.height);
      // content.style.transform = 'translateY(' + (content.scrollHeight) + 'px)';
      // content.style.transform = 'translate3d(0,' + content.scrollHeight + 'px, 0)';
      content.style.transform = 'translate3d(0,' + header_wrapper.style.height + ', 0)';
    } else if(content.style.position == 'relative') {
      //       top_bar.style.zIndex = 12;
      //       header_zx.style.zIndex = 11;
      content.classList.remove('my_header_sticky_settings');
      header.classList.remove('my_header_sticky_settings');
      content.style.top = 0 + 'px';
      content.style.transform = 'none';
      content.style.transition = 'none';
    }
  }     
  
  //获取距离页面顶部的距离
  var headerFreshDesignMode = Shopify.designMode || false;
  if(headerFreshDesignMode){
    document.addEventListener('shopify:section:load',() => {  
      console.log("进入header");
      if(my_header_sticky.length > 0) {
        if(toTop >= all_header_height) {
          content.style.position = 'fixed';
          content.style.width = '100%';
          header_wrapper.style.height = header_wrapper_height + 'px';
        } else {
          content.style.position = 'relative';
        }
        if(content.style.position == 'fixed') {
          //       top_bar.style.zIndex = 13;
          //       header_zx.style.zIndex = 12;
          content.classList.add('my_header_sticky_settings');
          header.classList.add('my_header_sticky_settings');
          content.style.transition = 'transform .3s';
          // content.style.top = -(content.scrollHeight) + 'px';
          content.style.top = "-" + (header_wrapper.style.height);
          // content.style.transform = 'translateY(' + (content.scrollHeight) + 'px)';
          // content.style.transform = 'translate3d(0,' + content.scrollHeight + 'px, 0)';
          content.style.transform = 'translate3d(0,' + header_wrapper.style.height + ', 0)';
        } else if(content.style.position == 'relative') {
          //       top_bar.style.zIndex = 12;
          //       header_zx.style.zIndex = 11;
          content.classList.remove('my_header_sticky_settings');
          header.classList.remove('my_header_sticky_settings');
          content.style.top = 0 + 'px';
          content.style.transform = 'none';
          content.style.transition = 'none';
        }
      }                                  
    },true);
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

function my_header_sticky() {
  
}