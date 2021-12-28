// lzx change
/**
 * 防抖函数，非立即执行
 * @param {*} func 回调函数  必传
 * @param {*} wait 等待时长 默认500ms 可不传
 * arguments  是js存函数参数的地方
 */
function my_home_debounce(func, wait = 500) {
  let timeOut
  return function () {
    let content = this
    let arg = arguments
    if (timeOut) {
      clearTimeout(timeOut)
    }
    timeOut = setTimeout(() => {
      func.apply(content, arg)
    }, wait)
  }
}

var myFooterbottomFreshDesignMode = Shopify.designMode || false;
if(myFooterbottomFreshDesignMode){
  document.addEventListener('shopify:section:load',() => {
    let promo_bar = document.getElementById('shopify-section-promo-bar');
    let top_bar = document.getElementById('shopify-section-top-bar');
    let header_zx = document.getElementById('shopify-section-header');
    //     let footer_bottom = document.getElementsByClassName('footer color- gradient my_footer_bottom_color')[0];
//     let my_footer_sticky = document.getElementsByClassName('footer color- gradient my_footer_sticky')[0];
    let main = document.getElementById('MainContent');
    let sticky = document.getElementsByClassName('my_footer_sticky');

  

    var target =  document.getElementsByClassName('footer color- gradient my_footer_bottom_color')[0];

    // 创建观察者对象

//     var observer = new MutationObserver(function(){
          var observer = new MutationObserver(my_home_debounce(function () {

      // footer sticky
      if(sticky.length > 0) {
        if(document.body.clientWidth < 1024) {
          main.style.marginBottom = 0;
          my_footer_sticky.style.opacity = 1;
          my_footer_sticky.style.zIndex = 1;
          my_footer_sticky.style.marginBottom = 0;
          target.style.position = 'static';
        }
        else if(document.body.clientWidth >= 1024) {
          let my_footer_sticky = document.getElementsByClassName('footer color- gradient my_footer_sticky')[0];
          let jq_footer_top_height = $('.footer.color-.gradient.my_footer_sticky').height();
          let jqheight = $('.footer.color-.gradient.my_footer_bottom_color').height();
          let jq_main_margin_bottom = parseInt(jq_footer_top_height+jqheight);

          promo_bar.style.zIndex = 898;
          top_bar.style.zIndex = 899;
          header_zx.style.zIndex = 898;

          main.style.zIndex = 897;
          main.style.marginBottom = jq_main_margin_bottom + "px";
          my_footer_sticky.style.marginBottom = jqheight + "px";
          my_footer_sticky.style.opacity = 1;
          my_footer_sticky.style.zIndex = 1;
          target.style.position = 'fixed';
          target.style.bottom = 0;
          target.style.width = '100%';    
          console.log(1);
        }
      }
      else {
        main.style.marginBottom = 0;
        target.style.position = 'static';
      }
    }, 500));

    // 配置观察选项:
    var config = { attributes: true, childList: true, characterData: true ,subtree : true };
    // 传入目标节点和观察选项
    observer.observe(target, config); 
    // 随后,你还可以停止观察
    //     observer.disconnect();
  },true);
}

let promo_bar = document.getElementById('hide_banner');
let top_bar = document.getElementById('shopify-section-top-bar');
let header_zx = document.getElementById('shopify-section-header');
//   let footer_top = document.getElementById('shopify-section-footer-top');
let footer_bottom = document.getElementsByClassName('footer color- gradient my_footer_bottom_color')[0];
//   let footer_bottom_height = document.getElementsByClassName('footer color- gradient my_footer_bottom_color')[0].scrollHeight;
let my_footer_sticky = document.getElementsByClassName('footer color- gradient my_footer_sticky')[0];
let main = document.getElementById('MainContent');
let sticky = document.getElementsByClassName('my_footer_sticky');

