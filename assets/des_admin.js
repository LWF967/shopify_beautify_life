(function( $ ) {
   "use strict";
    // https://help.shopify.com/en/themes/development/sections/integration-with-theme-editor
    var sps = '#shopify-section-', 
       tpk = 'type_packery',
       js_faq = 'js_faq_ad',
       tp_faq = 'type_faq',
       jpk = '.js_packery',
       tiso = 'type_isotope',
       jiso = '.js_isotope',
       tcr = 'type_carousel',
       tpin = 'type_pin_owl',
       jcr = 'js_carousel',
       jcr_ = '.js_carousel',
       tmr = 'type_masonry',
       thv = 'type_hero_video',
       jsv = '.js_video',
       jbody = $('body'),
       Tpr = jbody.hasClass('template-product'),
       tins = 'type_instagram',
       jins = '.js_nt_ist',
       jlb = 'js_lbcl',
       window_w = $(window).width(),
       jdocument = $(document),
       body = $('body'),
       alet_css_t4 = $('#alet_css_t4'),
       sp_theme_id = Shopify.theme.id;
    
    $('.cp_cd_js').removeClass('dn');
    $('#sett_clt4').remove();


    if (t_name == 'collection'){
      geckoShopify.RefreshPriceTitle($('.filter_area_js'));
      geckoShopify.RefreshPriceTitle($('.js_sidebar'));
    }
    jdocument.on('shopify:section:load', function(e){
      var id = e.detail.sectionId,
          $parentSection = $(sps + id);
      $('.cp_cd_js').removeClass('dn');
      //console.log($parentSection);
  
      if ( $parentSection.hasClass(tcr) || $parentSection.hasClass(tpin) ) {
          // var el = $parentSection.find(jcr_);
          // geckoShopify.refresh_flickity(el); 
      } else if ( $parentSection.hasClass(tpk) ) {
         var el = $parentSection.find(jpk);
         geckoShopify.refresh_packery(el);
      } else if ( $parentSection.hasClass(tiso) ) {
           var el = $parentSection.find(jiso);
           geckoShopify.refresh_isotope(el); 
      } else if ($parentSection.hasClass(js_faq)) {
        geckoShopify.spAccordion();   
      } else if ($parentSection.hasClass(thv)) {
        var yt_src = '//www.youtube.com/iframe_api';
            $script(yt_src, 'loaded_v_js');
        var el = $parentSection.find(jsv);
        //console.log(el);
        if (el.length == 0) return;
        geckoShopify.refresh_Youtube(el);
      } else if ($parentSection.hasClass(tins)) {
        var el = $parentSection.find(jins);
        geckoShopify.refresh_ins(el);
      } 

      if ($parentSection.find('.nt_parallax_true').length > 0 ) {
         geckoShopify.parallax(); 
      }  
      if ($parentSection.hasClass('tp_se_cdt')) {
        geckoShopify.InitCountdown();
      }
      if ($parentSection.hasClass('tp_se_cdt2')) {
        geckoShopify.InitSeCountdown();
      }

      // geckoShopify.initMegaMenu();
      geckoShopify.fullHeightRow();
      if (Tpr) {

         switch(id) {
           case 'pr_summary':
            geckoShopify.ATC_animation('#callBackVariant_ppr .single_add_to_cart_button');
            geckoShopify.NtproductPage();
            geckoShopify.InitCountdown_pr('#nt_countdow_ppr');
            geckoShopify.progressbar('#nt_stock_ppr');
            geckoShopify.delivery_order('#delivery_ppr');
            geckoShopify.real_time('#counter_ppr');
            geckoShopify.flashSold('#sold_ppr');
            if(typeof addthis !== 'undefined') {addthis.layers.refresh()}
            break;

           case 'product-recommendations':
             geckoShopify.PrRecommendations();
             break;

           case 'recently_viewed':
             geckoShopify.recently_viewed();
             break;

           case 'pr_description':
            geckoShopify.spAccordion();
            break;
         }
         
      }
      
      switch(id) {

        case 'header_7':
          geckoShopify.mobileNav();
          break;

        case 'collection_page':
          var el = $('#shopify-section-collection_page .nt_packery'),
              el1 = $('#shopify-section-collection_page .js_isotope');
          if ( el.length > 0) {
            geckoShopify.refresh_packery(el);
          } else if (el1.length > 0) {
            geckoShopify.refresh_isotope(el1);
          }
          break;

        case 'search_page':
          var el = $('#shopify-section-search_page .js_isotope');
          geckoShopify.refresh_isotope(el);
          break;

        case 'newsletter_pp':
          geckoShopify.NewsletterPopup();
          //$('.popup_new_wrap').trigger('open_newsletter');
          break;

        case 'age_verify':
          geckoShopify.ageVerify();
          //$('.popup_age_wrap').trigger('open_age_pp');
          break;
        case 'cookies_law':
          geckoShopify.cookiesLawPP();
          break;
        case 'promo_pr_pp':
          geckoShopify.PromoPrPopup();
          break;
        case 're_upsell':
          if ($('#mfp_re_upsell').length > 0) {
            $.magnificPopup.open({
              items: {
                src: '#mfp_re_upsell',
                type: 'inline'
              }
            });
            geckoShopify.refresh_flickity($('#mfp_re_upsell .nt_slider'));
            $('.nt_products_holder .pr_animated:not(.done)').addClass('done');
          }
        case 'sales_popup':
          geckoShopify.SalesPopup();
          break;
        // case 'faq':
        // case 'faqs':
        //   geckoShopify.spAccordion();
        //   break;
        case 'sticky_atc':
          geckoShopify.stickyAddToCart();
          geckoShopify.ATC_animation('#shopify-section-sticky_atc .single_add_to_cart_button');
          $('.sticky_atc_wrap').addClass('sticky_atc_shown');
          //setTimeout(function(){ $('.sticky_atc_wrap').addClass('sticky_atc_shown'); }, 500);
          break;
      }
      // end switch

    });

    jdocument.on('shopify:section:unload', function(e){
      var id = e.detail.sectionId,
          $parentSection = $(sps + id);

      // geckoShopify.initMegaMenu();
      geckoShopify.fullHeightRow();
      if (Tpr && false) {
         geckoShopify.InitCountdown_pr('#nt_countdow_ppr');
         geckoShopify.progressbar('#nt_stock_ppr');
         geckoShopify.delivery_order('#delivery_ppr');
         if(typeof addthis !== 'undefined') {addthis.layers.refresh()}
         //geckoShopify.PrRecommendations();
      }
    });

    jdocument.on('shopify:section:select', function(e) {
      //console.log(e.detail.load)
      // if (e.detail.load) return;
      var id = e.detail.sectionId,
          $parentSection = $(sps + id);

      geckoShopify.fullHeightRow();

      if ( $parentSection.hasClass(tcr) || $parentSection.hasClass(tpin) ) {
          var el = $parentSection.find(jcr_);
          //console.log(el)
          geckoShopify.refresh_flickity(el); 
      } else if ( $parentSection.hasClass(tpk) ) {
           var el = $parentSection.find(jpk);
           geckoShopify.refresh_packery(el);
      } else if ( $parentSection.hasClass(tiso) ) {
           var el = $parentSection.find(jiso);
           geckoShopify.refresh_isotope(el);  
      } else if ($parentSection.hasClass(thv)) {
        var el = $parentSection.find(jsv);
        //geckoShopify.refresh_Youtube(el);
      } else if ($parentSection.hasClass('type_popup_video')) {
        geckoShopify.InitPopupVideo();
      } else if ($parentSection.hasClass('js_fetpr_se')) {
        geckoShopify.ProductSection(id);
        geckoShopify.refresh_flickity($('.p-thumb'+id));
        //geckoShopify.productImagesThumb(id);
      }

      switch(id) {
        case 'header_banner':
          geckoShopify.bannerCountdown();
          //(jbody.hasClass('des_header_7')) ? geckoShopify.hTransparent7() :  geckoShopify.hTransparent(true);
          geckoShopify.hTransparent(true);
          break;
        case 'mb_nav':
        case 'mb_cat':
          $('.push_side.push-menu-btn:not(.act_current)').trigger('click');
          $('[data-id="#shopify-section-'+id+'_js"]').removeClass('active').trigger('click');
          break;

        case 'nt_filter':
        case 'nt_filter2':
          if ($(window).width() < 1025) {
            $('[data-opennt="#shopify-section-'+id+'"]').trigger('click');
          } else {
             $('.pop_default .js_filter,.nt_pop_sidebar [data-opennt="#shopify-section-'+id+'"]').trigger('click');
          }
          geckoShopify.RefreshPriceTitle($('.filter_area_js'));
          break;

        case 'sidebar_shop':
        case 'sidebar_shop2':
          if ($(window).width() < 1025) {
            $('[data-opennt="#shopify-section-sidebar_shop"]').trigger('click');
          } else {
             $('.cat_hidden_true .btn_sidebar').trigger('click');
          }
          geckoShopify.RefreshPriceTitle($('.js_sidebar'));
          break;
        case 'nt_custom_color':
          if ($('#admclnt').length > 0) {
            $.magnificPopup.open({
              items: {
                src: '#admclnt',
                type: 'inline'
              }
            });
          }
          break;
        case 'cart_widget':
          geckoShopify.cartLazyUp();
          $("[data-id='#nt_cart_canvas']").trigger('click');
          geckoShopify.cart_tls_ship();
          break;
        case 'collection_page':
          geckoShopify.RefreshPriceTitle($('.filter_area_js'));
          geckoShopify.RefreshPriceTitle($('.js_sidebar'));
          break;
        // case 'search_page':
        // case 'collection_page':
        //   geckoShopify.MiniColumns();
        //   break;
        case 'footer_top':
          geckoShopify.footerCollapse();
          geckoShopify.stickyFooter();
          if ($('.footer_sticky_true').length == 0) {
            $('#nt_content').css({ marginBottom: 0 });
          }
          break;
        case 'newsletter_pp':
          $('.popup_new_wrap').trigger('open_newsletter');
          break;
        case 'age_verify':
          $('.popup_age_wrap').trigger('open_age_pp');
          break;
        case 'cookies_law':
          $('.popup_cookies_wrap').trigger('open_cookies_pp');
          break;
        case 'promo_pr_pp':
          $('.popup_prpr_wrap').trigger('open_promopr');
          setTimeout(function(){
           geckoShopify.refresh_flickity($('.popup_prpr_wrap .js_carousel'));
           geckoShopify.InitCountdown();
           geckoShopify.lazyWishUpdate();
           body.trigger('refresh_currency');
          }, 650);
          break;
        case 're_upsell':
          if ($('#mfp_re_upsell').length > 0) {
            $.magnificPopup.open({
              items: {
                src: '#mfp_re_upsell',
                type: 'inline'
              }
            });
            geckoShopify.refresh_flickity($('#mfp_re_upsell .nt_slider'));
            $('.nt_products_holder .pr_animated:not(.done)').addClass('done');
          }
        case 'sales_popup':
          $('.popup_slpr_wrap').trigger('open_slpr_pp');
          break;
        case 'sticky_atc':
          $('.sticky_atc_wrap').addClass('sticky_atc_shown');
          setTimeout(function(){ $('.sticky_atc_wrap').addClass('sticky_atc_shown'); }, 500);
          break;

        // case 'pr_description':
        //   geckoShopify.spAccordion();
        //   break;

        default:
      }

    });

    jdocument.on('shopify:section:deselect', function(e) { 
      var id = e.detail.sectionId,
      $parentSection = $(sps + id);

      if ($parentSection.hasClass('sp_header_mid')) {
         $('.sp_header_mid .menu-item').removeClass('menu_item_hover');
      }
      geckoShopify.fullHeightRow();

      switch(id) {

        case 'sidebar_shop':
        case 'nt_custom_color':
        case 'newsletter_pp':
        case 'age_verify':
        case 'promo_pr_pp':
        case 're_upsell':
          $.magnificPopup.close();
          break;

        case 'mb_nav': 
        case 'mb_cat': 
        case 'cart_widget':
          //$('.push_side.act_current').trigger('click');
          $('.mask-overlay').trigger('click');
          break;

        case 'nt_filter':
        case 'nt_filter2':
          $('.js_filter.opened').trigger('click');
          $.magnificPopup.close();
          break;

        case 'cookies_law':
          $('#shopify-section-cookies_law').removeClass('pp_onshow').addClass('pp_onhide');
          break;
        case 'sales_popup':
         $('.pp_slpr_close').trigger('click');
          break;

        default:
      }
      // if (id == 'mb_nav' || id == 'mb_cat' ) { $('.push_side.act_current').trigger('click');}
      // if (id == 'nt_custom_color' ) { $.magnificPopup.close() }
    });

    jdocument.on('shopify:block:select', function(e){
      //console.log(e.detail.load)
      //if (e.detail.load) return;
        //console.log(e);
        var id = e.detail.sectionId, blockId = e.detail.blockId,
          $parentSection = $(sps + id);
          //console.log($parentSection)

        if ($parentSection.hasClass('type_tab')) {
            $('.tab_se_element:not(.lazyload)').addClass('lazyload').one('lazyincluded', function(e) {
              //console.log('222');
              body.trigger('refresh_currency');
              geckoShopify.InitCountdown();
              var el = $(e.target)[0], owl = $(el).find('.js_carousel');

              if (owl.length == 0 ) return;
              geckoShopify.refresh_flickity(owl);
            });
          //if ( $('#'+blockId).find(jcr_).length > 0) { geckoShopify.refresh_flickity(el); }
          geckoShopify.catTabs();
          $('a[data-bid="'+blockId+'"]').trigger('click');
        } else if ( $parentSection.hasClass(tcr) ) {
          flickityBlock.select($parentSection,blockId);
          //geckoShopify.InitSliderVideo();
          geckoShopify.InitHTMLVideo();
        } else if ( $parentSection.hasClass(tpin) ) { 
            //console.log(blockId);
            var $blockID = $('#pin_'+blockId);
            //console.log($blockID);
            if (!$blockID.hasClass('pin__wr_js')) {
              var parentID = $blockID.attr('data-i');
              $blockID = $('#pin_'+parentID);
            }
            //console.log($blockID.index());
             $parentSection.find(jcr_).flickity('selectCell', $blockID.index() );
             $parentSection.find(jcr_).flickity('pausePlayer');
            setTimeout(function(){ 
              $('.pin__type_'+blockId+' .mfp_js:not(.current_clicked)').trigger('click');
              $('.hotspot_'+blockId+'.mfp_js:not(.current_clicked)').trigger('click');
          }, 350);
        } else if ($parentSection.hasClass(tmr)) {
          // mansonry
          //packeryBlock.select($parentSection)
        } else if ($parentSection.hasClass(tpk) && $parentSection.hasClass(jlb)) {

          var el = $parentSection.find(jpk);
          geckoShopify.refresh_packery(el); 
          $('.pin__type_'+blockId+'.pin__opened').trigger('click');
          setTimeout(function(){ $('.pin__type_'+blockId+':not(.pin__opened) .pin_tt_js').trigger('click');}, 350);

        } else if ($parentSection.hasClass(tpk)) {

           var el = $parentSection.find(jpk);
           geckoShopify.refresh_packery(el); 

        } else if ($parentSection.hasClass(thv)) {

           var el = $parentSection.find(jsv);
          geckoShopify.refresh_Youtube(el);
          geckoShopify.InitHTMLVideo();

        } else if (id == "hcat_nav" ) {

          $('.lazy_h_cat').html($('#html_hcat_nav').html());
          $('.ha8_cat').addClass('menu_item_hover');
          //$('.item_'+blockId).addClass('is_hover');
          
        } else if ($parentSection.hasClass('sp_header_mid')) {
          
          //console.log(blockId);
          if ($('#bkjs_'+blockId).length > 0 ) {
            //console.log('11');
            var li = $('.has-children#item_'+$('#bkjs_'+blockId).attr("data-id"));
          } else {
            var li = $('.has-children#item_'+blockId);
            //console.log('22');
          }
          //console.log(li);
           $('.sp_header_mid .menu-item').removeClass('menu_item_hover');
           li.addClass('menu_item_hover');
           if (li.hasClass('menu_has_offsets')) { geckoShopify.initMegaMenu(li); }

  
          $('.lazy_menu_mega').one('lazyincluded', function(e) {

            if (li.hasClass('menu_has_offsets')) { geckoShopify.initMegaMenu(li); }
            var el = $(e.target),
                option = JSON.parse(el.attr("data-jspackery")); 
            option.originLeft = body.hasClass('rtl_false');
            el.packery(option);

            body.trigger('refresh_currency');
            geckoShopify.InitSeCountdown();
            if (el.find('.js_carousel.flickity-enabled').length > 0 ) return;
            geckoShopify.refresh_flickity(el.find('.js_carousel'));
          });

          if ( $('.unlazy_menu_mega').length > 0 ) {
              $('.unlazy_menu_mega').each(function() { 
                var el = $(this),
                option = JSON.parse(el.attr("data-jspackery")); 

                if(el.hasClass('menu_mega_packery')) {el.packery('destroy')}
                el.addClass('menu_mega_packery').packery(option);
              }); 
          }
        } else if ($parentSection.hasClass(jlb)) {
          //console.log(blockId);
          $('.pin__type_'+blockId+'.pin__opened').trigger('click');
          setTimeout(function(){ $('.pin__type_'+blockId+':not(.pin__opened) .pin_tt_js').trigger('click');}, 350);
          // if ($('.mfp_js').is(':hidden')) {
          //   $('.pin__type_'+blockId+':not(.pin__opened) .pin_tt_js').trigger('click');
          // } else {
          //   //$.magnificPopup.close();
          //   setTimeout(function(){ $('.pin__type_'+blockId+' .mfp_js:not(.current_clicked)').trigger('click');}, 350);
          // }

          // $('.pin_lazy_js').one('lazyincluded', function(e) {
          //   console.log('pin_lazy_js');
          //   var el = $(e.target)[0], _el = $(el).find('.pin__popup');
          //   if ( _el.length == 0 ) return;
          //   geckoShopify.pin__pos(_el);
          // });
        }
        
        if (id == 'footer_top') {
          $('.footer_collapse_true #block_'+blockId+':not(.footer_opened)>.widget-title').trigger('click');
        } else if (id == 'mb_nav' || id == 'mb_cat' || id == 'header_7') {
          $('#item_'+blockId+':not(.nt_opended)>a .nav_link_icon').trigger('click');
        } else if (id == 'nt_custom_color') {
          $('#item_'+blockId).addClass('selected');
          if ($('#admclnt').length > 0 && $('.mfp-content #admclnt').length == 0) {
            $.magnificPopup.open({
              items: {
                src: '#admclnt',
                type: 'inline'
              }
            });
          }
        } else if (id == 'pr_description') {
          //console.log(blockId);

          if ( $('.des_style_2').length > 0 || ( $('.des_mb_2').length > 0 && $(window).width() < 1025 ) ) {
            c//onsole.log('click1');
            $('#tab_'+blockId+' .tab-heading').trigger('click');
          } else {
            //console.log('click2');
            $('ul.des_style_1>li>a[href="#tab_'+blockId+'"]').trigger('click');
          }

        } else if ($parentSection.hasClass(tp_faq)) {
           $('#tab_'+blockId+' .tab-heading').trigger('click');
        }

        //geckoShopify.initMegaMenu();

         if (Tpr) {
            geckoShopify.InitCountdown_pr('#nt_countdow_ppr');
            geckoShopify.progressbar('#nt_stock_ppr');
            //geckoShopify.delivery_order('#delivery_ppr');
            //geckoShopify.real_time('#counter_ppr');
            //if(typeof addthis !== 'undefined') {addthis.layers.refresh()}
         }
        // if ($('#shopify-section-gl-product-page-description').length > 0){
        //   $('a[href$="#'+blockId+'"]').trigger("click");
        // }

    });

    jdocument.on('shopify:block:deselect', function(e){
        //console.log(e);
        var id = e.detail.sectionId, blockId = e.detail.blockId,
          $parentSection = $(sps + id);

        if ( $parentSection.hasClass(tcr) ) {
          flickityBlock.deselect($parentSection)
        } else if ( $parentSection.hasClass(tpin) ) {
           flickityBlock.deselect($parentSection);
           $.magnificPopup.close();
            // if ($('.mfp_js').is(':hidden')) {
            //   $('.pin__type_'+blockId+' .pin_tt_js').trigger('click');
            // } else {
            //   $.magnificPopup.close();
            // }
        } else if ( $parentSection.hasClass(tmr) ){
          //packeryBlock.deselect($parentSection)
        } else if ( $parentSection.hasClass(tpk) ) {
           var el = $parentSection.find(jpk);
           geckoShopify.refresh_packery(el); 
        } else if (id == "hcat_nav" ) {
          $('.ha8_cat').removeClass('menu_item_hover');
          //$('.ha8_cat .is_hover').removeClass('is_hover');
        } else if ($parentSection.hasClass('sp_header_mid')) {
         $('.sp_header_mid .menu-item').removeClass('menu_item_hover');
        } else if ($parentSection.hasClass(jlb)) {   
          $('.pin__type_'+blockId+'.pin__opened').trigger('click');  
          // if ($('.mfp_js').is(':hidden')) {
          //   $('.pin__type_'+blockId+' .pin_tt_js').trigger('click');
          // } else {
          //   $.magnificPopup.close();
          // }
        }

        if (id == 'footer_top') {
          $('.footer_collapse_true #block_'+blockId+'.footer_opened>.widget-title').trigger('click');
        } else if (id == 'mb_nav' || id == 'mb_cat' || id == 'header_7') {
          //console.log('#item_'+blockId+id)
          $('#item_'+blockId+'.nt_opended>a .nav_link_icon').trigger('click');
        } else if (id == 'nt_custom_color') {
          $('#item_'+blockId).removeClass('selected');
        } else if (id == 'pr_description') {
          // console.log(blockId);
          if ( $('.des_style_2').length > 0 || ( $('.des_mb_2').length > 0 && $(window).width() < 1025 ) ) {
            //console.log('click1');
            $('.active#tab_'+blockId+' .tab-heading').trigger('click');
          } 
          // if ( $('.des_style_2').length > 0 || ( $('.des_mb_2').length > 0 && $(window).width() < 1025 ) ) {
          //   console.log('click1');
          //   $('.active#tab_'+blockId+' .tab-heading').trigger('click');
          // } else {
          //   console.log('click2');
          //   $('ul.des_style_1>li.active>a[href="#tab_'+blockId+'"]').trigger('click');
          // }

        } else if ($parentSection.hasClass(tp_faq)) {
           $('.active#tab_'+blockId+' .tab-heading').trigger('click');
        }

        //geckoShopify.initMegaMenu();
         if (Tpr) {
            geckoShopify.InitCountdown_pr('#nt_countdow_ppr');
            geckoShopify.progressbar('#nt_stock_ppr');
            geckoShopify.delivery_order('#delivery_ppr');
            if(typeof addthis !== 'undefined') {addthis.layers.refresh()}
         }


        // if ($('#shopify-section-gl-product-page-description').length > 0){
        //   $('a[href$="#'+blockId+'"]').trigger("click");
        // }

    });

    var flickityBlock = {
      select: function($parentSection,blockId){

        if ($('#nt_'+blockId).length > 0) {
          var index = $('#nt_'+blockId).index();
        } else {
          var index = $('#b_'+blockId).closest('.slideshow__slide').index();
        }
        var $block_id = $('#nt_'+blockId)
         $parentSection.find(jcr_).flickity( 'select', index );
         $parentSection.find(jcr_).flickity('pausePlayer')
      },
      deselect: function($parentSection){
        $parentSection.find(jcr_).flickity('unpausePlayer')
      }
    };

    // Creates or updates an asset for a theme.
    // https://help.shopify.com/en/api/reference/online-store/asset#update-2019-07
    var csrf_token = 'no_token';
    $.ajax({
      type: "GET",
      url: "/admin/themes", 
      success: function (data){
        csrf_token = data.split('name="csrf-token"')[1].split(" />")[0].split('"')[1];
        //console.log(csrf_token)
      }
    });

    jdocument.on('click', '.put_asset_js', function(e) {
        // e.preventDefault();
         var _this = $(this),
            key = _this.attr('data-key'),
            _sl = _this.attr('data-sl');
            //html = $(_this.attr('data-sl')).html();
            //console.log(html)

          _this.addClass('loading');
          $('#ld_cl_bar').trigger( "ld_bar_star" );

          $.ajax({
            url:  '/admin/api/2020-10/themes/'+sp_theme_id+'/assets.json',
            type: 'PUT',
            headers: {
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "x-csrf-token": csrf_token
            },
            data: {asset: {"key": key,"value":$(_sl).html() }},
          }).done(function() {
            console.log("Update Complete");
            _this.removeClass('loading').addClass('t4_done');
            $('#ld_cl_bar').trigger( "ld_bar_end" );
            setTimeout(function(){ _this.removeClass('t4_done'); }, 1000);
          }); 
          
          // fetch(url_editor + '/assets.json', {
          //     "body": {asset: {"key": key,"value":html }},
          //     "method": "PUT"
          // }).then((response)=>{ 
          //   if(response.ok){ 
          //   return response.json()
          //   } throw ""
          // }).then((response)=>{ 
          //   console.log(response);
          //   console.log("Update Complete");
          // _this.removeClass('loading').addClass('t4_done');
          // $('#ld_cl_bar').trigger( "ld_bar_end" );
          // setTimeout(function(){ _this.removeClass('t4_done'); }, 1000);

          // }).catch((e)=>{ 
          //   _this.removeClass('loading').addClass('t4_done');
          //   $('#ld_cl_bar').trigger( "ld_bar_end" );
          //   console.error(e);
          // });
     });

    jdocument.on('click', '.dcp_cd_btn', function(e) {
        var _this = $(this),
        html = _this.siblings('.dcp_cd_ip')[0];
        // console.log(html);
        // console.log(html.value);
        html.select();
        html.setSelectionRange(0, 99999)
        document.execCommand("copy");
        _this.text('Copied Shortcode');
    });

    // $('#enable_tag').data('href');
    // $( window.parent.document).find('.te-preview').append('asda');
    // open-import
    var $win_parent = $( window.parent.document);

    jdocument.on('click', '#enable_tag', function(e) {
      
      if ($('.t4-import').length > 0 ) {
          body.addClass('open-import');
      } else {
        var _this = $(this);
        _this.addClass('up_loading');
        // $.ajax({
        //    beforeSend: function () {
        //       _this.addClass('up_loading');
        //    },
        //    url: _this.data('href'),
        //    success: function (data) {
        //      body.append(data).addClass('open-import');
        //      _this.removeClass('up_loading');
        //    },
        //    error: function (data) {
        //      console.log('error');
        //      _this.removeClass('up_loading');
        //    },
        //    complete: function () {
        //       _this.removeClass('up_loading');
        //    }
        // });
        fetch(_this.data('href'))
        .then(response => response.text())
        .then(data => {
          //console.log('Success:', data);
          body.append(data).addClass('open-import');
          _this.removeClass('up_loading');
        })
        .catch((error) => {
          _this.removeClass('up_loading');
          console.error('Error:', error);
        });
      }

    });

    // var packeryBlock = {
    //   select: function($parentSection){
    //     var item = $parentSection.find('.cat_style_masonry'),packery = item.data('packery');
    //     console.log(item)
    //     item.packery({itemSelector: '.nt-item-cat',gutter: 0 });
    //     // console.log('slideIndex: '+parseInt(slideIndex));
    //     // slide.trigger('to.owl.carousel',parseInt(slideIndex));
    //     // if ($parentSection.data('autoplay') == "true") {
    //     //     slide.trigger('stop.owl.carousel');
    //     // }
    //   },
    //   deselect: function($parentSection){
    //     //item.packery({itemSelector: '.nt-item-cat',gutter: 0 });
    //     // if ($parentSection.data('autoplay') == "true") {
    //     //    var slide = $parentSection.find('.owl-carousel');
    //     //     slide.trigger('play.owl.carousel');
    //     // }
    //   }
    // }

    //find iframe
    
    // find button inside iframe
    // parent$ = window.parent.$,
    var parent$ = $,
        btnSave = parent$('[data-role="save"]'),
        t4_style = $('#t4_style_update_css'),
        unck = true,
        unsave = false;
    
    //trigger button click
    // button.trigger("click");
    // console.log('button save ');
    // console.log(btnSave);
    // btnSave.click(function(e){ 
    //     //console.log('save Click');
    //     if ( !body.hasClass('template-index') ) return;
    //     if(unck) {
    //       //sessionStorage.setItem('savecssntt4', 'true');
    //       Cookies.set("savecssntt4", "true", {expires: 7,path: "/" })
    //     }
    //     t4_style.trigger('click');
    // });
    
    // if(unck) { 
    //   unsave = Cookies.get("savecssntt4");
    // }
    // console.log(unsave);
    // if (unsave == 'true') {
    //   t4_style.trigger('click');
    // }

    // jdocument.on('click', '[data-role="save"]', function(e) {
    //   console.log('jdocument save Click');
    // });

                  // if(bl) {
                  //   sessionStorage.setItem('qv'+ntid, dt)
                  // }
    
    // body.on('click', '#t4_style_update_css', function(e) {
    //     var _this = $(this);
    //     _this.addClass('up_loading');
    //     // update google font
    //     if ($('#nt_ft_ggcss').length > 0 ) {
    //       var value = $('#nt_ft_ggcss').html().replace('<!-- ','').replace(' -->','');
    //       parent$.ajax({
    //         url:  url_editor + '/assets.json',
    //         type: 'PUT',
    //         data: {asset: {"key": 'snippets/gg_fnt.liquid',"value":value }},
    //       }).done(function() {
    //         console.log("Updated google css");
    //       });
    //     }

    //     // update color css editor;

    //     // var html = $('#cl_css_jsnt').html();
    //     // window.parent.$ && window.parent.$.ajax({
    //     //   url:  url_editor + '/assets.json',
    //     //   type: 'PUT',
    //     //   data: {asset: {"key": 'assets/sett_se.css',"value":html }},
    //     // }).done(function() {
    //     //   console.log("Update Complete");
    //     // }); 
    //     // var res = 1;
    //     // if(sp_nt_storage) {res = sessionStorage.getItem('secssnt') || 0}
    //     // if (res == 0) {
    //     //   sessionStorage.setItem('secssnt', 1);
    //     //   return;
    //     // } 
    //     // update style css editor;
    //     if ( !body.hasClass('template-index') ) return;
    //     var css_txt='';
    //     $('[data-shopify]').each(function( index ) {
    //       //console.log( index + ": " + $( this ).text() );
    //       css_txt += $( this ).text();
    //     });
    //     var aa = css_txt.replace(/\/\*[^*]*\*+([^\/][^*]*\*+)*\//mg);
    //     var bb = aa.replace(/undefined/g, '');
    //     //console.log(bb);
    //     //console.log(css_txt);
        
    //     parent$.ajax({
    //       url:  url_editor + '/assets.json',
    //       type: 'PUT',
    //       data: {asset: {"key": 'assets/sett_se.css',"value":bb }},
    //     }).done(function() {
    //       console.log("Updated style css editor");
    //       //if(unck) {Cookies.set("savecssntt4", "false", {expires: 7,path: "/" })}
    //       _this.removeClass('up_loading');
    //       alet_css_t4.addClass('active');
    //       setTimeout(function(){ alet_css_t4.removeClass('active'); }, 1000);
    //     });

    //     fetch("https://minifier.the4.co/css", {
    //         "headers": {
    //           "accept": "*/*",
    //           "cache-control": "no-cache",
    //           "content-type": "application/json",
    //           "x-requested-with": "XMLHttpRequest"
    //         },
    //         "body":  JSON.stringify({ code: css_txt}),
    //         "method": "POST",
    //         "mode": "cors"
    //     }).then((response)=>{ 
    //       if(response.ok){ 
    //       return response.json()
    //       } throw ""
    //     }).then((response)=>{ 
    //       //console.log(response);
    //       if (response == "" || response.status != "success") return;
          
    //       parent$.ajax({
    //         url:  url_editor + '/assets.json',
    //         type: 'PUT',
    //         data: {asset: {"key": 'assets/sett_se.css',"value":response.code }},
    //       }).done(function() {
    //         console.log("Updated min style css editor");
    //         //if(unck) {Cookies.set("savecssntt4", "false", {expires: 7,path: "/" })}
    //          _this.removeClass('up_loading');
    //       });
          
    //     }).catch((e)=>{ 
    //        _this.removeClass('up_loading');
    //       console.error(e)
    //     });
    // });
    // end click update
    $('.t4_tools_btns').addClass('on_show');

    // purchare code
      // check purchase code
      var purchase_codet4 = $(ThemePuT4);
      if (ThemeIdLoT4 == 'true' || ThemeIdT4 == 'true') {
         purchase_codet4.remove();
      } else {
         $(ThemePuT4).removeClass('hide hidden');
         var ipt_codet4 = $("#ipt_codet4"),
           res_codet4 = $('#res_codet4'),
           shop_email = purchase_codet4.attr('data-email'),
           val_codet4 = ipt_codet4.val();

         // if ((purchase_codet4.is(":hidden") || purchase_codet4.length == 0) && Shopify.theme.role != 'demo') {
         //     //console.log('hidden');
         //     //window.parent.$ && window.parent.$
         //     parent$.ajax({
         //       type: "PUT",
         //      url: '/admin/api/2020-10/themes/'+sp_theme_id+'.json',
         //       dataType: 'json',
         //       data: {
         //         "theme": {
         //           "id": sp_theme_id,"role": "demo"
         //         }
         //       },
         //       success: function(data) {
         //         top.window.location.reload();
         //         //console.log(data);
         //       }
         //     });
         // }
         if ((purchase_codet4.is(":hidden") || purchase_codet4.length == 0)) {
            body.append('<section id="purchase_codet4" style="display:flex!important;"><h2 id="heading_codet4">Please activate to use theme</h2></section>');
           if (Shopify.theme.role != 'demo') {
               //console.log('hidden');
               //window.parent.$ && window.parent.$
               $.ajax({
                  type: "PUT",
                  url: '/admin/api/2020-10/themes/'+sp_theme_id+'.json',
                  headers: {
                      "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                      "x-csrf-token": csrf_token
                  },
                  dataType: 'json',
                  data: {
                   "theme": {
                     "id": sp_theme_id,"role": "demo"
                   }
                  },
                  success: function(data) {
                   top.window.location.reload();
                   //console.log(data);
                  }
               });
           }
         }
         // purchase_codet4.removeClass('hide_opcode');
         $("#btn_codet4").on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            var _this = $(this),
                curent_vlCodet4 = ipt_codet4.val();

            if ( curent_vlCodet4 == val_codet4 ) {
              if (ipt_codet4.hasClass('t4Warning')) {
                ipt_codet4.removeClass('shaket4code').addClass('t4Warning2');
                setTimeout(function(){ ipt_codet4.addClass('shaket4code'); }, 100);
              } else {
                ipt_codet4.addClass('t4Warning shaket4code');
              }
            } else {
             val_codet4 = curent_vlCodet4;
             ipt_codet4.attr('class','');
             _this.addClass('loading');
              var domain = window.location.hostname;
              var mix = ['4','t','h','e','p','l','i','c','o','/','.',':','n','s'];
              var mix_domain = mix[2]+mix[1]+mix[1]+mix[4]+mix[13]+mix[11]+mix[9]+mix[9]+mix[5]+mix[6]+mix[7]+mix[10]+mix[1]+mix[2]+mix[3]+mix[0]+mix[10]+mix[7]+mix[8]+mix[9]+mix[5]+mix[6]+mix[7]+mix[3]+mix[12]+mix[13]+mix[3]+mix[9]+mix[7]+mix[2]+mix[3]+mix[7]+'k';
              var data = {
                  "shopify_domain":domain,
                  "email":shop_email,
                  "theme":ThemeNameT4,
                  "purchase_code": curent_vlCodet4
              };
              
              fetch(mix_domain, {
                  "headers": {
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "x-requested-with": "XMLHttpRequest"
                  },
                  "body": btoa (encodeURIComponent(JSON.stringify(data))) ,
                  "method": "POST",
                  "mode": "cors"
              }).then((response)=>{ 
                if(response.ok){ 
                return response.json()
                } throw ""
              }).then((response)=>{ 
                //console.log(response);
                if ( response.status == 1) {
                  res_codet4.html("ACTIVATION SUCCESSFULLY. Thanks for buying my theme!").slideDown(250);
                  localStorage.setItem(ThemeNameT42, "true");
                  //purchase_codet4.remove();
                  _this.removeClass('loading');
                   setTimeout(function(){ 

                    purchase_codet4.remove(); 

                   }, 1350);

                  $.ajax({
                    type: "GET",
                    url: "/admin/themes",
                    success: function (data){
                      csrf_token = data.split('name="csrf-token"')[1].split("/>")[0].split('"')[1];
                      $.ajax({
                        type: "POST",
                        url: "/admin/api/2020-10/metafields.json",
                        headers: {
                          "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                          "x-csrf-token": csrf_token
                        },
                        data : {
                          metafield: {
                            namespace: 't4pcc',
                            description: 'the4_purchase_code',
                            key : ThemeNameT4,
                            value: 'true',
                            value_type: 'string'
                          }
                        }
                      }).done(function() {
                         purchase_codet4.remove();
                         _this.removeClass('loading');
                         //console.log("success purchase");
                         //top.window.location.reload();
                      }).fail(function() {
                         _this.removeClass('loading');
                      });
                    }
                  });
                } else {
                   _this.removeClass('loading');
                  if (response.message.length == 58) {
                   res_codet4.html("That license key doesn't appear to be valid. Please check your purchase code again!<br> Please email <a class='cg' href='mailto:the4studio.net@gmail.com' target='_blank'><span>the4studio.net@gmail.com</span></a> if you have any question.").slideDown(250);
                  } else {
                   try {
                      var mess = response.message.split('active domain `')[1].split('`. ')[0];
                    }
                    catch(err) {
                      var mess = response.message;
                    }
                   //var mess = response.message.split('active domain `')[1].split('`. ')[0];
                   res_codet4.html("That license key has been invalidated, due to being active domain "+mess+".<br> Please email <a class='cg' href='mailto:the4studio.net@gmail.com' target='_blank'><span>the4studio.net@gmail.com</span></a> if you have any question.").slideDown(250);
                  }
                }

              }).catch((e)=>{ 
                 _this.removeClass('loading');
                console.error(e)
              });


            }
         });
      }
      // end check purchase code

      // create page metafiled
      // parent$.ajax({
      //   url: '/admin/api/2020-10/pages.json',
      //   type: 'POST',
      //   data: {
      //     "page": {
      //       "title": "Edit additional information",
      //       "handle": "edit-additional-information"
      //     }
      //   }
      // })
      // .done(function() {
      //   console.log("success page metafield");
      // })
      // .fail(function() {
      //   console.log("error");
      // })
      // .always(function() {
      //   console.log("complete");
      // });
})( jQuery_T4NT );

jQuery_T4NT(window).resize(function(){
  //console.log('window resize');
  geckoShopify.footerCollapse();
});