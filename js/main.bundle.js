webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// node_modules
	
	__webpack_require__(1);
	
	var _vue = __webpack_require__(299);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _lodash = __webpack_require__(300);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _loglevel = __webpack_require__(302);
	
	var _loglevel2 = _interopRequireDefault(_loglevel);
	
	__webpack_require__(303);
	
	__webpack_require__(306);
	
	__webpack_require__(308);
	
	__webpack_require__(309);
	
	__webpack_require__(311);
	
	__webpack_require__(312);
	
	__webpack_require__(316);
	
	__webpack_require__(317);
	
	__webpack_require__(318);
	
	var _store = __webpack_require__(315);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _bus = __webpack_require__(305);
	
	var _bus2 = _interopRequireDefault(_bus);
	
	var _breakpoints = __webpack_require__(320);
	
	var _breakpoints2 = _interopRequireDefault(_breakpoints);
	
	var _touch = __webpack_require__(321);
	
	var _touch2 = _interopRequireDefault(_touch);
	
	var _ui = __webpack_require__(322);
	
	var _ui2 = _interopRequireDefault(_ui);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Vue methods (bundled)
	
	
	// Vue transitions
	
	
	// vendor
	// import FLIP from './vendor/flip';
	
	// Vue directives
	var methods = _lodash2.default.assign({}, _breakpoints2.default, _touch2.default, _ui2.default);
	
	// Vue async components
	// Example:
	// Vue.component('async-component', function (resolve) {
	//   require(['./components/async/example'], function (response) {
	//     resolve(response.default);
	//   });
	// });
	
	// Vue methods
	
	
	// Vue services
	
	
	// Vue local components
	_vue2.default.component('hero-banner', function (resolve) {
	  __webpack_require__.e/* require */(1, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(323)]; (function (response) {
	    resolve(response.default);
	  }.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});
	});
	
	_vue2.default.component('collapse', function (resolve) {
	  __webpack_require__.e/* require */(2, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(324)]; (function (response) {
	    resolve(response.default);
	  }.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});
	});
	
	_vue2.default.component('carousel', function (resolve) {
	  __webpack_require__.e/* require */(3, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(325)]; (function (response) {
	    resolve(response.default);
	  }.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});
	});
	
	// Vue config
	_vue2.default.config.delimiters = ['${', '}$']; // note: will be deprecated in VueJS 2.0!
	
	// Vue initialisation
	var app = new _vue2.default({
	  el: 'body',
	  ready: function ready() {
	    var _this = this;
	
	    // do this at least once
	    this.setBreakpoint();
	    // check for touch devices and only once on load
	    this.mobileAndTabletcheck();
	
	    // add resize event listener
	    window.addEventListener('resize', function () {
	      _this.setBreakpoint();
	    });
	  },
	  data: {
	    sharedData: _store2.default
	  },
	  methods: methods
	});

/***/ },

/***/ 303:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vue = __webpack_require__(299);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _loglevel = __webpack_require__(302);
	
	var _loglevel2 = _interopRequireDefault(_loglevel);
	
	var _scrollreveal = __webpack_require__(304);
	
	var _scrollreveal2 = _interopRequireDefault(_scrollreveal);
	
	var _bus = __webpack_require__(305);
	
	var _bus2 = _interopRequireDefault(_bus);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _vue2.default.directive('animations', {
	  bind: function bind() {
	    if (!window.sr) {
	      window.sr = (0, _scrollreveal2.default)();
	    }
	
	    if (this.el.getAttribute('data-elem')) {
	      window.sr.reveal(this.el.getAttribute('data-elem'), { mobile: false, duration: 1000, distance: '100px', scale: 1, viewFactor: 0.3 }, 100);
	    } else {
	      window.sr.reveal(this.el, { mobile: false, duration: 1000, distance: '100px', scale: 1, viewFactor: 0.3 }, 100);
	    }
	  }
	});

/***/ },

/***/ 305:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vue = __webpack_require__(299);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Bus = new _vue2.default();
	
	exports.default = Bus;

/***/ },

/***/ 306:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// node_modules
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _vue = __webpack_require__(299);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _loglevel = __webpack_require__(302);
	
	var _loglevel2 = _interopRequireDefault(_loglevel);
	
	var _jump = __webpack_require__(307);
	
	var _jump2 = _interopRequireDefault(_jump);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// usage:
	// jump to target in 1000ms: v-scroll-to:1000=".selector"
	// jump to target in 1000ms with an offset of 30px: v-scroll-to:1000,30=".selector"
	// jump to target in 1000ms with an offset of -30px: v-scroll-to:1000,-30=".selector"
	// note: if a fixed header is present then the offset parameter is ignored
	
	exports.default = _vue2.default.directive('scroll-to', {
	  bind: function bind() {
	    var _this = this;
	
	    _loglevel2.default.info('directive :: scroll-to :: bind');
	
	    var _ref = this.arg.split(',').length ? this.arg.split(',') : [this.arg, undefined];
	
	    var _ref2 = _slicedToArray(_ref, 2);
	
	    var duration = _ref2[0];
	    var offset = _ref2[1];
	
	
	    function getScrollPosition() {
	      return 'scrollY' in window ? window.scrollY : document.documentElement.scrollTop;
	    }
	
	    this.el.addEventListener('click', function () {
	      var target = document.querySelectorAll(_this.expression)[0];
	      var headerEl = document.querySelectorAll('.c-header')[0];
	
	      // if the header is fixed, scroll to target
	      if (headerEl.classList.contains('u-pos-f')) {
	        (0, _jump2.default)(target, {
	          duration: duration,
	          offset: headerEl.classList.contains('u-pos-f') ? -headerEl.offsetHeight : +offset
	        });
	      } else {
	        // do a 50ms warmup by scrolling the page 10px down to determine if the header will be fixed
	        if (!getScrollPosition()) {
	          window.scrollTo(0, 1);
	        }
	
	        // continue with jump after 10ms
	        setTimeout(function () {
	          (0, _jump2.default)(target, {
	            duration: duration,
	            offset: headerEl.classList.contains('u-pos-f') ? -headerEl.offsetHeight : +offset
	          });
	        }, 10);
	      }
	    });
	  }
	});