// header fixed layout 
// let all_header_height = $(promo_bar).height() + $(top_bar).height() + $(header_zx).height();
// let header_wrapper = document.getElementsByClassName('header-wrapper')[0];
// let header_wrapper_height = document.getElementsByClassName('header-wrapper')[0].scrollHeight;
// let header = document.getElementsByClassName('header')[0];
// let content = document.getElementsByClassName('content')[0];
// let my_header_sticky = document.getElementsByClassName('my_header_sticky');
// let my_backtop = document.getElementById('my_backtop');

function my_header_and_totop() {
  let all_header_height = $(promo_bar).height() + $(top_bar).height() + $(header_zx).height();
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
  //获取页面顶部的距离
  function header_scroll() {
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
        promo_bar.style.zIndex = 900;
        top_bar.style.zIndex = 901;
        header_zx.style.zIndex = 900;

        content.classList.add('my_header_sticky_settings');
        header.classList.add('my_header_sticky_settings');
        content.style.transition = 'transform .3s';
        content.style.top = "-" + (header_wrapper.style.height);
        content.style.transform = 'translate3d(0,' + header_wrapper.style.height + ', 0)';
      } else if(content.style.position == 'relative') {
        promo_bar.style.zIndex = 898;
        top_bar.style.zIndex = 899;
        header_zx.style.zIndex = 898;

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
  $(window).scroll(() => {
      my_header_and_totop();
    });
  document.addEventListener('shopify:section:load',() => {  
    $(window).scroll(() => {
      console.log("刷新scroll");

//       let all_header_height = $(promo_bar).height() + $(top_bar).height() + $(header_zx).height();
//       let header_wrapper = document.getElementsByClassName('header-wrapper')[0];
//       let header_wrapper_height = document.getElementsByClassName('header-wrapper')[0].scrollHeight;
//       let header = document.getElementsByClassName('header')[0];
//       let content = document.getElementsByClassName('content')[0];
//       let my_header_sticky = document.getElementsByClassName('my_header_sticky');
//       let my_backtop = document.getElementById('my_backtop');

//       let toTop = document.documentElement.scrollTop || document.body.scrollTop;

//       if(my_header_sticky.length > 0) {
//         if(toTop >= all_header_height) {
//           content.style.position = 'fixed';
//           content.style.width = '100%';
//           header_wrapper.style.height = header_wrapper_height + 'px';
//         } else {
//           content.style.position = 'relative';
//         }
//         if(content.style.position == 'fixed') {
//           promo_bar.style.zIndex = 900;
//           top_bar.style.zIndex = 901;
//           header_zx.style.zIndex = 900;

//           content.classList.add('my_header_sticky_settings');
//           header.classList.add('my_header_sticky_settings');
//           content.style.transition = 'transform .3s';
//           content.style.top = "-" + (header_wrapper.style.height);
//           content.style.transform = 'translate3d(0,' + header_wrapper.style.height + ', 0)';
//         } else if(content.style.position == 'relative') {
//           promo_bar.style.zIndex = 898;
//           top_bar.style.zIndex = 899;
//           header_zx.style.zIndex = 898;

//           content.classList.remove('my_header_sticky_settings');
//           header.classList.remove('my_header_sticky_settings');
//           content.style.top = 0 + 'px';
//           content.style.transform = 'none';
//           content.style.transition = 'none';
//         }
//       }

//       // backtop 
//       if(toTop >= all_header_height) {
//         my_backtop.style.opacity = 1;
//         my_backtop.style.visibility = 'visible';
//         my_backtop.style.cursor = "pointer";
//       } else {
//         my_backtop.style.opacity = 0;
//         my_backtop.style.visibility = 'hidden';
//         my_backtop.style.cursor = "default";
//       }

    });
  },true);
}

function my_home() {
  let promo_bar = document.getElementById('shopify-section-promo-bar');
  let top_bar = document.getElementById('shopify-section-top-bar');
  let header_zx = document.getElementById('shopify-section-header');
  let footer_bottom = document.getElementsByClassName('footer color- gradient my_footer_bottom_color')[0];
  let my_footer_sticky = document.getElementsByClassName('footer color- gradient my_footer_sticky')[0];
  let main = document.getElementById('MainContent');
  let sticky = document.getElementsByClassName('my_footer_sticky');
  let my_footer_sticky_height = document.getElementsByClassName('footer color- gradient my_footer_sticky')[0].scrollHeight;
  let footer_bottom_height = document.getElementsByClassName('footer color- gradient my_footer_bottom_color')[0].scrollHeight;
  // footer sticky
  if(sticky.length > 0) {
    if(document.body.clientWidth < 1024) {
      promo_bar.style.zIndex = 2;
      main.style.marginBottom = 0 + "px";
      my_footer_sticky.style.opacity = 1;
      my_footer_sticky.style.zIndex = 1;
      footer_bottom.style.position = 'static';
      my_footer_sticky.style.marginBottom = 0;
    }
    else if(document.body.clientWidth >= 1024) {
      promo_bar.style.zIndex = 898;
      top_bar.style.zIndex = 899;
      header_zx.style.zIndex = 898;
      
      main.style.zIndex = 897;
      main.style.marginBottom = my_footer_sticky_height + footer_bottom_height + "px";
      my_footer_sticky.style.marginBottom = footer_bottom_height + "px";
      my_footer_sticky.style.opacity = 1;
      my_footer_sticky.style.zIndex = 1;
      footer_bottom.style.position = 'fixed';
      footer_bottom.style.bottom = 0;
      footer_bottom.style.width = '100%';
    }
  }
  else {
    main.style.marginBottom = 0 + "px";
    footer_bottom.style.position = 'static';
  }
}
my_header_and_totop();
my_home();


window.onload = function() {
  my_home();
  // hide_banner variant define in promo-bar.liquid
  hide_banner.style.marginTop = 0 + 'px';
  hide_banner.style.transition = "all .5s";
}

$(window).resize(function(){
  my_home();
});

var myHomeFreshDesignMode = Shopify.designMode || false;
if(myHomeFreshDesignMode){
  document.addEventListener('shopify:section:load',() => {                
    let promo_bar = document.getElementById('shopify-section-promo-bar');
    let top_bar = document.getElementById('shopify-section-top-bar');
    let header_zx = document.getElementById('shopify-section-header');
    let footer_bottom = document.getElementsByClassName('footer color- gradient my_footer_bottom_color')[0];
    let my_footer_sticky = document.getElementsByClassName('footer color- gradient my_footer_sticky')[0];
    let main = document.getElementById('MainContent');
    let sticky = document.getElementsByClassName('my_footer_sticky');

    if(sticky.length > 0) {
      if(document.body.clientWidth < 1024) {
        main.style.marginBottom = 0;
        my_footer_sticky.style.opacity = 1;
        my_footer_sticky.style.zIndex = 1;
        my_footer_sticky.style.marginBottom = 0;
        footer_bottom.style.position = 'static';
      }
      else if(document.body.clientWidth >= 1024) {
        let my_footer_sticky_height = document.getElementsByClassName('footer color- gradient my_footer_sticky')[0].scrollHeight;
        let jq_footer_top_height = $('.footer.color-.gradient.my_footer_sticky').height();
        let jq_footer_bottom_height = $('.footer.color-.gradient.my_footer_bottom_color').height();
        let jq_main_margin_bottom = parseInt(jq_footer_top_height+jq_footer_bottom_height);
        
        promo_bar.style.zIndex = 898;
        top_bar.style.zIndex = 899;
        header_zx.style.zIndex = 898;
        
        main.style.zIndex = 897;
        main.style.marginBottom = jq_main_margin_bottom + "px";
        my_footer_sticky.style.marginBottom = jq_footer_bottom_height + "px";
        my_footer_sticky.style.opacity = 1;
        my_footer_sticky.style.zIndex = 1;
;
        footer_bottom.style.position = 'fixed';
        footer_bottom.style.bottom = 0;
        footer_bottom.style.width = '100%';    
      }
    }
    else {
      main.style.marginBottom = 0;
      footer_bottom.style.position = 'static';
    }
  },true);
}