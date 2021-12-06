    var theme = {
      breakpoints: {
        medium: 750,
        large: 990,
        widescreen: 1400
      },
      strings: {
        addToCart: 1,
        soldOut: 2,
        unavailable: 3,
        regularPrice: 4,
        salePrice: 5,
        sale: 6,
        fromLowestPrice: 7,
        vendor: 8,
        showMore: 9,
        showLess: 10,
        searchFor: 11,
        addressError: 12,
        addressNoResults: 13,
        addressQueryLimit: 14,
        authError: 15,
        newWindow: 16,
        external: 17,
        newWindowExternal:18,
        removeLabel: 19,
        update: 20,
        quantity: 21,
        discountedTotal: 22,
        regularTotal: 23,
        priceColumn: 24,
        quantityMinimumMessage: 25,
        cartError: 26,
        removedItemMessage: 27,
        unitPrice: 28,
        unitPriceSeparator: 29,
        oneCartCount: 30,
        otherCartCount: 31,
        quantityLabel: 32,
        products: 33,
        loading: 34,
        number_of_results:35,
        number_of_results_found: 36,
        one_result_found: 37
      },
      moneyFormat: 38,
      moneyFormatWithCurrency: 39,
      settings: {
        predictiveSearchEnabled: 40,
        predictiveSearchShowPrice: 41,
        predictiveSearchShowVendor: 42
      },
      stylesheet: "{{ 'theme.css' | asset_url }}"
    };


window.theme = window.theme || {};

/* ================ SLATE ================ */
window.theme = window.theme || {};

theme.Sections = function Sections() {
  
  console.log(this,'定义this');
  this.constructors = {};
  this.instances = [];

  document.addEventListener(
    'shopify:section:load',
    this._onSectionLoad.bind(this)
  );
  document.addEventListener(
    'shopify:section:unload',
    this._onSectionUnload.bind(this)
  );
  document.addEventListener(
    'shopify:section:select',
    this._onSelect.bind(this)
  );
  document.addEventListener(
    'shopify:section:deselect',
    this._onDeselect.bind(this)
  );
  document.addEventListener(
    'shopify:block:select',
    this._onBlockSelect.bind(this)
  );
  document.addEventListener(
    'shopify:block:deselect',
    this._onBlockDeselect.bind(this)
  );
};



theme.Sections.prototype = Object.assign({}, theme.Sections.prototype, {
  _createInstance: function(container, constructor) {
    var id = container.getAttribute('data-section-id');
    var type = container.getAttribute('data-section-type');

    constructor = constructor || this.constructors[type];

    if (typeof constructor === 'undefined') {
      return;
    }

    var instance = Object.assign(new constructor(container), {
      id: id,
      type: type,
      container: container
    });

    this.instances.push(instance);
  },

  _onSectionLoad: function(evt) {
    console.log(this,'this');
    console.log(evt,'evt');
    var container = document.querySelector(
      '[data-section-id="' + evt.detail.sectionId + '"]'
    );

    if (container) {
      this._createInstance(container);
    }
  },

  _onSectionUnload: function(evt) {
    this.instances = this.instances.filter(function(instance) {
      var isEventInstance = instance.id === evt.detail.sectionId;

      if (isEventInstance) {
        if (typeof instance.onUnload === 'function') {
          instance.onUnload(evt);
        }
      }

      return !isEventInstance;
    });
  },

  _onSelect: function(evt) {
    // eslint-disable-next-line no-shadow
    var instance = this.instances.find(function(instance) {
      return instance.id === evt.detail.sectionId;
    });

    if (
      typeof instance !== 'undefined' &&
      typeof instance.onSelect === 'function'
    ) {
      instance.onSelect(evt);
    }
  },

  _onDeselect: function(evt) {
    // eslint-disable-next-line no-shadow
    var instance = this.instances.find(function(instance) {
      return instance.id === evt.detail.sectionId;
    });

    if (
      typeof instance !== 'undefined' &&
      typeof instance.onDeselect === 'function'
    ) {
      instance.onDeselect(evt);
    }
  },

  _onBlockSelect: function(evt) {
    // eslint-disable-next-line no-shadow
    var instance = this.instances.find(function(instance) {
      return instance.id === evt.detail.sectionId;
    });

    if (
      typeof instance !== 'undefined' &&
      typeof instance.onBlockSelect === 'function'
    ) {
      instance.onBlockSelect(evt);
    }
  },

  _onBlockDeselect: function(evt) {
    // eslint-disable-next-line no-shadow
    var instance = this.instances.find(function(instance) {
      return instance.id === evt.detail.sectionId;
    });

    if (
      typeof instance !== 'undefined' &&
      typeof instance.onBlockDeselect === 'function'
    ) {
      instance.onBlockDeselect(evt);
    }
  },

  register: function(type, constructor) {
    this.constructors[type] = constructor;

    document.querySelectorAll('[data-section-type="' + type + '"]').forEach(
      function(container) {
        this._createInstance(container, constructor);
      }.bind(this)
    );
  }
});

window.slate = window.slate || {};

/**
 * Slate utilities
 * -----------------------------------------------------------------------------
 * A collection of useful utilities to help build your theme
 *
 *
 * @namespace utils
 */

slate.utils = {
  /**
   * Get the query params in a Url
   * Ex
   * https://mysite.com/search?q=noodles&b
   * getParameterByName('q') = "noodles"
   * getParameterByName('b') = "" (empty value)
   * getParameterByName('test') = null (absent)
   */
  getParameterByName: function(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  },

  resizeSelects: function(selects) {
    selects.forEach(function(select) {
      var arrowWidth = 55;

      var test = document.createElement('span');
      test.innerHTML = select.selectedOptions[0].label;

      document.querySelector('.site-footer').appendChild(test);

      var width = test.offsetWidth + arrowWidth;
      test.remove();

      select.style.width = width + 'px';
    });
  },

  keyboardKeys: {
    TAB: 9,
    ENTER: 13,
    ESCAPE: 27,
    LEFTARROW: 37,
    RIGHTARROW: 39
  }
};

window.slate = window.slate || {};

/**
 * iFrames
 * -----------------------------------------------------------------------------
 * Wrap videos in div to force responsive layout.
 *
 * @namespace iframes
 */

slate.rte = {
  /**
   * Wrap tables in a container div to make them scrollable when needed
   *
   * @param {object} options - Options to be used
   * @param {NodeList} options.tables - Elements of the table(s) to wrap
   * @param {string} options.tableWrapperClass - table wrapper class name
   */
  wrapTable: function(options) {
    options.tables.forEach(function(table) {
      var wrapper = document.createElement('div');
      wrapper.classList.add(options.tableWrapperClass);

      table.parentNode.insertBefore(wrapper, table);
      wrapper.appendChild(table);
    });
  },

  /**
   * Wrap iframes in a container div to make them responsive
   *
   * @param {object} options - Options to be used
   * @param {NodeList} options.iframes - Elements of the iframe(s) to wrap
   * @param {string} options.iframeWrapperClass - class name used on the wrapping div
   */
  wrapIframe: function(options) {
    options.iframes.forEach(function(iframe) {
      var wrapper = document.createElement('div');
      wrapper.classList.add(options.iframeWrapperClass);

      iframe.parentNode.insertBefore(wrapper, iframe);
      wrapper.appendChild(iframe);

      iframe.src = iframe.src;
    });
  }
};

window.slate = window.slate || {};

/**
 * A11y Helpers
 * -----------------------------------------------------------------------------
 * A collection of useful functions that help make your theme more accessible
 * to users with visual impairments.
 *
 *
 * @namespace a11y
 */

slate.a11y = {
  state: {
    firstFocusable: null,
    lastFocusable: null
  },
  /**
   * For use when focus shifts to a container rather than a link
   * eg for In-page links, after scroll, focus shifts to content area so that
   * next `tab` is where user expects
   *
   * @param {HTMLElement} element - The element to be acted upon
   */
  pageLinkFocus: function(element) {
    if (!element) return;
    var focusClass = 'js-focus-hidden';

    element.setAttribute('tabIndex', '-1');
    element.focus();
    element.classList.add(focusClass);
    element.addEventListener('blur', callback, { once: true });

    function callback() {
      element.classList.remove(focusClass);
      element.removeAttribute('tabindex');
    }
  },

  /**
   * Traps the focus in a particular container
   *
   * @param {object} options - Options to be used
   * @param {HTMLElement} options.container - Container to trap focus within
   * @param {HTMLElement} options.elementToFocus - Element to be focused when focus leaves container
   */
  trapFocus: function(options) {
    var focusableElements = Array.from(
      options.container.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex^="-"])'
      )
    ).filter(function(element) {
      var width = element.offsetWidth;
      var height = element.offsetHeight;

      return (
        width !== 0 &&
        height !== 0 &&
        getComputedStyle(element).getPropertyValue('display') !== 'none'
      );
    });

    this.state.firstFocusable = focusableElements[0];
    this.state.lastFocusable = focusableElements[focusableElements.length - 1];

    if (!options.elementToFocus) {
      options.elementToFocus = options.container;
    }

    options.container.setAttribute('tabindex', '-1');
    options.elementToFocus.focus();

    this._setupHandlers();

    document.addEventListener('focusin', this._onFocusInHandler);
    document.addEventListener('focusout', this._onFocusOutHandler);
  },

  _setupHandlers: function() {
    if (!this._onFocusInHandler) {
      this._onFocusInHandler = this._onFocusIn.bind(this);
    }

    if (!this._onFocusOutHandler) {
      this._onFocusOutHandler = this._onFocusIn.bind(this);
    }

    if (!this._manageFocusHandler) {
      this._manageFocusHandler = this._manageFocus.bind(this);
    }
  },

  _onFocusOut: function() {
    document.removeEventListener('keydown', this._manageFocusHandler);
  },

  _onFocusIn: function(evt) {
    if (
      evt.target !== this.state.lastFocusable &&
      evt.target !== this.state.firstFocusable
    )
      return;

    document.addEventListener('keydown', this._manageFocusHandler);
  },

  _manageFocus: function(evt) {
    if (evt.keyCode !== slate.utils.keyboardKeys.TAB) return;

    /**
     * On the last focusable element and tab forward,
     * focus the first element.
     */
    if (evt.target === this.state.lastFocusable && !evt.shiftKey) {
      evt.preventDefault();
      this.state.firstFocusable.focus();
    }
    /**
     * On the first focusable element and tab backward,
     * focus the last element.
     */
    if (evt.target === this.state.firstFocusable && evt.shiftKey) {
      evt.preventDefault();
      this.state.lastFocusable.focus();
    }
  },

  /**
   * Removes the trap of focus in a particular container
   *
   * @param {object} options - Options to be used
   * @param {HTMLElement} options.container - Container to trap focus within
   */
  removeTrapFocus: function(options) {
    if (options.container) {
      options.container.removeAttribute('tabindex');
    }
    document.removeEventListener('focusin', this._onFocusInHandler);
  },

  /**
   * Add aria-describedby attribute to external and new window links
   *
   * @param {object} options - Options to be used
   * @param {object} options.messages - Custom messages to be used
   * @param {HTMLElement} options.links - Specific links to be targeted
   */
  accessibleLinks: function(options) {
    var body = document.querySelector('body');

    var idSelectors = {
      newWindow: 'a11y-new-window-message',
      external: 'a11y-external-message',
      newWindowExternal: 'a11y-new-window-external-message'
    };

    if (options.links === undefined || !options.links.length) {
      options.links = document.querySelectorAll(
        'a[href]:not([aria-describedby])'
      );
    }

    function generateHTML(customMessages) {
      if (typeof customMessages !== 'object') {
        customMessages = {};
      }

      var messages = Object.assign(
        {
          newWindow: 'Opens in a new window.',
          external: 'Opens external website.',
          newWindowExternal: 'Opens external website in a new window.'
        },
        customMessages
      );

      var container = document.createElement('ul');
      var htmlMessages = '';

      for (var message in messages) {
        htmlMessages +=
          '<li id=' + idSelectors[message] + '>' + messages[message] + '</li>';
      }

      container.setAttribute('hidden', true);
      container.innerHTML = htmlMessages;

      body.appendChild(container);
    }

    function _externalSite(link) {
      var hostname = window.location.hostname;

      return link.hostname !== hostname;
    }

    options.links.forEach(function(link) {
      var target = link.getAttribute('target');
      var rel = link.getAttribute('rel');
      var isExternal = _externalSite(link);
      var isTargetBlank = target === '_blank';

      if (isExternal) {
        link.setAttribute('aria-describedby', idSelectors.external);
      }

      if (isTargetBlank) {
        if (!rel || rel.indexOf('noopener') === -1) {
          var relValue = rel === undefined ? '' : rel + ' ';
          relValue = relValue + 'noopener';
          link.setAttribute('rel', relValue);
        }

        link.setAttribute('aria-describedby', idSelectors.newWindow);
      }

      if (isExternal && isTargetBlank) {
        link.setAttribute('aria-describedby', idSelectors.newWindowExternal);
      }
    });

    generateHTML(options.messages);
  }
};

/**
 * Image Helper Functions
 * -----------------------------------------------------------------------------
 * A collection of functions that help with basic image operations.
 *
 */

theme.Images = (function() {
  /**
   * Preloads an image in memory and uses the browsers cache to store it until needed.
   *
   * @param {Array} images - A list of image urls
   * @param {String} size - A shopify image size attribute
   */

  function preload(images, size) {
    if (typeof images === 'string') {
      images = [images];
    }

    for (var i = 0; i < images.length; i++) {
      var image = images[i];
      this.loadImage(this.getSizedImageUrl(image, size));
    }
  }

  /**
   * Loads and caches an image in the browsers cache.
   * @param {string} path - An image url
   */
  function loadImage(path) {
    new Image().src = path;
  }

  /**
   * Swaps the src of an image for another OR returns the imageURL to the callback function
   * @param image
   * @param element
   * @param callback
   */
  function switchImage(image, element, callback) {
    var size = this.imageSize(element.src);
    var imageUrl = this.getSizedImageUrl(image.src, size);

    if (callback) {
      callback(imageUrl, image, element); // eslint-disable-line callback-return
    } else {
      element.src = imageUrl;
    }
  }

  /**
   * +++ Useful
   * Find the Shopify image attribute size
   *
   * @param {string} src
   * @returns {null}
   */
  function imageSize(src) {
    var match = src.match(
      /.+_((?:pico|icon|thumb|small|compact|medium|large|grande)|\d{1,4}x\d{0,4}|x\d{1,4})[_\\.@]/
    );

    if (match !== null) {
      if (match[2] !== undefined) {
        return match[1] + match[2];
      } else {
        return match[1];
      }
    } else {
      return null;
    }
  }

  /**
   * +++ Useful
   * Adds a Shopify size attribute to a URL
   *
   * @param src
   * @param size
   * @returns {*}
   */
  function getSizedImageUrl(src, size) {
    if (size === null) {
      return src;
    }

    if (size === 'master') {
      return this.removeProtocol(src);
    }

    var match = src.match(
      /\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i
    );

    if (match !== null) {
      var prefix = src.split(match[0]);
      var suffix = match[0];

      return this.removeProtocol(prefix[0] + '_' + size + suffix);
    }

    return null;
  }

  function removeProtocol(path) {
    return path.replace(/http(s)?:/, '');
  }

  return {
    preload: preload,
    loadImage: loadImage,
    switchImage: switchImage,
    imageSize: imageSize,
    getSizedImageUrl: getSizedImageUrl,
    removeProtocol: removeProtocol
  };
})();

/**
 * Currency Helpers
 * -----------------------------------------------------------------------------
 * A collection of useful functions that help with currency formatting
 *
 * Current contents
 * - formatMoney - Takes an amount in cents and returns it as a formatted dollar value.
 *
 * Alternatives
 * - Accounting.js - http://openexchangerates.github.io/accounting.js/
 *
 */

theme.Currency = (function() {
  var moneyFormat = '${{amount}}'; // eslint-disable-line camelcase

  function formatMoney(cents, format) {
    if (typeof cents === 'string') {
      cents = cents.replace('.', '');
    }
    var value = '';
    var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
    var formatString = format || moneyFormat;

    function formatWithDelimiters(number, precision, thousands, decimal) {
      thousands = thousands || ',';
      decimal = decimal || '.';

      if (isNaN(number) || number === null) {
        return 0;
      }

      number = (number / 100.0).toFixed(precision);

      var parts = number.split('.');
      var dollarsAmount = parts[0].replace(
        /(\d)(?=(\d\d\d)+(?!\d))/g,
        '$1' + thousands
      );
      var centsAmount = parts[1] ? decimal + parts[1] : '';

      return dollarsAmount + centsAmount;
    }

    switch (formatString.match(placeholderRegex)[1]) {
      case 'amount':
        value = formatWithDelimiters(cents, 2);
        break;
      case 'amount_no_decimals':
        value = formatWithDelimiters(cents, 0);
        break;
      case 'amount_with_comma_separator':
        value = formatWithDelimiters(cents, 2, '.', ',');
        break;
      case 'amount_no_decimals_with_comma_separator':
        value = formatWithDelimiters(cents, 0, '.', ',');
        break;
      case 'amount_no_decimals_with_space_separator':
        value = formatWithDelimiters(cents, 0, ' ');
        break;
      case 'amount_with_apostrophe_separator':
        value = formatWithDelimiters(cents, 2, "'");
        break;
    }

    return formatString.replace(placeholderRegex, value);
  }

  return {
    formatMoney: formatMoney
  };
})();