/***/ },

/***/ 308:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vue = __webpack_require__(299);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _loglevel = __webpack_require__(302);
	
	var _loglevel2 = _interopRequireDefault(_loglevel);
	
	var _bus = __webpack_require__(305);
	
	var _bus2 = _interopRequireDefault(_bus);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _vue2.default.directive('matchheight', {
	  bind: function bind() {
	    var _this = this;
	
	    var $this = this,
	        elements = document.querySelectorAll($this.el.getAttribute('data-elem') + $this.el.getAttribute('data-match')),
	        resizeID = void 0;
	
	    // Function to set the max height for a group of elements
	    var toggleMatchHeight = function toggleMatchHeight() {
	      _vue2.default.nextTick(function () {
	        var elements = document.querySelectorAll(_this.el.getAttribute('data-elem') + _this.el.getAttribute('data-match')),
	            max_height = 0,
	            len = 0,
	            i;
	
	        if (elements && elements.length > 0) {
	          len = elements.length;
	
	          // Set the max height of all the elements
	          for (i = 0; i < len; i++) {
	            elements[i].style.height = '';
	            if (elements[i].clientHeight > max_height) {
	              max_height = elements[i].clientHeight;
	            }
	          }
	
	          // Set the height of all elements to the max height
	          for (i = 0; i < len; i++) {
	            elements[i].style.height = max_height + 'px';
	          }
	        }
	      });
	    };
	
	    // Run once the DOM is loaded
	    toggleMatchHeight();
	
	    // Run every time the window is resized
	    _bus2.default.$on('windowResize', function (breakpoint) {
	      // If it need not match height on a certain breakpoint
	      if (_this.arg === breakpoint) {
	        for (var i = 0; i < elements.length; i++) {
	          elements[i].style.height = '';
	        }
	      } else {
	        setTimeout(function () {
	          toggleMatchHeight();
	        }, 500);
	      }
	    });
	  }
	});

/***/ },

/***/ 309:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vue = __webpack_require__(299);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _loglevel = __webpack_require__(302);
	
	var _loglevel2 = _interopRequireDefault(_loglevel);
	
	var _bus = __webpack_require__(305);
	
	var _bus2 = _interopRequireDefault(_bus);
	
	var _classHelper = __webpack_require__(310);
	
	var _classHelper2 = _interopRequireDefault(_classHelper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _vue2.default.directive('sticky', {
	  bind: function bind() {
	    var _this = this;
	
	    var stickPoint = void 0;
	
	    function getScrollPosition() {
	      return 'scrollY' in window ? window.scrollY : document.documentElement.scrollTop;
	    }
	
	    var toggleSticky = function toggleSticky() {
	      if (getScrollPosition() >= stickPoint) {
	        // log.info('directive :: sticky :: fixed');
	        // apply utility classes
	        _classHelper2.default.toggleClass(_this.el, ['u-pos-f', 'u-w100', 'u-top0'], true);
	      } else {
	        // log.info('directive :: sticky :: scroll height not met -> static');
	        // remove utility classes
	        _classHelper2.default.toggleClass(_this.el, ['u-pos-f', 'u-w100', 'u-top0'], false);
	      }
	    };
	
	    _bus2.default.$on('attachSticky', function (arg) {
	      stickPoint = _this.el.getBoundingClientRect().top + getScrollPosition();
	      if (_this.arg === arg) {
	        _loglevel2.default.info('directive :: sticky :: attaching event listener', _this.arg);
	        window.addEventListener('scroll', toggleSticky, true);
	      }
	    });
	
	    _bus2.default.$on('detachSticky', function (arg) {
	      if (_this.arg === arg) {
	        _loglevel2.default.info('directive :: sticky :: removing event listener', _this.arg);
	        window.removeEventListener('scroll', toggleSticky, true);
	      }
	    });
	  },
	  update: function update(breakpoint) {
	    _loglevel2.default.info('directive :: sticky :: update', breakpoint);
	    var shouldStick = typeof this.modifiers[breakpoint] !== 'undefined' && this.modifiers[breakpoint] === true || this.modifiers.all ? true : false;
	
	    if (shouldStick) {
	      this.el.parentNode.style.height = this.el.offsetHeight + parseInt(getComputedStyle(this.el).marginTop) + parseInt(getComputedStyle(this.el).marginBottom) + 'px';
	
	      _bus2.default.$emit('attachSticky', this.arg);
	    } else {
	      _bus2.default.$emit('detachSticky', this.arg);
	
	      this.el.parentNode.style.height = null;
	
	      _classHelper2.default.toggleClass(this.el, ['u-pos-f', 'u-w100', 'u-top0'], false);
	    }
	  }
	});

/***/ },

/***/ 310:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var classHelper = {
	  hasClass: function hasClass(el, className) {
	    if (el.classList) return el.classList.contains(className);else return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
	  },
	  toggleClass: function toggleClass(el, classList, add) {
	    var method = add ? 'add' : 'remove';
	
	    classList.forEach(function (className) {
	      el.classList[method](className);
	    });
	  }
	};
	
	exports.default = classHelper;

/***/ },

