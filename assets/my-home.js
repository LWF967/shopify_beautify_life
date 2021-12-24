// lzx change
// footer sticky
window.onload = function() {
  my_home();
  var myHomeFreshDesignModeonload = Shopify.designMode || false;
  if(myHomeFreshDesignModeonload){
    document.addEventListener('shopify:section:load',() => {
//       let promo_bar = document.getElementById('shopify-section-promo-bar');
//       let top_bar = document.getElementById('shopify-section-top-bar');
//       let header_zx = document.getElementById('shopify-section-header');
//       //   let footer_top = document.getElementById('shopify-section-footer-top');
//       let footer_bottom = document.getElementsByClassName('footer color- gradient my_footer_bottom_color')[0];
//       //   let footer_bottom_height = document.getElementsByClassName('footer color- gradient my_footer_bottom_color')[0].scrollHeight;
//       let my_footer_sticky = document.getElementsByClassName('footer color- gradient my_footer_sticky')[0];
//       let main = document.getElementById('MainContent');
//       let sticky = document.getElementsByClassName('my_footer_sticky');

//       // footer sticky
//       if(sticky.length > 0) {
//         if(document.body.clientWidth < 1024) {
//           main.style.marginBottom = 0;
//           my_footer_sticky.style.opacity = 1;
//           my_footer_sticky.style.zIndex = 1;
//           my_footer_sticky.style.marginBottom = 0;
//           footer_bottom.style.position = 'static';
//         }
//         else if(document.body.clientWidth >= 1024) {
//           let my_footer_sticky_height = document.getElementsByClassName('footer color- gradient my_footer_sticky')[0].scrollHeight;
          
          

//           let footer_bottom_svg_box_height = document.getElementsByClassName('dib bot_footer_svg')[0].scrollHeight;
//           let footer_bottom_svg_height = document.querySelectorAll(".bot_footer_svg img")[0].scrollHeight;
//           let footer_bottom_height = document.getElementsByClassName('footer color- gradient my_footer_bottom_color')[0].scrollHeight;


// //           console.log("box 更新:"+footer_bottom_svg_box_height);
// //           console.log("svg 更新:"+footer_bottom_svg_height);
// //           console.log("相除 更新"+footer_bottom_svg_box_height/footer_bottom_svg_height);

//           let footer_bottom_layout_center = document.getElementsByClassName('my_footer_bottom_layout_center');
//           if(footer_bottom_layout_center.length > 0) {
//             footer_bottom_height -= footer_bottom_svg_height;
// //             console.log(footer_bottom_height);
//           }


//           main.style.zIndex = 897;
//           main.style.marginBottom = my_footer_sticky_height + footer_bottom_height + "px";
//           my_footer_sticky.style.marginBottom = footer_bottom_height + "px";
//           my_footer_sticky.style.opacity = 1;
//           my_footer_sticky.style.zIndex = 1;
//           promo_bar.style.zIndex = 898;
//           top_bar.style.zIndex = 899;
//           header_zx.style.zIndex = 898;
//           footer_bottom.style.position = 'fixed';
//           footer_bottom.style.bottom = 0;
//           footer_bottom.style.width = '100%';

// //           console.log("top:"+my_footer_sticky_height); 
//           console.log("bottom:"+footer_bottom_height);
// //           console.log("main:"+main.style.marginBottom); 
// //           console.log("+++++++++++++++");        
//         }
//       }
//       else {
//         main.style.marginBottom = 0;
//         footer_bottom.style.position = 'static';
//       }
    },true);
  }
  // hide_banner variant define in promo-bar.liquid
  hide_banner.style.marginTop = 0 + 'px';
  hide_banner.style.transition = "all .5s";
}
//   my_home();
  var myHomeFreshDesignMode = Shopify.designMode || false;
  if(myHomeFreshDesignMode){
    document.addEventListener('shopify:section:load',() => {
      my_home();
    },true);
  }
  
$(window).resize(function(){
//     my_home();
});

// window.onresize = function() {
//       my_home();
//   promo_bar_change();
// //   ddddl();
// }