/**
 * Variant Selection scripts
 * ------------------------------------------------------------------------------
 *
 * Handles change events from the variant inputs in any `cart/add` forms that may
 * exist.  Also updates the master select and triggers updates when the variants
 * price or image changes.
 *
 * @namespace variants
 */

slate.Variants = (function() {
  /**
   * Variant constructor
   *
   * @param {object} options - Settings from `product.js`
   */
  function Variants(options) {
    this.container = options.container;
    this.product = options.product;
    this.originalSelectorId = options.originalSelectorId;
    this.enableHistoryState = options.enableHistoryState;
    this.singleOptions = this.container.querySelectorAll(
      options.singleOptionSelector
    );
    this.currentVariant = this._getVariantFromOptions();

    this.singleOptions.forEach(
      function(option) {
        option.addEventListener('change', this._onSelectChange.bind(this));
      }.bind(this)
    );
  }

  Variants.prototype = Object.assign({}, Variants.prototype, {
    /**
     * Get the currently selected options from add-to-cart form. Works with all
     * form input elements.
     *
     * @return {array} options - Values of currently selected variants
     */
    _getCurrentOptions: function() {
      var result = [];

      this.singleOptions.forEach(function(option) {
        var type = option.getAttribute('type');
        var isRadioOrCheckbox = type === 'radio' || type === 'checkbox';

        if (!isRadioOrCheckbox || option.checked) {
          result.push({
            value: option.value,
            index: option.getAttribute('data-index')
          });
        }
      });

      return result;
    },

    /**
     * Find variant based on selected values.
     *
     * @param  {array} selectedValues - Values of variant inputs
     * @return {object || undefined} found - Variant object from product.variants
     */
    _getVariantFromOptions: function() {
      var selectedValues = this._getCurrentOptions();
      var variants = this.product.variants;

      var found = variants.find(function(variant) {
        return selectedValues.every(function(values) {
          return variant[values.index] === values.value;
        });
      });

      return found;
    },

    /**
     * Event handler for when a variant input changes.
     */
    _onSelectChange: function() {
      var variant = this._getVariantFromOptions();

      this.container.dispatchEvent(
        new CustomEvent('variantChange', {
          detail: {
            variant: variant
          },
          bubbles: true,
          cancelable: true
        })
      );

      if (!variant) {
        return;
      }

      this._updateMasterSelect(variant);
      this._updateImages(variant);
      this._updatePrice(variant);
      this._updateSKU(variant);
      this.currentVariant = variant;

      if (this.enableHistoryState) {
        this._updateHistoryState(variant);
      }
    },

    /**
     * Trigger event when variant image changes
     *
     * @param  {object} variant - Currently selected variant
     * @return {event}  variantImageChange
     */
    _updateImages: function(variant) {
      var variantImage = variant.featured_image || {};
      var currentVariantImage = this.currentVariant.featured_image || {};

      if (
        !variant.featured_image ||
        variantImage.src === currentVariantImage.src
      ) {
        return;
      }

      this.container.dispatchEvent(
        new CustomEvent('variantImageChange', {
          detail: {
            variant: variant
          },
          bubbles: true,
          cancelable: true
        })
      );
    },

    /**
     * Trigger event when variant price changes.
     *
     * @param  {object} variant - Currently selected variant
     * @return {event} variantPriceChange
     */
    _updatePrice: function(variant) {
      if (
        variant.price === this.currentVariant.price &&
        variant.compare_at_price === this.currentVariant.compare_at_price &&
        variant.unit_price === this.currentVariant.unit_price
      ) {
        return;
      }

      this.container.dispatchEvent(
        new CustomEvent('variantPriceChange', {
          detail: {
            variant: variant
          },
          bubbles: true,
          cancelable: true
        })
      );
    },

    /**
     * Trigger event when variant sku changes.
     *
     * @param  {object} variant - Currently selected variant
     * @return {event} variantSKUChange
     */
    _updateSKU: function(variant) {
      if (variant.sku === this.currentVariant.sku) {
        return;
      }

      this.container.dispatchEvent(
        new CustomEvent('variantSKUChange', {
          detail: {
            variant: variant
          },
          bubbles: true,
          cancelable: true
        })
      );
    },

    /**
     * Update history state for product deeplinking
     *
     * @param  {variant} variant - Currently selected variant
     * @return {k}         [description]
     */
    _updateHistoryState: function(variant) {
      if (!history.replaceState || !variant) {
        return;
      }

      var newurl =
        window.location.protocol +
        '//' +
        window.location.host +
        window.location.pathname +
        '?variant=' +
        variant.id;
      window.history.replaceState({ path: newurl }, '', newurl);
    },

    /**
     * Update hidden master select of variant change
     *
     * @param  {variant} variant - Currently selected variant
     */
    _updateMasterSelect: function(variant) {
      var masterSelect = this.container.querySelector(this.originalSelectorId);

      if (!masterSelect) return;
      masterSelect.value = variant.id;
    }
  });

  return Variants;
})();

this.Shopify = this.Shopify || {};
this.Shopify.theme = this.Shopify.theme || {};
this.Shopify.theme.PredictiveSearch = (function() {
  'use strict';

  function validateQuery(query) {
    var error;

    if (query === null || query === undefined) {
      error = new TypeError("'query' is missing");
      error.type = 'argument';
      throw error;
    }

    if (typeof query !== 'string') {
      error = new TypeError("'query' is not a string");
      error.type = 'argument';
      throw error;
    }
  }

  function GenericError() {
    var error = Error.call(this);

    error.name = 'Server error';
    error.message = 'Something went wrong on the server';
    error.status = 500;

    return error;
  }

  function NotFoundError(status) {
    var error = Error.call(this);

    error.name = 'Not found';
    error.message = 'Not found';
    error.status = status;

    return error;
  }

  function ServerError() {
    var error = Error.call(this);

    error.name = 'Server error';
    error.message = 'Something went wrong on the server';
    error.status = 500;

    return error;
  }

  function ContentTypeError(status) {
    var error = Error.call(this);

    error.name = 'Content-Type error';
    error.message = 'Content-Type was not provided or is of wrong type';
    error.status = status;

    return error;
  }

  function JsonParseError(status) {
    var error = Error.call(this);

    error.name = 'JSON parse error';
    error.message = 'JSON syntax error';
    error.status = status;

    return error;
  }

  function ThrottledError(status, name, message, retryAfter) {
    var error = Error.call(this);

    error.name = name;
    error.message = message;
    error.status = status;
    error.retryAfter = retryAfter;

    return error;
  }

  function InvalidParameterError(status, name, message) {
    var error = Error.call(this);

    error.name = name;
    error.message = message;
    error.status = status;

    return error;
  }

  function ExpectationFailedError(status, name, message) {
    var error = Error.call(this);

    error.name = name;
    error.message = message;
    error.status = status;

    return error;
  }

  function request(searchUrl, queryParams, query, onSuccess, onError) {
    var xhr = new XMLHttpRequest();
    var route = searchUrl + '/suggest.json';

    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) {
        return;
      }

      var contentType = xhr.getResponseHeader('Content-Type');

      if (xhr.status >= 500) {
        onError(new ServerError());

        return;
      }

      if (xhr.status === 404) {
        onError(new NotFoundError(xhr.status));

        return;
      }

      if (
        typeof contentType !== 'string' ||
        contentType.toLowerCase().match('application/json') === null
      ) {
        onError(new ContentTypeError(xhr.status));

        return;
      }

      if (xhr.status === 417) {
        try {
          var invalidParameterJson = JSON.parse(xhr.responseText);

          onError(
            new InvalidParameterError(
              xhr.status,
              invalidParameterJson.message,
              invalidParameterJson.description
            )
          );
        } catch (error) {
          onError(new JsonParseError(xhr.status));
        }

        return;
      }

      if (xhr.status === 422) {
        try {
          var expectationFailedJson = JSON.parse(xhr.responseText);

          onError(
            new ExpectationFailedError(
              xhr.status,
              expectationFailedJson.message,
              expectationFailedJson.description
            )
          );
        } catch (error) {
          onError(new JsonParseError(xhr.status));
        }

        return;
      }

      if (xhr.status === 429) {
        try {
          var throttledJson = JSON.parse(xhr.responseText);

          onError(
            new ThrottledError(
              xhr.status,
              throttledJson.message,
              throttledJson.description,
              xhr.getResponseHeader('Retry-After')
            )
          );
        } catch (error) {
          onError(new JsonParseError(xhr.status));
        }

        return;
      }

      if (xhr.status === 200) {
        try {
          var res = JSON.parse(xhr.responseText);
          res.query = query;
          onSuccess(res);
        } catch (error) {
          onError(new JsonParseError(xhr.status));
        }

        return;
      }

      try {
        var genericErrorJson = JSON.parse(xhr.responseText);
        onError(
          new GenericError(
            xhr.status,
            genericErrorJson.message,
            genericErrorJson.description
          )
        );
      } catch (error) {
        onError(new JsonParseError(xhr.status));
      }

      return;
    };

    xhr.open(
      'get',
      route + '?q=' + encodeURIComponent(query) + '&' + queryParams
    );

    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.send();
  }

  function Cache(config) {
    this._store = {};
    this._keys = [];
    if (config && config.bucketSize) {
      this.bucketSize = config.bucketSize;
    } else {
      this.bucketSize = 20;
    }
  }

  Cache.prototype.set = function(key, value) {
    if (this.count() >= this.bucketSize) {
      var deleteKey = this._keys.splice(0, 1);
      this.delete(deleteKey);
    }

    this._keys.push(key);
    this._store[key] = value;

    return this._store;
  };

  Cache.prototype.get = function(key) {
    return this._store[key];
  };

  Cache.prototype.has = function(key) {
    return Boolean(this._store[key]);
  };

  Cache.prototype.count = function() {
    return Object.keys(this._store).length;
  };

  Cache.prototype.delete = function(key) {
    var exists = Boolean(this._store[key]);
    delete this._store[key];
    return exists && !this._store[key];
  };

  function Dispatcher() {
    this.events = {};
  }

  Dispatcher.prototype.on = function(eventName, callback) {
    var event = this.events[eventName];
    if (!event) {
      event = new DispatcherEvent(eventName);
      this.events[eventName] = event;
    }
    event.registerCallback(callback);
  };

  Dispatcher.prototype.off = function(eventName, callback) {
    var event = this.events[eventName];
    if (event && event.callbacks.indexOf(callback) > -1) {
      event.unregisterCallback(callback);
      if (event.callbacks.length === 0) {
        delete this.events[eventName];
      }
    }
  };

  Dispatcher.prototype.dispatch = function(eventName, payload) {
    var event = this.events[eventName];
    if (event) {
      event.fire(payload);
    }
  };

  function DispatcherEvent(eventName) {
    this.eventName = eventName;
    this.callbacks = [];
  }

  DispatcherEvent.prototype.registerCallback = function(callback) {
    this.callbacks.push(callback);
  };

  DispatcherEvent.prototype.unregisterCallback = function(callback) {
    var index = this.callbacks.indexOf(callback);
    if (index > -1) {
      this.callbacks.splice(index, 1);
    }
  };

  DispatcherEvent.prototype.fire = function(payload) {
    var callbacks = this.callbacks.slice(0);
    callbacks.forEach(function(callback) {
      callback(payload);
    });
  };

  function debounce(func, wait) {
    var timeout = null;
    return function() {
      var context = this;
      var args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(function() {
        timeout = null;
        func.apply(context, args);
      }, wait || 0);
    };
  }

  function objectToQueryParams(obj, parentKey) {
    var output = '';
    parentKey = parentKey || null;

    Object.keys(obj).forEach(function(key) {
      var outputKey = key + '=';
      if (parentKey) {
        outputKey = parentKey + '[' + key + ']';
      }

      switch (trueTypeOf(obj[key])) {
        case 'object':
          output += objectToQueryParams(obj[key], parentKey ? outputKey : key);
          break;
        case 'array':
          output += outputKey + '=' + obj[key].join(',') + '&';
          break;
        default:
          if (parentKey) {
            outputKey += '=';
          }
          output += outputKey + encodeURIComponent(obj[key]) + '&';
          break;
      }
    });

    return output;
  }

  function trueTypeOf(obj) {
    return Object.prototype.toString
      .call(obj)
      .slice(8, -1)
      .toLowerCase();
  }

  var DEBOUNCE_RATE = 10;
  var requestDebounced = debounce(request, DEBOUNCE_RATE);

  function PredictiveSearch(params, searchUrl) {
    if (!params) {
      throw new TypeError('No params object was specified');
    }

    this.searchUrl = searchUrl;

    this._retryAfter = null;
    this._currentQuery = null;

    this.dispatcher = new Dispatcher();
    this.cache = new Cache({ bucketSize: 40 });

    this.queryParams = objectToQueryParams(params);
  }

  PredictiveSearch.TYPES = {
    PRODUCT: 'product',
    PAGE: 'page',
    ARTICLE: 'article'
  };

  PredictiveSearch.FIELDS = {
    AUTHOR: 'author',
    BODY: 'body',
    PRODUCT_TYPE: 'product_type',
    TAG: 'tag',
    TITLE: 'title',
    VARIANTS_BARCODE: 'variants.barcode',
    VARIANTS_SKU: 'variants.sku',
    VARIANTS_TITLE: 'variants.title',
    VENDOR: 'vendor'
  };

  PredictiveSearch.UNAVAILABLE_PRODUCTS = {
    SHOW: 'show',
    HIDE: 'hide',
    LAST: 'last'
  };

  PredictiveSearch.prototype.query = function query(query) {
    try {
      validateQuery(query);
    } catch (error) {
      this.dispatcher.dispatch('error', error);
      return;
    }

    if (query === '') {
      return this;
    }

    this._currentQuery = normalizeQuery(query);
    var cacheResult = this.cache.get(this._currentQuery);
    if (cacheResult) {
      this.dispatcher.dispatch('success', cacheResult);
      return this;
    }

    requestDebounced(
      this.searchUrl,
      this.queryParams,
      query,
      function(result) {
        this.cache.set(normalizeQuery(result.query), result);
        if (normalizeQuery(result.query) === this._currentQuery) {
          this._retryAfter = null;
          this.dispatcher.dispatch('success', result);
        }
      }.bind(this),
      function(error) {
        if (error.retryAfter) {
          this._retryAfter = error.retryAfter;
        }
        this.dispatcher.dispatch('error', error);
      }.bind(this)
    );

    return this;
  };

  PredictiveSearch.prototype.on = function on(eventName, callback) {
    this.dispatcher.on(eventName, callback);

    return this;
  };

  PredictiveSearch.prototype.off = function on(eventName, callback) {
    this.dispatcher.off(eventName, callback);

    return this;
  };

  function normalizeQuery(query) {
    if (typeof query !== 'string') {
      return null;
    }

    return query
      .trim()
      .replace(' ', '-')
      .toLowerCase();
  }

  return PredictiveSearch;
})();