/***/ 311:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// node_modules
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vue = __webpack_require__(299);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _loglevel = __webpack_require__(302);
	
	var _loglevel2 = _interopRequireDefault(_loglevel);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _vue2.default.transition('flyout', {
	  // css: false,
	  beforeEnter: function beforeEnter(el, done) {
	    _loglevel2.default.info('transition :: flyout :: beforeEnter');
	
	    // Vue.nextTick(function () {
	    //   let stageEl = document.querySelectorAll('.stage')[0];
	    //   let headerEl = document.querySelectorAll('.c-header')[0];
	    //   let contentHeight = (el.offsetHeight + headerEl.offsetHeight);
	    //
	    //   if (contentHeight >= window.innerHeight) {
	    //     el.classList.add('flyout-transition--slow');
	    //   } else {
	    //     el.classList.add('flyout-transition--normal');
	    //   }
	    // });
	  },
	  enter: function enter(el) {
	    _loglevel2.default.info('transition :: flyout :: enter');
	
	    // Vue.nextTick(function () {
	    //   el.classList.add('flyout-enter');
	    // });
	  },
	  afterEnter: function afterEnter(el) {
	    _loglevel2.default.info('transition :: flyout :: afterEnter');
	  },
	  enterCancelled: function enterCancelled(el) {
	    // handle cancellation
	  },
	  beforeLeave: function beforeLeave(el) {
	    _loglevel2.default.info('transition :: flyout :: beforeLeave');
	  },
	  leave: function leave(el) {
	    _loglevel2.default.info('transition :: flyout :: leave');
	
	    // Vue.nextTick(function () {
	    //   el.classList.remove('flyout-enter');
	    // });
	  },
	  afterLeave: function afterLeave(el) {
	    _loglevel2.default.info('transition :: flyout :: afterLeave');
	
	    // Vue.nextTick(function () {
	    //   el.classList.remove('flyout-transition--slow');
	    //   el.classList.remove('flyout-transition--normal');
	    // });
	  },
	  leaveCancelled: function leaveCancelled(el) {
	    // handle cancellation
	  }
	});

/***/ },

/***/ 312:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// node_modules
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vue = __webpack_require__(299);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _loglevel = __webpack_require__(302);
	
	var _loglevel2 = _interopRequireDefault(_loglevel);
	
	var _imagesloaded = __webpack_require__(313);
	
	var _imagesloaded2 = _interopRequireDefault(_imagesloaded);
	
	var _lodash = __webpack_require__(300);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _store = __webpack_require__(315);
	
	var _store2 = _interopRequireDefault(_store);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _vue2.default.component('cars-grid', {
	  ready: function ready() {
	    var _this = this;
	
	    _loglevel2.default.info('component :: cars-grid :: ready');
	
	    this.privateData.isReady = true;
	
	    // check to see if all images have loaded
	    (0, _imagesloaded2.default)(this.$el, function () {
	      _loglevel2.default.info('component :: cars-grid :: images loaded');
	      _this.privateData.hasLoaded = true;
	      _this.privateData.enter = true; // trigger enter transition
	    });
	  },
	  data: function data() {
	    return {
	      privateData: {
	        isReady: false,
	        hasLoaded: false,
	        filtersOpen: false,
	        enter: false,
	        leave: false,
	        filteredRange: null,
	        selectedRange: null,
	        rangeMap: {
	          'small': 'Small',
	          'family': 'Family',
	          'suvs': 'SUVs',
	          'style': 'Style',
	          'sports': 'Sports',
	          'utes': 'Utes'
	        }
	      },
	      sharedData: _store2.default
	    };
	  },
	  methods: {
	    selectRange: function selectRange(vehicleRange) {
	      this.privateData.filtersOpen = false;
	      this.privateData.selectedRange = vehicleRange;
	      this.filterRange(vehicleRange);
	    },
	    filterRange: function filterRange(vehicleRange) {
	      var _this2 = this;
	
	      if (vehicleRange !== this.privateData.filteredRange) {
	        var activeItems = this.$el.querySelectorAll('.c-cars-grid__item').length;
	        var transitionDelay = 50; // must match transition delay as defined in CSS!
	        var transitionDuration = 350; // must match transition duration as defined in CSS!
	        var totalDelay = activeItems * transitionDelay;
	
	        this.privateData.leave = true; // triggers leave transition
	
	        setTimeout(function () {
	          _this2.privateData.enter = false; // triggers reverse enter transition
	        }, totalDelay + transitionDuration);
	
	        setTimeout(function () {
	          _this2.privateData.filteredRange = vehicleRange; // update selected vehicle range
	        }, totalDelay + transitionDuration + transitionDuration * 0.8); // delay by total transition delay, plus an additional transition duration and 80% of another transition duration (not sure why - magic number)
	
	        setTimeout(function () {
	          _this2.privateData.leave = false; // triggers reverse leave transition
	          _this2.privateData.enter = true; // triggers enter transition
	        }, totalDelay + transitionDuration * 2); // delay by transition time, plus twice the transition duration
	      }
	    },
	    isFiltered: function isFiltered(vehicleRange) {
	      return !this.privateData.filteredRange || _lodash2.default.indexOf(vehicleRange, this.privateData.filteredRange) >= 0;
	    },
	    mapRange: function mapRange(vehicleRange) {
	      return this.privateData.rangeMap[vehicleRange] || 'All cars';
	    }
	  }
	});
	
	// Vue services

/***/ },