let promo_bar = document.getElementById('shopify-section-promo-bar');
let top_bar = document.getElementById('shopify-section-top-bar');
let header_zx = document.getElementById('shopify-section-header');
//   let footer_top = document.getElementById('shopify-section-footer-top');
let footer_bottom = document.getElementsByClassName('footer color- gradient my_footer_bottom_color')[0];
//   let footer_bottom_height = document.getElementsByClassName('footer color- gradient my_footer_bottom_color')[0].scrollHeight;
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

my_header_and_totop();

function my_header_and_totop() {
  // backtop 
  function gotoTop() {
    $("#my_backtop").click(
      function () {
        $('html,body').animate({ scrollTop: '0px' }, 'slow');
      })
  };
  gotoTop();
  //获取页面顶部的距离
  window.onscroll = function () {
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
        //         if(document.body.clientWidth > 990) {
        top_bar.style.zIndex = 901;
        header_zx.style.zIndex = 900;
        //         } else if (document.body.clientWidth < 990) {
        //           top_bar.style.zIndex = 1;
        //           header_zx.style.zIndex = 0;
        //         }
        content.classList.add('my_header_sticky_settings');
        header.classList.add('my_header_sticky_settings');
        content.style.transition = 'transform .3s';
        // content.style.top = -(content.scrollHeight) + 'px';
        content.style.top = "-" + (header_wrapper.style.height);
        // content.style.transform = 'translateY(' + (content.scrollHeight) + 'px)';
        // content.style.transform = 'translate3d(0,' + content.scrollHeight + 'px, 0)';
        content.style.transform = 'translate3d(0,' + header_wrapper.style.height + ', 0)';
      } else if(content.style.position == 'relative') {
        //         if(document.body.clientWidth > 990) {


        top_bar.style.zIndex = 899;
        header_zx.style.zIndex = 898;


        //         } else if (document.body.clientWidth < 990) {
        //           top_bar.style.zIndex = 1;
        //           header_zx.style.zIndex = 0;
        //         }
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
}

function my_home() {
  // footer sticky
  if(sticky.length > 0) {
    if(document.body.clientWidth < 1024) {
      main.style.marginBottom = 0 + "px";
      my_footer_sticky.style.opacity = 1;
      my_footer_sticky.style.zIndex = 1;
      footer_bottom.style.position = 'static';
      my_footer_sticky.style.marginBottom = 0;
    }
    else if(document.body.clientWidth >= 1024) {
      let my_footer_sticky_height = document.getElementsByClassName('footer color- gradient my_footer_sticky')[0].scrollHeight;
      let footer_bottom_height = document.getElementsByClassName('footer color- gradient my_footer_bottom_color')[0].scrollHeight;
      
      let footer_bottom_svg = document.getElementsByClassName('dib bot_footer_svg');
      if(footer_bottom_svg.length > 0) {
        let footer_bottom_svg_box_height = document.getElementsByClassName('dib bot_footer_svg')[0].scrollHeight;
        let footer_bottom_svg_height = document.querySelectorAll(".bot_footer_svg img")[0].scrollHeight;
//         console.log("box 原始:"+footer_bottom_svg_box_height);
//         console.log("svg 原始:"+footer_bottom_svg_height);
      }
      
      let footer_bottom_image = document.getElementsByClassName('dib');
      if(footer_bottom_image.length > 0) {
        let footer_bottom_image_box_height = document.getElementsByClassName('dib')[0].scrollHeight;
//         console.log("image 原始:"+footer_bottom_image_box_height);
      }

//       let row = footer_bottom_svg_box_height/footer_bottom_svg_height;
//       console.log("row:"+row);

//               let footer_bottom_layout_center = document.getElementsByClassName('my_footer_bottom_layout_center');
//         if(footer_bottom_layout_center.length > 0) {
//           footer_bottom_height -= footer_bottom_svg_height;
//           console.log(footer_bottom_height);
//         }
      
      
      main.style.zIndex = 897;
      main.style.marginBottom = my_footer_sticky_height + footer_bottom_height + "px";
      my_footer_sticky.style.marginBottom = footer_bottom_height + "px";
      my_footer_sticky.style.opacity = 1;
      my_footer_sticky.style.zIndex = 1;
      promo_bar.style.zIndex = 898;
      top_bar.style.zIndex = 899;
      header_zx.style.zIndex = 898;
      footer_bottom.style.position = 'fixed';
      footer_bottom.style.bottom = 0;
      footer_bottom.style.width = '100%';

//       console.log("top:"+my_footer_sticky_height); 
      console.log("无刷新bottom:"+footer_bottom_height);
//       console.log("main:"+main.style.marginBottom); 
//       console.log("===================");        
    }
  }
  else {
    main.style.marginBottom = 0 + "px";
    footer_bottom.style.position = 'static';
  }
}

// var myHomeFreshDesignMode = Shopify.designMode || false;
// if(myHomeFreshDesignMode){
//   document.addEventListener('shopify:section:load',() => {
                            
                            
//     let promo_bar = document.getElementById('shopify-section-promo-bar');
//     let top_bar = document.getElementById('shopify-section-top-bar');
//     let header_zx = document.getElementById('shopify-section-header');
//     //   let footer_top = document.getElementById('shopify-section-footer-top');
//     let footer_bottom = document.getElementsByClassName('footer color- gradient my_footer_bottom_color')[0];
//     //   let footer_bottom_height = document.getElementsByClassName('footer color- gradient my_footer_bottom_color')[0].scrollHeight;
//     let my_footer_sticky = document.getElementsByClassName('footer color- gradient my_footer_sticky')[0];
//     let main = document.getElementById('MainContent');
//     let sticky = document.getElementsByClassName('my_footer_sticky');

//     // footer sticky
//     if(sticky.length > 0) {
//       if(document.body.clientWidth < 1024) {
//         main.style.marginBottom = 0;
//         my_footer_sticky.style.opacity = 1;
//         my_footer_sticky.style.zIndex = 1;
//         my_footer_sticky.style.marginBottom = 0;
//         footer_bottom.style.position = 'static';
//       }
//       else if(document.body.clientWidth >= 1024) {
//         let my_footer_sticky_height = document.getElementsByClassName('footer color- gradient my_footer_sticky')[0].scrollHeight;
//         let footer_bottom_svg_box_height = document.getElementsByClassName('dib bot_footer_svg')[0].scrollHeight;
//         let footer_bottom_svg_height = document.querySelectorAll(".bot_footer_svg img")[0].scrollHeight;
//         let footer_bottom_height = document.getElementsByClassName('footer color- gradient my_footer_bottom_color')[0].scrollHeight + footer_bottom_svg_height;

        
//          $('html,body').outheight
//         console.log("box 更新:"+footer_bottom_svg_box_height);
//         console.log("svg 更新:"+footer_bottom_svg_height);
//         console.log("相除 更新"+footer_bottom_svg_box_height/footer_bottom_svg_height);
      
//         let footer_bottom_layout_center = document.getElementsByClassName('my_footer_bottom_layout_center');
//         if(footer_bottom_layout_center.length > 0) {
//           footer_bottom_height -= footer_bottom_svg_height;
//           console.log(footer_bottom_height);
//         }
        

//         main.style.zIndex = 899;
//         main.style.marginBottom = my_footer_sticky_height + footer_bottom_height + "px";
//         my_footer_sticky.style.marginBottom = footer_bottom_height + "px";
//         my_footer_sticky.style.opacity = 1;
//         my_footer_sticky.style.zIndex = 1;
//         promo_bar.style.zIndex = 898;
//         top_bar.style.zIndex = 899;
//         header_zx.style.zIndex = 898;
//         footer_bottom.style.position = 'fixed';
//         footer_bottom.style.bottom = 0;
//         footer_bottom.style.width = '100%';

//         console.log("top:"+my_footer_sticky_height); 
//         console.log("bottom:"+footer_bottom_height);
//         console.log("main:"+main.style.marginBottom); 
//         console.log("+++++++++++++++");        
//       }
//     }
//     else {
//       main.style.marginBottom = 0;
//       footer_bottom.style.position = 'static';
//     }

// my_home();
//   },true);
// }