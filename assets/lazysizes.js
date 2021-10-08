// https://raw.githubusercontent.com/aFarkas/lazysizes/gh-pages/CHANGELOG.md
window.lazySizesConfig = window.lazySizesConfig || {};
window.lazySizesConfig.loadMode = 1;
window.lazySizesConfig.loadHidden = false;

// https://afarkas.github.io/lazysizes/lazysizes.min.js
// https://afarkas.github.io/lazysizes/plugins/bgset/ls.bgset.min.js
// ls.respimg.min.js suport run lazysizes IE

/*! ls.respimg.min.js - v5.2.0-beta1 */
//if(!window.HTMLPictureElement || !('sizes' in document.createElement('img'))) {
  !function(a,b){if(a){var c=function(){b(a.lazySizes),a.removeEventListener("lazyunveilread",c,!0)};b=b.bind(null,a,a.document),"object"==typeof module&&module.exports?b(require("lazysizes")):a.lazySizes?c():a.addEventListener("lazyunveilread",c,!0)}}("undefined"!=typeof window?window:0,function(a,b,c){"use strict";var d,e=c.cfg,f=b.createElement("img"),g="sizes"in f&&"srcset"in f,h=/\s+\d+h/g,i=function(){var a=/\s+(\d+)(w|h)\s+(\d+)(w|h)/,d=Array.prototype.forEach;return function(){var f=b.createElement("img"),g=function(b){var c,d,f=b.getAttribute(e.srcsetAttr);f&&(d=f.match(a))&&(c="w"==d[2]?d[1]/d[3]:d[3]/d[1],c&&b.setAttribute("data-aspectratio",c),b.setAttribute(e.srcsetAttr,f.replace(h,"")))},i=function(a){if(a.detail.instance==c){var b=a.target.parentNode;b&&"PICTURE"==b.nodeName&&d.call(b.getElementsByTagName("source"),g),g(a.target)}},j=function(){f.currentSrc&&b.removeEventListener("lazybeforeunveil",i)};b.addEventListener("lazybeforeunveil",i),f.onload=j,f.onerror=j,f.srcset="data:,a 1w 1h",f.complete&&j()}}();if(e.supportsType||(e.supportsType=function(a){return!a}),a.HTMLPictureElement&&g)return void(!c.hasHDescriptorFix&&b.msElementsFromPoint&&(c.hasHDescriptorFix=!0,i()));a.picturefill||e.pf||(e.pf=function(b){var c,e;if(!a.picturefill)for(c=0,e=b.elements.length;c<e;c++)d(b.elements[c])},d=function(){var f=function(a,b){return a.w-b.w},i=/^\s*\d+\.*\d*px\s*$/,j=function(a){var b,c,d=a.length,e=a[d-1],f=0;for(f;f<d;f++)if(e=a[f],e.d=e.w/a.w,e.d>=a.d){!e.cached&&(b=a[f-1])&&b.d>a.d-.13*Math.pow(a.d,2.2)&&(c=Math.pow(b.d-.6,1.6),b.cached&&(b.d+=.15*c),b.d+(e.d-a.d)*c>a.d&&(e=b));break}return e},k=function(){var a,b=/(([^,\s].[^\s]+)\s+(\d+)w)/g,c=/\s/,d=function(b,c,d,e){a.push({c:c,u:d,w:1*e})};return function(e){return a=[],e=e.trim(),e.replace(h,"").replace(b,d),a.length||!e||c.test(e)||a.push({c:e,u:e,w:99}),a}}(),l=function(){l.init||(l.init=!0,addEventListener("resize",function(){var a,c=b.getElementsByClassName("lazymatchmedia"),e=function(){var a,b;for(a=0,b=c.length;a<b;a++)d(c[a])};return function(){clearTimeout(a),a=setTimeout(e,66)}}()))},m=function(b,d){var f,g=b.getAttribute("srcset")||b.getAttribute(e.srcsetAttr);!g&&d&&(g=b._lazypolyfill?b._lazypolyfill._set:b.getAttribute(e.srcAttr)||b.getAttribute("src")),b._lazypolyfill&&b._lazypolyfill._set==g||(f=k(g||""),d&&b.parentNode&&(f.isPicture="PICTURE"==b.parentNode.nodeName.toUpperCase(),f.isPicture&&a.matchMedia&&(c.aC(b,"lazymatchmedia"),l())),f._set=g,Object.defineProperty(b,"_lazypolyfill",{value:f,writable:!0}))},n=function(b){var d=a.devicePixelRatio||1,e=c.getX&&c.getX(b);return Math.min(e||d,2.5,d)},o=function(b){return a.matchMedia?(o=function(a){return!a||(matchMedia(a)||{}).matches})(b):!b},p=function(a){var b,d,g,h,k,l,p;if(h=a,m(h,!0),k=h._lazypolyfill,k.isPicture)for(d=0,b=a.parentNode.getElementsByTagName("source"),g=b.length;d<g;d++)if(e.supportsType(b[d].getAttribute("type"),a)&&o(b[d].getAttribute("media"))){h=b[d],m(h),k=h._lazypolyfill;break}return k.length>1?(p=h.getAttribute("sizes")||"",p=i.test(p)&&parseInt(p,10)||c.gW(a,a.parentNode),k.d=n(a),!k.src||!k.w||k.w<p?(k.w=p,l=j(k.sort(f)),k.src=l):l=k.src):l=k[0],l},q=function(a){if(!g||!a.parentNode||"PICTURE"==a.parentNode.nodeName.toUpperCase()){var b=p(a);b&&b.u&&a._lazypolyfill.cur!=b.u&&(a._lazypolyfill.cur=b.u,b.cached=!0,a.setAttribute(e.srcAttr,b.u),a.setAttribute("src",b.u))}};return q.parse=k,q}(),e.loadedClass&&e.loadingClass&&function(){var a=[];['img[sizes$="px"][srcset].',"picture > img:not([srcset])."].forEach(function(b){a.push(b+e.loadedClass),a.push(b+e.loadingClass)}),e.pf({elements:b.querySelectorAll(a.join(", "))})}())});
//}
/*! ls.unveilhooks.min.js - v5.2.0-beta1 */
/*
This plugin extends lazySizes to lazyLoad:
background images, videos/posters and scripts

Background-Image:
For background images, use data-bg attribute:
<div class="lazyload" data-bg="bg-img.jpg"></div>

 Video:
 For video/audio use data-poster and preload="none":
 <video class="lazyload" data-poster="poster.jpg" preload="none">
 <!-- sources -->
 </video>

 Scripts:
 For scripts use data-script:
 <div class="lazyload" data-script="module-name.js"></div>


 Script modules using require:
 For modules using require use data-require:
 <div class="lazyload" data-require="module-name"></div>
*/

