//cookie
  let ddl = document.getElementById('promo_bar_date');  
  let cookietime = ddl.dataset.date;
  // 设置cookie
  function setCookie(name,value) {
    var Days = cookietime;
    var exp = new Date(); 
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString() + ";path=" + "/";
  }
  // 获取cookie
  function getCookie(name) {
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg)) return unescape(arr[2]);
    else return null;
  }
  // 删除cookie
  function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=getCookie(name);
    if(cval!=null) document.cookie= name + "="+cval+";expires="+exp.toGMTString();
  }
  
  var myPromoFreshDesignMode2 = Shopify.designMode || false;
  if(myPromoFreshDesignMode2){      
    promo_bar_change();
  } else {
    if(getCookie("ddl")){
      let hide_banner = document.getElementById('hide_banner'); 
      let hide_banner_height = document.getElementById('hide_banner').scrollHeight;
      hide_banner.style.marginTop = -hide_banner_height + 'px';
    } else {
      promo_bar_fun();
    }
  }
  
  function promo_bar_change() {
    let close = document.getElementsByClassName('show_close')[0];
    let my_center = document.getElementsByClassName('my_center')[0];
    let hide_banner = document.getElementById('hide_banner');  
    let hide_banner_height = document.getElementById('hide_banner').scrollHeight;
    let count = document.getElementsByClassName('row al_center my_center')[0].childElementCount;
    close.onclick = function () {
      if(hide_banner_height > hide_banner.dataset.mheight) {
        hide_banner.dataset.mheight = hide_banner_height;
      }
      hide_banner.style.marginTop = -hide_banner_height + 'px';
      hide_banner.style.transition = "margin-top .5s";
    }

    if(count != document.getElementsByClassName('row al_center my_center')[0].childElementCount) {
      close.onclick = function () {
        if(hide_banner_height > hide_banner.dataset.mheight) {
          hide_banner.dataset.mheight = hide_banner_height;
        }
        hide_banner.style.marginTop = -hide_banner_height + 'px';
        hide_banner.style.transition = "margin-top .5s";
      }
    }
    hide_banner.dataset.mheight = hide_banner_height;
    hide_banner.style.marginTop = -hide_banner.dataset.mheight + 'px';

    setTimeout(function() {
      hide_banner.style.marginTop = 0 + 'px';
      hide_banner.style.transition = "margin-top .5s";
    }, 500);
  }

  var myPromoFreshDesignMode = Shopify.designMode || false;
  if(myPromoFreshDesignMode){      
    document.addEventListener('shopify:section:load',() => {  
      // 注释后 自己不能刷新
      promo_bar_change();
    },true);
  }
  
  function promo_bar_fun() {   
    let close = document.getElementsByClassName('show_close')[0];
    let my_center = document.getElementsByClassName('my_center')[0];
    let hide_banner = document.getElementById('hide_banner');  
    let hide_banner_height = document.getElementById('hide_banner').scrollHeight;
    let count = document.getElementsByClassName('row al_center my_center')[0].childElementCount;
    close.onclick = function () {
      if(hide_banner_height > hide_banner.dataset.mheight) {
        hide_banner.dataset.mheight = hide_banner_height;
      }
      hide_banner.style.marginTop = -hide_banner_height + 'px';
      setCookie("ddl",cookietime);
    }

    if(count != document.getElementsByClassName('row al_center my_center')[0].childElementCount) {
      close.onclick = function () {
        if(hide_banner_height > hide_banner.dataset.mheight) {
          hide_banner.dataset.mheight = hide_banner_height;
        }
        hide_banner.style.marginTop = -hide_banner_height + 'px';
        setCookie("ddl",cookietime);
      }
    }
    hide_banner.dataset.mheight = hide_banner_height;
    hide_banner.style.marginTop = -hide_banner.dataset.mheight + 'px';
        setTimeout(function() {
      hide_banner.style.marginTop = 0 + 'px';
      hide_banner.style.transition = "margin-top .5s";
    }, 500);
  }