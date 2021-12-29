 
//这是定义theme 对象与theme。section 对象 并 定义监听方法
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
        console.log('进来section了',evt)
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
        