this.Shopify = this.Shopify || {};
this.Shopify.theme = this.Shopify.theme || {};
this.Shopify.theme.PredictiveSearchComponent = (function(PredictiveSearch) {
  'use strict';

  PredictiveSearch =
    PredictiveSearch && PredictiveSearch.hasOwnProperty('default')
      ? PredictiveSearch['default']
      : PredictiveSearch;

  var DEFAULT_PREDICTIVE_SEARCH_API_CONFIG = {
    resources: {
      type: [PredictiveSearch.TYPES.PRODUCT],
      options: {
        unavailable_products: PredictiveSearch.UNAVAILABLE_PRODUCTS.LAST,
        fields: [
          PredictiveSearch.FIELDS.TITLE,
          PredictiveSearch.FIELDS.VENDOR,
          PredictiveSearch.FIELDS.PRODUCT_TYPE,
          PredictiveSearch.FIELDS.VARIANTS_TITLE
        ]
      }
    }
  };

  function PredictiveSearchComponent(config) {
    // validate config
    if (
      !config ||
      !config.selectors ||
      !config.selectors.input ||
      !isString(config.selectors.input) ||
      !config.selectors.result ||
      !isString(config.selectors.result) ||
      !config.resultTemplateFct ||
      !isFunction(config.resultTemplateFct) ||
      !config.numberOfResultsTemplateFct ||
      !isFunction(config.numberOfResultsTemplateFct) ||
      !config.loadingResultsMessageTemplateFct ||
      !isFunction(config.loadingResultsMessageTemplateFct)
    ) {
      var error = new TypeError(
        'PredictiveSearchComponent config is not valid'
      );
      error.type = 'argument';
      throw error;
    }

    // Find nodes
    this.nodes = findNodes(config.selectors);

    // Validate nodes
    if (!isValidNodes(this.nodes)) {
      // eslint-disable-next-line no-console
      console.warn('Could not find valid nodes');
      return;
    }

    this.searchUrl = config.searchUrl || '/search';

    // Store the keyword that was used for the search
    this._searchKeyword = '';

    // Assign result template
    this.resultTemplateFct = config.resultTemplateFct;

    // Assign number of results template
    this.numberOfResultsTemplateFct = config.numberOfResultsTemplateFct;

    // Assign loading state template function
    this.loadingResultsMessageTemplateFct =
      config.loadingResultsMessageTemplateFct;

    // Assign number of search results
    this.numberOfResults = config.numberOfResults || 4;

    // Set classes
    this.classes = {
      visibleVariant: config.visibleVariant
        ? config.visibleVariant
        : 'predictive-search-wrapper--visible',
      itemSelected: config.itemSelectedClass
        ? config.itemSelectedClass
        : 'predictive-search-item--selected',
      clearButtonVisible: config.clearButtonVisibleClass
        ? config.clearButtonVisibleClass
        : 'predictive-search__clear-button--visible'
    };

    this.selectors = {
      searchResult: config.searchResult
        ? config.searchResult
        : '[data-search-result]'
    };

    // Assign callbacks
    this.callbacks = assignCallbacks(config);

    // Add input attributes
    addInputAttributes(this.nodes.input);

    // Add input event listeners
    this._addInputEventListeners();

    // Add body listener
    this._addBodyEventListener();

    // Add accessibility announcer
    this._addAccessibilityAnnouncer();

    // Display the reset button if the input is not empty
    this._toggleClearButtonVisibility();

    // Instantiate Predictive Search API
    this.predictiveSearch = new PredictiveSearch(
      config.PredictiveSearchAPIConfig
        ? config.PredictiveSearchAPIConfig
        : DEFAULT_PREDICTIVE_SEARCH_API_CONFIG,
      this.searchUrl
    );

    // Add predictive search success event listener
    this.predictiveSearch.on(
      'success',
      this._handlePredictiveSearchSuccess.bind(this)
    );

    // Add predictive search error event listener
    this.predictiveSearch.on(
      'error',
      this._handlePredictiveSearchError.bind(this)
    );
  }

  /**
   * Private methods
   */
  function findNodes(selectors) {
    return {
      input: document.querySelector(selectors.input),
      reset: document.querySelector(selectors.reset),
      result: document.querySelector(selectors.result)
    };
  }

  function isValidNodes(nodes) {
    if (
      !nodes ||
      !nodes.input ||
      !nodes.result ||
      nodes.input.tagName !== 'INPUT'
    ) {
      return false;
    }

    return true;
  }

  function assignCallbacks(config) {
    return {
      onBodyMousedown: config.onBodyMousedown,
      onBeforeOpen: config.onBeforeOpen,
      onOpen: config.onOpen,
      onBeforeClose: config.onBeforeClose,
      onClose: config.onClose,
      onInputFocus: config.onInputFocus,
      onInputKeyup: config.onInputKeyup,
      onInputBlur: config.onInputBlur,
      onInputReset: config.onInputReset,
      onBeforeDestroy: config.onBeforeDestroy,
      onDestroy: config.onDestroy
    };
  }

  function addInputAttributes(input) {
    input.setAttribute('autocorrect', 'off');
    input.setAttribute('autocomplete', 'off');
    input.setAttribute('autocapitalize', 'off');
    input.setAttribute('spellcheck', 'false');
  }

  function removeInputAttributes(input) {
    input.removeAttribute('autocorrect', 'off');
    input.removeAttribute('autocomplete', 'off');
    input.removeAttribute('autocapitalize', 'off');
    input.removeAttribute('spellcheck', 'false');
  }

  /**
   * Public variables
   */
  PredictiveSearchComponent.prototype.isResultVisible = false;
  PredictiveSearchComponent.prototype.results = {};

  /**
   * "Private" variables
   */
  PredictiveSearchComponent.prototype._latencyTimer = null;
  PredictiveSearchComponent.prototype._resultNodeClicked = false;

  /**
   * "Private" instance methods
   */
  PredictiveSearchComponent.prototype._addInputEventListeners = function() {
    var input = this.nodes.input;
    var reset = this.nodes.reset;

    if (!input) {
      return;
    }

    this._handleInputFocus = this._handleInputFocus.bind(this);
    this._handleInputBlur = this._handleInputBlur.bind(this);
    this._handleInputKeyup = this._handleInputKeyup.bind(this);
    this._handleInputKeydown = this._handleInputKeydown.bind(this);

    input.addEventListener('focus', this._handleInputFocus);
    input.addEventListener('blur', this._handleInputBlur);
    input.addEventListener('keyup', this._handleInputKeyup);
    input.addEventListener('keydown', this._handleInputKeydown);

    if (reset) {
      this._handleInputReset = this._handleInputReset.bind(this);
      reset.addEventListener('click', this._handleInputReset);
    }
  };

  PredictiveSearchComponent.prototype._removeInputEventListeners = function() {
    var input = this.nodes.input;

    input.removeEventListener('focus', this._handleInputFocus);
    input.removeEventListener('blur', this._handleInputBlur);
    input.removeEventListener('keyup', this._handleInputKeyup);
    input.removeEventListener('keydown', this._handleInputKeydown);
  };

  PredictiveSearchComponent.prototype._addBodyEventListener = function() {
    this._handleBodyMousedown = this._handleBodyMousedown.bind(this);

    document
      .querySelector('body')
      .addEventListener('mousedown', this._handleBodyMousedown);
  };

  PredictiveSearchComponent.prototype._removeBodyEventListener = function() {
    document
      .querySelector('body')
      .removeEventListener('mousedown', this._handleBodyMousedown);
  };

  PredictiveSearchComponent.prototype._removeClearButtonEventListener = function() {
    var reset = this.nodes.reset;

    if (!reset) {
      return;
    }

    reset.removeEventListener('click', this._handleInputReset);
  };

  /**
   * Event handlers
   */
  PredictiveSearchComponent.prototype._handleBodyMousedown = function(evt) {
    if (this.isResultVisible && this.nodes !== null) {
      if (
        evt.target.isEqualNode(this.nodes.input) ||
        this.nodes.input.contains(evt.target) ||
        evt.target.isEqualNode(this.nodes.result) ||
        this.nodes.result.contains(evt.target)
      ) {
        this._resultNodeClicked = true;
      } else {
        if (isFunction(this.callbacks.onBodyMousedown)) {
          var returnedValue = this.callbacks.onBodyMousedown(this.nodes);
          if (isBoolean(returnedValue) && returnedValue) {
            this.close();
          }
        } else {
          this.close();
        }
      }
    }
  };

  PredictiveSearchComponent.prototype._handleInputFocus = function(evt) {
    if (isFunction(this.callbacks.onInputFocus)) {
      var returnedValue = this.callbacks.onInputFocus(this.nodes);
      if (isBoolean(returnedValue) && !returnedValue) {
        return false;
      }
    }

    if (evt.target.value.length > 0) {
      this._search();
    }

    return true;
  };

  PredictiveSearchComponent.prototype._handleInputBlur = function() {
    // This has to be done async, to wait for the focus to be on the next
    // element and avoid closing the results.
    // Example: Going from the input to the reset button.
    setTimeout(
      function() {
        if (isFunction(this.callbacks.onInputBlur)) {
          var returnedValue = this.callbacks.onInputBlur(this.nodes);
          if (isBoolean(returnedValue) && !returnedValue) {
            return false;
          }
        }

        if (document.activeElement.isEqualNode(this.nodes.reset)) {
          return false;
        }

        if (this._resultNodeClicked) {
          this._resultNodeClicked = false;
          return false;
        }

        this.close();
      }.bind(this)
    );

    return true;
  };

  PredictiveSearchComponent.prototype._addAccessibilityAnnouncer = function() {
    this._accessibilityAnnouncerDiv = window.document.createElement('div');

    this._accessibilityAnnouncerDiv.setAttribute(
      'style',
      'position: absolute !important; overflow: hidden; clip: rect(0 0 0 0); height: 1px; width: 1px; margin: -1px; padding: 0; border: 0;'
    );

    this._accessibilityAnnouncerDiv.setAttribute('data-search-announcer', '');
    this._accessibilityAnnouncerDiv.setAttribute('aria-live', 'polite');
    this._accessibilityAnnouncerDiv.setAttribute('aria-atomic', 'true');

    this.nodes.result.parentElement.appendChild(
      this._accessibilityAnnouncerDiv
    );
  };

  PredictiveSearchComponent.prototype._removeAccessibilityAnnouncer = function() {
    this.nodes.result.parentElement.removeChild(
      this._accessibilityAnnouncerDiv
    );
  };

  PredictiveSearchComponent.prototype._updateAccessibilityAttributesAfterSelectingElement = function(
    previousSelectedElement,
    currentSelectedElement
  ) {
    // Update the active descendant on the search input
    this.nodes.input.setAttribute(
      'aria-activedescendant',
      currentSelectedElement.id
    );

    // Unmark the previousSelected elemented as selected
    if (previousSelectedElement) {
      previousSelectedElement.removeAttribute('aria-selected');
    }

    // Mark the element as selected
    currentSelectedElement.setAttribute('aria-selected', true);
  };

  PredictiveSearchComponent.prototype._clearAriaActiveDescendant = function() {
    this.nodes.input.setAttribute('aria-activedescendant', '');
  };

  PredictiveSearchComponent.prototype._announceNumberOfResultsFound = function(
    results
  ) {
    var currentAnnouncedMessage = this._accessibilityAnnouncerDiv.innerHTML;
    var newMessage = this.numberOfResultsTemplateFct(results);

    // If the messages are the same, they won't get announced
    // add white space so it gets announced
    if (currentAnnouncedMessage === newMessage) {
      newMessage = newMessage + '&nbsp;';
    }

    this._accessibilityAnnouncerDiv.innerHTML = newMessage;
  };

  PredictiveSearchComponent.prototype._announceLoadingState = function() {
    this._accessibilityAnnouncerDiv.innerHTML = this.loadingResultsMessageTemplateFct();
  };

  PredictiveSearchComponent.prototype._handleInputKeyup = function(evt) {
    var UP_ARROW_KEY_CODE = 38;
    var DOWN_ARROW_KEY_CODE = 40;
    var RETURN_KEY_CODE = 13;
    var ESCAPE_KEY_CODE = 27;

    if (isFunction(this.callbacks.onInputKeyup)) {
      var returnedValue = this.callbacks.onInputKeyup(this.nodes);
      if (isBoolean(returnedValue) && !returnedValue) {
        return false;
      }
    }

    this._toggleClearButtonVisibility();

    if (this.isResultVisible && this.nodes !== null) {
      if (evt.keyCode === UP_ARROW_KEY_CODE) {
        this._navigateOption(evt, 'UP');
        return true;
      }

      if (evt.keyCode === DOWN_ARROW_KEY_CODE) {
        this._navigateOption(evt, 'DOWN');
        return true;
      }

      if (evt.keyCode === RETURN_KEY_CODE) {
        this._selectOption();
        return true;
      }

      if (evt.keyCode === ESCAPE_KEY_CODE) {
        this.close();
      }
    }

    if (evt.target.value.length <= 0) {
      this.close();
      this._setKeyword('');
    } else if (evt.target.value.length > 0) {
      this._search();
    }

    return true;
  };

  PredictiveSearchComponent.prototype._handleInputKeydown = function(evt) {
    var RETURN_KEY_CODE = 13;
    var UP_ARROW_KEY_CODE = 38;
    var DOWN_ARROW_KEY_CODE = 40;

    // Prevent the form default submission if there is a selected option
    if (evt.keyCode === RETURN_KEY_CODE && this._getSelectedOption() !== null) {
      evt.preventDefault();
    }

    // Prevent the cursor from moving in the input when using the up and down arrow keys
    if (
      evt.keyCode === UP_ARROW_KEY_CODE ||
      evt.keyCode === DOWN_ARROW_KEY_CODE
    ) {
      evt.preventDefault();
    }
  };

  PredictiveSearchComponent.prototype._handleInputReset = function(evt) {
    evt.preventDefault();

    if (isFunction(this.callbacks.onInputReset)) {
      var returnedValue = this.callbacks.onInputReset(this.nodes);
      if (isBoolean(returnedValue) && !returnedValue) {
        return false;
      }
    }

    this.nodes.input.value = '';
    this.nodes.input.focus();
    this._toggleClearButtonVisibility();
    this.close();

    return true;
  };

  PredictiveSearchComponent.prototype._navigateOption = function(
    evt,
    direction
  ) {
    var currentOption = this._getSelectedOption();

    if (!currentOption) {
      var firstOption = this.nodes.result.querySelector(
        this.selectors.searchResult
      );
      firstOption.classList.add(this.classes.itemSelected);
      this._updateAccessibilityAttributesAfterSelectingElement(
        null,
        firstOption
      );
    } else {
      if (direction === 'DOWN') {
        var nextOption = currentOption.nextElementSibling;
        if (nextOption) {
          currentOption.classList.remove(this.classes.itemSelected);
          nextOption.classList.add(this.classes.itemSelected);
          this._updateAccessibilityAttributesAfterSelectingElement(
            currentOption,
            nextOption
          );
        }
      } else {
        var previousOption = currentOption.previousElementSibling;
        if (previousOption) {
          currentOption.classList.remove(this.classes.itemSelected);
          previousOption.classList.add(this.classes.itemSelected);
          this._updateAccessibilityAttributesAfterSelectingElement(
            currentOption,
            previousOption
          );
        }
      }
    }
  };

  PredictiveSearchComponent.prototype._getSelectedOption = function() {
    return this.nodes.result.querySelector('.' + this.classes.itemSelected);
  };

  PredictiveSearchComponent.prototype._selectOption = function() {
    var selectedOption = this._getSelectedOption();

    if (selectedOption) {
      selectedOption.querySelector('a, button').click();
    }
  };

  PredictiveSearchComponent.prototype._search = function() {
    var newSearchKeyword = this.nodes.input.value;

    if (this._searchKeyword === newSearchKeyword) {
      return;
    }

    clearTimeout(this._latencyTimer);
    this._latencyTimer = setTimeout(
      function() {
        this.results.isLoading = true;

        // Annonuce that we're loading the results
        this._announceLoadingState();

        this.nodes.result.classList.add(this.classes.visibleVariant);
        // NOTE: We could benifit in using DOMPurify.
        // https://github.com/cure53/DOMPurify
        this.nodes.result.innerHTML = this.resultTemplateFct(this.results);
      }.bind(this),
      500
    );

    this.predictiveSearch.query(newSearchKeyword);
    this._setKeyword(newSearchKeyword);
  };

  PredictiveSearchComponent.prototype._handlePredictiveSearchSuccess = function(
    json
  ) {
    clearTimeout(this._latencyTimer);
    this.results = json.resources.results;

    this.results.isLoading = false;
    this.results.products = this.results.products.slice(
      0,
      this.numberOfResults
    );
    this.results.canLoadMore =
      this.numberOfResults <= this.results.products.length;
    this.results.searchQuery = this.nodes.input.value;

    if (this.results.products.length > 0 || this.results.searchQuery) {
      this.nodes.result.innerHTML = this.resultTemplateFct(this.results);
      this._announceNumberOfResultsFound(this.results);
      this.open();
    } else {
      this.nodes.result.innerHTML = '';

      this._closeOnNoResults();
    }
  };

  PredictiveSearchComponent.prototype._handlePredictiveSearchError = function() {
    clearTimeout(this._latencyTimer);
    this.nodes.result.innerHTML = '';

    this._closeOnNoResults();
  };

  PredictiveSearchComponent.prototype._closeOnNoResults = function() {
    if (this.nodes) {
      this.nodes.result.classList.remove(this.classes.visibleVariant);
    }

    this.isResultVisible = false;
  };

  PredictiveSearchComponent.prototype._setKeyword = function(keyword) {
    this._searchKeyword = keyword;
  };

  PredictiveSearchComponent.prototype._toggleClearButtonVisibility = function() {
    if (!this.nodes.reset) {
      return;
    }

    if (this.nodes.input.value.length > 0) {
      this.nodes.reset.classList.add(this.classes.clearButtonVisible);
    } else {
      this.nodes.reset.classList.remove(this.classes.clearButtonVisible);
    }
  };

  /**
   * Public methods
   */
  PredictiveSearchComponent.prototype.open = function() {
    if (this.isResultVisible) {
      return;
    }

    if (isFunction(this.callbacks.onBeforeOpen)) {
      var returnedValue = this.callbacks.onBeforeOpen(this.nodes);
      if (isBoolean(returnedValue) && !returnedValue) {
        return false;
      }
    }

    this.nodes.result.classList.add(this.classes.visibleVariant);
    this.nodes.input.setAttribute('aria-expanded', true);
    this.isResultVisible = true;

    if (isFunction(this.callbacks.onOpen)) {
      return this.callbacks.onOpen(this.nodes) || true;
    }

    return true;
  };

  PredictiveSearchComponent.prototype.close = function() {
    if (!this.isResultVisible) {
      return true;
    }

    if (isFunction(this.callbacks.onBeforeClose)) {
      var returnedValue = this.callbacks.onBeforeClose(this.nodes);
      if (isBoolean(returnedValue) && !returnedValue) {
        return false;
      }
    }

    if (this.nodes) {
      this.nodes.result.classList.remove(this.classes.visibleVariant);
    }

    this.nodes.input.setAttribute('aria-expanded', false);
    this._clearAriaActiveDescendant();
    this._setKeyword('');

    if (isFunction(this.callbacks.onClose)) {
      this.callbacks.onClose(this.nodes);
    }

    this.isResultVisible = false;
    this.results = {};

    return true;
  };

  PredictiveSearchComponent.prototype.destroy = function() {
    this.close();

    if (isFunction(this.callbacks.onBeforeDestroy)) {
      var returnedValue = this.callbacks.onBeforeDestroy(this.nodes);
      if (isBoolean(returnedValue) && !returnedValue) {
        return false;
      }
    }

    this.nodes.result.classList.remove(this.classes.visibleVariant);
    removeInputAttributes(this.nodes.input);
    this._removeInputEventListeners();
    this._removeBodyEventListener();
    this._removeAccessibilityAnnouncer();
    this._removeClearButtonEventListener();

    if (isFunction(this.callbacks.onDestroy)) {
      this.callbacks.onDestroy(this.nodes);
    }

    return true;
  };

  PredictiveSearchComponent.prototype.clearAndClose = function() {
    this.nodes.input.value = '';
    this.close();
  };

  /**
   * Utilities
   */
  function getTypeOf(value) {
    return Object.prototype.toString.call(value);
  }

  function isString(value) {
    return getTypeOf(value) === '[object String]';
  }

  function isBoolean(value) {
    return getTypeOf(value) === '[object Boolean]';
  }

  function isFunction(value) {
    return getTypeOf(value) === '[object Function]';
  }

  return PredictiveSearchComponent;
})(Shopify.theme.PredictiveSearch);