/***/ 313:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * imagesLoaded v4.1.0
	 * JavaScript is all like "You images are done yet or what?"
	 * MIT License
	 */
	
	( function( window, factory ) { 'use strict';
	  // universal module definition
	
	  /*global define: false, module: false, require: false */
	
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	      __webpack_require__(314)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function( EvEmitter ) {
	      return factory( window, EvEmitter );
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      window,
	      require('ev-emitter')
	    );
	  } else {
	    // browser global
	    window.imagesLoaded = factory(
	      window,
	      window.EvEmitter
	    );
	  }
	
	})( window,
	
	// --------------------------  factory -------------------------- //
	
	function factory( window, EvEmitter ) {
	
	'use strict';
	
	var $ = window.jQuery;
	var console = window.console;
	
	// -------------------------- helpers -------------------------- //
	
	// extend objects
	function extend( a, b ) {
	  for ( var prop in b ) {
	    a[ prop ] = b[ prop ];
	  }
	  return a;
	}
	
	// turn element or nodeList into an array
	function makeArray( obj ) {
	  var ary = [];
	  if ( Array.isArray( obj ) ) {
	    // use object if already an array
	    ary = obj;
	  } else if ( typeof obj.length == 'number' ) {
	    // convert nodeList to array
	    for ( var i=0; i < obj.length; i++ ) {
	      ary.push( obj[i] );
	    }
	  } else {
	    // array of single index
	    ary.push( obj );
	  }
	  return ary;
	}
	
	// -------------------------- imagesLoaded -------------------------- //
	
	/**
	 * @param {Array, Element, NodeList, String} elem
	 * @param {Object or Function} options - if function, use as callback
	 * @param {Function} onAlways - callback function
	 */
	function ImagesLoaded( elem, options, onAlways ) {
	  // coerce ImagesLoaded() without new, to be new ImagesLoaded()
	  if ( !( this instanceof ImagesLoaded ) ) {
	    return new ImagesLoaded( elem, options, onAlways );
	  }
	  // use elem as selector string
	  if ( typeof elem == 'string' ) {
	    elem = document.querySelectorAll( elem );
	  }
	
	  this.elements = makeArray( elem );
	  this.options = extend( {}, this.options );
	
	  if ( typeof options == 'function' ) {
	    onAlways = options;
	  } else {
	    extend( this.options, options );
	  }
	
	  if ( onAlways ) {
	    this.on( 'always', onAlways );
	  }
	
	  this.getImages();
	
	  if ( $ ) {
	    // add jQuery Deferred object
	    this.jqDeferred = new $.Deferred();
	  }
	
	  // HACK check async to allow time to bind listeners
	  setTimeout( function() {
	    this.check();
	  }.bind( this ));
	}
	
	ImagesLoaded.prototype = Object.create( EvEmitter.prototype );
	
	ImagesLoaded.prototype.options = {};
	
	ImagesLoaded.prototype.getImages = function() {
	  this.images = [];
	
	  // filter & find items if we have an item selector
	  this.elements.forEach( this.addElementImages, this );
	};
	
	/**
	 * @param {Node} element
	 */
	ImagesLoaded.prototype.addElementImages = function( elem ) {
	  // filter siblings
	  if ( elem.nodeName == 'IMG' ) {
	    this.addImage( elem );
	  }
	  // get background image on element
	  if ( this.options.background === true ) {
	    this.addElementBackgroundImages( elem );
	  }
	
	  // find children
	  // no non-element nodes, #143
	  var nodeType = elem.nodeType;
	  if ( !nodeType || !elementNodeTypes[ nodeType ] ) {
	    return;
	  }
	  var childImgs = elem.querySelectorAll('img');
	  // concat childElems to filterFound array
	  for ( var i=0; i < childImgs.length; i++ ) {
	    var img = childImgs[i];
	    this.addImage( img );
	  }
	
	  // get child background images
	  if ( typeof this.options.background == 'string' ) {
	    var children = elem.querySelectorAll( this.options.background );
	    for ( i=0; i < children.length; i++ ) {
	      var child = children[i];
	      this.addElementBackgroundImages( child );
	    }
	  }
	};
	
	var elementNodeTypes = {
	  1: true,
	  9: true,
	  11: true
	};
	
	ImagesLoaded.prototype.addElementBackgroundImages = function( elem ) {
	  var style = getComputedStyle( elem );
	  if ( !style ) {
	    // Firefox returns null if in a hidden iframe https://bugzil.la/548397
	    return;
	  }
	  // get url inside url("...")
	  var reURL = /url\((['"])?(.*?)\1\)/gi;
	  var matches = reURL.exec( style.backgroundImage );
	  while ( matches !== null ) {
	    var url = matches && matches[2];
	    if ( url ) {
	      this.addBackground( url, elem );
	    }
	    matches = reURL.exec( style.backgroundImage );
	  }
	};
	
	/**
	 * @param {Image} img
	 */
	ImagesLoaded.prototype.addImage = function( img ) {
	  var loadingImage = new LoadingImage( img );
	  this.images.push( loadingImage );
	};
	
	ImagesLoaded.prototype.addBackground = function( url, elem ) {
	  var background = new Background( url, elem );
	  this.images.push( background );
	};
	
	ImagesLoaded.prototype.check = function() {
	  var _this = this;
	  this.progressedCount = 0;
	  this.hasAnyBroken = false;
	  // complete if no images
	  if ( !this.images.length ) {
	    this.complete();
	    return;
	  }
	
	  function onProgress( image, elem, message ) {
	    // HACK - Chrome triggers event before object properties have changed. #83
	    setTimeout( function() {
	      _this.progress( image, elem, message );
	    });
	  }
	
	  this.images.forEach( function( loadingImage ) {
	    loadingImage.once( 'progress', onProgress );
	    loadingImage.check();
	  });
	};
	
	ImagesLoaded.prototype.progress = function( image, elem, message ) {
	  this.progressedCount++;
	  this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
	  // progress event
	  this.emitEvent( 'progress', [ this, image, elem ] );
	  if ( this.jqDeferred && this.jqDeferred.notify ) {
	    this.jqDeferred.notify( this, image );
	  }
	  // check if completed
	  if ( this.progressedCount == this.images.length ) {
	    this.complete();
	  }
	
	  if ( this.options.debug && console ) {
	    console.log( 'progress: ' + message, image, elem );
	  }
	};
	
	ImagesLoaded.prototype.complete = function() {
	  var eventName = this.hasAnyBroken ? 'fail' : 'done';
	  this.isComplete = true;
	  this.emitEvent( eventName, [ this ] );
	  this.emitEvent( 'always', [ this ] );
	  if ( this.jqDeferred ) {
	    var jqMethod = this.hasAnyBroken ? 'reject' : 'resolve';
	    this.jqDeferred[ jqMethod ]( this );
	  }
	};
	
	// --------------------------  -------------------------- //
	
	function LoadingImage( img ) {
	  this.img = img;
	}
	
	LoadingImage.prototype = Object.create( EvEmitter.prototype );
	
	LoadingImage.prototype.check = function() {
	  // If complete is true and browser supports natural sizes,
	  // try to check for image status manually.
	  var isComplete = this.getIsImageComplete();
	  if ( isComplete ) {
	    // report based on naturalWidth
	    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
	    return;
	  }
	
	  // If none of the checks above matched, simulate loading on detached element.
	  this.proxyImage = new Image();
	  this.proxyImage.addEventListener( 'load', this );
	  this.proxyImage.addEventListener( 'error', this );
	  // bind to image as well for Firefox. #191
	  this.img.addEventListener( 'load', this );
	  this.img.addEventListener( 'error', this );
	  this.proxyImage.src = this.img.src;
	};
	
	LoadingImage.prototype.getIsImageComplete = function() {
	  return this.img.complete && this.img.naturalWidth !== undefined;
	};
	
	LoadingImage.prototype.confirm = function( isLoaded, message ) {
	  this.isLoaded = isLoaded;
	  this.emitEvent( 'progress', [ this, this.img, message ] );
	};
	
	// ----- events ----- //
	
	// trigger specified handler for event type
	LoadingImage.prototype.handleEvent = function( event ) {
	  var method = 'on' + event.type;
	  if ( this[ method ] ) {
	    this[ method ]( event );
	  }
	};
	
	LoadingImage.prototype.onload = function() {
	  this.confirm( true, 'onload' );
	  this.unbindEvents();
	};
	
	LoadingImage.prototype.onerror = function() {
	  this.confirm( false, 'onerror' );
	  this.unbindEvents();
	};
	
	LoadingImage.prototype.unbindEvents = function() {
	  this.proxyImage.removeEventListener( 'load', this );
	  this.proxyImage.removeEventListener( 'error', this );
	  this.img.removeEventListener( 'load', this );
	  this.img.removeEventListener( 'error', this );
	};
	
	// -------------------------- Background -------------------------- //
	
	function Background( url, element ) {
	  this.url = url;
	  this.element = element;
	  this.img = new Image();
	}
	
	// inherit LoadingImage prototype
	Background.prototype = Object.create( LoadingImage.prototype );
	
	Background.prototype.check = function() {
	  this.img.addEventListener( 'load', this );
	  this.img.addEventListener( 'error', this );
	  this.img.src = this.url;
	  // check if image is already complete
	  var isComplete = this.getIsImageComplete();
	  if ( isComplete ) {
	    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
	    this.unbindEvents();
	  }
	};
	
	Background.prototype.unbindEvents = function() {
	  this.img.removeEventListener( 'load', this );
	  this.img.removeEventListener( 'error', this );
	};
	
	Background.prototype.confirm = function( isLoaded, message ) {
	  this.isLoaded = isLoaded;
	  this.emitEvent( 'progress', [ this, this.element, message ] );
	};
	
	// -------------------------- jQuery -------------------------- //
	
	ImagesLoaded.makeJQueryPlugin = function( jQuery ) {
	  jQuery = jQuery || window.jQuery;
	  if ( !jQuery ) {
	    return;
	  }
	  // set local variable
	  $ = jQuery;
	  // $().imagesLoaded()
	  $.fn.imagesLoaded = function( options, callback ) {
	    var instance = new ImagesLoaded( this, options, callback );
	    return instance.jqDeferred.promise( $(this) );
	  };
	};
	// try making plugin
	ImagesLoaded.makeJQueryPlugin();
	
	// --------------------------  -------------------------- //
	
	return ImagesLoaded;
	
	});


/***/ },

/***/ 314:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * EvEmitter v1.0.3
	 * Lil' event emitter
	 * MIT License
	 */
	
	/* jshint unused: true, undef: true, strict: true */
	
	( function( global, factory ) {
	  // universal module definition
	  /* jshint strict: false */ /* globals define, module, window */
	  if ( true ) {
	    // AMD - RequireJS
	    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS - Browserify, Webpack
	    module.exports = factory();
	  } else {
	    // Browser globals
	    global.EvEmitter = factory();
	  }
	
	}( typeof window != 'undefined' ? window : this, function() {
	
	"use strict";
	
	function EvEmitter() {}
	
	var proto = EvEmitter.prototype;
	
	proto.on = function( eventName, listener ) {
	  if ( !eventName || !listener ) {
	    return;
	  }
	  // set events hash
	  var events = this._events = this._events || {};
	  // set listeners array
	  var listeners = events[ eventName ] = events[ eventName ] || [];
	  // only add once
	  if ( listeners.indexOf( listener ) == -1 ) {
	    listeners.push( listener );
	  }
	
	  return this;
	};
	
	proto.once = function( eventName, listener ) {
	  if ( !eventName || !listener ) {
	    return;
	  }
	  // add event
	  this.on( eventName, listener );
	  // set once flag
	  // set onceEvents hash
	  var onceEvents = this._onceEvents = this._onceEvents || {};
	  // set onceListeners object
	  var onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
	  // set flag
	  onceListeners[ listener ] = true;
	
	  return this;
	};
	
	proto.off = function( eventName, listener ) {
	  var listeners = this._events && this._events[ eventName ];
	  if ( !listeners || !listeners.length ) {
	    return;
	  }
	  var index = listeners.indexOf( listener );
	  if ( index != -1 ) {
	    listeners.splice( index, 1 );
	  }
	
	  return this;
	};
	
	proto.emitEvent = function( eventName, args ) {
	  var listeners = this._events && this._events[ eventName ];
	  if ( !listeners || !listeners.length ) {
	    return;
	  }
	  var i = 0;
	  var listener = listeners[i];
	  args = args || [];
	  // once stuff
	  var onceListeners = this._onceEvents && this._onceEvents[ eventName ];
	
	  while ( listener ) {
	    var isOnce = onceListeners && onceListeners[ listener ];
	    if ( isOnce ) {
	      // remove listener
	      // remove before trigger to prevent recursion
	      this.off( eventName, listener );
	      // unset once flag
	      delete onceListeners[ listener ];
	    }
	    // trigger listener
	    listener.apply( this, args );
	    // get next listener
	    i += isOnce ? 0 : 1;
	    listener = listeners[i];
	  }
	
	  return this;
	};
	
	return EvEmitter;
	
	}));


/***/ },

/***/ 315:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Store = {
	  state: {
	    message: 'Store State Message'
	  },
	  displayHelper: {},
	  breakpoint: null
	};
	
	exports.default = Store;

/***/ },

