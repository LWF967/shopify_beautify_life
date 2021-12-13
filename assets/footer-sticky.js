let promo_bar = document.getElementById('shopify-section-promo-bar');
let top_bar = document.getElementById('shopify-section-top-bar');
let header_zx = document.getElementById('shopify-section-header');
let footer_top = document.getElementById('shopify-section-footer-top');
let footer_bottom = document.getElementsByClassName('footer color- gradient my_footer_bottom_color')[0];
let footer_bottom_height = document.getElementsByClassName('footer color- gradient my_footer_bottom_color')[0].scrollHeight;
let my_footer_sticky = document.getElementsByClassName('footer color- gradient my_footer_sticky')[0];
let main = document.getElementById('MainContent');
let sticky = document.getElementsByClassName('my_footer_sticky');

if(sticky.length > 0) {      
  if(document.body.clientWidth < 1024) {
    main.style.marginBottom = 0 + "px";
  }
  else if(document.body.clientWidth >= 1024) {
    let my_footer_sticky_height = document.getElementsByClassName('footer color- gradient my_footer_sticky')[0].scrollHeight - 55;
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