!function(a,b){var c=function(){b(a.lazySizes),a.removeEventListener("lazyunveilread",c,!0)};b=b.bind(null,a,a.document),"object"==typeof module&&module.exports?b(require("lazysizes")):a.lazySizes?c():a.addEventListener("lazyunveilread",c,!0)}(window,function(a,b,c){"use strict";function d(a,c){if(!g[a]){var d=b.createElement(c?"link":"script"),e=b.getElementsByTagName("script")[0];c?(d.rel="stylesheet",d.href=a):d.src=a,g[a]=!0,g[d.src||d.href]=!0,e.parentNode.insertBefore(d,e)}}var e,f,g={};b.addEventListener&&(f=/\(|\)|\s|'/,e=function(a,c){var d=b.createElement("img");d.onload=function(){d.onload=null,d.onerror=null,d=null,c()},d.onerror=d.onload,d.src=a,d&&d.complete&&d.onload&&d.onload()},addEventListener("lazybeforeunveil",function(a){if(a.detail.instance==c){var b,g,h,i;if(!a.defaultPrevented){var j=a.target;if("none"==j.preload&&(j.preload="auto"),null!=j.getAttribute("data-autoplay"))if(j.getAttribute("data-expand")&&!j.autoplay)try{j.play()}catch(a){}else requestAnimationFrame(function(){j.setAttribute("data-expand","-10"),c.aC(j,c.cfg.lazyClass)});b=j.getAttribute("data-link"),b&&d(b,!0),b=j.getAttribute("data-script"),b&&d(b),b=j.getAttribute("data-require"),b&&(c.cfg.requireJs?c.cfg.requireJs([b]):d(b)),h=j.getAttribute("data-bg"),h&&(a.detail.firesLoad=!0,g=function(){j.style.backgroundImage="url("+(f.test(h)?JSON.stringify(h):h)+")",a.detail.firesLoad=!1,c.fire(j,"_lazyloaded",{},!0,!0)},e(h,g)),i=j.getAttribute("data-poster"),i&&(a.detail.firesLoad=!0,g=function(){j.poster=i,a.detail.firesLoad=!1,c.fire(j,"_lazyloaded",{},!0,!0)},e(i,g))}}},!1))});

/*! ls.bgset.min.js - v5.2.0-beta1 */
(function(window, factory) {
	var globalInstall = function(){
		factory(window.lazySizes);
		window.removeEventListener('lazyunveilread', globalInstall, true);
	};

	factory = factory.bind(null, window, window.document);

	if(typeof module == 'object' && module.exports){
		factory(require('lazysizes'));
	} else if(window.lazySizes) {
		globalInstall();
	} else {
		window.addEventListener('lazyunveilread', globalInstall, true);
	}
}(window, function(window, document, lazySizes) {
	'use strict';
	if(!window.addEventListener){return;}

	var lazySizesCfg = lazySizes.cfg;
	var regWhite = /\s+/g;
	var regSplitSet = /\s*\|\s+|\s+\|\s*/g;
	var regSource = /^(.+?)(?:\s+\[\s*(.+?)\s*\])(?:\s+\[\s*(.+?)\s*\])?$/;
	var regType = /^\s*\(*\s*type\s*:\s*(.+?)\s*\)*\s*$/;
	var regBgUrlEscape = /\(|\)|'/;
	var allowedBackgroundSize = {contain: 1, cover: 1};
	var proxyWidth = function(elem){
		var width = lazySizes.gW(elem, elem.parentNode);

		if(!elem._lazysizesWidth || width > elem._lazysizesWidth){
			elem._lazysizesWidth = width;
		}
		return elem._lazysizesWidth;
	};
	var getBgSize = function(elem){
		var bgSize;

		bgSize = (getComputedStyle(elem) || {getPropertyValue: function(){}}).getPropertyValue('background-size');

		if(!allowedBackgroundSize[bgSize] && allowedBackgroundSize[elem.style.backgroundSize]){
			bgSize = elem.style.backgroundSize;
		}

		return bgSize;
	};
	var setTypeOrMedia = function(source, match){
		if(match){
			var typeMatch = match.match(regType);
			if(typeMatch && typeMatch[1]){
				source.setAttribute('type', typeMatch[1]);
			} else {
				source.setAttribute('media', lazySizesCfg.customMedia[match] || match);
			}
		}
	};
	var createPicture = function(sets, elem, img){
		var picture = document.createElement('picture');
		var sizes = elem.getAttribute(lazySizesCfg.sizesAttr);
		var ratio = elem.getAttribute('data-ratio');
		var optimumx = elem.getAttribute('data-optimumx');

		if(elem._lazybgset && elem._lazybgset.parentNode == elem){
			elem.removeChild(elem._lazybgset);
		}

		Object.defineProperty(img, '_lazybgset', {
			value: elem,
			writable: true
		});
		Object.defineProperty(elem, '_lazybgset', {
			value: picture,
			writable: true
		});

		sets = sets.replace(regWhite, ' ').split(regSplitSet);

		picture.style.display = 'none';
		img.className = lazySizesCfg.lazyClass;

		if(sets.length == 1 && !sizes){
			sizes = 'auto';
		}

		sets.forEach(function(set){
			var match;
			var source = document.createElement('source');
            
			if(sizes && sizes != 'auto'){
				source.setAttribute('sizes', sizes);
			}

			if((match = set.match(regSource))){
				source.setAttribute(lazySizesCfg.srcsetAttr, match[1]);

				setTypeOrMedia(source, match[2]);
				setTypeOrMedia(source, match[3]);
			} else {
				source.setAttribute(lazySizesCfg.srcsetAttr, set);
			}

			picture.appendChild(source);
		});

		if(sizes){
			img.setAttribute(lazySizesCfg.sizesAttr, sizes);
			elem.removeAttribute(lazySizesCfg.sizesAttr);
			elem.removeAttribute('sizes');
		}
		if(optimumx){
			img.setAttribute('data-optimumx', optimumx);
		}
		if(ratio) {
			img.setAttribute('data-ratio', ratio);
		}

		picture.appendChild(img);

		elem.appendChild(picture);
	};

	var proxyLoad = function(e){
		if(!e.target._lazybgset){return;}

		var image = e.target;
		var elem = image._lazybgset;
		var bg = image.currentSrc || image.src;


		if(bg){
			var event = lazySizes.fire(elem, 'bgsetproxy', {
				src: bg,
				useSrc: regBgUrlEscape.test(bg) ? JSON.stringify(bg) : bg,
			});

			if(!event.defaultPrevented){
				elem.style.backgroundImage = 'url(' + event.detail.useSrc + ')';
			}
		}

		if(image._lazybgsetLoading){
			lazySizes.fire(elem, '_lazyloaded', {}, false, true);
			delete image._lazybgsetLoading;
		}
	};

	addEventListener('lazybeforeunveil', function(e){
		var set, image, elem;

		if(e.defaultPrevented || !(set = e.target.getAttribute('data-bgset'))){return;}

		elem = e.target;
		image = document.createElement('img');

		image.alt = '';

		image._lazybgsetLoading = true;
		e.detail.firesLoad = true;
        
        // start nathan the4 optimization
        // console.log(set);
        if (set.indexOf('_1x1.') > 0) {
	        var getbg = set;set=''
	        var widths1 = [180, 360, 540, 720, 900, 1080];

	        if (e.target.hasAttribute("data-la")) {
	        	var arrWidths = JSON.parse(e.target.getAttribute('data-widths'));
	        } else if (e.target.hasAttribute("data-wiis")) {
	        	var arrWidths = [180, 360, 540, 720, 900, 1080];
	        } else {
	        	var arrWidths = [180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 1950, 2100, 2260, 2450, 2700, 3000, 3350, 3750, 4100];
	        }
			var icl,lcl = arrWidths.length;
			for (icl = 0; icl < lcl; icl++) {
			  //set += getbg.replace("1x1", value+'x') +' '+ value + "w, ";
			  set += getbg.replace("_1x1.", '_'+arrWidths[icl]+'x.') +' '+ arrWidths[icl] + 'w '+Math.round(arrWidths[icl] * e.target.getAttribute('data-ratio'))+'h, ';
			}
			//console.log(set.replace(/\  /g,''))
			set = set.slice(0, -2);
	        //e.target.setAttribute('data-bgset', set);
        }
       // end nathan the4 optimization

		createPicture(set, elem, image);

		setTimeout(function(){
			lazySizes.loader.unveil(image);

			lazySizes.rAF(function(){
				lazySizes.fire(image, '_lazyloaded', {}, true, true);
				if(image.complete) {
					proxyLoad({target: image});
				}
			});
		});

	});

	document.addEventListener('load', proxyLoad, true);

	window.addEventListener('lazybeforesizes', function(e){
		if(e.detail.instance != lazySizes){return;}
		if(e.target._lazybgset && e.detail.dataAttr){
			var elem = e.target._lazybgset;
			//console.log(elem.dataset.parentFit);
			// nathan fix
			var bgSize = elem.dataset.parentFit || getBgSize(elem);
			//console.log(bgSize)
			//var bgSize = getBgSize(elem);

			if(allowedBackgroundSize[bgSize]){
				e.target._lazysizesParentFit = bgSize;

				lazySizes.rAF(function(){
					e.target.setAttribute('data-parent-fit', bgSize);
					if(e.target._lazysizesParentFit){
						delete e.target._lazysizesParentFit;
					}
				});
			}
		}
	}, true);

	document.documentElement.addEventListener('lazybeforesizes', function(e){
		if(e.defaultPrevented || !e.target._lazybgset || e.detail.instance != lazySizes){return;}
		e.detail.width = proxyWidth(e.target._lazybgset);
	});
}));

/*! ls.include.min.js - v5.2.0-beta1 */
/*
 This plugin extends lazySizes to lazyLoad and/or conditionally load content
 */

(function(window, factory) {
	var globalInstall = function(){
		factory(window.lazySizes);
		window.removeEventListener('lazyunveilread', globalInstall, true);
	};

	factory = factory.bind(null, window, window.document);

	if(typeof module == 'object' && module.exports){
		factory(require('lazysizes'));
	} else if (typeof define == 'function' && define.amd) {
		define(['lazysizes'], factory);
	} else if(window.lazySizes) {
		globalInstall();
	} else {
		window.addEventListener('lazyunveilread', globalInstall, true);
	}
}(window, function(window, document, lazySizes) {
	/*jshint eqnull:true */
	'use strict';

	if(!document.getElementsByClassName) {
		return;
	}
	var config, includeConfig, baseContentElement, basePseudos;
	var regSplitCan = /\s*,+\s+/;
	var cssComplete = {complete: 1, loaded: 1};
	var uniqueUrls = {};
	var regWhite = /\s+/;
	var regTypes = /^(amd|css|module)\:(.+)/i;
	var regUrlCan = /(.+)\s+(\(\s*(.+)\s*\))/;
	var regCleanPseudos = /['"]/g;
	var docElem = document.documentElement;
	var conditionalIncludes = document.getElementsByClassName('lazyconditionalinclude');

	var getStyles = function (element, pseudo) {
		var view = element.ownerDocument.defaultView;

		if (!view.opener) {
			view = window;
		}

		return view.getComputedStyle(element, pseudo || null) || {getPropertyValue: function(){}, isNull: true};
	};

	var queue = (function(){
		var lowTreshold = 2;
		var highTreshold = 3;
		var queueThreshold = lowTreshold;
		var inProgress = 0;
		var priosInProgress = 0;
		var queue = [];
		var resetQueue = (function(){
			var timer;
			var reset = function(){
		      // nathan_fix_queue
              //console.log(queue)
              //console.log(queue.length)
// fix code 1:
				// if(queue.length < 1){
				//    inProgress = 0;
				//    //queue.d();
    //             } else {
    //                inProgress = 0;
    //                queue.d();
    //             }
// fix code 2:
				if(queue.length){
					inProgress = 0;
					//queue.d();
				}
// default code
// 				if(queue.length){
// 					inProgress = 0;
// 					queue.d();
// 				}
			};

			return function(){
				clearTimeout(timer);
				timer = setTimeout(reset, 999);
			};
		})();

		return {
			q: function(element){
				var isPrio = element.getAttribute('data-lazyqueue') == null;
				if(isPrio){
					priosInProgress++;
					queueThreshold = highTreshold;
				}

				if(inProgress > queueThreshold){
					queue[isPrio ? 'unshift' : 'push'](element);
				} else if(findLoadCandidate(element)) {
					inProgress++;
					resetQueue();
				}
			},
			d: function(){
				if(inProgress){
					inProgress--;
				}
				if(priosInProgress > 0){
					priosInProgress--;

					if(!priosInProgress){
						queueThreshold = lowTreshold;
					}
				}

				if(inProgress > queueThreshold){
					return;
				}

				while(queue.length){
					if(findLoadCandidate(queue.shift())){
						inProgress++;
						break;
					}
				}
				resetQueue();
			}
		};
	})();
	var refreshIncludes = (function(){
		var timer;
		var run = function(){
			var i = 0;
			var len = conditionalIncludes.length;
			for(; i < len; i++){
				if(!lazySizes.hC(conditionalIncludes[i], config.lazyClass) && findCandidate(conditionalIncludes[i])){
					lazySizes.aC(conditionalIncludes[i], config.lazyClass);
				}
			}
		};
		return function(e){
			clearTimeout(timer);
			basePseudos = null;
			timer = setTimeout(run, e.type == 'resize' ? 31 : 0);
		};
	})();

	config = lazySizes && lazySizes.cfg;

	if(!config.include){
		config.include = {};
	}

	includeConfig = config.include;

	if(!includeConfig.contentElement){
		includeConfig.contentElement = 'html';
	}

	if(!includeConfig.conditions){
		includeConfig.conditions = {};
	}

	if(!includeConfig.map){
		includeConfig.map = {};
	}

	function addUrl(url){
		/*jshint validthis:true */
		var match;
		if((match = url.match(regTypes))){
			this.urls[match[1]] = includeConfig.map[match[2]] || match[2];
		} else {
			this.urls.include = includeConfig.map[url] || url;
		}
	}

	function parseCandidate(input){
		var output, map, url;
		input = input.trim();

		input = includeConfig.map[input] || input;

		map = input.match(regUrlCan);

		if(map){
			url = map[1];
			output = {
				condition: config.include.conditions[map[3]] || config.customMedia[map[3]] || map[2] || null,
				name: map[3]
			};
		} else {
			url = input;
			output = {
				condition: null,
				name: ''
			};
		}

		output.urls = {};

		(includeConfig.map[url] || url).split(regWhite).forEach(addUrl, output);

		if(!output.urls.include && output.urls.amd){
			/*jshint validthis:true */
			this.saved = true;
			output.initial = this;
		}

		return output;
	}

	function getIncludeData(elem){
		var len;
		var includeStr = (elem.getAttribute('data-include') || '');
		var includeData = elem.lazyInclude;
		var initialContent;
		if(!includeData || includeData.str != includeStr || includeConfig.allowReload){
			initialContent = {saved: false, content: null};
			includeData = {
				str: includeStr,
				candidates: (includeConfig.map[includeStr] || includeStr).split(regSplitCan).map(parseCandidate, initialContent)
			};

			if(!(len = includeData.candidates.length) || includeData.candidates[len - 1].condition){
				initialContent.saved = true;

				includeData.candidates.push({
					urls: {},
					condition: null,
					name: 'initial',
					content: initialContent
				});
			} else if(initialContent.saved && includeData.candidates.length == 1){
				initialContent.saved = false;
			}

			includeData.initialContent = initialContent;
			if(initialContent.saved){
				initialContent.content = elem.innerHTML;
			}

			elem.lazyInclude = includeData;
			if(includeData.candidates.length > 1){
				lazySizes.aC(elem, 'lazyconditionalinclude');
			} else {
				lazySizes.rC(elem, 'lazyconditionalinclude');
			}
		}
		return includeData;
	}

	function matchesCondition(elem, candidate){
		var matches = !candidate.condition;

		if(candidate.condition){
			createPseudoCondition();
			if(basePseudos[candidate.name]){
				matches = true;
			} else if(window.matchMedia && typeof candidate.condition == 'string'){
				matches = (matchMedia(candidate.condition) || {}).matches;
			} else if(typeof candidate.condition == 'function'){
				matches = candidate.condition(elem, candidate);
			}
		}
		return matches;
	}


	function createPseudoCondition(){
		var cStyle;

		if(!basePseudos){

			if(!baseContentElement){
				baseContentElement = document.querySelector(includeConfig.contentElement);
			}

			if(baseContentElement){
				cStyle = (getStyles(baseContentElement, ':after').getPropertyValue('content') || 'none').replace(regCleanPseudos, '');

				basePseudos = {};

				if(cStyle){
					basePseudos[cStyle] = 1;
				}
				cStyle = (getStyles(baseContentElement, ':before').getPropertyValue('content') || 'none').replace(regCleanPseudos, '');
				if(cStyle){
					basePseudos[cStyle] = 1;
				}
			} else {
				basePseudos = {};
			}
		}

	}

	function findCandidate(elem){
		var i, candidate;
		var includeData = elem.lazyInclude;
		if(includeData && includeData.candidates){
			for(i = 0; i < includeData.candidates.length; i++){
				candidate = includeData.candidates[i];
				if(matchesCondition(elem, candidate)){
					break;
				}
			}
		}
		if(!candidate || candidate == includeData.current){
			candidate = null;
		}
		return candidate;
	}

	function loadInclude(detail, includeCallback){
		var request = new XMLHttpRequest();

		request.addEventListener('readystatechange', function () {
			var DONE = this.DONE || 4;
			if (this.readyState === DONE){

				includeCallback(request);
				request = null;
			}
		}, false);

		request.open.apply(request, detail.openArgs);
		request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
		if(detail.xhrModifier){
			detail.xhrModifier(request, detail.candidate);
		}
		request.send(detail.sendData);
	}

	function loadRequire(urls, callback){
		urls = urls.split('|,|');

		var last = urls.length - 1;

		if(lazySizes.cfg.requireJs){
			lazySizes.cfg.requireJs(urls, callback);
		} else {
			urls.forEach(function(url, index){
				loadStyleScript(url, index == last ? callback : null);
			});
		}
	}

	function loadSystemJs(url, callback){
		if(lazySizes.cfg.systemJs){
			lazySizes.cfg.systemJs(url, callback);
		} else {
			loadStyleScript(url, callback);
		}
	}

	function isStyleReady(link){
		var ready = false;
		var sheets = document.styleSheets;
		var href = link.href;

		for(var i = 0, length = sheets.length; i < length; i++){
			if(sheets[i].href == href){
				ready = true;
				break;
			}
		}


		return ready;
	}

	function loadStyleScript(url, isScript, cb){
		if(!uniqueUrls[url]){
			var elem = document.createElement(isScript === true ? 'script' : 'link');
			var insertElem = document.getElementsByTagName('script')[0];

			if(isScript){
				elem.src = url;
				elem.async = false;
			} else {
				elem.rel = 'stylesheet';
				elem.href = url;
			}

			uniqueUrls[url] = [];
			uniqueUrls[elem.href] = uniqueUrls[url];

			if(cb){
				var timer;
				var load = function(e){
					if(e.type == 'readystatechange' && !cssComplete[e.target.readyState]){return;}

					var cbs = uniqueUrls[url];

					elem.removeEventListener('load', load);
					elem.removeEventListener('error', load);
					elem.removeEventListener('readystatechange', load);
					elem.removeEventListener('loadcssdefined', load);

					if(timer){
						clearInterval(timer);
					}

					uniqueUrls[url] = true;
					uniqueUrls[elem.href] = true;

					while(cbs.length){
						cbs.shift()();
					}
				};

				uniqueUrls[elem.href][0] = cb;

				if(!isScript){
					timer = setInterval(function(){
						if(isStyleReady(elem)){
							load({});
						}
					}, 60);
				}

				elem.addEventListener('load', load);
				elem.addEventListener('error', load);
				elem.addEventListener('readystatechange', load);
				elem.addEventListener('loadcssdefined', load);

			}

			insertElem.parentNode.insertBefore(elem, insertElem);
		} else if(cb){
			if(uniqueUrls[url] === true){
				setTimeout(cb);
			} else {
				uniqueUrls[url].push(cb);
			}
		}
	}

	function loadStyles(urls, cb){
		urls = urls.split('|,|');

		var last = urls.length - 1;

		urls.forEach(function(url, index){
			loadStyleScript(url, false, index == last ? cb : null);
		});
	}

	function transformInclude(module){
		if(module && typeof module.lazytransform == 'function'){
			/*jshint validthis:true */
			module.lazytransform(this);
		}
	}

	function unloadModule(module){
		if(module && typeof module.lazyunload == 'function'){
			/*jshint validthis:true */
			module.lazyunload(this);
		}
	}

	function loadModule(module){
		if(module && typeof module.lazyload == 'function'){
			/*jshint validthis:true */
			module.lazyload(this);
		}
	}

	function loadCandidate(elem, candidate){
		var include, xhrObj, modules, waitCss, runInclude;
		var old = elem.lazyInclude.current || null;
		var detail = {
			candidate: candidate,
			openArgs: ['GET', candidate.urls.include, true],
			sendData: null,
			xhrModifier: null,
			content: candidate.content && candidate.content.content || candidate.content,
			oldCandidate: old
		};
		var event = lazySizes.fire(elem, 'lazyincludeload', detail);

		if(event.defaultPrevented){
			queue.d();
			return;
		}

		runInclude = function(){
			if(xhrObj && modules && !waitCss){
				include();
			}
		};

		include = function(){
			var event;
			var status = xhrObj.status;
			var content = xhrObj.content || xhrObj.responseText;
			var reset = !!(content == null && old && old.urls.include);
			var detail = {
				candidate: candidate,
				content: content,
				text: xhrObj.responseText || xhrObj.content,
				response: xhrObj.response,
				xml: xhrObj.responseXML,
				isSuccess: ('status' in xhrObj) ? status >= 200 && status < 300 || status === 304 : true,
				oldCandidate: old,
				insert: true,
				resetHTML: reset
			};
			var moduleObj = {target: elem, details: detail, detail: detail};

			candidate.modules = modules;

			if(old && old.modules){
				old.modules.forEach(unloadModule, moduleObj);
				old.modules = null;

				if(detail.resetHTML && detail.content == null && candidate.initial && candidate.initial.saved){
					detail.content = candidate.initial.content;
				}
			}


			modules.forEach(transformInclude, moduleObj);

			event = lazySizes.fire(elem, 'lazyincludeloaded', detail);

			if(detail.insert && detail.isSuccess && !event.defaultPrevented && detail.content != null && detail.content != elem.innerHTML){
				elem.innerHTML = detail.content;
			}

			queue.d();

			modules.forEach(loadModule, moduleObj);

			setTimeout(function(){
				lazySizes.fire(elem, 'lazyincluded', detail);
			});

			xhrObj = null;
			modules = null;
		};

		elem.lazyInclude.current = candidate;
		elem.setAttribute('data-currentinclude', candidate.name);

		if(candidate.urls.css){
			waitCss = true;
			loadStyles(candidate.urls.css, function () {
				waitCss = false;
				runInclude();
			});
		}
		if(detail.content == null && candidate.urls.include){
			loadInclude(detail, function(data){
				xhrObj = data;
				runInclude();
			});
		} else {
			xhrObj = detail;
		}

		if(candidate.urls.amd || candidate.urls.module){
			var loadRequireImportCB = function(){
				modules = Array.prototype.slice.call(arguments);
				runInclude();
			};

			if(candidate.urls.amd){
				loadRequire(candidate.urls.amd, loadRequireImportCB);
			} else {
				loadSystemJs(candidate.urls.module, loadRequireImportCB);
			}

		} else {
			modules = [];
		}

		runInclude();
	}

	function findLoadCandidate(elem){
		var candidate;
		var includeData = getIncludeData(elem);
		if(!includeData.candidates.length || !docElem.contains(elem) ){return;}
		candidate = findCandidate(elem);
		if(candidate){
			loadCandidate(elem, candidate);
		}
		return true;
	}

	function beforeUnveil(e){
		if(e.detail.instance != lazySizes || e.defaultPrevented || !e.target.getAttribute('data-include')){return;}
		queue.q(e.target);
		e.detail.firesLoad = true;
	}

	addEventListener('lazybeforeunveil', beforeUnveil, false);

	addEventListener('resize', refreshIncludes, false);
	addEventListener('lazyrefreshincludes', refreshIncludes, false);

}));

/*! ls.attrchange.min.js - v5.2.0-beta1 */
!function(a,b){if(a){var c=function(){b(a.lazySizes),a.removeEventListener("lazyunveilread",c,!0)};b=b.bind(null,a,a.document),"object"==typeof module&&module.exports?b(require("lazysizes")):a.lazySizes?c():a.addEventListener("lazyunveilread",c,!0)}}("undefined"!=typeof window?window:0,function(a,b,c){"use strict";var d=function(){var e,f,g,h,i=c.cfg,j={"data-bgset":1,"data-include":1,"data-poster":1,"data-bg":1,"data-script":1},k="(\\s|^)("+i.loadedClass,l=b.documentElement,m=function(a){c.rAF(function(){c.rC(a,i.loadedClass),i.unloadedClass&&c.rC(a,i.unloadedClass),c.aC(a,i.lazyClass),("none"==a.style.display||a.parentNode&&"none"==a.parentNode.style.display)&&setTimeout(function(){c.loader.unveil(a)},0)})},n=function(a){var b,c,d,e;for(b=0,c=a.length;b<c;b++)d=a[b],e=d.target,e.getAttribute(d.attributeName)&&("source"==e.localName&&e.parentNode&&(e=e.parentNode.querySelector("img")),e&&k.test(e.className)&&m(e))};i.unloadedClass&&(k+="|"+i.unloadedClass),k+="|"+i.loadingClass+")(\\s|$)",k=new RegExp(k),j[i.srcAttr]=1,j[i.srcsetAttr]=1,a.MutationObserver?(g=new MutationObserver(n),e=function(){h||(h=!0,g.observe(l,{subtree:!0,attributes:!0,attributeFilter:Object.keys(j)}))},f=function(){h&&(h=!1,g.disconnect())}):(l.addEventListener("DOMAttrModified",function(){var a,b=[],c=function(){n(b),b=[],a=!1};return function(d){h&&j[d.attrName]&&d.newValue&&(b.push({target:d.target,attributeName:d.attrName}),a||(setTimeout(c),a=!0))}}(),!0),e=function(){h=!0},f=function(){h=!1}),addEventListener("lazybeforeunveil",f,!0),addEventListener("lazybeforeunveil",e),addEventListener("lazybeforesizes",f,!0),addEventListener("lazybeforesizes",e),e(),removeEventListener("lazybeforeunveil",d)};addEventListener("lazybeforeunveil",d)});

/*! ls.parent-fit.min.js - v5.2.0-beta1 */
!function(a,b){if(a){var c=function(){b(a.lazySizes),a.removeEventListener("lazyunveilread",c,!0)};b=b.bind(null,a,a.document),"object"==typeof module&&module.exports?b(require("lazysizes")):a.lazySizes?c():a.addEventListener("lazyunveilread",c,!0)}}("undefined"!=typeof window?window:0,function(a,b,c){"use strict";if(a.addEventListener){var d=/\s+(\d+)(w|h)\s+(\d+)(w|h)/,e=/parent-fit["']*\s*:\s*["']*(contain|cover|width)/,f=/parent-container["']*\s*:\s*["']*(.+?)(?=(\s|$|,|'|"|;))/,g=/^picture$/i,h=c.cfg,i=function(a){return getComputedStyle(a,null)||{}},j={getParent:function(b,c){var d=b,e=b.parentNode;return c&&"prev"!=c||!e||!g.test(e.nodeName||"")||(e=e.parentNode),"self"!=c&&(d="prev"==c?b.previousElementSibling:c&&(e.closest||a.jQuery)?(e.closest?e.closest(c):jQuery(e).closest(c)[0])||e:e),d},getFit:function(a){var b,c,d=i(a),g=d.content||d.fontFamily,h={fit:a._lazysizesParentFit||a.getAttribute("data-parent-fit")};return!h.fit&&g&&(b=g.match(e))&&(h.fit=b[1]),h.fit?(c=a._lazysizesParentContainer||a.getAttribute("data-parent-container"),!c&&g&&(b=g.match(f))&&(c=b[1]),h.parent=j.getParent(a,c)):h.fit=d.objectFit,h},getImageRatio:function(b){var c,e,f,i,j,k,l,m=b.parentNode,n=m&&g.test(m.nodeName||"")?m.querySelectorAll("source, img"):[b];for(c=0;c<n.length;c++)if(b=n[c],e=b.getAttribute(h.srcsetAttr)||b.getAttribute("srcset")||b.getAttribute("data-pfsrcset")||b.getAttribute("data-risrcset")||"",f=b._lsMedia||b.getAttribute("media"),f=h.customMedia[b.getAttribute("data-media")||f]||f,e&&(!f||(a.matchMedia&&matchMedia(f)||{}).matches)){i=parseFloat(b.getAttribute("data-aspectratio")),i||(j=e.match(d),j?"w"==j[2]?(k=j[1],l=j[3]):(k=j[3],l=j[1]):(k=b.getAttribute("width"),l=b.getAttribute("height")),i=k/l);break}return i},calculateSize:function(a,b){var c,d,e,f,g=this.getFit(a),h=g.fit,i=g.parent;return"width"==h||("contain"==h||"cover"==h)&&(e=this.getImageRatio(a))?(i?b=i.clientWidth:i=a,f=b,"width"==h?f=b:(d=i.clientHeight,(c=b/d)&&("cover"==h&&c<e||"contain"==h&&c>e)&&(f=b*(e/c))),f):b}};c.parentFit=j,b.addEventListener("lazybeforesizes",function(a){if(!a.defaultPrevented&&a.detail.instance==c){var b=a.target;a.detail.width=j.calculateSize(b,a.detail.width)}})}});

/*! ls.rias.min.js - v5.2.0-beta1 */
!function(a,b){var c=function(){b(a.lazySizes),a.removeEventListener("lazyunveilread",c,!0)};b=b.bind(null,a,a.document),"object"==typeof module&&module.exports?b(require("lazysizes")):a.lazySizes?c():a.addEventListener("lazyunveilread",c,!0)}(window,function(a,b,c){"use strict";function d(b,c){var d,e,f,g,h=a.getComputedStyle(b);e=b.parentNode,g={isPicture:!(!e||!n.test(e.nodeName||""))},f=function(a,c){var d=b.getAttribute("data-"+a);if(!d){var e=h.getPropertyValue("--ls-"+a);e&&(d=e.trim())}if(d){if("true"==d)d=!0;else if("false"==d)d=!1;else if(m.test(d))d=parseFloat(d);else if("function"==typeof j[a])d=j[a](b,d);else if(r.test(d))try{d=JSON.parse(d)}catch(a){}g[a]=d}else a in j&&"function"!=typeof j[a]?g[a]=j[a]:c&&"function"==typeof j[a]&&(g[a]=j[a](b,d))};for(d in j)f(d);return c.replace(q,function(a,b){b in g||f(b,!0)}),g}function e(a,b){var c=[],d=function(a,c){return l[typeof b[c]]?b[c]:a};return c.srcset=[],b.absUrl&&(t.setAttribute("href",a),a=t.href),a=((b.prefix||"")+a+(b.postfix||"")).replace(q,d),b.widths.forEach(function(d){var e=b.widthmap[d]||d,f=b.aspectratio||b.ratio,g=!b.aspectratio&&j.traditionalRatio,h={u:a.replace(o,e).replace(p,f?g?Math.round(d*f):Math.round(d/f):""),w:d};c.push(h),c.srcset.push(h.c=h.u+" "+d+"w")}),c}function f(a,c,d){var f=0,g=0,h=d;if(a){if("container"===c.ratio){for(f=h.scrollWidth,g=h.scrollHeight;!(f&&g||h===b);)h=h.parentNode,f=h.scrollWidth,g=h.scrollHeight;f&&g&&(c.ratio=c.traditionalRatio?g/f:f/g)}a=e(a,c),a.isPicture=c.isPicture,v&&"IMG"==d.nodeName.toUpperCase()?d.removeAttribute(i.srcsetAttr):d.setAttribute(i.srcsetAttr,a.srcset.join(", ")),Object.defineProperty(d,"_lazyrias",{value:a,writable:!0})}}function g(a,b){var e=d(a,b);return j.modifyOptions.call(a,{target:a,details:e,detail:e}),c.fire(a,"lazyriasmodifyoptions",e),e}function h(a){return a.getAttribute(a.getAttribute("data-srcattr")||j.srcAttr)||a.getAttribute(i.srcsetAttr)||a.getAttribute(i.srcAttr)||a.getAttribute("data-pfsrcset")||""}var i,j,k=c.cfg,l={string:1,number:1},m=/^\-*\+*\d+\.*\d*$/,n=/^picture$/i,o=/\s*\{\s*width\s*\}\s*/i,p=/\s*\{\s*height\s*\}\s*/i,q=/\s*\{\s*([a-z0-9]+)\s*\}\s*/gi,r=/^\[.*\]|\{.*\}$/,s=/^(?:auto|\d+(px)?)$/,t=b.createElement("a"),u=b.createElement("img"),v="srcset"in u&&!("sizes"in u),w=!!a.HTMLPictureElement&&!v;!function(){var a,b=function(){},d={prefix:"",postfix:"",srcAttr:"data-src",absUrl:!1,modifyOptions:b,widthmap:{},ratio:!1,traditionalRatio:!1,aspectratio:!1};i=c&&c.cfg,i.supportsType||(i.supportsType=function(a){return!a}),i.rias||(i.rias={}),"widths"in(j=i.rias)||(j.widths=[],function(a){for(var b,c=0;!b||b<3e3;)c+=5,c>30&&(c+=1),b=36*c,a.push(b)}(j.widths));for(a in d)a in j||(j[a]=d[a])}(),addEventListener("lazybeforesizes",function(a){if(a.detail.instance==c){var b,d,e,k,l,m,n,p,q,r,t,u,v;if(b=a.target,a.detail.dataAttr&&!a.defaultPrevented&&!j.disabled&&(q=b.getAttribute(i.sizesAttr)||b.getAttribute("sizes"))&&s.test(q)){if(d=h(b),e=g(b,d),t=o.test(e.prefix)||o.test(e.postfix),e.isPicture&&(k=b.parentNode))for(l=k.getElementsByTagName("source"),m=0,n=l.length;m<n;m++)(t||o.test(p=h(l[m])))&&(f(p,e,l[m]),u=!0);t||o.test(d)?(f(d,e,b),u=!0):u&&(v=[],v.srcset=[],v.isPicture=!0,Object.defineProperty(b,"_lazyrias",{value:v,writable:!0})),u&&(w?b.removeAttribute(i.srcAttr):"auto"!=q&&(r={width:parseInt(q,10)},x({target:b,detail:r})))}}},!0);var x=function(){var d=function(a,b){return a.w-b.w},e=function(a){var b,c,d=a.length,e=a[d-1],f=0;for(f;f<d;f++)if(e=a[f],e.d=e.w/a.w,e.d>=a.d){!e.cached&&(b=a[f-1])&&b.d>a.d-.13*Math.pow(a.d,2.2)&&(c=Math.pow(b.d-.6,1.6),b.cached&&(b.d+=.15*c),b.d+(e.d-a.d)*c>a.d&&(e=b));break}return e},f=function(a,b){var d;return!a._lazyrias&&c.pWS&&(d=c.pWS(a.getAttribute(i.srcsetAttr||""))).length&&(Object.defineProperty(a,"_lazyrias",{value:d,writable:!0}),b&&a.parentNode&&(d.isPicture="PICTURE"==a.parentNode.nodeName.toUpperCase())),a._lazyrias},g=function(b){var d=a.devicePixelRatio||1,e=c.getX&&c.getX(b);return Math.min(e||d,2.4,d)},h=function(b,c){var h,i,j,k,l,m;if(l=b._lazyrias,l.isPicture&&a.matchMedia)for(i=0,h=b.parentNode.getElementsByTagName("source"),j=h.length;i<j;i++)if(f(h[i])&&!h[i].getAttribute("type")&&(!(k=h[i].getAttribute("media"))||(matchMedia(k)||{}).matches)){l=h[i]._lazyrias;break}return(!l.w||l.w<c)&&(l.w=c,l.d=g(b),m=e(l.sort(d))),m},j=function(d){if(d.detail.instance==c){var e,g=d.target;if(!v&&(a.respimage||a.picturefill||k.pf))return void b.removeEventListener("lazybeforesizes",j);("_lazyrias"in g||d.detail.dataAttr&&f(g,!0))&&(e=h(g,d.detail.width))&&e.u&&g._lazyrias.cur!=e.u&&(g._lazyrias.cur=e.u,e.cached=!0,c.rAF(function(){g.setAttribute(i.srcAttr,e.u),g.setAttribute("src",e.u)}))}};return w?j=function(){}:addEventListener("lazybeforesizes",j),j}()});

/*! lazysizes - v5.2.0-beta1 */
(function(window, factory) {
	var lazySizes = factory(window, window.document, Date);
	window.lazySizes = lazySizes;
	if(typeof module == 'object' && module.exports){
		module.exports = lazySizes;
	}
}(typeof window != 'undefined' ?
      window : {}, function l(window, document, Date) { // Pass in the windoe Date function also for SSR because the Date class can be lost
	'use strict';
	/*jshint eqnull:true */

	var lazysizes, lazySizesCfg;

	(function(){
		var prop;

		var lazySizesDefaults = {
			lazyClass: 'lazyload',
			loadedClass: 'lazyloaded',
			loadingClass: 'lazyloading',
			preloadClass: 'lazypreload',
			errorClass: 'lazyerror',
			//strictClass: 'lazystrict',
			autosizesClass: 'lazyautosizes',
			srcAttr: 'data-src',
			srcsetAttr: 'data-srcset',
			sizesAttr: 'data-sizes',
			//preloadAfterLoad: false,
			minSize: 40,
			customMedia: {},
			init: true,
			expFactor: 1.5,
			hFac: 0.8,
			loadMode: 2,
			loadHidden: true,
			ricTimeout: 0,
			throttleDelay: 125,
		};

		lazySizesCfg = window.lazySizesConfig || window.lazysizesConfig || {};

		for(prop in lazySizesDefaults){
			if(!(prop in lazySizesCfg)){
				lazySizesCfg[prop] = lazySizesDefaults[prop];
			}
		}
	})();

	if (!document || !document.getElementsByClassName) {
		return {
			init: function () {},
			cfg: lazySizesCfg,
			noSupport: true,
		};
	}

	var docElem = document.documentElement;

	var supportPicture = window.HTMLPictureElement;

	var _addEventListener = 'addEventListener';

	var _getAttribute = 'getAttribute';

	/**
	 * Update to bind to window because 'this' becomes null during SSR
	 * builds.
	 */
	var addEventListener = window[_addEventListener].bind(window);

	var setTimeout = window.setTimeout;

	var requestAnimationFrame = window.requestAnimationFrame || setTimeout;

	var requestIdleCallback = window.requestIdleCallback;

	var regPicture = /^picture$/i;

	var loadEvents = ['load', 'error', 'lazyincluded', '_lazyloaded'];

	var regClassCache = {};

	var forEach = Array.prototype.forEach;

	var hasClass = function(ele, cls) {
		if(!regClassCache[cls]){
			regClassCache[cls] = new RegExp('(\\s|^)'+cls+'(\\s|$)');
		}
		return regClassCache[cls].test(ele[_getAttribute]('class') || '') && regClassCache[cls];
	};

	var addClass = function(ele, cls) {
		if (!hasClass(ele, cls)){
			ele.setAttribute('class', (ele[_getAttribute]('class') || '').trim() + ' ' + cls);
		}
	};

	var removeClass = function(ele, cls) {
		var reg;
		if ((reg = hasClass(ele,cls))) {
			ele.setAttribute('class', (ele[_getAttribute]('class') || '').replace(reg, ' '));
		}
	};

	var addRemoveLoadEvents = function(dom, fn, add){
		var action = add ? _addEventListener : 'removeEventListener';
		if(add){
			addRemoveLoadEvents(dom, fn);
		}
		loadEvents.forEach(function(evt){
			dom[action](evt, fn);
		});
	};

	var triggerEvent = function(elem, name, detail, noBubbles, noCancelable){
		var event = document.createEvent('Event');

		if(!detail){
			detail = {};
		}

		detail.instance = lazysizes;

		event.initEvent(name, !noBubbles, !noCancelable);

		event.detail = detail;

		elem.dispatchEvent(event);
		return event;
	};

	var updatePolyfill = function (el, full){
		var polyfill;
		if( !supportPicture && ( polyfill = (window.picturefill || lazySizesCfg.pf) ) ){
			if(full && full.src && !el[_getAttribute]('srcset')){
				el.setAttribute('srcset', full.src);
			}
			polyfill({reevaluate: true, elements: [el]});
		} else if(full && full.src){
			el.src = full.src;
		}
	};

	var getCSS = function (elem, style){
		return (getComputedStyle(elem, null) || {})[style];
	};

	var getWidth = function(elem, parent, width){
		width = width || elem.offsetWidth;
		while(width < lazySizesCfg.minSize && parent && !elem._lazysizesWidth){
			width =  parent.offsetWidth;
			parent = parent.parentNode;
		}
        //console.log(width);
		return width;
	};

	var rAF = (function(){
		var running, waiting;
		var firstFns = [];
		var secondFns = [];
		var fns = firstFns;

		var run = function(){
			var runFns = fns;

			fns = firstFns.length ? secondFns : firstFns;

			running = true;
			waiting = false;

			while(runFns.length){
				runFns.shift()();
			}

			running = false;
		};

		var rafBatch = function(fn, queue){
			if(running && !queue){
				fn.apply(this, arguments);
			} else {
				fns.push(fn);

				if(!waiting){
					waiting = true;
					(document.hidden ? setTimeout : requestAnimationFrame)(run);
				}
			}
		};

		rafBatch._lsFlush = run;

		return rafBatch;
	})();

	var rAFIt = function(fn, simple){
		return simple ?
			function() {
				rAF(fn);
			} :
			function(){
				var that = this;
				var args = arguments;
				rAF(function(){
					fn.apply(that, args);
				});
			}
		;
	};

	var throttle = function(fn){
		var running;
		var lastTime = 0;
		var gDelay = lazySizesCfg.throttleDelay;
		var rICTimeout = lazySizesCfg.ricTimeout;
		var run = function(){
			running = false;
			lastTime = Date.now();
			fn();
		};
		var idleCallback = requestIdleCallback && rICTimeout > 49 ?
			function(){
				requestIdleCallback(run, {timeout: rICTimeout});

				if(rICTimeout !== lazySizesCfg.ricTimeout){
					rICTimeout = lazySizesCfg.ricTimeout;
				}
			} :
			rAFIt(function(){
				setTimeout(run);
			}, true)
		;

		return function(isPriority){
			var delay;

			if((isPriority = isPriority === true)){
				rICTimeout = 33;
			}

			if(running){
				return;
			}

			running =  true;

			delay = gDelay - (Date.now() - lastTime);

			if(delay < 0){
				delay = 0;
			}

			if(isPriority || delay < 9){
				idleCallback();
			} else {
				setTimeout(idleCallback, delay);
			}
		};
	};

	//based on http://modernjavascript.blogspot.de/2013/08/building-better-debounce.html
	var debounce = function(func) {
		var timeout, timestamp;
		var wait = 99;
		var run = function(){
			timeout = null;
			func();
		};
		var later = function() {
			var last = Date.now() - timestamp;

			if (last < wait) {
				setTimeout(later, wait - last);
			} else {
				(requestIdleCallback || run)(run);
			}
		};

		return function() {
			timestamp = Date.now();

			if (!timeout) {
				timeout = setTimeout(later, wait);
			}
		};
	};

	var loader = (function(){
		var preloadElems, isCompleted, resetPreloadingTimer, loadMode, started;

		var eLvW, elvH, eLtop, eLleft, eLright, eLbottom, isBodyHidden;

		var regImg = /^img$/i;
		var regIframe = /^iframe$/i;

		var supportScroll = ('onscroll' in window) && !(/(gle|ing)bot/.test(navigator.userAgent));

		var shrinkExpand = 0;
		var currentExpand = 0;

		var isLoading = 0;
		var lowRuns = -1;

		var resetPreloading = function(e){
			isLoading--;
			if(!e || isLoading < 0 || !e.target){
				isLoading = 0;
			}
		};

		var isVisible = function (elem) {
			if (isBodyHidden == null) {
				isBodyHidden = getCSS(document.body, 'visibility') == 'hidden';
			}

			return isBodyHidden || !(getCSS(elem.parentNode, 'visibility') == 'hidden' && getCSS(elem, 'visibility') == 'hidden');
		};

		var isNestedVisible = function(elem, elemExpand){
			var outerRect;
			var parent = elem;
			var visible = isVisible(elem);

			eLtop -= elemExpand;
			eLbottom += elemExpand;
			eLleft -= elemExpand;
			eLright += elemExpand;

			while(visible && (parent = parent.offsetParent) && parent != document.body && parent != docElem){
				visible = ((getCSS(parent, 'opacity') || 1) > 0);

				if(visible && getCSS(parent, 'overflow') != 'visible'){
					outerRect = parent.getBoundingClientRect();
					visible = eLright > outerRect.left &&
						eLleft < outerRect.right &&
						eLbottom > outerRect.top - 1 &&
						eLtop < outerRect.bottom + 1
					;
				}
			}

			return visible;
		};

		var checkElements = function() {
			var eLlen, i, rect, autoLoadElem, loadedSomething, elemExpand, elemNegativeExpand, elemExpandVal,
				beforeExpandVal, defaultExpand, preloadExpand, hFac;
			var lazyloadElems = lazysizes.elements;

			if((loadMode = lazySizesCfg.loadMode) && isLoading < 8 && (eLlen = lazyloadElems.length)){

				i = 0;

				lowRuns++;

				for(; i < eLlen; i++){

					if(!lazyloadElems[i] || lazyloadElems[i]._lazyRace){continue;}

					if(!supportScroll || (lazysizes.prematureUnveil && lazysizes.prematureUnveil(lazyloadElems[i]))){unveilElement(lazyloadElems[i]);continue;}

					if(!(elemExpandVal = lazyloadElems[i][_getAttribute]('data-expand')) || !(elemExpand = elemExpandVal * 1)){
						elemExpand = currentExpand;
					}

					if (!defaultExpand) {
						defaultExpand = (!lazySizesCfg.expand || lazySizesCfg.expand < 1) ?
							docElem.clientHeight > 500 && docElem.clientWidth > 500 ? 500 : 370 :
							lazySizesCfg.expand;

						lazysizes._defEx = defaultExpand;

						preloadExpand = defaultExpand * lazySizesCfg.expFactor;
						hFac = lazySizesCfg.hFac;
						isBodyHidden = null;

						if(currentExpand < preloadExpand && isLoading < 1 && lowRuns > 2 && loadMode > 2 && !document.hidden){
							currentExpand = preloadExpand;
							lowRuns = 0;
						} else if(loadMode > 1 && lowRuns > 1 && isLoading < 6){
							currentExpand = defaultExpand;
						} else {
							currentExpand = shrinkExpand;
						}
					}

					if(beforeExpandVal !== elemExpand){
						eLvW = innerWidth + (elemExpand * hFac);
						elvH = innerHeight + elemExpand;
						elemNegativeExpand = elemExpand * -1;
						beforeExpandVal = elemExpand;
					}

					rect = lazyloadElems[i].getBoundingClientRect();

					if ((eLbottom = rect.bottom) >= elemNegativeExpand &&
						(eLtop = rect.top) <= elvH &&
						(eLright = rect.right) >= elemNegativeExpand * hFac &&
						(eLleft = rect.left) <= eLvW &&
						(eLbottom || eLright || eLleft || eLtop) &&
						(lazySizesCfg.loadHidden || isVisible(lazyloadElems[i])) &&
						((isCompleted && isLoading < 3 && !elemExpandVal && (loadMode < 3 || lowRuns < 4)) || isNestedVisible(lazyloadElems[i], elemExpand))){
						unveilElement(lazyloadElems[i]);
						loadedSomething = true;
						if(isLoading > 9){break;}
					} else if(!loadedSomething && isCompleted && !autoLoadElem &&
						isLoading < 4 && lowRuns < 4 && loadMode > 2 &&
						(preloadElems[0] || lazySizesCfg.preloadAfterLoad) &&
						(preloadElems[0] || (!elemExpandVal && ((eLbottom || eLright || eLleft || eLtop) || lazyloadElems[i][_getAttribute](lazySizesCfg.sizesAttr) != 'auto')))){
						autoLoadElem = preloadElems[0] || lazyloadElems[i];
					}
				}

				if(autoLoadElem && !loadedSomething){
					unveilElement(autoLoadElem);
				}
			}
		};

		var throttledCheckElements = throttle(checkElements);

		var switchLoadingClass = function(e){
			var elem = e.target;

			if (elem._lazyCache) {
				delete elem._lazyCache;
				return;
			}

			resetPreloading(e);
			addClass(elem, lazySizesCfg.loadedClass);
			removeClass(elem, lazySizesCfg.loadingClass);
			addRemoveLoadEvents(elem, rafSwitchLoadingClass);
			triggerEvent(elem, 'lazyloaded');
		};
		var rafedSwitchLoadingClass = rAFIt(switchLoadingClass);
		var rafSwitchLoadingClass = function(e){
			rafedSwitchLoadingClass({target: e.target});
		};

		var changeIframeSrc = function(elem, src){
			try {
				elem.contentWindow.location.replace(src);
			} catch(e){
				elem.src = src;
			}
		};

		var handleSources = function(source){
			var customMedia;

			var sourceSrcset = source[_getAttribute](lazySizesCfg.srcsetAttr);

			if( (customMedia = lazySizesCfg.customMedia[source[_getAttribute]('data-media') || source[_getAttribute]('media')]) ){
				source.setAttribute('media', customMedia);
			}

			if(sourceSrcset){
				source.setAttribute('srcset', sourceSrcset);
			}
		};

		var lazyUnveil = rAFIt(function (elem, detail, isAuto, sizes, isImg){
			var src, srcset, parent, isPicture, event, firesLoad;

			if(!(event = triggerEvent(elem, 'lazybeforeunveil', detail)).defaultPrevented){

				if(sizes){
					if(isAuto){
						addClass(elem, lazySizesCfg.autosizesClass);
					} else {
						elem.setAttribute('sizes', sizes);
					}
				}

				srcset = elem[_getAttribute](lazySizesCfg.srcsetAttr);
				src = elem[_getAttribute](lazySizesCfg.srcAttr);

				if(isImg) {
					parent = elem.parentNode;
					isPicture = parent && regPicture.test(parent.nodeName || '');
				}

				firesLoad = detail.firesLoad || (('src' in elem) && (srcset || src || isPicture));

				event = {target: elem};

				addClass(elem, lazySizesCfg.loadingClass);

				if(firesLoad){
					clearTimeout(resetPreloadingTimer);
					resetPreloadingTimer = setTimeout(resetPreloading, 2500);
					addRemoveLoadEvents(elem, rafSwitchLoadingClass, true);
				}

				if(isPicture){
					forEach.call(parent.getElementsByTagName('source'), handleSources);
				}

				if(srcset){
					elem.setAttribute('srcset', srcset);
				} else if(src && !isPicture){
					if(regIframe.test(elem.nodeName)){
						changeIframeSrc(elem, src);
					} else {
						elem.src = src;
					}
				}

				if(isImg && (srcset || isPicture)){
					updatePolyfill(elem, {src: src});
				}
			}

			if(elem._lazyRace){
				delete elem._lazyRace;
			}
			removeClass(elem, lazySizesCfg.lazyClass);

			rAF(function(){
				// Part of this can be removed as soon as this fix is older: https://bugs.chromium.org/p/chromium/issues/detail?id=7731 (2015)
				var isLoaded = elem.complete && elem.naturalWidth > 1;

				if( !firesLoad || isLoaded){
					if (isLoaded) {
						addClass(elem, 'ls-is-cached');
					}
					switchLoadingClass(event);
					elem._lazyCache = true;
					setTimeout(function(){
						if ('_lazyCache' in elem) {
							delete elem._lazyCache;
						}
					}, 9);
				}
				if (elem.loading == 'lazy') {
					isLoading--;
				}
			}, true);
		});

		var unveilElement = function (elem){
			if (elem._lazyRace) {return;}
			var detail;

			var isImg = regImg.test(elem.nodeName);

			//allow using sizes="auto", but don't use. it's invalid. Use data-sizes="auto" or a valid value for sizes instead (i.e.: sizes="80vw")
			var sizes = isImg && (elem[_getAttribute](lazySizesCfg.sizesAttr) || elem[_getAttribute]('sizes'));
			var isAuto = sizes == 'auto';

			if( (isAuto || !isCompleted) && isImg && (elem[_getAttribute]('src') || elem.srcset) && !elem.complete && !hasClass(elem, lazySizesCfg.errorClass) && hasClass(elem, lazySizesCfg.lazyClass)){return;}

			detail = triggerEvent(elem, 'lazyunveilread').detail;

			if(isAuto){
				 autoSizer.updateElem(elem, true, elem.offsetWidth);
			}

			elem._lazyRace = true;
			isLoading++;
            
			lazyUnveil(elem, detail, isAuto, sizes, isImg);
		};

		var afterScroll = debounce(function(){
			lazySizesCfg.loadMode = 3;
			throttledCheckElements();
		});

		var altLoadmodeScrollListner = function(){
			if(lazySizesCfg.loadMode == 3){
				lazySizesCfg.loadMode = 2;
			}
			afterScroll();
		};

		var onload = function(){
			if(isCompleted){return;}
			if(Date.now() - started < 999){
				setTimeout(onload, 999);
				return;
			}


			isCompleted = true;

			lazySizesCfg.loadMode = 3;

			throttledCheckElements();

			addEventListener('scroll', altLoadmodeScrollListner, true);
		};

		return {
			_: function(){
				started = Date.now();

				lazysizes.elements = document.getElementsByClassName(lazySizesCfg.lazyClass);
				preloadElems = document.getElementsByClassName(lazySizesCfg.lazyClass + ' ' + lazySizesCfg.preloadClass);

				addEventListener('scroll', throttledCheckElements, true);

				addEventListener('resize', throttledCheckElements, true);

				addEventListener('pageshow', function (e) {
					if (e.persisted) {
						var loadingElements = document.querySelectorAll('.' + lazySizesCfg.loadingClass);

						if (loadingElements.length && loadingElements.forEach) {
							requestAnimationFrame(function () {
								loadingElements.forEach( function (img) {
									if (img.complete) {
										unveilElement(img);
									}
								});
							});
						}
					}
				});

				if(window.MutationObserver){
					new MutationObserver( throttledCheckElements ).observe( docElem, {childList: true, subtree: true, attributes: true} );
				} else {
					docElem[_addEventListener]('DOMNodeInserted', throttledCheckElements, true);
					docElem[_addEventListener]('DOMAttrModified', throttledCheckElements, true);
					setInterval(throttledCheckElements, 999);
				}

				addEventListener('hashchange', throttledCheckElements, true);

				//, 'fullscreenchange'
				['focus', 'mouseover', 'click', 'load', 'transitionend', 'animationend'].forEach(function(name){
					document[_addEventListener](name, throttledCheckElements, true);
				});

				if((/d$|^c/.test(document.readyState))){
					onload();
				} else {
					addEventListener('load', onload);
					document[_addEventListener]('DOMContentLoaded', throttledCheckElements);
					setTimeout(onload, 20000);
				}

				if(lazysizes.elements.length){
					checkElements();
					rAF._lsFlush();
				} else {
					throttledCheckElements();
				}
			},
			checkElems: throttledCheckElements,
			unveil: unveilElement,
			_aLSL: altLoadmodeScrollListner,
		};
	})();


	var autoSizer = (function(){
		var autosizesElems;

		var sizeElement = rAFIt(function(elem, parent, event, width){
			var sources, i, len;
			elem._lazysizesWidth = width;
			width += 'px';

			elem.setAttribute('sizes', width);

			if(regPicture.test(parent.nodeName || '')){
				sources = parent.getElementsByTagName('source');
				for(i = 0, len = sources.length; i < len; i++){
					sources[i].setAttribute('sizes', width);
				}
			}

			if(!event.detail.dataAttr){
				updatePolyfill(elem, event.detail);
			}
		});
		var getSizeElement = function (elem, dataAttr, width){
			var event;
			var parent = elem.parentNode;

			if(parent){
				width = getWidth(elem, parent, width);
				//console.log(width);
				event = triggerEvent(elem, 'lazybeforesizes', {width: width, dataAttr: !!dataAttr});
				// console.log(elem);
				// console.log(elem.dataset)
                //console.log(elem.getAttribute("data-parent-fit"));
				if(!event.defaultPrevented){
					// nathan fix
					// if(elem.dataset.parentFit != 'width'){
					// 	width = event.detail.width;
					// }
					width = event.detail.width;
                    // console.log(width);
					if(width && width !== elem._lazysizesWidth){
						sizeElement(elem, parent, event, width);
					}
				}
			}
		};

		var updateElementsSizes = function(){
			var i;
			var len = autosizesElems.length;
			if(len){
				i = 0;

				for(; i < len; i++){
					getSizeElement(autosizesElems[i]);
				}
			}
		};

		var debouncedUpdateElementsSizes = debounce(updateElementsSizes);

		return {
			_: function(){
				autosizesElems = document.getElementsByClassName(lazySizesCfg.autosizesClass);
				addEventListener('resize', debouncedUpdateElementsSizes);
			},
			checkElems: debouncedUpdateElementsSizes,
			updateElem: getSizeElement
		};
	})();

	var init = function(){
		if(!init.i && document.getElementsByClassName){
			init.i = true;
			autoSizer._();
			loader._();
		}
	};

	setTimeout(function(){
		if(lazySizesCfg.init){
			init();
		}
	});

	lazysizes = {
		cfg: lazySizesCfg,
		autoSizer: autoSizer,
		loader: loader,
		init: init,
		uP: updatePolyfill,
		aC: addClass,
		rC: removeClass,
		hC: hasClass,
		fire: triggerEvent,
		gW: getWidth,
		rAF: rAF,
	};

	return lazysizes;
}
));

/*! ls.optimumx.min.js - v5.2.0 */
// !function(a,b){if(a){var c=function(){b(a.lazySizes),a.removeEventListener("lazyunveilread",c,!0)};b=b.bind(null,a,a.document),"object"==typeof module&&module.exports?b(require("lazysizes")):a.lazySizes?c():a.addEventListener("lazyunveilread",c,!0)}}("undefined"!=typeof window?window:0,function(a,b,c){"use strict";if(a.addEventListener){var d,e=/^picture$/i,f=b.documentElement,g=function(){var a,b=/(([^,\s].[^\s]+)\s+(\d+)(w|h)(\s+(\d+)(w|h))?)/g,c=function(b,c,d,e,f,g,h,i){a.push({c:c,u:d,w:1*("w"==i?h:e)})};return function(d){return a=[],d.replace(b,c),a}}(),h=function(){var a=function(a,b){return a.w-b.w},b=function(b,d){var e={srcset:b.getAttribute(c.cfg.srcsetAttr)||""},f=g(e.srcset);return Object.defineProperty(b,d,{value:e,writable:!0}),e.cands=f,e.index=0,e.dirty=!1,f[0]&&f[0].w?(f.sort(a),e.cSrcset=[f[e.index].c]):(e.cSrcset=e.srcset?[e.srcset]:[],e.cands=[]),e};return function(a,c){var d,f,g,h;if(!a[c]&&(h=a.parentNode||{},a[c]=b(a,c),a[c].isImg=!0,e.test(h.nodeName||"")))for(a[c].picture=!0,d=h.getElementsByTagName("source"),f=0,g=d.length;f<g;f++)b(d[f],c).isImg=!1;return a[c]}}(),i={_lazyOptimumx:function(){var a=function(a,b,c){var d,e;return!a||!a.d||(e=c>.7?.6:.4,!(a.d>=c)&&(d=Math.pow(a.d-e,1.6)||.1,d<.1?d=.1:d>3&&(d=3),a.d+(b-c)*d<c))};return function(b,c,d){var e,f;for(e=0;e<b.cands.length;e++)if(f=b.cands[e],f.d=(f.w||1)/c,!(b.index>=e)){if(!(f.d<=d||a(b.cands[e-1],f.d,d)))break;b.cSrcset.push(f.c),b.index=e}}}()},j=function(){var a=function(a,b,c,d,e){var f,g=a[e];g&&(f=g.index,i[e](g,b,c),g.dirty&&f==g.index||(g.cSrcset.join(", "),a.setAttribute(d,g.cSrcset.join(", ")),g.dirty=!0))};return function(b,c,d,e,f){var g,h,i,j,k=b[f];if(k.width=c,k.picture&&(h=b.parentNode))for(g=h.getElementsByTagName("source"),j=0,i=g.length;j<i;j++)a(g[j],c,d,e,f);a(b,c,d,e,f)}}(),k=function(a){var b=a.getAttribute("data-optimumx")||a.getAttribute("data-maxdpr");return!b&&d.constrainPixelDensity&&(b="auto"),b&&(b="auto"==b?d.getOptimumX(a):parseFloat(b,10)),b},l=function(){c&&!c.getOptimumX&&(c.getX=k,c.pWS=g,f.removeEventListener("lazybeforeunveil",l))};f.addEventListener("lazybeforeunveil",l),setTimeout(l),d=c&&c.cfg,"function"!=typeof d.getOptimumX&&(d.getOptimumX=function(){var b=a.devicePixelRatio||1;return b>2.6?b*=.6:b>1.9?b*=.8:b-=.01,Math.min(Math.round(100*b)/100,2)}),a.devicePixelRatio&&addEventListener("lazybeforesizes",function(a){if(a.detail.instance==c){var b,e,f,g,i=a.target,l=a.detail,m=l.dataAttr;a.defaultPrevented||!(b=k(i))||b>=devicePixelRatio||(!m||!i._lazyOptimumx||l.reloaded||d.unloadedClass&&c.hC(i,d.unloadedClass)||(i._lazyOptimumx=null),e=h(i,"_lazyOptimumx"),(f=l.width)&&(e.width||0)<f&&(g=m?c.cfg.srcsetAttr:"srcset",c.rAF(function(){j(i,f,b,g,"_lazyOptimumx")})))}})}});
/*! ls.object-fit.min.js - v5.2.0-beta1 */
// if (!('object-fit' in document.createElement('a').style)) {
//   !function(a,b){if(a){var c=function(d){b(a.lazySizes,d),a.removeEventListener("lazyunveilread",c,!0)};b=b.bind(null,a,a.document),"object"==typeof module&&module.exports?b(require("lazysizes")):a.lazySizes?c():a.addEventListener("lazyunveilread",c,!0)}}("undefined"!=typeof window?window:0,function(a,b,c,d){"use strict";function e(a){var b=getComputedStyle(a,null)||{},c=b.fontFamily||"",d=c.match(m)||"",e=d&&c.match(n)||"";return e&&(e=e[1]),{fit:d&&d[1]||"",position:q[e]||e||"center"}}function f(){if(!i){var a=b.createElement("style");i=c.cfg.objectFitClass||"lazysizes-display-clone",b.querySelector("head").appendChild(a)}}function g(a){var b=a.previousElementSibling;b&&c.hC(b,i)&&(b.parentNode.removeChild(b),a.style.position=b.getAttribute("data-position")||"",a.style.visibility=b.getAttribute("data-visibility")||"")}function h(a,b){var d,e,h,j,k=c.cfg,l=function(){var b=a.currentSrc||a.src;b&&e!==b&&(e=b,j.backgroundImage="url("+(p.test(b)?JSON.stringify(b):b)+")",d||(d=!0,c.rC(h,k.loadingClass),c.aC(h,k.loadedClass)))},m=function(){c.rAF(l)};a._lazysizesParentFit=b.fit,a.addEventListener("lazyloaded",m,!0),a.addEventListener("load",m,!0),c.rAF(function(){var d=a,e=a.parentNode;"PICTURE"==e.nodeName.toUpperCase()&&(d=e,e=e.parentNode),g(d),i||f(),h=a.cloneNode(!1),j=h.style,h.addEventListener("load",function(){var a=h.currentSrc||h.src;a&&a!=o&&(h.src=o,h.srcset="")}),c.rC(h,k.loadedClass),c.rC(h,k.lazyClass),c.rC(h,k.autosizesClass),c.aC(h,k.loadingClass),c.aC(h,i),["data-parent-fit","data-parent-container","data-object-fit-polyfilled",k.srcsetAttr,k.srcAttr].forEach(function(a){h.removeAttribute(a)}),h.src=o,h.srcset="",j.backgroundRepeat="no-repeat",j.backgroundPosition=b.position,j.backgroundSize=b.fit,h.setAttribute("data-position",d.style.position),h.setAttribute("data-visibility",d.style.visibility),d.style.visibility="hidden",d.style.position="absolute",a.setAttribute("data-parent-fit",b.fit),a.setAttribute("data-parent-container","prev"),a.setAttribute("data-object-fit-polyfilled",""),a._objectFitPolyfilledDisplay=h,e.insertBefore(h,d),a._lazysizesParentFit&&delete a._lazysizesParentFit,a.complete&&l()})}var i,j=b.createElement("a").style,k="objectFit"in j,l=k&&"objectPosition"in j,m=/object-fit["']*\s*:\s*["']*(contain|cover)/,n=/object-position["']*\s*:\s*["']*(.+?)(?=($|,|'|"|;))/,o="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",p=/\(|\)|'/,q={center:"center","50% 50%":"center"};if(!k||!l){var r=function(a){if(a.detail.instance==c){var b=a.target,d=e(b);return!(!d.fit||k&&"center"==d.position)&&(h(b,d),!0)}};a.addEventListener("lazybeforesizes",function(a){if(a.detail.instance==c){var b=a.target;null==b.getAttribute("data-object-fit-polyfilled")||b._objectFitPolyfilledDisplay||r(a)||c.rAF(function(){b.removeAttribute("data-object-fit-polyfilled")})}}),a.addEventListener("lazyunveilread",r,!0),d&&d.detail&&r(d)}});
// }

/*! lazysizes config optional */

//window.lazySizesConfig.loadHidden = false;
// window.lazySizesConfig.expand = -100;
lazySizes.init();

/*! modernizr 3.6.0 (Custom Build) | MIT * 
 * https://modernizr.com/download/?-csspositionsticky-hovermq-touchevents-video-setclasses-cssclassprefix:cl !*/
!function(e,n,t){function o(e,n){return typeof e===n}function i(){var e,n,t,i,a,s,r;for(var c in d)if(d.hasOwnProperty(c)){if(e=[],n=d[c],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(i=o(n.fn,"function")?n.fn():n.fn,a=0;a<e.length;a++)s=e[a],r=s.split("."),1===r.length?Modernizr[r[0]]=i:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=i),f.push((i?"":"no-")+r.join("-"))}}function a(e){var n=p.className,t=Modernizr._config.classPrefix||"";if(h&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),h?p.className.baseVal=n:p.className=n)}function s(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):h?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function r(e,n){if("object"==typeof e)for(var t in e)m(e,t)&&r(t,e[t]);else{e=e.toLowerCase();var o=e.split("."),i=Modernizr[o[0]];if(2==o.length&&(i=i[o[1]]),"undefined"!=typeof i)return Modernizr;n="function"==typeof n?n():n,1==o.length?Modernizr[o[0]]=n:(!Modernizr[o[0]]||Modernizr[o[0]]instanceof Boolean||(Modernizr[o[0]]=new Boolean(Modernizr[o[0]])),Modernizr[o[0]][o[1]]=n),a([(n&&0!=n?"":"no-")+o.join("-")]),Modernizr._trigger(e,n)}return Modernizr}function c(){var e=n.body;return e||(e=s(h?"svg":"body"),e.fake=!0),e}function l(e,t,o,i){var a,r,l,f,d="modernizr",u=s("div"),h=c();if(parseInt(o,10))for(;o--;)l=s("div"),l.id=i?i[o]:d+(o+1),u.appendChild(l);return a=s("style"),a.type="text/css",a.id="s"+d,(h.fake?h:u).appendChild(a),h.appendChild(u),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(n.createTextNode(e)),u.id=d,h.fake&&(h.style.background="",h.style.overflow="hidden",f=p.style.overflow,p.style.overflow="hidden",p.appendChild(h)),r=t(u,e),h.fake?(h.parentNode.removeChild(h),p.style.overflow=f,p.offsetHeight):u.parentNode.removeChild(u),!!r}var f=[],d=[],u={_version:"3.6.0",_config:{classPrefix:"cl",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){d.push({name:e,fn:n,options:t})},addAsyncTest:function(e){d.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=u,Modernizr=new Modernizr;var p=n.documentElement,h="svg"===p.nodeName.toLowerCase(),v=u._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];u._prefixes=v,Modernizr.addTest("video",function(){var e=s("video"),n=!1;try{n=!!e.canPlayType,n&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),n.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),n.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(t){}return n}),Modernizr.addTest("csspositionsticky",function(){var e="position:",n="sticky",t=s("a"),o=t.style;return o.cssText=e+v.join(n+";"+e).slice(0,-e.length),-1!==o.position.indexOf(n)});var m;!function(){var e={}.hasOwnProperty;m=o(e,"undefined")||o(e.call,"undefined")?function(e,n){return n in e&&o(e.constructor.prototype[n],"undefined")}:function(n,t){return e.call(n,t)}}(),u._l={},u.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},u._trigger=function(e,n){if(this._l[e]){var t=this._l[e];setTimeout(function(){var e,o;for(e=0;e<t.length;e++)(o=t[e])(n)},0),delete this._l[e]}},Modernizr._q.push(function(){u.addTest=r});var y=u.testStyles=l;Modernizr.addTest("touchevents",function(){var t;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)t=!0;else{var o=["@media (",v.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");y(o,function(e){t=9===e.offsetTop})}return t});var g=function(){var n=e.matchMedia||e.msMatchMedia;return n?function(e){var t=n(e);return t&&t.matches||!1}:function(n){var t=!1;return l("@media "+n+" { #modernizr { position: absolute; } }",function(n){t="absolute"==(e.getComputedStyle?e.getComputedStyle(n,null):n.currentStyle).position}),t}}();u.mq=g,Modernizr.addTest("hovermq",g("(hover)")),i(),a(f),delete u.addTest,delete u.addAsyncTest;for(var w=0;w<Modernizr._q.length;w++)Modernizr._q[w]();e.Modernizr=Modernizr}(window,document);

/*! loadCSS. [c]2017 Filament Group, Inc. MIT License */
!function(n){"use strict";n.loadCSS||(n.loadCSS=function(){});var o=loadCSS.relpreload={};if(o.support=function(){var e;try{e=n.document.createElement("link").relList.supports("preload")}catch(t){e=!1}return function(){return e}}(),o.bindMediaToggle=function(t){var e=t.media||"all";function a(){t.addEventListener?t.removeEventListener("load",a):t.attachEvent&&t.detachEvent("onload",a),t.setAttribute("onload",null),t.media=e}t.addEventListener?t.addEventListener("load",a):t.attachEvent&&t.attachEvent("onload",a),setTimeout(function(){t.rel="stylesheet",t.media="only x"}),setTimeout(a,3e3)},o.poly=function(){if(!o.support())for(var t=n.document.getElementsByTagName("link"),e=0;e<t.length;e++){var a=t[e];"preload"!==a.rel||"style"!==a.getAttribute("as")||a.getAttribute("data-loadcss")||(a.setAttribute("data-loadcss",!0),o.bindMediaToggle(a))}},!o.support()){o.poly();var t=n.setInterval(o.poly,500);n.addEventListener?n.addEventListener("load",function(){o.poly(),n.clearInterval(t)}):n.attachEvent&&n.attachEvent("onload",function(){o.poly(),n.clearInterval(t)})}"undefined"!=typeof exports?exports.loadCSS=loadCSS:n.loadCSS=loadCSS}("undefined"!=typeof global?global:this);