/***/ 316:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// node_modules
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vue = __webpack_require__(299);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _loglevel = __webpack_require__(302);
	
	var _loglevel2 = _interopRequireDefault(_loglevel);
	
	var _bus = __webpack_require__(305);
	
	var _bus2 = _interopRequireDefault(_bus);
	
	var _store = __webpack_require__(315);
	
	var _store2 = _interopRequireDefault(_store);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//
	exports.default = _vue2.default.component('global-flyout', {
	  ready: function ready() {
	    var _this = this;
	
	    _loglevel2.default.info('component :: global-flyout :: ready');
	
	    var stageEl = document.querySelectorAll('.stage')[0];
	
	    function getScrollPosition() {
	      return 'scrollY' in window ? window.scrollY : document.documentElement.scrollTop;
	    }
	
	    //
	    _bus2.default.$on('toggleFlyout', function (flyoutName, direction, content) {
	      if (flyoutName === 'globalFlyout') {
	        if (_this.privateData.activeContent !== content && content) {
	          _loglevel2.default.info('component :: global-flyout :: content change');
	          _this.privateData.isActive = true;
	          _this.privateData.activeContent = content;
	
	          // check if flyout content is greater than viewport height
	          _vue2.default.nextTick(function () {
	            var headerEl = document.querySelectorAll('.c-header')[0];
	            var flyoutEl = _this.$el.querySelectorAll('.c-subnav-primary')[0];
	            var contentHeight = flyoutEl.offsetHeight + headerEl.offsetHeight;
	
	            if (contentHeight >= window.innerHeight || !headerEl.classList.contains('u-pos-f')) {
	              //mobile addtional height to allow for toolbar
	              if (window.innerWidth < 768) {
	                contentHeight += 50;
	              }
	
	              _this.privateData.scrollPosition = getScrollPosition();
	
	              stageEl.style.height = (contentHeight < window.innerHeight ? window.innerHeight : contentHeight) + 'px';
	              flyoutEl.style.position = 'absolute';
	
	              window.scrollTo(0, 0);
	            } else {
	              stageEl.style.height = null;
	              flyoutEl.style.position = 'fixed';
	
	              if (_this.privateData.scrollPosition) {
	                window.scrollTo(0, _this.privateData.scrollPosition);
	                _this.privateData.scrollPosition = undefined;
	              }
	            }
	          });
	        } else {
	          _vue2.default.nextTick(function () {
	            stageEl.style.height = null;
	
	            if (_this.privateData.scrollPosition) {
	              window.scrollTo(0, _this.privateData.scrollPosition);
	              _this.privateData.scrollPosition = undefined;
	            }
	          });
	
	          // only hide when in breakpoint other than mobile
	          if (_this.sharedData.breakpoint !== 'small') {
	            _this.privateData.isActive = !_this.privateData.isActive;
	            _this.privateData.activeContent = null;
	          }
	        }
	
	        if (direction === 'vertical') {
	          _loglevel2.default.info('toggleFlyout :: vertical');
	        }
	
	        if (direction === 'horizontal') {
	          _loglevel2.default.info('toggleFlyout :: horizontal');
	          _this.privateData.isOnscreen = !_this.privateData.isOnscreen;
	        }
	
	        if (direction === 'reset') {
	          _vue2.default.nextTick(function () {
	            stageEl.style.height = null;
	
	            if (_this.privateData.scrollPosition) {
	              window.scrollTo(0, _this.privateData.scrollPosition);
	              _this.privateData.scrollPosition = undefined;
	            }
	          });
	
	          _this.privateData.isOnscreen = false;
	          _this.privateData.isActive = false;
	          _this.privateData.activeContent = null;
	        }
	      }
	    });
	
	    _bus2.default.$on('closeFlyout', function (flyoutName) {
	      if (_this.sharedData.breakpoint === 'small' && flyoutName === 'globalFlyout') {
	        _this.privateData.isOnscreen = false;
	      } else {
	        _this.privateData.isActive = false;
	      }
	
	      _vue2.default.nextTick(function () {
	        stageEl.style.height = null;
	
	        if (_this.privateData.scrollPosition) {
	          window.scrollTo(0, _this.privateData.scrollPosition);
	          _this.privateData.scrollPosition = undefined;
	        }
	      });
	
	      _this.privateData.activeContent = null;
	    });
	
	    // mobile only events
	    _bus2.default.$on('togglePrimaryNav', function (state) {
	      if (_this.sharedData.breakpoint === 'small') {
	        if (!state) {
	          _loglevel2.default.info('component :: global-flyout :: togglePrimaryNav :: close');
	          _this.privateData.isOnscreen = false;
	          _this.privateData.isActive = false;
	
	          _vue2.default.nextTick(function () {
	            stageEl.style.height = null;
	
	            if (_this.privateData.scrollPosition) {
	              window.scrollTo(0, _this.privateData.scrollPosition);
	              _this.privateData.scrollPosition = undefined;
	            }
	          });
	        } else {
	          _loglevel2.default.info('component :: global-flyout :: togglePrimaryNav :: open');
	          _this.privateData.scrollPosition = getScrollPosition();
	        }
	      }
	    });
	  },
	  data: function data() {
	    return {
	      privateData: {
	        isActive: false,
	        isOnscreen: false,
	        activeContent: null,
	        scrollPosition: null
	      },
	      sharedData: _store2.default
	    };
	  },
	  methods: {
	    closeFlyout: function closeFlyout() {
	      _bus2.default.$emit('closeFlyout', 'globalFlyout');
	    },
	    openFlyout: function openFlyout() {
	      _bus2.default.$emit('openFlyout', 'globalFlyout');
	    },
	    checkContentState: function checkContentState(content) {
	      return this.privateData.activeContent === content;
	    }
	  }
	});

