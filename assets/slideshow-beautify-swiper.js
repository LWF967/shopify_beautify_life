


 console.log('轮播swiper');
 
 import Swiper from '{{ 'swiper-bundle.esm.browser.min.js' | asset_url }}'


 
 let  swiperAutoPlay = document.getElementsByClassName(' swiper-wrapper-{{section.id}}')[0].dataset.autoplay;
 let swiperTime = document.getElementsByClassName('swiper-wrapper-{{section.id}}')[0].dataset.autotime;	 
 let swiperLoop = document.getElementsByClassName('swiper-wrapper-{{section.id}}')[0].dataset.loop;	
	(swiperLoop == "false") ? swiperLoop=false : swiperLoop=true;
// console.log(swiperAutoPlay,'',swiperTime)
 
var swiperBeautifySlideshow = new Swiper('.feature-artworks-{{section.id}}.swiper-container-{{section.id}}', {
  direction: 'horizontal', // 垂直切换选项  horizontal  vertical
  loop: swiperLoop, // 循环模式选项 

   parallax : true,
  // 如果需要分页器


  {% unless section.settings.show_page_Dot %}

  pagination: {
    el: '.swiper-pagination-{{section.id}}',
    clickable: true,
    hideOnClick: true,
  },

  {% else %}
  pagination: {
    el: '.swiper-pagination-{{section.id}}',
    clickable: true,
  },
  {% endunless %}



  effect: 'fade',
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  {% if  section.settings.auto_play == true %}
    autoplay: {
      delay: swiperTime * 1000 ,
      stopOnLastSlide: false,
      disableOnInteraction: false,
    },
  {% endif %}
	
  // 如果需要前进后退按钮
  navigation: {
    nextEl: '.swiper-button-next-{{section.id}}',
    prevEl: '.swiper-button-prev-{{section.id}}',
  }

})


	{% if  section.settings.auto_play == true %}
		swiperBeautifySlideshow.autoplay.start();
	{% else %}
		swiperBeautifySlideshow.autoplay.stop();
  	{% endif %}

document.addEventListener('shopify:section:load', () => {


 let  swiperAutoPlay = document.getElementsByClassName(' swiper-wrapper-{{section.id}}')[0].dataset.autoplay;
 let swiperTime = document.getElementsByClassName('swiper-wrapper-{{section.id}}')[0].dataset.autotime;	 
  let swiperLoop = document.getElementsByClassName('swiper-wrapper-{{section.id}}')[0].dataset.loop;	
	(swiperLoop == "false") ? swiperLoop=false : swiperLoop=true;

// console.log('baibai',swiperTime);

  var swiperBeautifySlideshow = new Swiper('.feature-artworks-{{section.id}}.swiper-container-{{section.id}}', {
    direction: 'horizontal', // 垂直切换选项  horizontal  vertical
    loop: swiperLoop, // 循环模式选项 
	 parallax : true,
    // 如果需要分页器


    {% unless section.settings.show_page_Dot %}

    pagination: {
      el: '.swiper-pagination-{{section.id}}',
      clickable: true,
      hideOnClick: true,
    },

    {% else %}
    pagination: {
      el: '.swiper-pagination-{{section.id}}',
      clickable: true,
    },
    {% endunless %}



    effect: 'fade',
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
   {% if  section.settings.auto_play == true %}
    autoplay: {
      delay: swiperTime * 1000 ,
      stopOnLastSlide: false,
      disableOnInteraction: false,
    },
  {% endif %}
  
	

    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next-{{section.id}}',
      prevEl: '.swiper-button-prev-{{section.id}}',
    }

  })

	{% if  section.settings.auto_play == true %}
		swiperBeautifySlideshow.autoplay.start();
	{% else %}
		swiperBeautifySlideshow.autoplay.stop();
  	{% endif %}
  



}, true)




document.addEventListener('shopify:section:unload', () => {


 let  swiperAutoPlay = document.getElementsByClassName(' swiper-wrapper-{{section.id}}')[0].dataset.autoplay;
 let swiperTime = document.getElementsByClassName('swiper-wrapper-{{section.id}}')[0].dataset.autotime;	 
  let swiperLoop = document.getElementsByClassName('swiper-wrapper-{{section.id}}')[0].dataset.loop;	
	(swiperLoop == "false") ? swiperLoop=false : swiperLoop=true;

// console.log('baibai',swiperTime);

  var swiperBeautifySlideshow = new Swiper('.feature-artworks-{{section.id}}.swiper-container-{{section.id}}', {
    direction: 'horizontal', // 垂直切换选项  horizontal  vertical
    loop: swiperLoop, // 循环模式选项 
	 parallax : true,
    // 如果需要分页器


    {% unless section.settings.show_page_Dot %}

    pagination: {
      el: '.swiper-pagination-{{section.id}}',
      clickable: true,
      hideOnClick: true,
    },

    {% else %}
    pagination: {
      el: '.swiper-pagination-{{section.id}}',
      clickable: true,
    },
    {% endunless %}



    effect: 'fade',
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
   {% if  section.settings.auto_play == true %}
    autoplay: {
      delay: swiperTime * 1000 ,
      stopOnLastSlide: false,
      disableOnInteraction: false,
    },
  {% endif %}
  
	

    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next-{{section.id}}',
      prevEl: '.swiper-button-prev-{{section.id}}',
    }

  })

	{% if  section.settings.auto_play == true %}
		swiperBeautifySlideshow.autoplay.start();
	{% else %}
		swiperBeautifySlideshow.autoplay.stop();
  	{% endif %}
  



}, true)






/**
 * 防抖函数，非立即执行
 * @param {*} func 回调函数  必传
 * @param {*} wait 等待时长 默认500ms 可不传
 * arguments  是js存函数参数的地方
 */
function debounce(func, wait = 500) {
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
 
 
 
 	function ScreenSizeChange(){

// 根据不同端，添加不同响应事件    

      if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
		
        
        
        $('.swiper-container-{{section.id}}').unbind('mouseover').unbind('mouseout');

        document.getElementsByClassName('swiper-container-{{section.id}}')[0].addEventListener('touchstart', debounce(function () {
          swiperBeautifySlideshow.autoplay.stop();
        }, 500), true)

        document.getElementsByClassName('swiper-container-{{section.id}}')[0].addEventListener('touchmove', debounce(function () {

        }), true)

        document.getElementsByClassName('swiper-container-{{section.id}}')[0].addEventListener('touchend', debounce(function () {
          swiperBeautifySlideshow.autoplay.start();
        }, 500), true)

      } else {


        $('.swiper-container-{{section.id}}').mouseover(debounce(function () {
        	console.log('222');
          swiperBeautifySlideshow.autoplay.stop();
        }))

        $('.swiper-container-{{section.id}}').mouseout(debounce(function () {
        console.log('333');
          swiperBeautifySlideshow.autoplay.start();
        }))



      } 
	}
    
   ScreenSizeChange()
  
 	 
  window.addEventListener("resize", debounce(function(){
 	ScreenSizeChange()
	})
    );

    