window.theme = window.theme || {};

theme.TouchEvents = function TouchEvents(element, options) {
  this.axis;
  this.checkEvents = [];
  this.eventHandlers = {};
  this.eventModel = {};
  this.events = [
    ['touchstart', 'touchmove', 'touchend', 'touchcancel'],
    ['pointerdown', 'pointermove', 'pointerup', 'pointercancel'],
    ['mousedown', 'mousemove', 'mouseup']
  ];
  this.eventType;
  this.difference = {};
  this.direction;
  this.start = {};

  this.element = element;
  this.options = Object.assign(
    {},
    {
      dragThreshold: 10,
      start: function() {}, // eslint-disable-line
      move: function() {}, // eslint-disable-line
      end: function() {} // eslint-disable-line
    },
    options
  );

  this.checkEvents = this._getCheckEvents();
  this.eventModel = this._getEventModel();

  this._setupEventHandlers();
};

theme.TouchEvents.prototype = Object.assign({}, theme.TouchEvents.prototype, {
  destroy: function() {
    this.element.removeEventListener(
      'dragstart',
      this.eventHandlers.preventDefault
    );

    this.element.removeEventListener(
      this.events[this.eventModel][0],
      this.eventHandlers.touchStart
    );

    if (!this.eventModel) {
      this.element.removeEventListener(
        this.events[2][0],
        this.eventHandlers.touchStart
      );
    }

    this.element.removeEventListener('click', this.eventHandlers.preventClick);
  },

  _setupEventHandlers: function() {
    this.eventHandlers.preventDefault = this._preventDefault.bind(this);
    this.eventHandlers.preventClick = this._preventClick.bind(this);
    this.eventHandlers.touchStart = this._touchStart.bind(this);
    this.eventHandlers.touchMove = this._touchMove.bind(this);
    this.eventHandlers.touchEnd = this._touchEnd.bind(this);

    // Prevent element from dragging when using mouse
    this.element.addEventListener(
      'dragstart',
      this.eventHandlers.preventDefault
    );

    // Bind the touchstart/pointerdown event
    this.element.addEventListener(
      this.events[this.eventModel][0],
      this.eventHandlers.touchStart
    );

    // Bind mousedown if necessary
    if (!this.eventModel) {
      this.element.addEventListener(
        this.events[2][0],
        this.eventHandlers.touchStart
      );
    }

    // No clicking during touch
    this.element.addEventListener('click', this.eventHandlers.preventClick);
  },

  _touchStart: function(event) {
    this.eventType = this.eventModel;

    if (event.type === 'mousedown' && !this.eventModel) {
      this.eventType = 2;
    }

    if (this.checkEvents[this.eventType](event)) return;
    if (this.eventType) this._preventDefault(event);

    document.addEventListener(
      this.events[this.eventType][1],
      this.eventHandlers.touchMove
    );

    document.addEventListener(
      this.events[this.eventType][2],
      this.eventHandlers.touchEnd
    );

    if (this.eventType < 2) {
      document.addEventListener(
        this.events[this.eventType][3],
        this.eventHandlers.touchEnd
      );
    }

    this.start = {
      xPosition: this.eventType ? event.clientX : event.touches[0].clientX,
      yPosition: this.eventType ? event.clientY : event.touches[0].clientY,
      time: new Date().getTime()
    };

    // Ensure we empty out the this.difference object
    Object.keys(this.difference).forEach(
      function(key) {
        delete this.difference[key];
      }.bind(this)
    );

    this.options.start(event);
  },

  _touchMove: function(event) {
    this.difference = this._getDifference(event);

    // Prevent document from scrolling during swipe gesture
    document['on' + this.events[this.eventType][1]] = function(event) {
      this._preventDefault(event);
    }.bind(this);

    // Get the direction user is dragging
    if (!this.axis) {
      if (this.options.dragThreshold < Math.abs(this.difference.xPosition)) {
        this.axis = 'xPosition';
      } else if (
        this.options.dragThreshold < Math.abs(this.difference.yPosition)
      ) {
        this.axis = 'yPosition';
      } else {
        this.axis = false;
      }
    } else if (this.axis === 'xPosition') {
      this.direction = this.difference.xPosition < 0 ? 'left' : 'right';
    } else if (this.axis === 'yPosition') {
      this.direction = this.difference.yPosition < 0 ? 'up' : 'down';
    }

    this.options.move(event, this.direction, this.difference);
  },

  _touchEnd: function(event) {
    document.removeEventListener(
      this.events[this.eventType][1],
      this.eventHandlers.touchMove
    );

    document.removeEventListener(
      this.events[this.eventType][2],
      this.eventHandlers.touchEnd
    );

    if (this.eventType < 2) {
      document.removeEventListener(
        this.events[this.eventType][3],
        this.eventHandlers.touchEnd
      );
    }

    // Re-enable document scrolling
    document['on' + this.events[this.eventType][1]] = function() {
      return true;
    };

    this.options.end(event, this.direction, this.difference);
    this.axis = false;
  },

  _getDifference: function(event) {
    return {
      xPosition:
        (this.eventType ? event.clientX : event.touches[0].clientX) -
        this.start.xPosition,
      yPosition:
        (this.eventType ? event.clientY : event.touches[0].clientY) -
        this.start.yPosition,
      time: new Date().getTime() - this.start.time
    };
  },

  _getCheckEvents: function() {
    return [
      // Touch events
      function(event) {
        // Skip the event if it's a multi-touch or pinch move
        return (
          (event.touches && event.touches.length > 1) ||
          (event.scale && event.scale !== 1)
        );
      },
      // Pointer events
      function(event) {
        // Skip it, if:
        // 1. The event is not primary (other pointers during multi-touch),
        // 2. Left mouse button is not pressed,
        // 3. Event is not a touch event
        return (
          !event.isPrimary ||
          (event.buttons && event.buttons !== 1) ||
          (event.pointerType !== 'touch' && event.pointerType !== 'pen')
        );
      },
      // Mouse events
      function(event) {
        // Skip the event if left mouse button is not pressed
        return event.buttons && event.buttons !== 1;
      }
    ];
  },

  _getEventModel: function() {
    return window.navigator.pointerEnabled ? 1 : 0;
  },

  _preventDefault: function(event) {
    event.preventDefault ? event.preventDefault() : (event.returnValue = false);
  },

  _preventClick: function(event) {
    if (Math.abs(this.difference.xPosition) > this.options.dragThreshold) {
      this._preventDefault(event);
    }
  }
});


/* ================ GLOBAL ================ */
/*============================================================================
  Drawer modules
==============================================================================*/
theme.Drawers = (function() {
  function Drawer(id, position, options) {
    var DEFAULT_OPEN_CLASS = 'js-drawer-open';
    var DEFAULT_CLOSE_CLASS = 'js-drawer-close';

    var defaults = {
      selectors: {
        openVariant: '.' + DEFAULT_OPEN_CLASS + '-' + position,
        close: '.' + DEFAULT_CLOSE_CLASS
      },
      classes: {
        open: DEFAULT_OPEN_CLASS,
        openVariant: DEFAULT_OPEN_CLASS + '-' + position
      },
      withPredictiveSearch: false
    };

    this.nodes = {
      parents: [document.documentElement, document.body],
      page: document.getElementById('PageContainer')
    };

    this.eventHandlers = {};

    this.config = Object.assign({}, defaults, options);
    this.position = position;
    this.drawer = document.getElementById(id);

    if (!this.drawer) {
      return false;
    }

    this.drawerIsOpen = false;
    this.init();
  }

  Drawer.prototype.init = function() {
    document
      .querySelector(this.config.selectors.openVariant)
      .addEventListener('click', this.open.bind(this));
    this.drawer
      .querySelector(this.config.selectors.close)
      .addEventListener('click', this.close.bind(this));
  };

  Drawer.prototype.open = function(evt) {
    // Keep track if drawer was opened from a click, or called by another function
    var externalCall = false;

    // Prevent following href if link is clicked
    if (evt) {
      evt.preventDefault();
    } else {
      externalCall = true;
    }

    // Without this, the drawer opens, the click event bubbles up to nodes.page
    // which closes the drawer.
    if (evt && evt.stopPropagation) {
      evt.stopPropagation();
      // save the source of the click, we'll focus to this on close
      this.activeSource = evt.currentTarget;
    }

    if (this.drawerIsOpen && !externalCall) {
      return this.close();
    }

    // Add is-transitioning class to moved elements on open so drawer can have
    // transition for close animation
    if (!this.config.withPredictiveSearch) {
      theme.Helpers.prepareTransition(this.drawer);
    }

    this.nodes.parents.forEach(
      function(parent) {
        parent.classList.add(
          this.config.classes.open,
          this.config.classes.openVariant
        );
      }.bind(this)
    );

    this.drawerIsOpen = true;

    // Run function when draw opens if set
    if (
      this.config.onDrawerOpen &&
      typeof this.config.onDrawerOpen === 'function'
    ) {
      if (!externalCall) {
        this.config.onDrawerOpen();
      }
    }

    if (this.activeSource && this.activeSource.hasAttribute('aria-expanded')) {
      this.activeSource.setAttribute('aria-expanded', 'true');
    }

    // Set focus on drawer
    var trapFocusConfig = {
      container: this.drawer
    };

    if (this.config.elementToFocusOnOpen) {
      trapFocusConfig.elementToFocus = this.config.elementToFocusOnOpen;
    }

    slate.a11y.trapFocus(trapFocusConfig);

    this.bindEvents();

    return this;
  };

  Drawer.prototype.close = function() {
    if (!this.drawerIsOpen) {
      // don't close a closed drawer
      return;
    }

    // deselect any focused form elements
    document.activeElement.dispatchEvent(
      new CustomEvent('blur', { bubbles: true, cancelable: true })
    );

    // Ensure closing transition is applied to moved elements, like the nav
    if (!this.config.withPredictiveSearch) {
      theme.Helpers.prepareTransition(this.drawer);
    }

    this.nodes.parents.forEach(
      function(parent) {
        parent.classList.remove(
          this.config.classes.open,
          this.config.classes.openVariant
        );
      }.bind(this)
    );

    if (this.activeSource && this.activeSource.hasAttribute('aria-expanded')) {
      this.activeSource.setAttribute('aria-expanded', 'false');
    }

    this.drawerIsOpen = false;

    // Remove focus on drawer
    slate.a11y.removeTrapFocus({
      container: this.drawer
    });

    this.unbindEvents();

    // Run function when draw closes if set
    if (
      this.config.onDrawerClose &&
      typeof this.config.onDrawerClose === 'function'
    ) {
      this.config.onDrawerClose();
    }
  };

  Drawer.prototype.bindEvents = function() {
    this.eventHandlers.drawerKeyupHandler = function(evt) {
      // close on 'esc' keypress
      if (evt.keyCode === 27) {
        this.close();
        return false;
      } else {
        return true;
      }
    }.bind(this);

    this.eventHandlers.drawerTouchmoveHandler = function() {
      return false;
    };

    this.eventHandlers.drawerClickHandler = function() {
      this.close();
      return false;
    }.bind(this);

    // Add event listener to document body
    document.body.addEventListener(
      'keyup',
      this.eventHandlers.drawerKeyupHandler
    );

    // Lock scrolling on mobile
    this.nodes.page.addEventListener(
      'touchmove',
      this.eventHandlers.drawerTouchmoveHandler
    );

    this.nodes.page.addEventListener(
      'click',
      this.eventHandlers.drawerClickHandler
    );
  };

  Drawer.prototype.unbindEvents = function() {
    this.nodes.page.removeEventListener(
      'touchmove',
      this.eventHandlers.drawerTouchmoveHandler
    );
    this.nodes.page.removeEventListener(
      'click',
      this.eventHandlers.drawerClickHandler
    );
    document.body.removeEventListener(
      'keyup',
      this.eventHandlers.drawerKeyupHandler
    );
  };

  return Drawer;
})();