/***/ },

/***/ 317:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// node_modules
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vue = __webpack_require__(299);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _loglevel = __webpack_require__(302);
	
	var _loglevel2 = _interopRequireDefault(_loglevel);
	
	var _bus = __webpack_require__(305);
	
	var _bus2 = _interopRequireDefault(_bus);
	
	var _store = __webpack_require__(315);
	
	var _store2 = _interopRequireDefault(_store);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//
	exports.default = _vue2.default.component('global-header', {
	  ready: function ready() {
	    var _this = this;
	
	    _loglevel2.default.info('component :: global-header :: ready');
	
	    _bus2.default.$on('closeFlyout', function () {
	      _this.privateData.flyout.isActive = false;
	    });
	
	    _bus2.default.$on('windowResize', function (breakpoint) {
	      _this.privateData.breakpoint = breakpoint;
	    });
	  },
	  data: function data() {
	    return {
	      privateData: {
	        isActive: false,
	        breakpoint: null,
	        flyout: {
	          isActive: false,
	          activeContent: null
	        }
	      },
	      sharedData: _store2.default
	    };
	  },
	  watch: {
	    'privateData.breakpoint': {
	      handler: function handler(newBreakpoint, oldBreakpoint) {
	        if (newBreakpoint !== oldBreakpoint && newBreakpoint === 'small' && oldBreakpoint !== null) {
	          _bus2.default.$emit('togglePrimaryNav', this.privateData.isActive);
	          if (this.privateData.flyout.isActive) {
	            this.privateData.flyout.activeContent = undefined;
	            this.privateData.flyout.isActive = false;
	            _bus2.default.$emit('toggleFlyout', 'globalFlyout', 'reset');
	          }
	        } else {
	          if (oldBreakpoint === 'small' && newBreakpoint !== 'small') {
	            this.privateData.flyout.activeContent = undefined;
	            this.privateData.flyout.isActive = false;
	            _bus2.default.$emit('toggleFlyout', 'globalFlyout', 'reset');
	          }
	        }
	      },
	      deep: true
	    }
	  },
	  methods: {
	    // mobile only method
	    togglePrimaryNav: function togglePrimaryNav() {
	      this.privateData.isActive = !this.privateData.isActive;
	
	      if (!this.privateData.isActive) {
	        // reset position
	        _bus2.default.$emit('toggleFlyout', 'globalFlyout', 'reset');
	
	        this.privateData.flyout.activeContent = undefined;
	        this.privateData.flyout.isActive = false;
	      } else {
	        _bus2.default.$emit('toggleFlyout', 'globalFlyout', 'vertical');
	        _bus2.default.$emit('togglePrimaryNav', this.privateData.isActive);
	      }
	    },
	    toggleFlyout: function toggleFlyout(flyoutName, content) {
	      // log.info('component :: global-header :: methods :: toggleFlyout');
	      this.privateData.flyout.isActive = !(this.privateData.flyout.activeContent === content && this.privateData.flyout.isActive);
	      this.privateData.flyout.activeContent = content;
	
	      if (this.sharedData.breakpoint === 'small') {
	        _bus2.default.$emit('toggleFlyout', flyoutName, 'horizontal', content);
	      } else {
	        _bus2.default.$emit('toggleFlyout', flyoutName, 'vertical', content);
	      }
	    },
	    checkFlyoutState: function checkFlyoutState(flyoutName, content) {
	      return this.privateData.flyout.activeContent === content && this.privateData.flyout.isActive;
	    }
	  }
	});

/***/ },

/***/ 318:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// node_modules
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vue = __webpack_require__(299);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _loglevel = __webpack_require__(302);
	
	var _loglevel2 = _interopRequireDefault(_loglevel);
	
	var _bus = __webpack_require__(305);
	
	var _bus2 = _interopRequireDefault(_bus);
	
	var _googleApiLoader = __webpack_require__(319);
	
	var _googleApiLoader2 = _interopRequireDefault(_googleApiLoader);
	
	var _store = __webpack_require__(315);
	
	var _store2 = _interopRequireDefault(_store);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _vue2.default.component('global-search', {
	  // declare the props for google search
	  data: function data() {
	    return {
	      sharedData: _store2.default
	    };
	  },
	  props: ['cx'],
	  ready: function ready() {
	    var _this = this;
	
	    // apply focus to input when search box is triggered
	    _bus2.default.$on('toggleFlyout', function (flyoutName, direction, content) {
	
	      if (content === 'search' && _this.sharedData.breakpoint !== 'small') {
	        _vue2.default.nextTick(function () {
	          _this.$el.querySelectorAll('input.gsc-input')[0].focus();
	        });
	      }
	    });
	
	    (0, _googleApiLoader2.default)().then(function () {
	
	      var cseSearch = _this.$el.querySelectorAll('.c-google-search__placeholder'),
	          cseResults = _this.$el.querySelectorAll('.c-google-search__results'),
	          cseOptions;
	
	      window.google.load('search', // Library to load
	      '1', // Library version
	      {
	        language: 'en',
	        style: window.google.loader.themes.V2_DEFAULT,
	        'callback': function callback() {
	          var cseControl = {},
	              cseDrawOptions;
	
	          cseControl.adoptions = { 'layout': 'noTop' };
	          cseControl.autoCompleteOptions = { 'maxCompletions': 7 };
	          cseOptions = new window.google.search.CustomSearchControl(_this.cx, cseControl);
	          cseOptions.setResultSetSize(window.google.search.Search.FILTERED_CSE_RESULTSET);
	          cseDrawOptions = new window.google.search.DrawOptions();
	          cseDrawOptions.setAutoComplete(true);
	          cseDrawOptions.enableSearchboxOnly('/search');
	          cseDrawOptions.setSearchFormRoot(cseSearch[0]);
	          cseOptions.draw(_this.$el[0], cseDrawOptions);
	
	          // /*TODO
	          //  * Bug in google api, .draw() method does not append search
	          //  * results supplied to the actual supplied element
	          //  * it's appended to the body instead, so this hack is to move it below
	          //  */
	          cseResults[0].appendChild(document.querySelectorAll('.gstl_50.gssb_c')[0]);
	        }
	      });
	    });
	  }
	});
	
	// Vue services

/***/ },