theme.Helpers = (function() {
  var touchDevice = false;

  var classes = {
    preventScrolling: 'prevent-scrolling'
  };

  var scrollPosition = window.pageYOffset;

  function setTouch() {
    touchDevice = true;
  }

  function isTouch() {
    return touchDevice;
  }

  function enableScrollLock() {
    scrollPosition = window.pageYOffset;
    document.body.style.top = '-' + scrollPosition + 'px';
    document.body.classList.add(classes.preventScrolling);
  }

  function disableScrollLock() {
    document.body.classList.remove(classes.preventScrolling);
    document.body.style.removeProperty('top');
    window.scrollTo(0, scrollPosition);
  }

  function debounce(func, wait, immediate) {
    var timeout;

    return function() {
      var context = this,
        args = arguments;

      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };

      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  function getScript(source, beforeEl) {
    return new Promise(function(resolve, reject) {
      var script = document.createElement('script');
      var prior = beforeEl || document.getElementsByTagName('script')[0];

      script.async = true;
      script.defer = true;

      // eslint-disable-next-line shopify/prefer-early-return
      function onloadHander(_, isAbort) {
        if (
          isAbort ||
          !script.readyState ||
          /loaded|complete/.test(script.readyState)
        ) {
          script.onload = null;
          script.onreadystatechange = null;
          script = undefined;

          if (isAbort) {
            reject();
          } else {
            resolve();
          }
        }
      }

      script.onload = onloadHander;
      script.onreadystatechange = onloadHander;

      script.src = source;
      prior.parentNode.insertBefore(script, prior);
    });
  }

  /* Based on the prepareTransition by Jonathan Snook */
  /* Jonathan Snook - MIT License - https://github.com/snookca/prepareTransition */
  function prepareTransition(element) {
    element.addEventListener(
      'transitionend',
      function(event) {
        event.currentTarget.classList.remove('is-transitioning');
      },
      { once: true }
    );

    var properties = [
      'transition-duration',
      '-moz-transition-duration',
      '-webkit-transition-duration',
      '-o-transition-duration'
    ];

    var duration = 0;

    properties.forEach(function(property) {
      var computedValue = getComputedStyle(element)[property];

      if (computedValue) {
        computedValue.replace(/\D/g, '');
        duration || (duration = parseFloat(computedValue));
      }
    });

    if (duration !== 0) {
      element.classList.add('is-transitioning');
      element.offsetWidth;
    }
  }

  /*!
   * Serialize all form data into a SearchParams string
   * (c) 2020 Chris Ferdinandi, MIT License, https://gomakethings.com
   * @param  {Node}   form The form to serialize
   * @return {String}      The serialized form data
   */
  function serialize(form) {
    var arr = [];
    Array.prototype.slice.call(form.elements).forEach(function(field) {
      if (
        !field.name ||
        field.disabled ||
        ['file', 'reset', 'submit', 'button'].indexOf(field.type) > -1
      )
        return;
      if (field.type === 'select-multiple') {
        Array.prototype.slice.call(field.options).forEach(function(option) {
          if (!option.selected) return;
          arr.push(
            encodeURIComponent(field.name) +
              '=' +
              encodeURIComponent(option.value)
          );
        });
        return;
      }
      if (['checkbox', 'radio'].indexOf(field.type) > -1 && !field.checked)
        return;
      arr.push(
        encodeURIComponent(field.name) + '=' + encodeURIComponent(field.value)
      );
    });
    return arr.join('&');
  }
  function cookiesEnabled() {
    var cookieEnabled = navigator.cookieEnabled;

    if (!cookieEnabled) {
      document.cookie = 'testcookie';
      cookieEnabled = document.cookie.indexOf('testcookie') !== -1;
    }

    return cookieEnabled;
  }

  function promiseStylesheet(stylesheet) {
    var stylesheetUrl = stylesheet || theme.stylesheet;

    if (typeof this.stylesheetPromise === 'undefined') {
      this.stylesheetPromise = new Promise(function(resolve) {
        var link = document.querySelector('link[href="' + stylesheetUrl + '"]');

        if (link.loaded) resolve();

        link.addEventListener('load', function() {
          setTimeout(resolve, 0);
        });
      });
    }

    return this.stylesheetPromise;
  }

  return {
    setTouch: setTouch,
    isTouch: isTouch,
    enableScrollLock: enableScrollLock,
    disableScrollLock: disableScrollLock,
    debounce: debounce,
    getScript: getScript,
    prepareTransition: prepareTransition,
    serialize: serialize,
    cookiesEnabled: cookiesEnabled,
    promiseStylesheet: promiseStylesheet
  };
})();

theme.LibraryLoader = (function() {
  var types = {
    link: 'link',
    script: 'script'
  };

  var status = {
    requested: 'requested',
    loaded: 'loaded'
  };

  var cloudCdn = 'https://cdn.shopify.com/shopifycloud/';

  var libraries = {
    plyrShopifyStyles: {
      tagId: 'plyr-shopify-styles',
      src: cloudCdn + 'plyr/v2.0/shopify-plyr.css',
      type: types.link
    },
    modelViewerUiStyles: {
      tagId: 'shopify-model-viewer-ui-styles',
      src: cloudCdn + 'model-viewer-ui/assets/v1.0/model-viewer-ui.css',
      type: types.link
    }
  };

  function load(libraryName, callback) {
    var library = libraries[libraryName];

    if (!library) return;
    if (library.status === status.requested) return;

    callback = callback || function() {};
    if (library.status === status.loaded) {
      callback();
      return;
    }

    library.status = status.requested;

    var tag;

    switch (library.type) {
      case types.script:
        tag = createScriptTag(library, callback);
        break;
      case types.link:
        tag = createLinkTag(library, callback);
        break;
    }

    tag.id = library.tagId;
    library.element = tag;

    var firstScriptTag = document.getElementsByTagName(library.type)[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }

  function createScriptTag(library, callback) {
    var tag = document.createElement('script');
    tag.src = library.src;
    tag.addEventListener('load', function() {
      library.status = status.loaded;
      callback();
    });
    return tag;
  }

  function createLinkTag(library, callback) {
    var tag = document.createElement('link');
    tag.href = library.src;
    tag.rel = 'stylesheet';
    tag.type = 'text/css';
    tag.addEventListener('load', function() {
      library.status = status.loaded;
      callback();
    });
    return tag;
  }

  return {
    load: load
  };
})();


/* ================ MODULES ================ */
window.theme = window.theme || {};

theme.Header = (function() {
  var selectors = {
    body: 'body',
    navigation: '#AccessibleNav',
    siteNavHasDropdown: '[data-has-dropdowns]',
    siteNavChildLinks: '.site-nav__child-link',
    siteNavActiveDropdown: '.site-nav--active-dropdown',
    siteNavHasCenteredDropdown: '.site-nav--has-centered-dropdown',
    siteNavCenteredDropdown: '.site-nav__dropdown--centered',
    siteNavLinkMain: '.site-nav__link--main',
    siteNavChildLink: '.site-nav__link--last',
    siteNavDropdown: '.site-nav__dropdown',
    siteHeader: '.site-header'
  };

  var config = {
    activeClass: 'site-nav--active-dropdown',
    childLinkClass: 'site-nav__child-link',
    rightDropdownClass: 'site-nav__dropdown--right',
    leftDropdownClass: 'site-nav__dropdown--left'
  };

  var cache = {};

  function init() {
    cacheSelectors();
    styleDropdowns(document.querySelectorAll(selectors.siteNavHasDropdown));
    positionFullWidthDropdowns();

    cache.parents.forEach(function(element) {
      element.addEventListener('click', submenuParentClickHandler);
    });

    // check when we're leaving a dropdown and close the active dropdown
    cache.siteNavChildLink.forEach(function(element) {
      element.addEventListener('focusout', submenuFocusoutHandler);
    });

    cache.topLevel.forEach(function(element) {
      element.addEventListener('focus', hideDropdown);
    });

    cache.subMenuLinks.forEach(function(element) {
      element.addEventListener('click', stopImmediatePropagation);
    });

    window.addEventListener('resize', resizeHandler);
  }

  function stopImmediatePropagation(event) {
    event.stopImmediatePropagation();
  }

  function cacheSelectors() {
    var navigation = document.querySelector(selectors.navigation);

    cache = {
      nav: navigation,
      topLevel: document.querySelectorAll(selectors.siteNavLinkMain),
      parents: navigation.querySelectorAll(selectors.siteNavHasDropdown),
      subMenuLinks: document.querySelectorAll(selectors.siteNavChildLinks),
      activeDropdown: document.querySelector(selectors.siteNavActiveDropdown),
      siteHeader: document.querySelector(selectors.siteHeader),
      siteNavChildLink: document.querySelectorAll(selectors.siteNavChildLink)
    };
  }

  function showDropdown(element) {
    element.classList.add(config.activeClass);

    if (cache.activeDropdown) hideDropdown();

    cache.activeDropdown = element;

    element
      .querySelector(selectors.siteNavLinkMain)
      .setAttribute('aria-expanded', 'true');

    setTimeout(function() {
      window.addEventListener('keyup', keyUpHandler);
      document.body.addEventListener('click', hideDropdown);
    }, 250);
  }

  function hideDropdown() {
    if (!cache.activeDropdown) return;

    cache.activeDropdown
      .querySelector(selectors.siteNavLinkMain)
      .setAttribute('aria-expanded', 'false');
    cache.activeDropdown.classList.remove(config.activeClass);

    cache.activeDropdown = document.querySelector(
      selectors.siteNavActiveDropdown
    );

    window.removeEventListener('keyup', keyUpHandler);
    document.body.removeEventListener('click', hideDropdown);
  }

  function styleDropdowns(dropdownListItems) {
    dropdownListItems.forEach(function(item) {
      var dropdownLi = item.querySelector(selectors.siteNavDropdown);

      if (!dropdownLi) return;

      if (isRightOfLogo(item)) {
        dropdownLi.classList.remove(config.leftDropdownClass);
        dropdownLi.classList.add(config.rightDropdownClass);
      } else {
        dropdownLi.classList.remove(config.rightDropdownClass);
        dropdownLi.classList.add(config.leftDropdownClass);
      }
    });
  }

  function isRightOfLogo(item) {
    var rect = item.getBoundingClientRect();
    var win = item.ownerDocument.defaultView;
    var leftOffset = rect.left + win.pageXOffset;

    var headerWidth = Math.floor(cache.siteHeader.offsetWidth) / 2;
    return leftOffset > headerWidth;
  }

  function positionFullWidthDropdowns() {
    document
      .querySelectorAll(selectors.siteNavHasCenteredDropdown)
      .forEach(function(el) {
        var fullWidthDropdown = el.querySelector(
          selectors.siteNavCenteredDropdown
        );

        var fullWidthDropdownOffset = el.offsetTop + 41;
        fullWidthDropdown.style.top = fullWidthDropdownOffset + 'px';
      });
  }

  function keyUpHandler(event) {
    if (event.keyCode === 27) hideDropdown();
  }

  function resizeHandler() {
    adjustStyleAndPosition();
  }

  function submenuParentClickHandler(event) {
    var element = event.currentTarget;

    element.classList.contains(config.activeClass)
      ? hideDropdown()
      : showDropdown(element);
  }

  function submenuFocusoutHandler() {
    setTimeout(function() {
      if (
        document.activeElement.classList.contains(config.childLinkClass) ||
        !cache.activeDropdown
      ) {
        return;
      }

      hideDropdown();
    });
  }

  var adjustStyleAndPosition = theme.Helpers.debounce(function() {
    styleDropdowns(document.querySelectorAll(selectors.siteNavHasDropdown));
    positionFullWidthDropdowns();
  }, 50);

  function unload() {
    cache.topLevel.forEach(function(element) {
      element.removeEventListener('focus', hideDropdown);
    });

    cache.subMenuLinks.forEach(function(element) {
      element.removeEventListener('click', stopImmediatePropagation);
    });

    cache.parents.forEach(function(element) {
      element.removeEventListener('click', submenuParentClickHandler);
    });

    cache.siteNavChildLink.forEach(function(element) {
      element.removeEventListener('focusout', submenuFocusoutHandler);
    });

    window.removeEventListener('resize', resizeHandler);
    window.removeEventListener('keyup', keyUpHandler);
    document.body.removeEventListener('click', hideDropdown);
  }

  return {
    init: init,
    unload: unload
  };
})();

window.theme = window.theme || {};

theme.MobileNav = (function() {
  var classes = {
    mobileNavOpenIcon: 'mobile-nav--open',
    mobileNavCloseIcon: 'mobile-nav--close',
    navLinkWrapper: 'mobile-nav__item',
    navLink: 'mobile-nav__link',
    subNavLink: 'mobile-nav__sublist-link',
    return: 'mobile-nav__return-btn',
    subNavActive: 'is-active',
    subNavClosing: 'is-closing',
    navOpen: 'js-menu--is-open',
    subNavShowing: 'sub-nav--is-open',
    thirdNavShowing: 'third-nav--is-open',
    subNavToggleBtn: 'js-toggle-submenu'
  };

  var cache = {};
  var isTransitioning;
  var activeSubNav;
  var activeTrigger;
  var menuLevel = 1;
  var mediumUpQuery = '(min-width: ' + theme.breakpoints.medium + 'px)';
  var mql = window.matchMedia(mediumUpQuery);

  function init() {
    cacheSelectors();

    if (cache.mobileNavToggle) {
      cache.mobileNavToggle.addEventListener('click', toggleMobileNav);
    }

    cache.subNavToggleBtns.forEach(function(element) {
      element.addEventListener('click', toggleSubNav);
    });

    mql.addListener(initBreakpoints);
  }

  function initBreakpoints() {
    if (
      mql.matches &&
      cache.mobileNavContainer.classList.contains(classes.navOpen)
    ) {
      closeMobileNav();
    }
  }

  function toggleMobileNav() {
    var mobileNavIsOpen = cache.mobileNavToggle.classList.contains(
      classes.mobileNavCloseIcon
    );

    if (mobileNavIsOpen) {
      closeMobileNav();
    } else {
      openMobileNav();
    }
  }

  function cacheSelectors() {
    cache = {
      pageContainer: document.querySelector('#PageContainer'),
      siteHeader: document.querySelector('.site-header'),
      mobileNavToggle: document.querySelector('.js-mobile-nav-toggle'),
      mobileNavContainer: document.querySelector('.mobile-nav-wrapper'),
      mobileNav: document.querySelector('#MobileNav'),
      sectionHeader: document.querySelector('#shopify-section-header'),
      subNavToggleBtns: document.querySelectorAll('.' + classes.subNavToggleBtn)
    };
  }

  function openMobileNav() {
    var translateHeaderHeight = cache.siteHeader.offsetHeight;

    theme.Helpers.prepareTransition(cache.mobileNavContainer);
    cache.mobileNavContainer.classList.add(classes.navOpen);

    cache.mobileNavContainer.style.transform =
      'translateY(' + translateHeaderHeight + 'px)';

    cache.pageContainer.style.transform =
      'translate3d(0, ' + cache.mobileNavContainer.scrollHeight + 'px, 0)';

    slate.a11y.trapFocus({
      container: cache.sectionHeader,
      elementToFocus: cache.mobileNavToggle
    });

    cache.mobileNavToggle.classList.add(classes.mobileNavCloseIcon);
    cache.mobileNavToggle.classList.remove(classes.mobileNavOpenIcon);
    cache.mobileNavToggle.setAttribute('aria-expanded', true);

    window.addEventListener('keyup', keyUpHandler);
  }

  function keyUpHandler(event) {
    if (event.which === 27) {
      closeMobileNav();
    }
  }

  function closeMobileNav() {
    theme.Helpers.prepareTransition(cache.mobileNavContainer);
    cache.mobileNavContainer.classList.remove(classes.navOpen);
    cache.mobileNavContainer.style.transform = 'translateY(-100%)';
    cache.pageContainer.setAttribute('style', '');

    slate.a11y.trapFocus({
      container: document.querySelector('html'),
      elementToFocus: document.body
    });

    cache.mobileNavContainer.addEventListener(
      'transitionend',
      mobileNavRemoveTrapFocus,
      { once: true }
    );

    cache.mobileNavToggle.classList.add(classes.mobileNavOpenIcon);
    cache.mobileNavToggle.classList.remove(classes.mobileNavCloseIcon);
    cache.mobileNavToggle.setAttribute('aria-expanded', false);
    cache.mobileNavToggle.focus();

    window.removeEventListener('keyup', keyUpHandler);
    window.scrollTo(0, 0);
  }

  function mobileNavRemoveTrapFocus() {
    slate.a11y.removeTrapFocus({
      container: cache.mobileNav
    });
  }

  function toggleSubNav(event) {
    if (isTransitioning) return;

    var toggleBtn = event.currentTarget;
    var isReturn = toggleBtn.classList.contains(classes.return);

    isTransitioning = true;

    if (isReturn) {
      var subNavToggleBtn = document.querySelectorAll(
        '.' + classes.subNavToggleBtn + "[data-level='" + (menuLevel - 1) + "']"
      );

      subNavToggleBtn.forEach(function(element) {
        element.classList.remove(classes.subNavActive);
      });

      if (activeTrigger) {
        activeTrigger.classList.remove(classes.subNavActive);
      }
    } else {
      toggleBtn.classList.add(classes.subNavActive);
    }

    activeTrigger = toggleBtn;

    goToSubnav(toggleBtn.getAttribute('data-target'));
  }

  function goToSubnav(target) {
    var targetMenu = target
      ? document.querySelector(
          '.mobile-nav__dropdown[data-parent="' + target + '"]'
        )
      : cache.mobileNav;

    menuLevel = targetMenu.dataset.level ? Number(targetMenu.dataset.level) : 1;

    if (activeSubNav) {
      theme.Helpers.prepareTransition(activeSubNav);
      activeSubNav.classList.add(classes.subNavClosing);
    }

    activeSubNav = targetMenu;

    var translateMenuHeight = targetMenu.offsetHeight;

    var openNavClass =
      menuLevel > 2 ? classes.thirdNavShowing : classes.subNavShowing;

    cache.mobileNavContainer.style.height = translateMenuHeight + 'px';
    cache.mobileNavContainer.classList.remove(classes.thirdNavShowing);
    cache.mobileNavContainer.classList.add(openNavClass);

    if (!target) {
      cache.mobileNavContainer.classList.remove(
        classes.thirdNavShowing,
        classes.subNavShowing
      );
    }

    /* if going back to first subnav, focus is on whole header */
    var container = menuLevel === 1 ? cache.sectionHeader : targetMenu;

    cache.mobileNavContainer.addEventListener(
      'transitionend',
      trapMobileNavFocus,
      { once: true }
    );

    function trapMobileNavFocus() {
      slate.a11y.trapFocus({
        container: container
      });

      cache.mobileNavContainer.removeEventListener(
        'transitionend',
        trapMobileNavFocus
      );

      isTransitioning = false;
    }

    // Match height of subnav
    cache.pageContainer.style.transform =
      'translateY(' + translateMenuHeight + 'px)';

    activeSubNav.classList.remove(classes.subNavClosing);
  }

  function unload() {
    mql.removeListener(initBreakpoints);
  }

  return {
    init: init,
    unload: unload,
    closeMobileNav: closeMobileNav
  };
})();

window.Modals = (function() {
  function Modal(id, name, options) {
    var defaults = {
      close: '.js-modal-close',
      open: '.js-modal-open-' + name,
      openClass: 'modal--is-active',
      closeModalOnClick: false
    };

    this.modal = document.getElementById(id);

    if (!this.modal) return false;

    this.nodes = {
      parents: [document.querySelector('html'), document.body]
    };

    this.config = Object.assign(defaults, options);

    this.modalIsOpen = false;

    this.focusOnOpen = this.config.focusOnOpen
      ? document.getElementById(this.config.focusOnOpen)
      : this.modal;

    this.openElement = document.querySelector(this.config.open);
    this.init();
  }

  Modal.prototype.init = function() {
    this.openElement.addEventListener('click', this.open.bind(this));

    this.modal
      .querySelector(this.config.close)
      .addEventListener('click', this.closeModal.bind(this));
  };

  Modal.prototype.open = function(evt) {
    var self = this;
    // Keep track if modal was opened from a click, or called by another function
    var externalCall = false;

    if (this.modalIsOpen) return;

    // Prevent following href if link is clicked
    if (evt) {
      evt.preventDefault();
    } else {
      externalCall = true;
    }

    // Without this, the modal opens, the click event bubbles up
    // which closes the modal.
    if (evt && evt.stopPropagation) {
      evt.stopPropagation();
    }

    if (this.modalIsOpen && !externalCall) {
      this.closeModal();
    }

    this.modal.classList.add(this.config.openClass);

    this.nodes.parents.forEach(function(node) {
      node.classList.add(self.config.openClass);
    });

    this.modalIsOpen = true;

    slate.a11y.trapFocus({
      container: this.modal,
      elementToFocus: this.focusOnOpen
    });

    this.bindEvents();
  };

  Modal.prototype.closeModal = function() {
    if (!this.modalIsOpen) return;

    document.activeElement.blur();

    this.modal.classList.remove(this.config.openClass);

    var self = this;

    this.nodes.parents.forEach(function(node) {
      node.classList.remove(self.config.openClass);
    });

    this.modalIsOpen = false;

    slate.a11y.removeTrapFocus({
      container: this.modal
    });

    this.openElement.focus();

    this.unbindEvents();
  };

  Modal.prototype.bindEvents = function() {
    this.keyupHandler = this.keyupHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    document.body.addEventListener('keyup', this.keyupHandler);
    document.body.addEventListener('click', this.clickHandler);
  };

  Modal.prototype.unbindEvents = function() {
    document.body.removeEventListener('keyup', this.keyupHandler);
    document.body.removeEventListener('click', this.clickHandler);
  };

  Modal.prototype.keyupHandler = function(event) {
    if (event.keyCode === 27) {
      this.closeModal();
    }
  };

  Modal.prototype.clickHandler = function(event) {
    if (this.config.closeModalOnClick && !this.modal.contains(event.target)) {
      this.closeModal();
    }
  };

  return Modal;
})();

(function() {
  var selectors = {
    backButton: '.return-link'
  };

  var backButton = document.querySelector(selectors.backButton);

  if (!document.referrer || !backButton || !window.history.length) {
    return;
  }

  backButton.addEventListener(
    'click',
    function(evt) {
      evt.preventDefault();

      var referrerDomain = urlDomain(document.referrer);
      var shopDomain = urlDomain(window.location.href);

      if (shopDomain === referrerDomain) {
        history.back();
      }

      return false;
    },
    { once: true }
  );

  function urlDomain(url) {
    var anchor = document.createElement('a');
    anchor.ref = url;

    return anchor.hostname;
  }
})();

theme.Slideshow = (function() {
  var selectors = {
    button: '[data-slider-button]',
    indicator: '[data-slider-indicator]',
    indicators: '[data-slider-indicators]',
    pause: '[data-slider-pause]',
    slider: '[data-slider]',
    sliderItem: '[data-slider-item]',
    sliderItemLink: '[data-slider-item-link]',
    sliderTrack: '[data-slider-track]',
    sliderContainer: '[data-slider-container]'
  };

  var classes = {
    isPaused: 'slideshow__pause--is-paused',
    indicator: 'slider-indicators__item',
    indicatorActive: 'slick-active',
    sliderInitialized: 'slick-initialized',
    slideActive: 'slideshow__slide--active',
    slideClone: 'slick-cloned'
  };

  var attributes = {
    buttonNext: 'data-slider-button-next'
  };

  function Slideshow(container, options) {
    this.container = container;
    this.slider = this.container.querySelector(selectors.slider);

    if (!this.slider) return;

    this.eventHandlers = {};
    this.lastSlide = 0;
    this.slideIndex = 0;
    this.sliderContainer = null;
    this.slides = [];
    this.options = Object.assign(
      {},
      {
        autoplay: false,
        canUseKeyboardArrows: true,
        canUseTouchEvents: false,
        slideActiveClass: classes.slideActive,
        slideInterval: 0,
        slidesToShow: 0,
        slidesToScroll: 1,
        type: 'fade'
      },
      options
    );

    this.sliderContainer = this.slider.querySelector(selectors.sliderContainer);
    this.adaptHeight =
      this.sliderContainer.getAttribute('data-adapt-height') === 'true';
    this.slides = Array.from(
      this.sliderContainer.querySelectorAll(selectors.sliderItem)
    );
    // adding -1 to accomodate Array order
    this.lastSlide = this.slides.length - 1;
    this.buttons = this.container.querySelectorAll(selectors.button);
    this.pause = this.container.querySelector(selectors.pause);
    this.indicators = this.container.querySelectorAll(selectors.indicators);

    if (this.slides.length <= 1) return;

    this.timeout = 250;

    if (this.options.autoplay) {
      this.startAutoplay();
    }

    if (this.adaptHeight) {
      this.setSlideshowHeight();
    }

    if (this.options.type === 'slide') {
      this.isFirstSlide = false;
      this.isLastSlide = false;
      this.sliderItemWidthTotal = 0;
      this.sliderTrack = this.slider.querySelector(selectors.sliderTrack);
      // added setTimeout due to matchMedia calling too early
      // which result wrong value when getting dimension from an element
      this.sliderItemWidthTotal = 0;
      theme.Helpers.promiseStylesheet().then(
        function() {
          this._setupSlideType();
        }.bind(this)
      );
    } else {
      this.setupSlider(0);
    }

    this._setupEventHandlers();
  }

  Slideshow.prototype = Object.assign({}, Slideshow.prototype, {
    /**
     * Moves to the previous slide
     */
    previousSlide: function() {
      this._move();
    },

    /**
     * Moves to the next slide
     */
    nextSlide: function() {
      this._move('next');
    },

    /**
     * Moves to the specified slide
     * @param {Number} index - The index of the slide to move to
     */
    setSlide: function(index) {
      this._setPosition(Number(index));
    },

    /**
     * Starts autoplaying the slider if autoplay is enabled
     */
    startAutoplay: function() {
      this.isAutoPlaying = true;

      window.clearTimeout(this.autoTimeOut);

      this.autoTimeOut = window.setTimeout(
        function() {
          var nextSlideIndex = this._getNextSlideIndex('next');
          this._setPosition(nextSlideIndex);
        }.bind(this),
        this.options.slideInterval
      );
    },

    /**
     * Stops autoplaying the slider if autoplay is enabled
     */
    stopAutoplay: function() {
      this.isAutoPlaying = false;

      window.clearTimeout(this.autoTimeOut);
    },

    /**
     * Set active states for sliders and indicators
     * @param {index} integer - Slide index to set up slider from
     */
    setupSlider: function(index) {
      this.slideIndex = index;

      if (this.indicators.length) {
        this._setActiveIndicator(index);
      }

      this._setupActiveSlide(index);
    },

    /**
     * Removes event listeners, among other things when wanting to destroy the
     * slider instance. This method needs to be called manually and will most
     * likely be included in a section's onUnload() method.
     */
    destroy: function() {
      if (this.adaptHeight) {
        window.removeEventListener('resize', this.eventHandlers.debounceResize);
      }

      this.container.removeEventListener(
        'focus',
        this.eventHandlers.focus,
        true
      );
      this.slider.removeEventListener(
        'focusin',
        this.eventHandlers.focusIn,
        true
      );
      this.slider.removeEventListener(
        'focusout',
        this.eventHandlers.focusOut,
        true
      );
      this.container.removeEventListener('blur', this.eventHandlers.blur, true);

      if (this.buttons) {
        this.buttons.forEach(
          function(button) {
            button.removeEventListener('click', this.eventHandlers.clickButton);
          }.bind(this)
        );
      }

      this.indicators.forEach(function(indicatorWrapper) {
        indicatorWrapper.childNodes.forEach(function(indicator) {
          indicator.firstElementChild.removeEventListener(
            'click',
            this.eventHandlers.onClickIndicator
          );

          indicator.firstElementChild.removeEventListener(
            'keydown',
            this.eventHandlers.onKeydownIndicator
          );
        }, this);
      }, this);

      if (this.options.type === 'slide') {
        window.removeEventListener(
          'resize',
          this.eventHandlers.debounceResizeSlideIn
        );

        if (this.touchEvents && this.options.canUseTouchEvents) {
          this.touchEvents.destroy();
          this.touchEvents = null;
        }
      }
    },

    _setupEventHandlers: function() {
      this.eventHandlers.focus = this._onFocus.bind(this);
      this.eventHandlers.focusIn = this._onFocusIn.bind(this);
      this.eventHandlers.focusOut = this._onFocusOut.bind(this);
      this.eventHandlers.blur = this._onBlur.bind(this);
      this.eventHandlers.keyUp = this._onKeyUp.bind(this);
      this.eventHandlers.clickButton = this._onClickButton.bind(this);
      this.eventHandlers.onClickIndicator = this._onClickIndicator.bind(this);
      this.eventHandlers.onKeydownIndicator = this._onKeydownIndicator.bind(
        this
      );
      this.eventHandlers.onClickPause = this._onClickPause.bind(this);

      if (this.adaptHeight) {
        this.eventHandlers.debounceResize = theme.Helpers.debounce(
          function() {
            this.setSlideshowHeight();
          }.bind(this),
          50
        );

        window.addEventListener('resize', this.eventHandlers.debounceResize);
      }

      this.container.addEventListener('focus', this.eventHandlers.focus, true);
      this.slider.addEventListener('focusin', this.eventHandlers.focusIn, true);
      this.slider.addEventListener(
        'focusout',
        this.eventHandlers.focusOut,
        true
      );
      this.container.addEventListener('blur', this.eventHandlers.blur, true);

      if (this.buttons) {
        this.buttons.forEach(
          function(button) {
            button.addEventListener('click', this.eventHandlers.clickButton);
          }.bind(this)
        );
      }

      if (this.pause) {
        this.pause.addEventListener('click', this.eventHandlers.onClickPause);
      }

      this.indicators.forEach(function(indicatorWrapper) {
        indicatorWrapper.childNodes.forEach(function(indicator) {
          indicator.firstElementChild.addEventListener(
            'click',
            this.eventHandlers.onClickIndicator
          );

          indicator.firstElementChild.addEventListener(
            'keydown',
            this.eventHandlers.onKeydownIndicator
          );
        }, this);
      }, this);

      if (this.options.type === 'slide') {
        this.eventHandlers.debounceResizeSlideIn = theme.Helpers.debounce(
          function() {
            this.sliderItemWidthTotal = 0;
            this._setupSlideType(true);
          }.bind(this),
          50
        );

        window.addEventListener(
          'resize',
          this.eventHandlers.debounceResizeSlideIn
        );

        if (
          this.options.canUseTouchEvents &&
          this.options.slidesToScroll < this.slides.length
        ) {
          this._setupTouchEvents();
        }
      }
    },

    _setupTouchEvents: function() {
      this.touchEvents = new theme.TouchEvents(this.sliderTrack, {
        start: function() {
          this._onTouchStart();
        }.bind(this),
        move: function(event, direction, difference) {
          this._onTouchMove(event, direction, difference);
        }.bind(this),
        end: function(event, direction, difference) {
          this._onTouchEnd(event, direction, difference);
        }.bind(this)
      });
    },

    /**
     * Set slideshop for "slide-in" effect
     * @param {Boolean} onResize if function call came from resize event
     */
    _setupSlideType: function(onResize) {
      this.sliderItemWidth = Math.floor(
        this.sliderContainer.offsetWidth / this.options.slidesToShow
      );
      this.sliderTranslateXMove =
        this.sliderItemWidth * this.options.slidesToScroll;

      if (!onResize) {
        this.sliderContainer.classList.add(classes.sliderInitialized);
      }

      // Loop through all slider items
      // Set width according to the number of items to show in 1 slide
      // Set container width to accomodate all items
      this.slides.forEach(function(sliderItem, index) {
        var sliderItemLink = sliderItem.querySelector(selectors.sliderItemLink);
        sliderItem.style.width = this.sliderItemWidth + 'px';
        sliderItem.setAttribute('aria-hidden', true);
        sliderItem.setAttribute('tabindex', -1);
        this.sliderItemWidthTotal =
          this.sliderItemWidthTotal + sliderItem.offsetWidth;

        if (sliderItemLink) {
          sliderItemLink.setAttribute('tabindex', -1);
        }

        if (index < this.options.slidesToShow) {
          sliderItem.setAttribute('aria-hidden', false);
          sliderItem.classList.add(this.options.slideActiveClass);

          if (sliderItemLink) {
            sliderItemLink.setAttribute('tabindex', 0);
          }
        }
      }, this);

      this.sliderTrack.style.width =
        Math.floor(this.sliderItemWidthTotal) + 'px';
      this.sliderTrack.style.transform = 'translateX(-0px)';

      // set disabled attribute on Previous button
      if (this.buttons.length) {
        this.buttons[0].setAttribute('aria-disabled', true);
        this.buttons[1].removeAttribute('aria-disabled');
      }

      if (this.indicators.length) {
        this._setActiveIndicator(0);
      }
    },

    _onTouchStart: function() {
      this.touchStartPosition = this._getTranslateXPosition();
    },

    _onTouchMove: function(event, direction, difference) {
      // Fix touch events cause unexpected behaviour
      // when the dragging motion goes beyond the theme editor preview.
      var threshold = 80;
      if (
        Shopify.designMode &&
        (event.clientX <= threshold ||
          event.clientX >= window.innerWidth - threshold)
      ) {
        event.target.dispatchEvent(
          new MouseEvent('mouseup', {
            bubbles: true,
            cancelable: true
          })
        );
        return;
      }

      if (direction !== 'left' && direction !== 'right') return;

      this.touchMovePosition = this.touchStartPosition + difference.xPosition;

      this.sliderTrack.style.transform =
        'translateX(' + this.touchMovePosition + 'px';
    },

    _onTouchEnd: function(event, direction, difference) {
      var nextTranslateXPosition = 0;

      if (Object.keys(difference).length === 0) return;

      var slideDirection = direction === 'left' ? 'next' : '';

      if (direction === 'left') {
        if (this._isNextTranslateXLast(this.touchStartPosition)) {
          nextTranslateXPosition = this.touchStartPosition;
        } else {
          nextTranslateXPosition =
            this.touchStartPosition - this.sliderTranslateXMove;
        }
      } else {
        nextTranslateXPosition =
          this.touchStartPosition + this.sliderTranslateXMove;
        if (this._isNextTranslateXFirst(this.touchStartPosition)) {
          nextTranslateXPosition = 0;
        }
      }

      this.slideIndex = this._getNextSlideIndex(slideDirection);

      this.sliderTrack.style.transition = 'transform 500ms ease 0s';
      this.sliderTrack.style.transform =
        'translateX(' + nextTranslateXPosition + 'px';

      window.setTimeout(
        function() {
          this.sliderTrack.style.transition = '';
        }.bind(this),
        500
      );

      this._verifyFirstLastSlideTranslateX(nextTranslateXPosition);

      this._postTransitionEnd();
    },

    /**
     * Events handlers for next and previous button
     * @param {Object} event event handler
     */
    _onClickButton: function(event) {
      // prevent multiple clicks
      if (event.detail > 1) return;

      var button = event.currentTarget;
      var nextButton = button.hasAttribute(attributes.buttonNext);

      if (
        this.options.type === 'slide' &&
        button.getAttribute('aria-disabled') === 'true'
      ) {
        return;
      }

      if (this.options.autoplay && this.isAutoPlaying) {
        this.stopAutoplay();
      }

      if (nextButton) {
        this.nextSlide();
      } else {
        this.previousSlide();
      }
    },

    _onClickIndicator: function(event) {
      event.preventDefault();

      if (event.target.classList.contains(classes.indicatorActive)) return;

      if (this.options.autoplay && this.isAutoPlaying) {
        this.stopAutoplay();
      }

      this.slideIndex = Number(event.target.dataset.slideNumber);
      this.goToSlideByIndex(this.slideIndex);
    },

    goToSlideByIndex: function(index) {
      this._setPosition(index);

      if (this.options.type === 'slide' && this.sliderTrack) {
        this.sliderTrack.style.transition = 'transform 500ms ease 0s';
        var newPosition = index * this.slides[0].offsetWidth;

        this.sliderTrack.style.transform = 'translateX(-' + newPosition + 'px)';

        if (this.options.slidesToShow > 1) {
          this._verifyFirstLastSlideTranslateX(newPosition);

          if (this.buttons.length) {
            this._disableArrows();
          }

          this._setupMultipleActiveSlide(
            index,
            index + (this.options.slidesToShow - 1)
          );
        }
      }
    },

    _onKeydownIndicator: function(event) {
      if (event.keyCode !== slate.utils.keyboardKeys.ENTER) return;

      this._onClickIndicator(event);

      this.slider.focus();
    },

    _onClickPause: function(event) {
      if (!event.currentTarget.classList.contains(classes.isPaused)) {
        event.currentTarget.classList.add(classes.isPaused);
        this.stopAutoplay();
      } else {
        event.currentTarget.classList.remove(classes.isPaused);
        this.startAutoplay();
      }
    },

    _onFocus: function() {
      this.container.addEventListener('keyup', this.eventHandlers.keyUp);
    },

    _onFocusIn: function() {
      if (this.slider.hasAttribute('aria-live')) return;

      if (this.options.autoplay && this.isAutoPlaying) {
        this.stopAutoplay();
      }

      this.slider.setAttribute('aria-live', 'polite');
    },

    _onBlur: function() {
      this.container.removeEventListener('keyup', this.eventHandlers.keyUp);
    },

    _onFocusOut: function() {
      this.slider.removeAttribute('aria-live');

      // Adding a setTimeout because everytime we focus out
      // It automatically goes to <body>
      // We want to resume autoplay when focus is outside of the slideshow container
      setTimeout(
        function() {
          if (
            !document.activeElement.closest(
              '#' + this.slider.getAttribute('id')
            )
          ) {
            if (
              this.options.autoplay &&
              !this.isAutoPlaying &&
              !this.pause.classList.contains(classes.isPaused)
            ) {
              this.startAutoplay();
            }
          }
        }.bind(this),
        this.timeout
      );
    },

    _onKeyUp: function(event) {
      switch (event.keyCode) {
        case slate.utils.keyboardKeys.LEFTARROW:
          if (!this.options.canUseKeyboardArrows) return;

          if (this.options.type === 'slide' && this.isFirstSlide) {
            return;
          }

          this.previousSlide();

          break;
        case slate.utils.keyboardKeys.RIGHTARROW:
          if (!this.options.canUseKeyboardArrows) return;

          if (this.options.type === 'slide' && this.isLastSlide) {
            return;
          }

          this.nextSlide();

          break;
        case slate.utils.keyboardKeys.ESCAPE:
          this.slider.blur();
          break;
      }
    },

    _move: function(direction) {
      if (this.options.type === 'slide') {
        this.slideIndex = this._getNextSlideIndex(direction);
        this._moveSlideshow(direction);
      } else {
        var nextSlideIndex = this._getNextSlideIndex(direction);
        this._setPosition(nextSlideIndex);
      }
    },

    _moveSlideshow: function(direction) {
      this.direction = direction;
      var valueXToMove = 0;

      // Get current position of translateX
      var currentTranslateXPosition = this._getTranslateXPosition();
      var currentActiveSlidesIndex = this._getActiveSlidesIndex();

      // In the future, we'll use ES6 deconstructure
      // Math.min(...currentActiveSlidesIndex);
      var currentActiveSlidesMinIndex = Math.min.apply(
        Math,
        currentActiveSlidesIndex
      );
      var currentActiveSlidesMaxIndex = Math.max.apply(
        Math,
        currentActiveSlidesIndex
      );

      // Set the next active state depending on the direction
      // We bump up the index depending on the "slidesToShow" option
      this.nextMinIndex =
        direction === 'next'
          ? currentActiveSlidesMinIndex + this.options.slidesToShow
          : currentActiveSlidesMinIndex - this.options.slidesToShow;
      this.nextMaxIndex =
        direction === 'next'
          ? currentActiveSlidesMaxIndex + this.options.slidesToShow
          : currentActiveSlidesMinIndex - 1;

      this.sliderTrack.style.transition = 'transform 500ms ease 0s';

      if (direction === 'next') {
        valueXToMove = currentTranslateXPosition - this.sliderTranslateXMove;
        this.sliderTrack.style.transform = 'translateX(' + valueXToMove + 'px)';
      } else {
        valueXToMove = currentTranslateXPosition + this.sliderTranslateXMove;
        this.sliderTrack.style.transform = 'translateX(' + valueXToMove + 'px)';
      }

      this._verifyFirstLastSlideTranslateX(valueXToMove);

      this._postTransitionEnd();

      this._setupMultipleActiveSlide(this.nextMinIndex, this.nextMaxIndex);
    },

    _setPosition: function(nextSlideIndex) {
      this.slideIndex = nextSlideIndex;

      if (this.indicators.length) {
        this._setActiveIndicator(nextSlideIndex);
      }

      this._setupActiveSlide(nextSlideIndex);

      if (this.options.autoplay && this.isAutoPlaying) {
        this.startAutoplay();
      }

      this.container.dispatchEvent(
        new CustomEvent('slider_slide_changed', {
          detail: nextSlideIndex
        })
      );
    },

    _setupActiveSlide: function(index) {
      this.slides.forEach(function(slide) {
        slide.setAttribute('aria-hidden', true);
        slide.classList.remove(this.options.slideActiveClass);
      }, this);

      this.slides[index].setAttribute('aria-hidden', false);
      this.slides[index].classList.add(this.options.slideActiveClass);
    },

    /**
     * Loops through all slide items
     * Set the active state depending the direction and slide indexes
     * Because slide-in effect can have multiple items in 1 slide, we need to target multiple active elements
     * @param {String} direction "next" for next slides or empty string for previous
     * @param {*} minIndex the current active minimum index
     * @param {*} maxIndex the current active maximum index
     */
    _setupMultipleActiveSlide: function(minIndex, maxIndex) {
      this.slides.forEach(function(slide) {
        var sliderIndex = Number(slide.getAttribute('data-slider-slide-index'));
        var sliderItemLink = slide.querySelector(selectors.sliderItemLink);

        slide.setAttribute('aria-hidden', true);
        slide.classList.remove(this.options.slideActiveClass);
        if (sliderItemLink) {
          sliderItemLink.setAttribute('tabindex', -1);
        }

        if (sliderIndex >= minIndex && sliderIndex <= maxIndex) {
          slide.setAttribute('aria-hidden', false);
          slide.classList.add(this.options.slideActiveClass);

          if (sliderItemLink) {
            sliderItemLink.setAttribute('tabindex', 0);
          }
        }
      }, this);
    },

    _setActiveIndicator: function(index) {
      this.indicators.forEach(function(indicatorWrapper) {
        var activeIndicator = indicatorWrapper.querySelector(
          '.' + classes.indicatorActive
        );

        var nextIndicator = indicatorWrapper.childNodes[index];

        if (activeIndicator) {
          activeIndicator.setAttribute('aria-selected', false);
          activeIndicator.classList.remove(classes.indicatorActive);
          activeIndicator.firstElementChild.removeAttribute('aria-current');
        }

        nextIndicator.classList.add(classes.indicatorActive);
        nextIndicator.setAttribute('aria-selected', true);
        nextIndicator.firstElementChild.setAttribute('aria-current', true);
      }, this);
    },

    setSlideshowHeight: function() {
      var minAspectRatio = this.sliderContainer.getAttribute(
        'data-min-aspect-ratio'
      );
      this.sliderContainer.style.height =
        document.documentElement.offsetWidth / minAspectRatio + 'px';
    },

    /**
     * Increase or decrease index position of the slideshow
     * Automatically auto-rotate
     * - Last slide goes to first slide when clicking "next"
     * - First slide goes to last slide when clicking "previous"
     * @param {String} direction "next" as a String, other empty string is previous slide
     */
    _getNextSlideIndex: function(direction) {
      var counter = direction === 'next' ? 1 : -1;

      if (direction === 'next') {
        if (this.slideIndex === this.lastSlide) {
          return this.options.type === 'slide' ? this.lastSlide : 0;
        }
      } else if (!this.slideIndex) {
        return this.options.type === 'slide' ? 0 : this.lastSlide;
      }

      return this.slideIndex + counter;
    },

    /**
     * In "slide-in" type, multiple items are active in 1 slide
     * This will return an array containing their indexes
     */
    _getActiveSlidesIndex: function() {
      var currentActiveSlides = this.slides.filter(function(sliderItem) {
        if (sliderItem.classList.contains(this.options.slideActiveClass)) {
          return sliderItem;
        }
      }, this);
      var currentActiveSlidesIndex = currentActiveSlides.map(function(
        sliderItem
      ) {
        return Number(sliderItem.getAttribute('data-slider-slide-index'));
      });

      return currentActiveSlidesIndex;
    },

    /**
     * This checks the next "translateX" value and verifies
     * If it's at the last slide or beginning of the slide
     * So we can disable the arrow buttons
     */
    _disableArrows: function() {
      if (this.buttons.length === 0) return;

      var previousButton = this.buttons[0];
      var nextButton = this.buttons[1];

      // first slide
      if (this.isFirstSlide) {
        previousButton.setAttribute('aria-disabled', true);
      } else {
        previousButton.removeAttribute('aria-disabled');
      }

      // last slide
      if (this.isLastSlide) {
        nextButton.setAttribute('aria-disabled', true);
      } else {
        nextButton.removeAttribute('aria-disabled');
      }
    },

    /**
     * Verify if translateX reaches at first or last slide
     * @param {Number} translateXValue
     */
    _verifyFirstLastSlideTranslateX: function(translateXValue) {
      // first slide
      if (this._isNextTranslateXFirst(translateXValue)) {
        this.isFirstSlide = true;
      } else {
        this.isFirstSlide = false;
      }

      // last slide
      if (this._isNextTranslateXLast(translateXValue)) {
        this.isLastSlide = true;
      } else {
        this.isLastSlide = false;
      }
    },

    _getTranslateXPosition: function() {
      return Number(this.sliderTrack.style.transform.match(/(-?[0-9]+)/g)[0]);
    },

    _isNextTranslateXFirst: function(translateXValue) {
      return translateXValue === 0;
    },

    _isNextTranslateXLast: function(translateXValue) {
      // because translateX values are using negative, I'm converting into positive value
      var translateXValueAbsolute = Math.abs(translateXValue);
      var nextTranslateXValue =
        translateXValueAbsolute + this.sliderTranslateXMove;

      return nextTranslateXValue >= this.sliderItemWidthTotal;
    },

    _postTransitionEnd: function() {
      if (this.buttons.length) {
        this._disableArrows();
      }

      if (this.indicators.length) {
        this._setActiveIndicator(this.slideIndex);
      }
    }
  });

  return Slideshow;
})();

theme.Video = (function() {
  var autoplayCheckComplete = false;
  var playOnClickChecked = false;
  var playOnClick = false;
  var youtubeLoaded = false;
  var videos = {};
  var videoPlayers = [];
  var videoOptions = {
    ratio: 16 / 9,
    scrollAnimationDuration: 400,
    playerVars: {
      // eslint-disable-next-line camelcase
      iv_load_policy: 3,
      modestbranding: 1,
      autoplay: 0,
      controls: 0,
      wmode: 'opaque',
      branding: 0,
      autohide: 0,
      rel: 0
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerChange
    }
  };
  var classes = {
    playing: 'video-is-playing',
    paused: 'video-is-paused',
    loading: 'video-is-loading',
    loaded: 'video-is-loaded',
    backgroundVideoWrapper: 'video-background-wrapper',
    videoWithImage: 'video--image_with_play',
    backgroundVideo: 'video--background',
    userPaused: 'is-paused',
    supportsAutoplay: 'autoplay',
    supportsNoAutoplay: 'no-autoplay',
    wrapperMinHeight: 'video-section-wrapper--min-height'
  };

  var selectors = {
    section: '.video-section',
    videoWrapper: '.video-section-wrapper',
    playVideoBtn: '.video-control__play',
    closeVideoBtn: '.video-control__close-wrapper',
    pauseVideoBtn: '.video__pause',
    pauseVideoStop: '.video__pause-stop',
    pauseVideoResume: '.video__pause-resume',
    fallbackText: '.icon__fallback-text'
  };

  /**
   * Public functions
   */
  function init(video) {
    if (!video) return;

    videos[video.id] = {
      id: video.id,
      videoId: video.dataset.id,
      type: video.dataset.type,
      status:
        video.dataset.type === 'image_with_play' ? 'closed' : 'background', // closed, open, background
      video: video,
      videoWrapper: video.closest(selectors.videoWrapper),
      section: video.closest(selectors.section),
      controls: video.dataset.type === 'background' ? 0 : 1
    };

    if (!youtubeLoaded) {
      // This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    playOnClickCheck();
  }

  function customPlayVideo(playerId) {
    // Make sure we have carried out the playOnClick check first
    if (!playOnClickChecked && !playOnClick) {
      return;
    }

    if (playerId && typeof videoPlayers[playerId].playVideo === 'function') {
      privatePlayVideo(playerId);
    }
  }

  function pauseVideo(playerId) {
    if (
      videoPlayers[playerId] &&
      typeof videoPlayers[playerId].pauseVideo === 'function'
    ) {
      videoPlayers[playerId].pauseVideo();
    }
  }

  function loadVideos() {
    for (var key in videos) {
      if (videos.hasOwnProperty(key)) {
        createPlayer(key);
      }
    }

    initEvents();
    youtubeLoaded = true;
  }

  function editorLoadVideo(key) {
    if (!youtubeLoaded) {
      return;
    }
    createPlayer(key);

    initEvents();
  }

  /**
   * Private functions
   */

  function privatePlayVideo(id, clicked) {
    var videoData = videos[id];
    var player = videoPlayers[id];
    var videoWrapper = videoData.videoWrapper;

    if (playOnClick) {
      // playOnClick means we are probably on mobile (no autoplay).
      // setAsPlaying will show the iframe, requiring another click
      // to play the video.
      setAsPlaying(videoData);
    } else if (clicked || autoplayCheckComplete) {
      // Play if autoplay is available or clicked to play
      videoWrapper.classList.remove(classes.loading);
      setAsPlaying(videoData);
      player.playVideo();
      return;
    } else {
      player.playVideo();
    }
  }

  function setAutoplaySupport(supported) {
    var supportClass = supported
      ? classes.supportsAutoplay
      : classes.supportsNoAutoplay;
    document.documentElement.classList.remove(
      classes.supportsAutoplay,
      classes.supportsNoAutoplay
    );
    document.documentElement.classList.add(supportClass);

    if (!supported) {
      playOnClick = true;
    }

    autoplayCheckComplete = true;
  }

  function playOnClickCheck() {
    if (playOnClickChecked) {
      return;
    }

    if (isMobile()) {
      playOnClick = true;
    }

    if (playOnClick) {
      // No need to also do the autoplay check
      setAutoplaySupport(false);
    }

    playOnClickChecked = true;
  }

  // The API will call this function when each video player is ready
  function onPlayerReady(evt) {
    evt.target.setPlaybackQuality('hd1080');
    var videoData = getVideoOptions(evt);
    var videoTitle = evt.target.getVideoData().title;
    playOnClickCheck();

    // Prevent tabbing through YouTube player controls until visible
    document.getElementById(videoData.id).setAttribute('tabindex', '-1');

    sizeBackgroundVideos();
    setButtonLabels(videoData.videoWrapper, videoTitle);

    // Customize based on options from the video ID
    if (videoData.type === 'background') {
      evt.target.mute();
      privatePlayVideo(videoData.id);
    }

    videoData.videoWrapper.classList.add(classes.loaded);
  }

  function onPlayerChange(evt) {
    var videoData = getVideoOptions(evt);
    if (
      videoData.status === 'background' &&
      !isMobile() &&
      !autoplayCheckComplete &&
      (evt.data === YT.PlayerState.PLAYING ||
        evt.data === YT.PlayerState.BUFFERING)
    ) {
      setAutoplaySupport(true);
      autoplayCheckComplete = true;
      videoData.videoWrapper.classList.remove(classes.loading);
    }
    switch (evt.data) {
      case YT.PlayerState.ENDED:
        setAsFinished(videoData);
        break;
      case YT.PlayerState.PAUSED:
        // Seeking on a YouTube video also fires a PAUSED state change,
        // checking the state after a delay prevents us pausing the video when
        // the user is seeking instead of pausing
        setTimeout(function() {
          if (evt.target.getPlayerState() === YT.PlayerState.PAUSED) {
            setAsPaused(videoData);
          }
        }, 200);
        break;
    }
  }

  function setAsFinished(videoData) {
    switch (videoData.type) {
      case 'background':
        videoPlayers[videoData.id].seekTo(0);
        break;
      case 'image_with_play':
        closeVideo(videoData.id);
        toggleExpandVideo(videoData.id, false);
        break;
    }
  }

  function setAsPlaying(videoData) {
    var videoWrapper = videoData.videoWrapper;
    var pauseButton = videoWrapper.querySelector(selectors.pauseVideoBtn);

    videoWrapper.classList.remove(classes.loading);

    if (pauseButton.classList.contains(classes.userPaused)) {
      pauseButton.classList.remove(classes.userPaused);
    }

    // Do not change element visibility if it is a background video
    if (videoData.status === 'background') {
      return;
    }

    document.getElementById(videoData.id).setAttribute('tabindex', '0');

    if (videoData.type === 'image_with_play') {
      videoWrapper.classList.remove(classes.paused);
      videoWrapper.classList.add(classes.playing);
    }

    // Update focus to the close button so we stay within the video wrapper,
    // allowing time for the scroll animation
    setTimeout(function() {
      videoWrapper.querySelector(selectors.closeVideoBtn).focus();
    }, videoOptions.scrollAnimationDuration);
  }

  function setAsPaused(videoData) {
    var videoWrapper = videoData.videoWrapper;

    // YT's events fire after our click event. This status flag ensures
    // we don't interact with a closed or background video.
    if (videoData.type === 'image_with_play') {
      if (videoData.status === 'closed') {
        videoWrapper.classList.remove(classes.paused);
      } else {
        videoWrapper.classList.add(classes.paused);
      }
    }

    videoWrapper.classList.remove(classes.playing);
  }

  function closeVideo(playerId) {
    var videoData = videos[playerId];
    var videoWrapper = videoData.videoWrapper;

    document.getElementById(videoData.id).setAttribute('tabindex', '-1');

    videoData.status = 'closed';

    switch (videoData.type) {
      case 'image_with_play':
        videoPlayers[playerId].stopVideo();
        setAsPaused(videoData); // in case the video is already paused
        break;
      case 'background':
        videoPlayers[playerId].mute();
        setBackgroundVideo(playerId);
        break;
    }

    videoWrapper.classList.remove(classes.paused, classes.playing);
  }

  function getVideoOptions(evt) {
    var id = evt.target.getIframe().id;
    return videos[id];
  }

  function toggleExpandVideo(playerId, expand) {
    var video = videos[playerId];
    var elementTop =
      video.videoWrapper.getBoundingClientRect().top + window.pageYOffset;
    var playButton = video.videoWrapper.querySelector(selectors.playVideoBtn);
    var offset = 0;
    var newHeight = 0;

    if (isMobile()) {
      video.videoWrapper.parentElement.classList.toggle('page-width', !expand);
    }

    if (expand) {
      if (isMobile()) {
        newHeight = window.innerWidth / videoOptions.ratio;
      } else {
        newHeight = video.videoWrapper.offsetWidth / videoOptions.ratio;
      }
      offset = (window.innerHeight - newHeight) / 2;

      video.videoWrapper.style.height =
        video.videoWrapper.getBoundingClientRect().height + 'px';
      video.videoWrapper.classList.remove(classes.wrapperMinHeight);
      video.videoWrapper.style.height = newHeight + 'px';

      // Animate doesn't work in mobile editor, so we don't use it
      if (!(isMobile() && Shopify.designMode)) {
        var scrollBehavior = document.documentElement.style.scrollBehavior;
        document.documentElement.style.scrollBehavior = 'smooth';
        window.scrollTo({ top: elementTop - offset });
        document.documentElement.style.scrollBehavior = scrollBehavior;
      }
    } else {
      if (isMobile()) {
        newHeight = video.videoWrapper.dataset.mobileHeight;
      } else {
        newHeight = video.videoWrapper.dataset.desktopHeight;
      }

      video.videoWrapper.style.height = newHeight + 'px';

      setTimeout(function() {
        video.videoWrapper.classList.add(classes.wrapperMinHeight);
      }, 600);
      // Set focus on play button, but don't scroll page
      var x = window.scrollX;
      var y = window.scrollY;
      playButton.focus();
      window.scrollTo(x, y);
    }
  }

  function togglePause(playerId) {
    var pauseButton = videos[playerId].videoWrapper.querySelector(
      selectors.pauseVideoBtn
    );
    var paused = pauseButton.classList.contains(classes.userPaused);
    if (paused) {
      pauseButton.classList.remove(classes.userPaused);
      customPlayVideo(playerId);
    } else {
      pauseButton.classList.add(classes.userPaused);
      pauseVideo(playerId);
    }
    pauseButton.setAttribute('aria-pressed', !paused);
  }

  function startVideoOnClick(playerId) {
    var video = videos[playerId];

    // add loading class to wrapper
    video.videoWrapper.classList.add(classes.loading);

    // Explicity set the video wrapper height (needed for height transition)
    video.videoWrapper.style.height = video.videoWrapper.offsetHeight + 'px';

    video.status = 'open';

    switch (video.type) {
      case 'image_with_play':
        privatePlayVideo(playerId, true);
        break;
      case 'background':
        unsetBackgroundVideo(playerId, video);
        videoPlayers[playerId].unMute();
        privatePlayVideo(playerId, true);
        break;
    }

    toggleExpandVideo(playerId, true);

    // esc to close video player
    document.addEventListener('keydown', handleVideoPlayerKeydown);
  }

  var handleVideoPlayerKeydown = function(evt) {
    var playerId = document.activeElement.dataset.controls;
    if (evt.keyCode !== slate.utils.keyboardKeys.ESCAPE || !playerId) {
      return;
    }

    closeVideo(playerId);
    toggleExpandVideo(playerId, false);
  };

  function sizeBackgroundVideos() {
    var backgroundVideos = document.querySelectorAll(
      '.' + classes.backgroundVideo
    );
    backgroundVideos.forEach(function(el) {
      sizeBackgroundVideo(el);
    });
  }

  function sizeBackgroundVideo(videoPlayer) {
    if (!youtubeLoaded) {
      return;
    }

    if (isMobile()) {
      videoPlayer.style.cssText = null;
    } else {
      var videoWrapper = videoPlayer.closest(selectors.videoWrapper);
      var videoWidth = videoWrapper.clientWidth;
      var playerWidth = videoPlayer.clientWidth;
      var desktopHeight = videoWrapper.dataset.desktopHeight;

      // when screen aspect ratio differs from video, video must center and underlay one dimension
      if (videoWidth / videoOptions.ratio < desktopHeight) {
        playerWidth = Math.ceil(desktopHeight * videoOptions.ratio); // get new player width
        var styles =
          'width: ' +
          playerWidth +
          'px; height: ' +
          desktopHeight +
          'px; left: ' +
          (videoWidth - playerWidth) / 2 +
          'px; top: 0;';
        videoPlayer.style.cssText = styles;
      } else {
        // new video width < window width (gap to right)
        desktopHeight = Math.ceil(videoWidth / videoOptions.ratio); // get new player height
        var styles2 =
          'width: ' +
          videoWidth +
          'px; height: ' +
          desktopHeight +
          'px; top: ' +
          (desktopHeight - desktopHeight) / 2 +
          'px; left: 0;'; // player height is greater, offset top; reset left
        videoPlayer.style.cssText = styles2;
      }

      theme.Helpers.prepareTransition(videoPlayer);
      videoWrapper.classList.add(classes.loaded);
    }
  }

  function unsetBackgroundVideo(playerId) {
    // Switch the background video to a chrome-only player once played
    var player = document.getElementById(playerId);
    player.classList.remove(classes.backgroundVideo);
    player.classList.add(classes.videoWithImage);

    setTimeout(function() {
      document.getElementById(playerId).style.cssText = null;
    }, 600);

    videos[playerId].videoWrapper.classList.remove(
      classes.backgroundVideoWrapper
    );
    videos[playerId].videoWrapper.classList.add(classes.playing);

    videos[playerId].status = 'open';
  }

  function setBackgroundVideo(playerId) {
    var player = document.getElementById(playerId);
    player.classList.remove(classes.videoWithImage);
    player.classList.add(classes.backgroundVideo);

    videos[playerId].videoWrapper.classList.add(classes.backgroundVideoWrapper);

    videos[playerId].status = 'background';
    sizeBackgroundVideo(player);
  }

  function isMobile() {
    return window.innerWidth < theme.breakpoints.medium;
  }

  var handleWindowResize = theme.Helpers.debounce(function() {
    if (!youtubeLoaded) return;
    var key;
    var fullscreen = window.innerHeight === screen.height;
    sizeBackgroundVideos();

    if (isMobile()) {
      for (key in videos) {
        if (videos.hasOwnProperty(key)) {
          if (videos[key].videoWrapper.classList.contains(classes.playing)) {
            if (!fullscreen) {
              pauseVideo(key);
              setAsPaused(videos[key]);
            }
          }
          videos[key].videoWrapper.style.height =
            document.documentElement.clientWidth / videoOptions.ratio + 'px';
        }
      }
      setAutoplaySupport(false);
    } else {
      setAutoplaySupport(true);
      for (key in videos) {
        var videosWithImage = videos[key].videoWrapper.querySelectorAll(
          '.' + classes.videoWithImage
        );
        if (videosWithImage.length) {
          continue;
        }
        videoPlayers[key].playVideo();
        setAsPlaying(videos[key]);
      }
    }
  }, 200);

  var handleWindowScroll = theme.Helpers.debounce(function() {
    if (!youtubeLoaded) return;

    for (var key in videos) {
      if (videos.hasOwnProperty(key)) {
        var videoWrapper = videos[key].videoWrapper;
        var condition =
          videoWrapper.getBoundingClientRect().top +
            window.pageYOffset +
            videoWrapper.offsetHeight * 0.75 <
            window.pageYOffset ||
          videoWrapper.getBoundingClientRect().top +
            window.pageYOffset +
            videoWrapper.offsetHeight * 0.25 >
            window.pageYOffset + window.innerHeight;

        // Close the video if more than 75% of it is scrolled out of view
        if (videoWrapper.classList.contains(classes.playing)) {
          if (!condition) return;
          closeVideo(key);
          toggleExpandVideo(key, false);
        }
      }
    }
  }, 50);

  function initEvents() {
    var playVideoBtns = document.querySelectorAll(selectors.playVideoBtn);
    var closeVideoBtns = document.querySelectorAll(selectors.closeVideoBtn);
    var pauseVideoBtns = document.querySelectorAll(selectors.pauseVideoBtn);

    playVideoBtns.forEach(function(btn) {
      btn.addEventListener('click', function(evt) {
        var playerId = evt.currentTarget.dataset.controls;
        startVideoOnClick(playerId);
      });
    });

    closeVideoBtns.forEach(function(btn) {
      btn.addEventListener('click', function(evt) {
        var playerId = evt.currentTarget.dataset.controls;

        evt.currentTarget.blur();
        closeVideo(playerId);
        toggleExpandVideo(playerId, false);
      });
    });

    pauseVideoBtns.forEach(function(btn) {
      btn.addEventListener('click', function(evt) {
        var playerId = evt.currentTarget.dataset.controls;
        togglePause(playerId);
      });
    });

    // Listen to resize to keep a background-size:cover-like layout
    window.addEventListener('resize', handleWindowResize);

    window.addEventListener('scroll', handleWindowScroll);
  }

  function createPlayer(key) {
    var args = Object.assign(videoOptions, videos[key]);

    args.playerVars.controls = args.controls;
    videoPlayers[key] = new YT.Player(key, args);
  }

  function removeEvents() {
    document.removeEventListener('keydown', handleVideoPlayerKeydown);
    window.removeEventListener('resize', handleWindowResize);
    window.removeEventListener('scroll', handleWindowScroll);
  }

  function setButtonLabels(videoWrapper, title) {
    var playButtons = videoWrapper.querySelectorAll(selectors.playVideoBtn);
    var closeButton = videoWrapper.querySelector(selectors.closeVideoBtn);
    var pauseButton = videoWrapper.querySelector(selectors.pauseVideoBtn);
    var closeButtonText = closeButton.querySelector(selectors.fallbackText);

    var pauseButtonStop = pauseButton.querySelector(selectors.pauseVideoStop);
    var pauseButtonStopText = pauseButtonStop.querySelector(
      selectors.fallbackText
    );

    var pauseButtonResume = pauseButton.querySelector(
      selectors.pauseVideoResume
    );
    var pauseButtonResumeText = pauseButtonResume.querySelector(
      selectors.fallbackText
    );

    // Insert the video title retrieved from YouTube into the instructional text
    // for each button
    playButtons.forEach(function(playButton) {
      var playButtonText = playButton.querySelector(selectors.fallbackText);

      playButtonText.textContent = playButtonText.textContent.replace(
        '[video_title]',
        title
      );
    });
    closeButtonText.textContent = closeButtonText.textContent.replace(
      '[video_title]',
      title
    );
    pauseButtonStopText.textContent = pauseButtonStopText.textContent.replace(
      '[video_title]',
      title
    );
    pauseButtonResumeText.textContent = pauseButtonResumeText.textContent.replace(
      '[video_title]',
      title
    );
  }

  return {
    init: init,
    editorLoadVideo: editorLoadVideo,
    loadVideos: loadVideos,
    playVideo: customPlayVideo,
    pauseVideo: pauseVideo,
    removeEvents: removeEvents
  };
})();

window.theme = window.theme || {};

window.theme = window.theme || {};

theme.FormStatus = (function() {
  var selectors = {
    statusMessage: '[data-form-status]'
  };

  function init() {
    var statusMessages = document.querySelectorAll(selectors.statusMessage);

    statusMessages.forEach(function(statusMessage) {
      statusMessage.setAttribute('tabindex', -1);
      statusMessage.focus();

      statusMessage.addEventListener(
        'blur',
        function(evt) {
          evt.target.removeAttribute('tabindex');
        },
        { once: true }
      );
    });
  }

  return {
    init: init
  };
})();



/*================ SECTIONS ================*/
window.theme = window.theme || {};


theme.SlideshowSection = (function() {
  var selectors = {
    sliderMobileContentIndex: '[data-slider-mobile-content-index]'
  };

  function SlideshowSection(container) {
    var sectionId = container.dataset.sectionId;

    this.container = container;
    this.eventHandlers = {};
    this.slideshowDom = container.querySelector('#Slideshow-' + sectionId);
    this.sliderMobileContentIndex = container.querySelectorAll(
      selectors.sliderMobileContentIndex
    );

    this.slideshow = new theme.Slideshow(container, {
      autoplay: this.slideshowDom.getAttribute('data-autorotate') === 'true',
      slideInterval: this.slideshowDom.getAttribute('data-speed')
    });
    this._setupEventListeners();
  }

  return SlideshowSection;
})();

theme.SlideshowSection.prototype = Object.assign(
  {},
  theme.SlideshowSection.prototype,
  {
    _setupEventListeners: function() {
      this.eventHandlers.onSliderSlideChanged = function(event) {
        this._onSliderSlideChanged(event.detail);
      }.bind(this);

      this.container.addEventListener(
        'slider_slide_changed',
        this.eventHandlers.onSliderSlideChanged
      );
    },

    _onSliderSlideChanged: function(slideIndex) {
      var activeClass = 'slideshow__text-content--mobile-active';

      this.sliderMobileContentIndex.forEach(function(element) {
        if (
          Number(element.getAttribute('data-slider-mobile-content-index')) ===
          slideIndex
        ) {
          element.classList.add(activeClass);
        } else {
          element.classList.remove(activeClass);
        }
      });
    },

    onUnload: function() {
      this.slideshow.destroy();
    },

    onBlockSelect: function(evt) {
      if (this.slideshow.adaptHeight) {
        this.slideshow.setSlideshowHeight();
      }

      // Get slide's index using theme editor's id
      var slide = this.container.querySelector(
        '.slideshow__slide--' + evt.detail.blockId
      );
      var slideIndex = slide.getAttribute('data-slider-slide-index');

      // Go to selected slide, pause auto-rotate
      this.slideshow.setSlide(slideIndex);
      this.slideshow.stopAutoplay();
    },

    onBlockDeselect: function() {
      // Resume auto-rotate
      this.slideshow.startAutoplay();
    }
  }
);



document.addEventListener('DOMContentLoaded', function() {
  var sections = new theme.Sections();

 
  sections.register('collection-template', theme.Filters);

  sections.register('slideshow-section',  theme.SlideshowSection);
  sections.register('video-section', theme.VideoSection);



  // Theme-specific selectors to make tables scrollable
  var tableSelectors = '.rte table,' + '.custom__item-inner--html table';

  slate.rte.wrapTable({
    tables: document.querySelectorAll(tableSelectors),
    tableWrapperClass: 'scrollable-wrapper'
  });

  // Theme-specific selectors to make iframes responsive
  var iframeSelectors =
    '.rte iframe[src*="youtube.com/embed"],' +
    '.rte iframe[src*="player.vimeo"],' +
    '.custom__item-inner--html iframe[src*="youtube.com/embed"],' +
    '.custom__item-inner--html iframe[src*="player.vimeo"]';

  slate.rte.wrapIframe({
    iframes: document.querySelectorAll(iframeSelectors),
    iframeWrapperClass: 'video-wrapper'
  });

  // Common a11y fixes
  slate.a11y.pageLinkFocus(
    document.getElementById(window.location.hash.substr(1))
  );

  var inPageLink = document.querySelector('.in-page-link');
  if (inPageLink) {
    inPageLink.addEventListener('click', function(evt) {
      slate.a11y.pageLinkFocus(
        document.getElementById(evt.currentTarget.hash.substr(1))
      );
    });
  }

  document.querySelectorAll('a[href="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(evt) {
      evt.preventDefault();
    });
  });

  slate.a11y.accessibleLinks({
    messages: {
      newWindow: theme.strings.newWindow,
      external: theme.strings.external,
      newWindowExternal: theme.strings.newWindowExternal
    },
    links: document.querySelectorAll(
      'a[href]:not([aria-describedby]), .product-single__thumbnail'
    )
  });

  theme.FormStatus.init();

  var selectors = {
    image: '[data-image]',
    lazyloaded: '.lazyloaded'
  };

  document.addEventListener('lazyloaded', function(evt) {
    var image = evt.target;

    removeImageLoadingAnimation(image);



    if (image.hasAttribute('data-bgset')) {
      var innerImage = image.querySelector(selectors.lazyloaded);

      if (innerImage) {
        var alt = image.getAttribute('data-alt');
        var src = innerImage.hasAttribute('data-src')
          ? innerImage.getAttribute('data-src')
          : image.getAttribute('data-bg');

        image.setAttribute('alt', alt ? alt : '');
        image.setAttribute('src', src ? src : '');
      }
    }

    if (!image.hasAttribute('data-image')) {
      return;
    }
  });

  // When the theme loads, lazysizes might load images before the "lazyloaded"
  // event listener has been attached. When this happens, the following function
  // hides the loading placeholders.
  function onLoadHideLazysizesAnimation() {
    var alreadyLazyloaded = document.querySelectorAll('.lazyloaded');
    alreadyLazyloaded.forEach(function(image) {
      removeImageLoadingAnimation(image);
    });
  }

  onLoadHideLazysizesAnimation();

  document.addEventListener(
    'touchstart',
    function() {
      theme.Helpers.setTouch();
    },
    { once: true }
  );

  if (document.fonts) {
    document.fonts.ready.then(function() {
      window.performance.mark('debut:fonts_loaded');
    });
  }
});

// Youtube API callback
// eslint-disable-next-line no-unused-vars
function onYouTubeIframeAPIReady() {
  theme.Video.loadVideos();
}

function removeImageLoadingAnimation(image) {
  // Remove loading animation
  var imageWrapper = image.hasAttribute('data-image-loading-animation')
    ? image
    : image.closest('[data-image-loading-animation]');

  if (imageWrapper) {
    imageWrapper.removeAttribute('data-image-loading-animation');
  }
}