/***/ 319:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var GoogleApiLoader = function GoogleApiLoader() {
	  return new Promise(
	  // The resolver function is called with the ability to resolve or
	  // reject the promise
	  function (resolve, reject) {
	    var tag,
	        firstScriptTag,
	        googlespace = window.google || {};
	
	    if (!googlespace.load) {
	      // Resolve promise when ready
	      window.onGoogleApiLoaderReady = function () {
	        resolve('loaded first time');
	      };
	
	      tag = document.createElement('script');
	      tag.src = "https://www.google.com/jsapi?callback=onGoogleApiLoaderReady";
	      firstScriptTag = document.getElementsByTagName('script')[0];
	      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	    } else {
	      resolve('already loaded');
	    }
	  });
	};
	
	exports.default = GoogleApiLoader;

/***/ },

/***/ 320:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _bus = __webpack_require__(305);
	
	var _bus2 = _interopRequireDefault(_bus);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var breakpoints = {
	  setBreakpoint: function setBreakpoint() {
	    if (window.innerWidth >= 1024) {
	      _bus2.default.$emit('windowResize', 'large');
	      this.sharedData.breakpoint = 'large';
	    } else {
	      if (window.innerWidth < 1024 && window.innerWidth >= 768) {
	        _bus2.default.$emit('windowResize', 'medium');
	        this.sharedData.breakpoint = 'medium';
	      } else {
	        _bus2.default.$emit('windowResize', 'small');
	        this.sharedData.breakpoint = 'small';
	      }
	    }
	  }
	};
	
	exports.default = breakpoints;

/***/ },

/***/ 321:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _bus = __webpack_require__(305);
	
	var _bus2 = _interopRequireDefault(_bus);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var touch = {
	  // Adding a touch class on the body based on device detection
	  mobileAndTabletcheck: function mobileAndTabletcheck() {
	    var check = false;
	    (function (a) {
	      if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
	    })(navigator.userAgent || navigator.vendor || window.opera);
	    if (!check) {
	      document.querySelectorAll('body')[0].className += ' no-touch';
	    }
	  }
	};
	
	exports.default = touch;

/***/ },

/***/ 322:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// node_modules
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vue = __webpack_require__(299);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _lodash = __webpack_require__(300);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ui = {
	  uiCheckActiveItem: function uiCheckActiveItem(config) {
	    var displayHelper = this.sharedData.displayHelper;
	    if (config.groupName) {
	      if (typeof displayHelper[config.groupName] !== 'undefined') {
	        if (config.itemName) {
	          if (Array.isArray(config.itemName)) {
	            if (_lodash2.default.indexOf(config.itemName, displayHelper[config.groupName].activeItem) >= 0) {
	              return true;
	            } else {
	              return false;
	            }
	          } else {
	            if (config.checkItemOnly) {
	              return displayHelper[config.groupName].activeItem === config.itemName;
	            } else {
	              return displayHelper[config.groupName].activeItem === config.itemName && displayHelper[config.groupName].isActive;
	            }
	          }
	        } else {
	          return displayHelper[config.groupName].isActive;
	        }
	      } else {
	        return false;
	      }
	    } else {
	      return displayHelper[config.itemName];
	    }
	  },
	  uiToggleItem: function uiToggleItem(config) {
	    var displayHelper = this.sharedData.displayHelper;
	    if (config.groupName) {
	      if (typeof displayHelper[config.groupName] !== 'undefined') {
	        if (displayHelper[config.groupName].isActive) {
	          if (displayHelper[config.groupName].activeItem === config.itemName) {
	            _vue2.default.set(displayHelper, config.groupName, _lodash2.default.assign(displayHelper[config.groupName], { isActive: false }));
	          } else {
	            _vue2.default.set(displayHelper, config.groupName, _lodash2.default.assign(displayHelper[config.groupName], { isActive: true, activeItem: config.itemName }));
	          }
	        } else {
	          _vue2.default.set(displayHelper, config.groupName, _lodash2.default.assign(displayHelper[config.groupName], { isActive: true, activeItem: config.itemName }));
	        }
	      } else {
	        _vue2.default.set(displayHelper, config.groupName, _lodash2.default.assign(displayHelper[config.groupName], { isActive: true, activeItem: config.itemName }));
	      }
	    } else {
	      _vue2.default.set(displayHelper, config.itemName, !displayHelper[config.itemName]);
	    }
	  },
	  uiOpenItem: function uiOpenItem(config) {
	    var displayHelper = this.sharedData.displayHelper;
	    if (config.groupName) {
	      if (typeof displayHelper[config.groupName] !== 'undefined') {
	        _vue2.default.set(displayHelper, config.groupName, _lodash2.default.assign(displayHelper[config.groupName], { isActive: true, activeItem: config.itemName }));
	      } else {
	        _vue2.default.set(displayHelper, config.groupName, _lodash2.default.assign(displayHelper[config.groupName], { isActive: true, activeItem: config.itemName }));
	      }
	    } else {
	      _vue2.default.set(displayHelper, config.itemName, true);
	    }
	  },
	  uiCloseItem: function uiCloseItem(config) {
	    var displayHelper = this.sharedData.displayHelper;
	    if (typeof displayHelper[config.groupName] !== 'undefined') {
	      _vue2.default.set(displayHelper, config.groupName, _lodash2.default.assign(displayHelper[config.groupName], { isActive: false, activeItem: null }));
	    } else {
	      _vue2.default.set(displayHelper, config.itemName, false);
	    }
	  },
	  // navigation-specific
	  uiCloseNavigation: function uiCloseNavigation(config) {
	    var displayHelper = this.sharedData.displayHelper;
	
	    if (typeof displayHelper[config.groupName] !== 'undefined') {
	      if (!displayHelper[config.groupName].isActive) {
	        _vue2.default.set(displayHelper, config.itemName, false);
	      } else {
	        _vue2.default.set(displayHelper, config.groupName, { isActive: false, activeItem: null });
	        setTimeout(function () {
	          _vue2.default.set(displayHelper, config.itemName, false);
	        }, 300);
	      }
	    } else {
	      _vue2.default.set(displayHelper, config.itemName, false);
	    }
	  }
	};
	
	exports.default = ui;

/***/ }

});
//# sourceMappingURL=main.bundle.js.map