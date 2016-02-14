module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _pixi = __webpack_require__(1);
	
	var _pixi2 = _interopRequireDefault(_pixi);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = _pixi2.default.ui = {
	
	    LayoutManager: __webpack_require__(2).LayoutManager,
	
	    Margin: __webpack_require__(3).Margin,
	    Padding: __webpack_require__(3).Padding,
	    Size: __webpack_require__(3).Size,
	
	    UI: __webpack_require__(4),
	
	    UIStage: __webpack_require__(5).UIStage,
	
	    layout: __webpack_require__(7),
	
	    view: __webpack_require__(11)
	
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("@mifunstudio/pixi.js");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.LayoutManager = undefined;
	
	var _math = __webpack_require__(3);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var LayoutManager = exports.LayoutManager = function () {
	    _createClass(LayoutManager, [{
	        key: 'container',
	        get: function get() {
	            return this._container;
	        }
	    }, {
	        key: 'padding',
	        get: function get() {
	            return this._padding;
	        }
	    }, {
	        key: 'childMargin',
	        get: function get() {
	            return this._childMargin;
	        }
	    }, {
	        key: 'layoutRequired',
	        get: function get() {
	            return this._layoutRequired;
	        },
	        set: function set(value) {
	            this._layoutRequired = value;
	        }
	    }]);
	
	    function LayoutManager() {
	        _classCallCheck(this, LayoutManager);
	
	        this._container = null;
	        this._padding = new _math.Padding(0, 0, 0, 0);
	        this._childMargin = new _math.Margin(0, 0, 0, 0);
	        this._layoutRequired = true;
	    }
	
	    _createClass(LayoutManager, [{
	        key: 'setContainer',
	        value: function setContainer(container) {
	            this._container = container;
	        }
	    }, {
	        key: 'requestLayout',
	        value: function requestLayout() {
	            this._layoutRequired = true;
	        }
	    }, {
	        key: 'layout',
	        value: function layout() {
	            if (!this.layoutRequired) return;
	            this.doLayout();
	            this.layoutRequired = false;
	        }
	    }, {
	        key: 'doLayout',
	        value: function doLayout() {}
	    }]);
	
	    return LayoutManager;
	}();

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Size = exports.Padding = exports.Margin = undefined;
	
	var _pixi = __webpack_require__(1);
	
	var _pixi2 = _interopRequireDefault(_pixi);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Margin = exports.Margin = function Margin(top, right, bottom, left) {
	    _classCallCheck(this, Margin);
	
	    this.top = top;
	    this.right = right;
	    this.bottom = bottom;
	    this.left = left;
	};
	
	var Padding = exports.Padding = function (_Margin) {
	    _inherits(Padding, _Margin);
	
	    function Padding() {
	        _classCallCheck(this, Padding);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Padding).apply(this, arguments));
	    }
	
	    return Padding;
	}(Margin);
	
	var Size = exports.Size = function (_PIXI$Point) {
	    _inherits(Size, _PIXI$Point);
	
	    function Size() {
	        _classCallCheck(this, Size);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Size).apply(this, arguments));
	    }
	
	    _createClass(Size, [{
	        key: 'clone',
	        value: function clone() {
	            return new Size(this.width, this.height);
	        }
	    }, {
	        key: 'width',
	        get: function get() {
	            return this.x;
	        },
	        set: function set(value) {
	            this.x = value;
	        }
	    }, {
	        key: 'height',
	        get: function get() {
	            return this.y;
	        },
	        set: function set(value) {
	            this.y = value;
	        }
	    }]);
	
	    return Size;
	}(_pixi2.default.Point);

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.debugDrawGraphics = exports.debugDraw = exports.ALIGN_NONE = exports.ALIGN_BOTTOM = exports.ALIGN_MIDDLE = exports.ALIGN_TOP = exports.ALIGN_END = exports.ALIGN_CENTER = exports.ALIGN_START = undefined;
	exports.debugDrawUIContainer = debugDrawUIContainer;
	exports.getWidth = getWidth;
	exports.getHeight = getHeight;
	exports.getSize = getSize;
	exports.createUIStage = createUIStage;
	exports.setUIStageFactory = setUIStageFactory;
	exports.getUIStage = getUIStage;
	exports.invalidateUIStage = invalidateUIStage;
	exports.invalidate = invalidate;
	
	var _pixi = __webpack_require__(1);
	
	var _pixi2 = _interopRequireDefault(_pixi);
	
	var _math = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ALIGN_START = exports.ALIGN_START = 'start';
	var ALIGN_CENTER = exports.ALIGN_CENTER = 'center';
	var ALIGN_END = exports.ALIGN_END = 'end';
	var ALIGN_TOP = exports.ALIGN_TOP = 'top';
	var ALIGN_MIDDLE = exports.ALIGN_MIDDLE = 'middle';
	var ALIGN_BOTTOM = exports.ALIGN_BOTTOM = 'bottom';
	var ALIGN_NONE = exports.ALIGN_NONE = 'none';
	
	var debugDraw = exports.debugDraw = false;
	var debugDrawGraphics = exports.debugDrawGraphics = null;
	
	function debugDrawUIContainer(renderer, uiContainer, color) {
	    var size = uiContainer.size;
	    if (size.width === 0 || size.height === 0) return;
	    exports.debugDrawGraphics = debugDrawGraphics = debugDrawGraphics || new _pixi2.default.Graphics();
	    debugDrawGraphics.clear();
	    debugDrawGraphics.lineStyle(1, color || 0xFF00FF);
	    debugDrawGraphics.drawRect(0, 0, size.width, size.height);
	    uiContainer.worldTransform.copy(debugDrawGraphics.worldTransform);
	    if (renderer.type === _pixi2.default.RENDERER_TYPE.WEBGL) {
	        debugDrawGraphics.renderWebGL(renderer);
	    } else {
	        debugDrawGraphics.renderCanvas(renderer);
	    }
	}
	
	var uiStage = undefined;
	var uiStageFactory = undefined;
	
	function getWidth(ui) {
	    if (ui.isUIContainer) {
	        return ui.size.width;
	    }
	    return ui.width || 0;
	}
	
	function getHeight(ui) {
	    if (ui.isUIContainer) {
	        return ui.size.height;
	    }
	    return ui.height || 0;
	}
	
	function getSize(ui) {
	    if (ui.isUIContainer) {
	        return ui.size;
	    }
	    return new _math.Size(ui.width || 0, ui.height || 0);
	}
	
	function createUIStage(stage) {
	    uiStage = uiStageFactory(stage);
	    return uiStage;
	}
	
	function setUIStageFactory(factory) {
	    uiStageFactory = factory;
	}
	
	function getUIStage() {
	    return uiStage;
	}
	
	function invalidateUIStage() {
	    uiStage && uiStage.invalidate();
	}
	
	function invalidate(view) {
	    if (view.parent && view.parent.isUIContainer) {
	        view.parent.invalidate();
	    } else {
	        invalidateUIStage();
	    }
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.UIStage = undefined;
	
	var _pixi = __webpack_require__(1);
	
	var _pixi2 = _interopRequireDefault(_pixi);
	
	var _UIContainer2 = __webpack_require__(6);
	
	var _math = __webpack_require__(3);
	
	var _UI = __webpack_require__(4);
	
	var UI = _interopRequireWildcard(_UI);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	UI.setUIStageFactory(function (stage) {
	    return new UIStage(stage);
	});
	
	var UIStage = exports.UIStage = function (_UIContainer) {
	    _inherits(UIStage, _UIContainer);
	
	    function UIStage(stage) {
	        _classCallCheck(this, UIStage);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(UIStage).call(this));
	
	        _this.stage = stage;
	        _this._bounds = new _pixi2.default.Rectangle(0, 0, 0, 0);
	        _this._frameEnd = false;
	
	        _this._doRenderChildren = false;
	        _this._renderTexture = new _pixi2.default.RenderTexture(_this.stage.renderer, _this.stage.viewport.width, _this.stage.viewport.height);
	        _this._renderSprite = new _pixi2.default.Sprite(_this._renderTexture);
	
	        _this._onViewportResize();
	        _this._updateRenderTexture();
	        _this.stage.on('viewport.resize', _this._onViewportResize, _this);
	        return _this;
	    }
	
	    _createClass(UIStage, [{
	        key: 'getLocalBounds',
	        value: function getLocalBounds() {
	            return this._bounds;
	        }
	    }, {
	        key: 'invalidate',
	        value: function invalidate() {
	            var _this2 = this;
	
	            if (!this._renderSchedule) {
	                this._renderSchedule = this.stage.scheduler.frame(function () {
	                    _this2._renderToRenderTexture();
	                    _this2._renderSchedule = null;
	                    console.log('invalidate');
	                }, 0);
	            }
	        }
	    }, {
	        key: 'renderCanvas',
	        value: function renderCanvas(renderer) {
	            if (this._doRenderChildren) {
	                _get(Object.getPrototypeOf(UIStage.prototype), 'renderCanvas', this).call(this, renderer);
	            } else {
	                this._renderSprite.renderCanvas(renderer);
	            }
	        }
	    }, {
	        key: 'renderWebGL',
	        value: function renderWebGL(renderer) {
	            if (this._doRenderChildren) {
	                _get(Object.getPrototypeOf(UIStage.prototype), 'renderWebGL', this).call(this, renderer);
	            } else {
	                this._renderSprite.renderWebGL(renderer);
	            }
	        }
	    }, {
	        key: 'destroy',
	        value: function destroy(destroyChildren) {
	            this._renderSprite.destroy(true);
	            _get(Object.getPrototypeOf(UIStage.prototype), 'destroy', this).call(this, destroyChildren);
	            this.stage.off('viewport.resize', this._onViewportResize, this);
	        }
	    }, {
	        key: '_renderToRenderTexture',
	        value: function _renderToRenderTexture() {
	            this._doRenderChildren = true;
	            this._renderTexture.render(this, this.stage.worldTransform, true);
	            this._doRenderChildren = false;
	        }
	    }, {
	        key: '_updateRenderTexture',
	        value: function _updateRenderTexture() {
	            this._renderTexture.resize(this._bounds.width, this._bounds.height, true);
	            this.invalidate();
	        }
	    }, {
	        key: '_onViewportResize',
	        value: function _onViewportResize() {
	            this._bounds.width = this.stage.viewport.width;
	            this._bounds.height = this.stage.viewport.height;
	            this.setSize(new _math.Size(this.stage.viewport.width, this.stage.viewport.height));
	            this._updateRenderTexture();
	        }
	    }]);
	
	    return UIStage;
	}(_UIContainer2.UIContainer);

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.UIContainer = undefined;
	
	var _pixi = __webpack_require__(1);
	
	var _pixi2 = _interopRequireDefault(_pixi);
	
	var _math = __webpack_require__(3);
	
	var _UI = __webpack_require__(4);
	
	var UI = _interopRequireWildcard(_UI);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var UIContainer = exports.UIContainer = function (_PIXI$Container) {
	    _inherits(UIContainer, _PIXI$Container);
	
	    _createClass(UIContainer, [{
	        key: 'isUIContainer',
	        get: function get() {
	            return true;
	        }
	    }, {
	        key: 'size',
	        get: function get() {
	            return this._size;
	        }
	    }, {
	        key: 'layoutManager',
	        get: function get() {
	            return this._layoutManager;
	        }
	    }, {
	        key: 'align',
	        get: function get() {
	            return this._align;
	        }
	    }, {
	        key: 'alignWidth',
	        get: function get() {
	            return this.size.width;
	        }
	    }, {
	        key: 'valign',
	        get: function get() {
	            return this._valign;
	        }
	    }, {
	        key: 'valignHeight',
	        get: function get() {
	            return this.size.height;
	        }
	    }]);
	
	    function UIContainer(width, height) {
	        _classCallCheck(this, UIContainer);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(UIContainer).call(this));
	
	        _this._size = new _math.Size(width || 100, height || 100);
	        _this._layoutManager = null;
	        _this._align = UI.ALIGN_NONE;
	        _this._valign = UI.ALIGN_NONE;
	        return _this;
	    }
	
	    _createClass(UIContainer, [{
	        key: 'renderWebGL',
	        value: function renderWebGL(renderer) {
	            _get(Object.getPrototypeOf(UIContainer.prototype), 'renderWebGL', this).call(this, renderer);
	            if (UI.debugDraw) {
	                UI.debugDrawUIContainer(renderer, this);
	            }
	        }
	    }, {
	        key: 'renderCanvas',
	        value: function renderCanvas(renderer) {
	            _get(Object.getPrototypeOf(UIContainer.prototype), 'renderCanvas', this).call(this, renderer);
	            if (UI.debugDraw) {
	                UI.debugDrawUIContainer(renderer, this);
	            }
	        }
	    }, {
	        key: 'setAlign',
	        value: function setAlign(align, valign) {
	            this._align = align;
	            if (valign) {
	                this._valign = valign;
	            }
	            this.emitEvent('alignchange', true);
	        }
	    }, {
	        key: 'setValign',
	        value: function setValign(valign) {
	            this._valign = valign;
	            this.emitEvent('alignchange', true);
	        }
	    }, {
	        key: 'invalidate',
	        value: function invalidate() {
	            UI.invalidateUIStage();
	        }
	    }, {
	        key: 'updateTransform',
	        value: function updateTransform() {
	            this.uiContainerUpdateTransform();
	            if (this.hasActivedTweens()) {
	                console.log('invalidate');
	                this.invalidate();
	            }
	        }
	    }, {
	        key: 'hasActivedTweens',
	        value: function hasActivedTweens() {
	            return this.tweenTransform.tweens.length > 0;
	        }
	    }, {
	        key: 'setSize',
	        value: function setSize(size) {
	            if (!this._size || !size || this._size === size) {
	                return;
	            }
	            if (this._size && this._size.equals(size)) {
	                return;
	            }
	            this._size = size;
	            this.onSizeChange();
	            this.emitEvent('sizechange', true);
	        }
	    }, {
	        key: 'setLayoutManager',
	        value: function setLayoutManager(layoutManager) {
	            this._layoutManager = layoutManager;
	            if (this._layoutManager) {
	                this._layoutManager.setContainer(this);
	                this._layoutManager.requestLayout();
	            }
	        }
	    }, {
	        key: 'uiContainerUpdateTransform',
	        value: function uiContainerUpdateTransform() {
	            if (!this.visible) return;
	            this.displayObjectUpdateTransform();
	            this.onLayout();
	            for (var i = 0, len = this.children.length; i < len; i++) {
	                this.children[i].updateTransform();
	            }
	        }
	    }, {
	        key: 'onChildrenChange',
	        value: function onChildrenChange() {
	            this.requestLayout();
	            this.invalidate();
	        }
	    }, {
	        key: 'onSizeChange',
	        value: function onSizeChange() {}
	    }, {
	        key: 'requestLayout',
	        value: function requestLayout() {
	            if (this._layoutManager) {
	                this._layoutManager.requestLayout();
	            }
	        }
	    }, {
	        key: 'onLayout',
	        value: function onLayout() {
	            this._layoutManager && this._layoutManager.layout();
	        }
	    }]);
	
	    return UIContainer;
	}(_pixi2.default.Container);

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
	    HBox: __webpack_require__(8).HBox,
	    VBox: __webpack_require__(9).VBox,
	    Relative: __webpack_require__(10).Relative
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.HBox = undefined;
	
	var _LayoutManager2 = __webpack_require__(2);
	
	var _math = __webpack_require__(3);
	
	var _UI = __webpack_require__(4);
	
	var UI = _interopRequireWildcard(_UI);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var HBox = exports.HBox = function (_LayoutManager) {
	    _inherits(HBox, _LayoutManager);
	
	    function HBox() {
	        _classCallCheck(this, HBox);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(HBox).apply(this, arguments));
	    }
	
	    _createClass(HBox, [{
	        key: 'doLayout',
	        value: function doLayout() {
	            var size = new _math.Size(0, 0);
	            var start = this.padding.left;
	            var children = this.container.children;
	            for (var i = 0, len = children.length; i < len; i++) {
	                var child = children[i];
	                start += this.childMargin.left;
	                child.position.x = start;
	                start += UI.getWidth(child) + this.childMargin.right;
	                size.height = Math.max(UI.getHeight(child), size.height);
	            }
	            size.width = start;
	            size.height += this.padding.top + this.padding.bottom;
	            this.container.setSize(size);
	        }
	    }]);
	
	    return HBox;
	}(_LayoutManager2.LayoutManager);

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.VBox = undefined;
	
	var _LayoutManager2 = __webpack_require__(2);
	
	var _math = __webpack_require__(3);
	
	var _UI = __webpack_require__(4);
	
	var UI = _interopRequireWildcard(_UI);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var VBox = exports.VBox = function (_LayoutManager) {
	    _inherits(VBox, _LayoutManager);
	
	    function VBox() {
	        _classCallCheck(this, VBox);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(VBox).apply(this, arguments));
	    }
	
	    _createClass(VBox, [{
	        key: 'doLayout',
	        value: function doLayout() {
	            var size = new _math.Size(0, 0);
	            var start = this.padding.top;
	            var children = this.container.children;
	            for (var i = 0, len = children.length; i < len; i++) {
	                var child = children[i];
	                start += this.childMargin.top;
	                child.position.y = start;
	                start += UI.getHeight(child) + this.childMargin.right;
	                size.width = Math.max(UI.getWidth(child), size.width);
	            }
	            size.height = start;
	            size.width += this.padding.left + this.padding.right;
	            this.container.setSize(size);
	        }
	    }]);
	
	    return VBox;
	}(_LayoutManager2.LayoutManager);

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Relative = undefined;
	
	var _LayoutManager2 = __webpack_require__(2);
	
	var _math = __webpack_require__(3);
	
	var _UI = __webpack_require__(4);
	
	var UI = _interopRequireWildcard(_UI);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Relative = exports.Relative = function (_LayoutManager) {
	    _inherits(Relative, _LayoutManager);
	
	    function Relative() {
	        _classCallCheck(this, Relative);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Relative).apply(this, arguments));
	    }
	
	    _createClass(Relative, [{
	        key: 'setContainer',
	        value: function setContainer(container) {
	            if (this._container) {
	                this._container.off('alignchange', this._onAlignChange, this);
	            }
	            this._container = container;
	            this._container.on('alignchange', this._onAlignChange, this);
	        }
	    }, {
	        key: 'doLayout',
	        value: function doLayout() {
	            var _this2 = this;
	
	            this._container.children.forEach(function (child) {
	                _this2.layoutChild(child);
	            });
	        }
	    }, {
	        key: 'layoutChild',
	        value: function layoutChild(child) {
	            var size = this._container.size;
	            switch (child.align) {
	                case UI.ALIGN_CENTER:
	                    child.x = size.width / 2 - child.alignWidth / 2;
	                    break;
	                case UI.ALIGN_END:
	                    child.x = size.width - child.alignWidth;
	                    break;
	                case UI.ALIGN_START:
	                    child.x = -child.alignWidth;
	                    break;
	            }
	            switch (child.valign) {
	                case UI.ALIGN_MIDDLE:
	                    child.y = size.height / 2 - child.valignHeight / 2;
	                    break;
	                case UI.ALIGN_BOTTOM:
	                    child.y = size.height - child.valignHeight;
	                    break;
	                case UI.ALIGN_TOP:
	                    child.y = -child.valignHeight;
	                    break;
	            }
	        }
	    }, {
	        key: '_onAlignChange',
	        value: function _onAlignChange() {
	            this._container.requestLayout();
	            this._container.invalidate();
	        }
	    }]);
	
	    return Relative;
	}(_LayoutManager2.LayoutManager);

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
	    AbstractButton: __webpack_require__(12).AbstractButton,
	    AbstractProgressBar: __webpack_require__(19).AbstractProgressBar,
	    Adapter: __webpack_require__(17).Adapter,
	    AdapterView: __webpack_require__(14).AdapterView,
	    ArrayAdapter: __webpack_require__(16).ArrayAdapter,
	    Button: __webpack_require__(21).Button,
	    Checkbox: __webpack_require__(22).Checkbox,
	    ImageView: __webpack_require__(20).ImageView,
	    ListView: __webpack_require__(23).ListView,
	    ProgressBar: __webpack_require__(25).ProgressBar,
	    Recycler: __webpack_require__(24).Recycler,
	    ScrollView: __webpack_require__(26).ScrollView,
	    SimpleButton: __webpack_require__(27).SimpleButton,
	    SimpleCheckbox: __webpack_require__(28).SimpleCheckbox,
	    SlideView: __webpack_require__(29).SlideView,
	    StateAdapter: __webpack_require__(15).StateAdapter,
	    StateView: __webpack_require__(13).StateView
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.AbstractButton = undefined;
	
	var _pixi = __webpack_require__(1);
	
	var _pixi2 = _interopRequireDefault(_pixi);
	
	var _StateView2 = __webpack_require__(13);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var sharedPoint = new _pixi2.default.Point(0, 0);
	
	var AbstractButton = exports.AbstractButton = function (_StateView) {
	    _inherits(AbstractButton, _StateView);
	
	    function AbstractButton() {
	        _classCallCheck(this, AbstractButton);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractButton).call(this));
	
	        _this.interactive = true;
	        _this.interactiveChildren = false;
	        return _this;
	    }
	
	    _createClass(AbstractButton, [{
	        key: 'containsPoint',
	        value: function containsPoint(point) {
	            var hit = undefined;
	            if (this.hitArea) {
	                this.worldTransform.applyInverse(point, sharedPoint);
	                return this.hitArea.contains(sharedPoint.x, sharedPoint.y);
	            }
	            var view = this.getCurrentView();
	            if (view.hitArea) {
	                view.worldTransform.applyInverse(point, sharedPoint);
	                hit = view.hitArea.contains(sharedPoint.x, sharedPoint.y);
	            } else if (view.containsPoint) {
	                hit = view.containsPoint(point);
	            }
	            return hit;
	        }
	    }]);
	
	    return AbstractButton;
	}(_StateView2.StateView);

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.StateView = undefined;
	
	var _pixi = __webpack_require__(1);
	
	var _pixi2 = _interopRequireDefault(_pixi);
	
	var _AdapterView2 = __webpack_require__(14);
	
	var _StateAdapter = __webpack_require__(15);
	
	var _math = __webpack_require__(3);
	
	var _UI = __webpack_require__(4);
	
	var UI = _interopRequireWildcard(_UI);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var StateView = exports.StateView = function (_AdapterView) {
	    _inherits(StateView, _AdapterView);
	
	    function StateView() {
	        _classCallCheck(this, StateView);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(StateView).call(this));
	
	        _this.setAdapter(new _StateAdapter.StateAdapter());
	        return _this;
	    }
	
	    _createClass(StateView, [{
	        key: 'destroy',
	        value: function destroy(destroyChildren) {
	            this.setCurrentView(null);
	            this._destroyStateViews();
	            _get(Object.getPrototypeOf(StateView.prototype), 'destroy', this).call(this, destroyChildren);
	        }
	    }, {
	        key: 'getCurrentView',
	        value: function getCurrentView() {
	            return this._currentView;
	        }
	    }, {
	        key: 'setCurrentView',
	        value: function setCurrentView(view) {
	            if (this._currentView) {
	                this._removeChildAt(0);
	            }
	            if (view) {
	                this._currentView = view;
	                this._addChildAt(view, 0);
	            }
	            this._updateSize();
	        }
	    }, {
	        key: 'setAdapter',
	        value: function setAdapter(adapter) {
	            var mAdapter = this.getAdapter();
	            if (mAdapter) {
	                mAdapter.off('statechanged', this._handleStateChanged, this);
	            }
	            _get(Object.getPrototypeOf(StateView.prototype), 'setAdapter', this).call(this, adapter);
	            this._handleStateChanged();
	            if (adapter) {
	                adapter.on('statechanged', this._handleStateChanged, this);
	            }
	        }
	    }, {
	        key: '_destroyStateViews',
	        value: function _destroyStateViews() {
	            var adapter = this.getAdapter();
	            adapter.eachItem(function (item) {
	                var view = adapter.getItemView(item);
	                if (view) {
	                    view.destroy();
	                }
	            });
	        }
	    }, {
	        key: '_updateSize',
	        value: function _updateSize() {
	            if (!this._currentView) {
	                this.setSize(new _math.Size(0, 0));
	                return;
	            }
	            this.setSize(UI.getSize(this._currentView).clone());
	        }
	    }, {
	        key: '_handleStateChanged',
	        value: function _handleStateChanged() {
	            this.setCurrentView(this.getAdapter().getCurrentStateView());
	            this.invalidate();
	        }
	    }]);
	
	    return StateView;
	}(_AdapterView2.AdapterView);

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.AdapterView = undefined;
	
	var _UIContainer2 = __webpack_require__(6);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var AdapterView = exports.AdapterView = function (_UIContainer) {
	    _inherits(AdapterView, _UIContainer);
	
	    function AdapterView() {
	        _classCallCheck(this, AdapterView);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(AdapterView).call(this, 0, 0));
	    }
	
	    _createClass(AdapterView, [{
	        key: 'addChild',
	        value: function addChild() {
	            throw new Error('addChild(...) is not supported in AdapterView');
	        }
	    }, {
	        key: 'addChildAt',
	        value: function addChildAt() {
	            throw new Error('addChildAt(...) is not supported in AdapterView');
	        }
	    }, {
	        key: 'swapChildren',
	        value: function swapChildren() {
	            throw new Error('swapChildren(...) is not supported in AdapterView');
	        }
	    }, {
	        key: 'setChildIndex',
	        value: function setChildIndex() {
	            throw new Error('setChildIndex(...) is not supported in AdapterView');
	        }
	    }, {
	        key: 'removeChild',
	        value: function removeChild() {
	            throw new Error('removeChild(...) is not supported in AdapterView');
	        }
	    }, {
	        key: 'removeChildAt',
	        value: function removeChildAt() {
	            throw new Error('removeChildAt(...) is not supported in AdapterView');
	        }
	    }, {
	        key: 'removeChildren',
	        value: function removeChildren() {
	            throw new Error('removeChildren(...) is not supported in AdapterView');
	        }
	    }, {
	        key: 'setAdapter',
	        value: function setAdapter(adapter) {
	            var mAdater = this.getAdapter();
	            if (mAdater) {
	                mAdater.off('datachanged', this._handleDataChanged, this);
	            }
	            this._adapter = adapter;
	            if (this._adapter) {
	                this._adapter.on('datachanged', this._handleDataChanged, this);
	            }
	        }
	    }, {
	        key: 'getAdapter',
	        value: function getAdapter() {
	            return this._adapter;
	        }
	    }, {
	        key: '_addChildAt',
	        value: function _addChildAt(child, index) {
	            _get(Object.getPrototypeOf(AdapterView.prototype), 'addChildAt', this).call(this, child, index);
	        }
	    }, {
	        key: '_removeChildAt',
	        value: function _removeChildAt(index) {
	            _get(Object.getPrototypeOf(AdapterView.prototype), 'removeChildAt', this).call(this, index);
	        }
	    }, {
	        key: '_removeChildren',
	        value: function _removeChildren() {
	            _get(Object.getPrototypeOf(AdapterView.prototype), 'removeChildren', this).call(this);
	        }
	    }, {
	        key: '_handleDataChanged',
	        value: function _handleDataChanged() {}
	    }]);
	
	    return AdapterView;
	}(_UIContainer2.UIContainer);

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.StateAdapter = undefined;
	
	var _ArrayAdapter2 = __webpack_require__(16);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var StateAdapter = exports.StateAdapter = function (_ArrayAdapter) {
	    _inherits(StateAdapter, _ArrayAdapter);
	
	    _createClass(StateAdapter, [{
	        key: 'state',
	        get: function get() {
	            return this._state;
	        }
	    }]);
	
	    function StateAdapter(rawArray) {
	        _classCallCheck(this, StateAdapter);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(StateAdapter).call(this, rawArray));
	
	        if (rawArray && _this.rawArray.length > 0) {
	            _this.changeState(_this.getDefaultState());
	        }
	        return _this;
	    }
	
	    _createClass(StateAdapter, [{
	        key: 'emitStateChanged',
	        value: function emitStateChanged() {
	            this._onStateChanged();
	            this.emit('statechanged');
	        }
	    }, {
	        key: 'changeState',
	        value: function changeState(state) {
	            if (!state) return;
	            if (this._state === state) return;
	            this._state = state;
	            this.emitStateChanged();
	        }
	    }, {
	        key: 'getDefaultState',
	        value: function getDefaultState() {
	            var item = this.getDefaultItem();
	            if (!item) return;
	            return this.getItemState(item);
	        }
	    }, {
	        key: 'getDefaultItem',
	        value: function getDefaultItem() {
	            var _this2 = this;
	
	            return this.findItem(function (item) {
	                return _this2.isDefaultItem(item);
	            });
	        }
	    }, {
	        key: 'getItemState',
	        value: function getItemState(item) {
	            return item.state;
	        }
	    }, {
	        key: 'isDefaultItem',
	        value: function isDefaultItem(item) {
	            return item.isDefault;
	        }
	    }, {
	        key: 'getItemByState',
	        value: function getItemByState(state) {
	            var _this3 = this;
	
	            return this.findItem(function (item) {
	                return _this3.getItemState(item);
	            });
	        }
	    }, {
	        key: 'getViewByState',
	        value: function getViewByState(state) {
	            var _this4 = this;
	
	            var item = this.findItem(function (item) {
	                return _this4.getItemState(item) === state;
	            });
	            if (!item) return;
	            return this.getItemView(item);
	        }
	    }, {
	        key: 'getItemView',
	        value: function getItemView(item) {
	            return item.view;
	        }
	    }, {
	        key: 'getCurrentStateView',
	        value: function getCurrentStateView() {
	            return this.getViewByState(this._state);
	        }
	    }, {
	        key: 'getCurrentState',
	        value: function getCurrentState() {
	            return this._state;
	        }
	    }, {
	        key: 'getView',
	        value: function getView() {
	            throw new Error('getView(key, scrapView) is unsupported, use getItemView(item) instead');
	        }
	    }, {
	        key: '_onDataChanged',
	        value: function _onDataChanged() {
	            _get(Object.getPrototypeOf(StateAdapter.prototype), '_onDataChanged', this).call(this);
	            if (!this._state) {
	                this.changeState(this.getDefaultState());
	            }
	        }
	    }, {
	        key: '_onStateChanged',
	        value: function _onStateChanged() {}
	    }]);
	
	    return StateAdapter;
	}(_ArrayAdapter2.ArrayAdapter);

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ArrayAdapter = undefined;
	
	var _Adapter2 = __webpack_require__(17);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ArrayAdapter = exports.ArrayAdapter = function (_Adapter) {
	    _inherits(ArrayAdapter, _Adapter);
	
	    function ArrayAdapter(rawArray) {
	        _classCallCheck(this, ArrayAdapter);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ArrayAdapter).call(this));
	
	        _this._rawArray = rawArray || [];
	        return _this;
	    }
	
	    _createClass(ArrayAdapter, [{
	        key: 'findItem',
	        value: function findItem(find) {
	            var found;
	            this.eachItem(function (item, index) {
	                if (find(item, index)) {
	                    found = item;
	                    return false;
	                }
	            });
	            return found;
	        }
	    }, {
	        key: 'eachItem',
	        value: function eachItem(iterator) {
	            if (!this._rawArray || this._rawArray.length === 0) return;
	            for (var i = 0, len = this._rawArray.length; i < len; i++) {
	                if (false === iterator(this._rawArray[i], i)) {
	                    return;
	                }
	            }
	        }
	    }, {
	        key: 'getCount',
	        value: function getCount() {
	            return this._rawArray.length;
	        }
	    }, {
	        key: 'getItem',
	        value: function getItem(key) {
	            return this._rawArray[key];
	        }
	    }, {
	        key: 'add',
	        value: function add(item) {
	            this._rawArray.push(item);
	            this.emitDataChanged();
	        }
	    }, {
	        key: 'addAll',
	        value: function addAll(items) {
	            for (var i = 0, len = items.length; i < len; i++) {
	                var item = items[i];
	                this._rawArray.push(item);
	            }
	            this.emitDataChanged();
	        }
	    }, {
	        key: 'insert',
	        value: function insert(item, index) {
	            this._rawArray.splice(index, 0, item);
	        }
	    }, {
	        key: 'remove',
	        value: function remove(item) {
	            var index = this._rawArray.indexOf(item);
	            if (index !== -1) {
	                this._rawArray.splice(index, 1);
	                this.emitDataChanged();
	            }
	        }
	    }, {
	        key: 'sort',
	        value: function sort(comparator) {
	            this._rawArray.sort(comparator);
	            this.emitDataChanged();
	        }
	    }, {
	        key: 'clear',
	        value: function clear() {
	            this._rawArray.length = 0;
	            this.emitDataChanged();
	        }
	    }]);
	
	    return ArrayAdapter;
	}(_Adapter2.Adapter);

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Adapter = undefined;
	
	var _eventemitter = __webpack_require__(18);
	
	var _eventemitter2 = _interopRequireDefault(_eventemitter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Adapter = exports.Adapter = function (_EventEmitter) {
	    _inherits(Adapter, _EventEmitter);
	
	    function Adapter() {
	        _classCallCheck(this, Adapter);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Adapter).apply(this, arguments));
	    }
	
	    _createClass(Adapter, [{
	        key: 'getItem',
	        value: function getItem(key) {
	            return null;
	        }
	    }, {
	        key: 'getView',
	        value: function getView(key, scrapView) {
	            return null;
	        }
	    }, {
	        key: 'getViewType',
	        value: function getViewType(key) {
	            return 0;
	        }
	    }, {
	        key: 'getViewTypeCount',
	        value: function getViewTypeCount() {
	            return 1;
	        }
	    }, {
	        key: 'emitDataChanged',
	        value: function emitDataChanged() {
	            this._onDataChanged();
	            this.emit('datachanged');
	        }
	    }, {
	        key: '_onDataChanged',
	        value: function _onDataChanged() {}
	    }]);
	
	    return Adapter;
	}(_eventemitter2.default);

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	//
	// We store our EE objects in a plain object whose properties are event names.
	// If `Object.create(null)` is not supported we prefix the event names with a
	// `~` to make sure that the built-in object properties are not overridden or
	// used as an attack vector.
	// We also assume that `Object.create(null)` is available when the event name
	// is an ES6 Symbol.
	//
	var prefix = typeof Object.create !== 'function' ? '~' : false;
	
	/**
	 * Representation of a single EventEmitter function.
	 *
	 * @param {Function} fn Event handler to be called.
	 * @param {Mixed} context Context for function execution.
	 * @param {Boolean} once Only emit once
	 * @api private
	 */
	function EE(fn, context, once) {
	  this.fn = fn;
	  this.context = context;
	  this.once = once || false;
	}
	
	/**
	 * Minimal EventEmitter interface that is molded against the Node.js
	 * EventEmitter interface.
	 *
	 * @constructor
	 * @api public
	 */
	function EventEmitter() { /* Nothing to set */ }
	
	/**
	 * Holds the assigned EventEmitters by name.
	 *
	 * @type {Object}
	 * @private
	 */
	EventEmitter.prototype._events = undefined;
	
	/**
	 * Return a list of assigned event listeners.
	 *
	 * @param {String} event The events that should be listed.
	 * @param {Boolean} exists We only need to know if there are listeners.
	 * @returns {Array|Boolean}
	 * @api public
	 */
	EventEmitter.prototype.listeners = function listeners(event, exists) {
	  var evt = prefix ? prefix + event : event
	    , available = this._events && this._events[evt];
	
	  if (exists) return !!available;
	  if (!available) return [];
	  if (available.fn) return [available.fn];
	
	  for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
	    ee[i] = available[i].fn;
	  }
	
	  return ee;
	};
	
	/**
	 * Emit an event to all registered event listeners.
	 *
	 * @param {String} event The name of the event.
	 * @returns {Boolean} Indication if we've emitted an event.
	 * @api public
	 */
	EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
	  var evt = prefix ? prefix + event : event;
	
	  if (!this._events || !this._events[evt]) return false;
	
	  var listeners = this._events[evt]
	    , len = arguments.length
	    , args
	    , i;
	
	  if ('function' === typeof listeners.fn) {
	    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);
	
	    switch (len) {
	      case 1: return listeners.fn.call(listeners.context), true;
	      case 2: return listeners.fn.call(listeners.context, a1), true;
	      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
	      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
	      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
	      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
	    }
	
	    for (i = 1, args = new Array(len -1); i < len; i++) {
	      args[i - 1] = arguments[i];
	    }
	
	    listeners.fn.apply(listeners.context, args);
	  } else {
	    var length = listeners.length
	      , j;
	
	    for (i = 0; i < length; i++) {
	      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);
	
	      switch (len) {
	        case 1: listeners[i].fn.call(listeners[i].context); break;
	        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
	        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
	        default:
	          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
	            args[j - 1] = arguments[j];
	          }
	
	          listeners[i].fn.apply(listeners[i].context, args);
	      }
	    }
	  }
	
	  return true;
	};
	
	/**
	 * Register a new EventListener for the given event.
	 *
	 * @param {String} event Name of the event.
	 * @param {Functon} fn Callback function.
	 * @param {Mixed} context The context of the function.
	 * @api public
	 */
	EventEmitter.prototype.on = function on(event, fn, context) {
	  var listener = new EE(fn, context || this)
	    , evt = prefix ? prefix + event : event;
	
	  if (!this._events) this._events = prefix ? {} : Object.create(null);
	  if (!this._events[evt]) this._events[evt] = listener;
	  else {
	    if (!this._events[evt].fn) this._events[evt].push(listener);
	    else this._events[evt] = [
	      this._events[evt], listener
	    ];
	  }
	
	  return this;
	};
	
	/**
	 * Add an EventListener that's only called once.
	 *
	 * @param {String} event Name of the event.
	 * @param {Function} fn Callback function.
	 * @param {Mixed} context The context of the function.
	 * @api public
	 */
	EventEmitter.prototype.once = function once(event, fn, context) {
	  var listener = new EE(fn, context || this, true)
	    , evt = prefix ? prefix + event : event;
	
	  if (!this._events) this._events = prefix ? {} : Object.create(null);
	  if (!this._events[evt]) this._events[evt] = listener;
	  else {
	    if (!this._events[evt].fn) this._events[evt].push(listener);
	    else this._events[evt] = [
	      this._events[evt], listener
	    ];
	  }
	
	  return this;
	};
	
	/**
	 * Remove event listeners.
	 *
	 * @param {String} event The event we want to remove.
	 * @param {Function} fn The listener that we need to find.
	 * @param {Mixed} context Only remove listeners matching this context.
	 * @param {Boolean} once Only remove once listeners.
	 * @api public
	 */
	EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
	  var evt = prefix ? prefix + event : event;
	
	  if (!this._events || !this._events[evt]) return this;
	
	  var listeners = this._events[evt]
	    , events = [];
	
	  if (fn) {
	    if (listeners.fn) {
	      if (
	           listeners.fn !== fn
	        || (once && !listeners.once)
	        || (context && listeners.context !== context)
	      ) {
	        events.push(listeners);
	      }
	    } else {
	      for (var i = 0, length = listeners.length; i < length; i++) {
	        if (
	             listeners[i].fn !== fn
	          || (once && !listeners[i].once)
	          || (context && listeners[i].context !== context)
	        ) {
	          events.push(listeners[i]);
	        }
	      }
	    }
	  }
	
	  //
	  // Reset the array, or remove it completely if we have no more listeners.
	  //
	  if (events.length) {
	    this._events[evt] = events.length === 1 ? events[0] : events;
	  } else {
	    delete this._events[evt];
	  }
	
	  return this;
	};
	
	/**
	 * Remove all listeners or only the listeners for the specified event.
	 *
	 * @param {String} event The event want to remove all listeners for.
	 * @api public
	 */
	EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
	  if (!this._events) return this;
	
	  if (event) delete this._events[prefix ? prefix + event : event];
	  else this._events = prefix ? {} : Object.create(null);
	
	  return this;
	};
	
	//
	// Alias methods names because people roll like that.
	//
	EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
	EventEmitter.prototype.addListener = EventEmitter.prototype.on;
	
	//
	// This function doesn't apply anymore.
	//
	EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
	  return this;
	};
	
	//
	// Expose the prefix.
	//
	EventEmitter.prefixed = prefix;
	
	//
	// Expose the module.
	//
	if (true) {
	  module.exports = EventEmitter;
	}


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.AbstractProgressBar = undefined;
	
	var _ImageView = __webpack_require__(20);
	
	var _UIContainer2 = __webpack_require__(6);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var AbstractProgressBar = exports.AbstractProgressBar = function (_UIContainer) {
	    _inherits(AbstractProgressBar, _UIContainer);
	
	    _createClass(AbstractProgressBar, [{
	        key: 'progress',
	        get: function get() {
	            return this.getProgress();
	        }
	    }]);
	
	    function AbstractProgressBar() {
	        _classCallCheck(this, AbstractProgressBar);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractProgressBar).call(this));
	
	        _this._progress = 0;
	        return _this;
	    }
	
	    _createClass(AbstractProgressBar, [{
	        key: 'getProgress',
	        value: function getProgress() {
	            return this._progress;
	        }
	    }, {
	        key: 'setProgressValue',
	        value: function setProgressValue(progress, max) {
	            this.setProgress(progress / max * 100);
	        }
	    }, {
	        key: 'setProgress',
	        value: function setProgress(progress) {
	            if (this._progress === progress) return;
	            this._progress = progress > 100 ? 100 : progress;
	            this.onProgressUpdate();
	        }
	    }, {
	        key: 'onProgressUpdate',
	        value: function onProgressUpdate() {}
	    }]);
	
	    return AbstractProgressBar;
	}(_UIContainer2.UIContainer);

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ImageView = undefined;
	
	var _pixi = __webpack_require__(1);
	
	var _pixi2 = _interopRequireDefault(_pixi);
	
	var _UI = __webpack_require__(4);
	
	var UI = _interopRequireWildcard(_UI);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ImageView = exports.ImageView = function (_PIXI$Sprite) {
	    _inherits(ImageView, _PIXI$Sprite);
	
	    function ImageView() {
	        _classCallCheck(this, ImageView);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(ImageView).apply(this, arguments));
	    }
	
	    _createClass(ImageView, [{
	        key: 'updateTransform',
	        value: function updateTransform() {
	            _get(Object.getPrototypeOf(ImageView.prototype), 'updateTransform', this).call(this);
	            if (this.hasActivedTweens()) {
	                UI.invalidate(this);
	            }
	        }
	    }, {
	        key: 'hasActivedTweens',
	        value: function hasActivedTweens() {
	            return this.tweenTransform.tweens.length > 0;
	        }
	    }, {
	        key: '_onTextureUpdate',
	        value: function _onTextureUpdate() {
	            _get(Object.getPrototypeOf(ImageView.prototype), '_onTextureUpdate', this).call(this);
	            UI.invalidate(this);
	        }
	    }]);
	
	    return ImageView;
	}(_pixi2.default.Sprite);

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Button = undefined;
	
	var _AbstractButton2 = __webpack_require__(12);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Button = exports.Button = function (_AbstractButton) {
	    _inherits(Button, _AbstractButton);
	
	    function Button() {
	        _classCallCheck(this, Button);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Button).call(this));
	
	        _this._scaleOnPress = 1.2;
	        _this.on('touch', _this._onTouch, _this);
	        _this.on('release', _this._onRelease, _this);
	        return _this;
	    }
	
	    _createClass(Button, [{
	        key: 'destroy',
	        value: function destroy(destroyChildren) {
	            _get(Object.getPrototypeOf(Button.prototype), 'destroy', this).call(this, destroyChildren);
	            this.off('touch', this._onTouch, this);
	            this.off('release', this._onRelease, this);
	        }
	    }, {
	        key: 'setScaleOnPress',
	        value: function setScaleOnPress(scale) {
	            this._scaleOnPress = scale;
	        }
	    }, {
	        key: '_onTouch',
	        value: function _onTouch() {
	            this.getAdapter().changeState('press');
	            this.scale.x *= this._scaleOnPress;
	            this.scale.y *= this._scaleOnPress;
	        }
	    }, {
	        key: '_onRelease',
	        value: function _onRelease() {
	            this.getAdapter().changeState(this.getAdapter().getDefaultState());
	            this.scale.x /= this._scaleOnPress;
	            this.scale.y /= this._scaleOnPress;
	        }
	    }]);
	
	    return Button;
	}(_AbstractButton2.AbstractButton);

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Checkbox = undefined;
	
	var _AbstractButton2 = __webpack_require__(12);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Checkbox = exports.Checkbox = function (_AbstractButton) {
	    _inherits(Checkbox, _AbstractButton);
	
	    function Checkbox() {
	        _classCallCheck(this, Checkbox);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Checkbox).call(this));
	
	        _this.on('tap', _this._onTap, _this);
	        return _this;
	    }
	
	    _createClass(Checkbox, [{
	        key: 'destroy',
	        value: function destroy(destroyChildren) {
	            _get(Object.getPrototypeOf(Checkbox.prototype), 'destroy', this).call(this, destroyChildren);
	            this.off('tap', this._onTap, this);
	        }
	    }, {
	        key: 'toggle',
	        value: function toggle() {
	            this.setChecked(!this.isChecked());
	        }
	    }, {
	        key: 'isChecked',
	        value: function isChecked() {
	            return this.getAdapter().getCurrentState() === 'checked';
	        }
	    }, {
	        key: 'setChecked',
	        value: function setChecked(checked) {
	            this.getAdapter().changeState(checked ? 'checked' : 'unchecked');
	        }
	    }, {
	        key: '_onTap',
	        value: function _onTap() {
	            this.toggle();
	        }
	    }]);
	
	    return Checkbox;
	}(_AbstractButton2.AbstractButton);

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ListView = undefined;
	
	var _pixi = __webpack_require__(1);
	
	var _pixi2 = _interopRequireDefault(_pixi);
	
	var _AdapterView2 = __webpack_require__(14);
	
	var _Recycler = __webpack_require__(24);
	
	var _layout = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ListView = exports.ListView = function (_AdapterView) {
	    _inherits(ListView, _AdapterView);
	
	    function ListView(layoutManager) {
	        _classCallCheck(this, ListView);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ListView).call(this));
	
	        _this.setLayoutManager(layoutManager || new _layout.VBox());
	        _this._recycler = new _Recycler.Recycler();
	        _this._buildListRequired = true;
	        return _this;
	    }
	
	    _createClass(ListView, [{
	        key: 'onLayout',
	        value: function onLayout() {
	            this._buildList();
	            _get(Object.getPrototypeOf(ListView.prototype), 'onLayout', this).call(this);
	        }
	    }, {
	        key: 'requestBuildList',
	        value: function requestBuildList() {
	            this._buildListRequired = true;
	        }
	    }, {
	        key: 'destroy',
	        value: function destroy(destroyChildren) {
	            _get(Object.getPrototypeOf(ListView.prototype), 'destroy', this).call(this, destroyChildren);
	            this._recycler.clear();
	        }
	    }, {
	        key: '_handleDataChanged',
	        value: function _handleDataChanged() {
	            this.requestBuildList();
	        }
	    }, {
	        key: '_removeChildrenToScrap',
	        value: function _removeChildrenToScrap() {
	            var recycler = this._recycler;
	            var adapter = this.getAdapter();
	            var children = this.children;
	            for (var i = 0, len = children.length; i < len; i++) {
	                var view = children[i];
	                var viewType = adapter.getViewType(i);
	                this._recycler.addScrap(view, viewType);
	            }
	            this._removeChildren();
	        }
	    }, {
	        key: '_buildList',
	        value: function _buildList() {
	            if (!this._buildListRequired) return;
	            var adapter = this.getAdapter();
	            if (!adapter) return;
	
	            this._removeChildrenToScrap();
	
	            var recycler = this._recycler;
	            var count = adapter.getCount();
	            for (var i = 0; i < count; i++) {
	                var viewType = adapter.getViewType(i);
	                var scrapView = recycler.shiftScrap(viewType);
	                var view = adapter.getView(i, scrapView);
	                this._addChildAt(view, i);
	            }
	
	            this._buildListRequired = false;
	            this.requestLayout();
	        }
	    }]);
	
	    return ListView;
	}(_AdapterView2.AdapterView);

/***/ },
/* 24 */
/***/ function(module, exports) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Recycler = exports.Recycler = function () {
	    function Recycler() {
	        _classCallCheck(this, Recycler);
	
	        this._scrapViewMap = {};
	    }
	
	    _createClass(Recycler, [{
	        key: "clear",
	        value: function clear() {
	            var viewMap = this._scrapViewMap;
	            for (var viewType in viewMap) {
	                var views = viewMap[viewType];
	                views.forEach(function (view) {
	                    view.destroy();
	                });
	            }
	        }
	    }, {
	        key: "addScrap",
	        value: function addScrap(view, viewType) {
	            this._scrapViewMap[viewType] = this._scrapViewMap[viewType] || [];
	            this._scrapViewMap[viewType].push(view);
	            console.log(1, viewType);
	        }
	    }, {
	        key: "shiftScrap",
	        value: function shiftScrap(viewType) {
	            this._scrapViewMap[viewType] = this._scrapViewMap[viewType] || [];
	            return this._scrapViewMap[viewType].shift();
	        }
	    }]);
	
	    return Recycler;
	}();

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ProgressBar = exports.ANTI_CLOCK = exports.CLOCK = exports.D2U = exports.U2D = exports.R2L = exports.L2R = undefined;
	
	var _pixi = __webpack_require__(1);
	
	var _pixi2 = _interopRequireDefault(_pixi);
	
	var _ImageView = __webpack_require__(20);
	
	var _AbstractProgressBar2 = __webpack_require__(19);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var L2R = exports.L2R = 'left2right';
	var R2L = exports.R2L = 'right2left';
	var U2D = exports.U2D = 'up2down';
	var D2U = exports.D2U = 'down2up';
	var CLOCK = exports.CLOCK = 'clock';
	var ANTI_CLOCK = exports.ANTI_CLOCK = 'anticlock';
	
	var ProgressBar = exports.ProgressBar = function (_AbstractProgressBar) {
	    _inherits(ProgressBar, _AbstractProgressBar);
	
	    _createClass(ProgressBar, [{
	        key: 'direction',
	        get: function get() {
	            return this._direction;
	        }
	    }, {
	        key: 'offset',
	        get: function get() {
	            return this._offset;
	        }
	    }]);
	
	    function ProgressBar(direction, progressTexture, backgroundTexture) {
	        _classCallCheck(this, ProgressBar);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ProgressBar).call(this));
	
	        _this._direction = direction;
	        _this._offset = new _pixi2.default.Point(0, 0);
	        _this._progressTexture = progressTexture;
	        _this._progressImageView = new _ImageView.ImageView(progressTexture);
	        if (backgroundTexture) {
	            _this.addChild(new _ImageView.ImageView(backgroundTexture));
	        }
	        _this.addChild(_this._progressImageView);
	
	        _this._clockMask = null;
	        _this.onProgressUpdate();
	        return _this;
	    }
	
	    _createClass(ProgressBar, [{
	        key: 'setOffset',
	        value: function setOffset(offset) {
	            this._offset = offset;
	        }
	    }, {
	        key: 'setDirection',
	        value: function setDirection(direction) {
	            this._direction = direction;
	        }
	    }, {
	        key: 'onProgressUpdate',
	        value: function onProgressUpdate() {
	            var texture = this._progressTexture;
	            var baseTexture = texture.baseTexture;
	            if (baseTexture.hasLoaded) {
	                var progressView = this._progressImageView;
	                var frame = texture.frame.clone();
	                var frameW = frame.width;
	                var frameH = frame.height;
	                var radius = undefined;
	                var mask = undefined;
	                if (this.progress === 0) {
	                    progressView.renderable = false;
	                    this.invalidate();
	                    return;
	                }
	                progressView.renderable = true;
	                if (this.direction === CLOCK || this.direction === ANTI_CLOCK) {
	                    if (!this._clockMask) {
	                        this._clockMask = new _pixi2.default.Graphics();
	                        progressView.addChild(this._clockMask);
	                        progressView.mask = this._clockMask;
	                    }
	                    this._clockMask.position.set(frameW / 2, frameH / 2);
	                    radius = Math.max(frameW, frameH) / 2;
	                } else {
	                    if (this._clockMask) {
	                        progressView.removeChild(this._clockMask);
	                        progressView.mask = null;
	                        this._clockMask.destroy(true);
	                        this._clockMask = null;
	                    }
	                }
	                switch (this.direction) {
	                    case CLOCK:
	                        mask = this._clockMask;
	                        mask.clear();
	                        mask.lineStyle(0);
	                        mask.beginFill(0xFFFFFF);
	                        mask.arc(0, 0, radius, 0, this.progress / 100 * Math.PI * 2);
	                        mask.lineTo(0, 0);
	                        mask.endFill();
	                        progressView.x = this.offset.x;
	                        progressView.y = this.offset.y;
	                        break;
	                    case ANTI_CLOCK:
	                        mask = this._clockMask;
	                        mask.clear();
	                        mask.lineStyle(0);
	                        mask.beginFill(0xFFFFFF);
	                        mask.arc(0, 0, radius, 0, -this.progress / 100 * Math.PI * 2, true);
	                        mask.lineTo(0, 0);
	                        mask.endFill();
	                        break;
	                    case R2L:
	                        frame.width = frame.width * this.progress / 100;
	                        frame.x = frame.x + frameW - frame.width;
	                        progressView.x = this.offset.x + frameW - frame.width;
	                        progressView.y = this.offset.y;
	                        break;
	                    case U2D:
	                        frame.height = frame.height * this.progress / 100;
	                        progressView.x = this.offset.x;
	                        progressView.y = this.offset.y;
	                        break;
	                    case D2U:
	                        frame.height = frame.height * this.progress / 100;
	                        frame.y = frame.y + frameH - frame.height;
	                        progressView.x = this.offset.x;
	                        progressView.y = this.offset.y + frameH - frame.height;
	                        break;
	                    default:
	                        frame.width = frame.width * this.progress / 100;
	                        progressView.x = this.offset.x;
	                        progressView.y = this.offset.y;
	                        break;
	                }
	                progressView.texture = new _pixi2.default.Texture(baseTexture, frame);
	                this.invalidate();
	            }
	        }
	    }]);
	
	    return ProgressBar;
	}(_AbstractProgressBar2.AbstractProgressBar);

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ScrollView = exports.BOTH = exports.VERTICAL = exports.HORIZONTAL = undefined;
	
	var _pixi = __webpack_require__(1);
	
	var _pixi2 = _interopRequireDefault(_pixi);
	
	var _UIContainer2 = __webpack_require__(6);
	
	var _math = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ticker = _pixi2.default.ticker.shared;
	
	var HORIZONTAL = exports.HORIZONTAL = 'Horizontal';
	var VERTICAL = exports.VERTICAL = 'Vertical';
	var BOTH = exports.BOTH = 'Both';
	
	function middle(a, b, c) {
	    return a < b ? b < c ? b : a < c ? c : a : b > c ? b : a > c ? c : a;
	}
	
	var ScrollView = exports.ScrollView = function (_UIContainer) {
	    _inherits(ScrollView, _UIContainer);
	
	    _createClass(ScrollView, [{
	        key: 'container',
	        get: function get() {
	            return this._container;
	        }
	    }, {
	        key: 'viewRect',
	        get: function get() {
	            return this._viewRect;
	        }
	    }, {
	        key: 'clipRect',
	        get: function get() {
	            return this._clipRect;
	        }
	    }, {
	        key: 'enabled',
	        get: function get() {
	            return this._enabled;
	        },
	        set: function set(value) {
	            this._enabled = value;
	        }
	    }, {
	        key: 'direction',
	        get: function get() {
	            return this._direction;
	        },
	        set: function set(value) {
	            this._direction = value;
	        }
	    }, {
	        key: 'bufferBackEnabled',
	        get: function get() {
	            return this._bufferBackEnabled;
	        },
	        set: function set(value) {
	            this._bufferBackEnabled = value;
	        }
	    }, {
	        key: 'momentumEnabled',
	        get: function get() {
	            return this._momentumEnabled;
	        },
	        set: function set(value) {
	            this._momentumEnabled = value;
	        }
	    }]);
	
	    function ScrollView(width, height, container) {
	        _classCallCheck(this, ScrollView);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ScrollView).call(this, width, height));
	
	        _this.interactive = true;
	        _this.onSizeChange();
	
	        _this._direction = BOTH;
	        _this._enabled = true;
	        _this._bufferBackEnabled = true;
	        _this._momentumEnabled = true;
	
	        _this._bufferBackCheckRequired = false;
	        _this._dragMovedInLastSession = false;
	        _this._dragging = false;
	        _this._values = {
	            velocityX: 0,
	            velocityY: 0,
	            momentumX: 0,
	            momentumY: 0,
	            lastDragX: 0,
	            lastDragY: 0,
	            momentumXTween: undefined,
	            momentumYTween: undefined,
	            bufferXTween: undefined,
	            bufferYTween: undefined
	        };
	
	        _this.on('panstart', _this.onPanStart, _this);
	        _this.on('panmove', _this.onPanMove, _this);
	        _this.on('panend', _this.onPanEnd, _this);
	        _this.setContainer(container);
	        return _this;
	    }
	
	    _createClass(ScrollView, [{
	        key: 'setContainer',
	        value: function setContainer(container) {
	            if (this._container) {
	                this._container.parent.removeChild(this._container);
	                this._container.off('sizechange', this._onContainerSizeChange, this);
	            }
	            this._container = container;
	            if (this._container) {
	                this.addChild(this._container);
	                this._container.on('sizechange', this._onContainerSizeChange, this);
	            }
	            this.clearScrollTweens();
	        }
	    }, {
	        key: 'destroy',
	        value: function destroy(destroyChildren) {
	            this.off('panstart', this.onPanStart, this);
	            this.off('panmove', this.onPanMove, this);
	            this.off('panend', this.onPanEnd, this);
	            this.clearScrollTweens();
	            _get(Object.getPrototypeOf(ScrollView.prototype), 'destroy', this).call(this, destroyChildren);
	        }
	    }, {
	        key: 'updateTransform',
	        value: function updateTransform() {
	            this._updateScroll();
	            _get(Object.getPrototypeOf(ScrollView.prototype), 'updateTransform', this).call(this);
	        }
	    }, {
	        key: 'onSizeChange',
	        value: function onSizeChange() {
	            this._viewRect = new _pixi2.default.Rectangle(0, 0, this.size.width, this.size.height);
	            this._clipRect = new _pixi2.default.Rectangle(0, 0, this.size.width, this.size.height);
	            this.hitArea = this._viewRect;
	            this.updateClipMask();
	        }
	    }, {
	        key: 'updateClipMask',
	        value: function updateClipMask() {
	            var clipRect = this.clipRect;
	            if (!this.mask) {
	                this.mask = new _pixi2.default.Graphics();
	            }
	            this.mask.clear();
	            this.mask.beginFill(0x000000);
	            this.mask.drawRect(clipRect.x, clipRect.y, clipRect.width, clipRect.height);
	            this.addChild(this.mask);
	        }
	    }, {
	        key: 'getContentSize',
	        value: function getContentSize() {
	            if (this.container.isUIContainer) {
	                return this.container.size;
	            }
	            return this.container;
	        }
	    }, {
	        key: 'getMinScrollX',
	        value: function getMinScrollX() {
	            var contentW = this.getContentSize().width;
	            var viewW = this._viewRect.width;
	            if (viewW - contentW > 0) {
	                return 0;
	            }
	            return viewW - contentW;
	        }
	    }, {
	        key: 'getMinScrollY',
	        value: function getMinScrollY() {
	            var contentH = this.getContentSize().height;
	            var viewH = this._viewRect.height;
	            if (viewH - contentH > 0) {
	                return 0;
	            }
	            return viewH - contentH;
	        }
	    }, {
	        key: 'isScrollable',
	        value: function isScrollable() {
	            return this.enabled && this.container;
	        }
	    }, {
	        key: 'requestCheckBufferBack',
	        value: function requestCheckBufferBack() {
	            this._bufferBackCheckRequired = true;
	        }
	    }, {
	        key: 'stopScroll',
	        value: function stopScroll() {
	            this.clearScrollTweens();
	            this._values.lastDragX = 0;
	            this._values.lastDragY = 0;
	            this._values.velocityX = 0;
	            this._values.velocityY = 0;
	            this._values.momentumX = 0;
	            this._values.momentumY = 0;
	        }
	    }, {
	        key: 'clearScrollTweens',
	        value: function clearScrollTweens() {
	            if (this._values.momentumXTween) {
	                this._values.momentumXTween.setPaused(true);
	                this._values.momentumXTween = null;
	            }
	            if (this._values.momentumYTween) {
	                this._values.momentumYTween.setPaused(true);
	                this._values.momentumYTween = null;
	            }
	            if (this._values.bufferXTween) {
	                this._values.bufferXTween.setPaused(true);
	                this._values.bufferXTween = null;
	            }
	            if (this._values.bufferYTween) {
	                this._values.bufferYTween.setPaused(true);
	                this._values.bufferYTween = null;
	            }
	        }
	    }, {
	        key: 'onPanStart',
	        value: function onPanStart(e) {
	            if (!this.isScrollable()) return;
	            this._dragging = true;
	            this._dragMovedInLastSession = true;
	            this._values.lastDragX = e.x;
	            this._values.lastDragY = e.y;
	            this._values.velocityX = 0;
	            this._values.velocityY = 0;
	            this._values.momentumX = 0;
	            this._values.momentumY = 0;
	            this.clearScrollTweens();
	        }
	    }, {
	        key: 'onPanMove',
	        value: function onPanMove(e) {
	            if (!this.isScrollable() || !this._dragging) return;
	            var container = this._container;
	            if (this._direction === BOTH || this._direction === HORIZONTAL) {
	                var deltaX = e.x - this._values.lastDragX;
	                var minScrollX = this.getMinScrollX();
	                if (minScrollX === 0 || container.x >= 0 && deltaX > 0 || container.x <= minScrollX && deltaX < 0) {
	                    deltaX /= 10;
	                }
	                container.x += deltaX;
	                this._values.lastDragX += deltaX;
	                if (!this._bufferBackEnabled) {
	                    container.x = middle(container.x, minScrollX, 0);
	                }
	            }
	            if (this._direction === BOTH || this._direction === VERTICAL) {
	                var deltaY = e.y - this._values.lastDragY;
	                var minScrollY = this.getMinScrollY();
	                if (minScrollY === 0 || container.y >= 0 && deltaY > 0 || container.y <= minScrollY && deltaY < 0) {
	                    deltaY /= 10;
	                }
	                container.y += deltaY;
	                this._values.lastDragY += deltaY;
	                if (!this._bufferBackEnabled) {
	                    container.y = middle(container.y, minScrollY, 0);
	                }
	            }
	
	            this.invalidate();
	        }
	    }, {
	        key: 'onPanEnd',
	        value: function onPanEnd(e) {
	            var _this2 = this;
	
	            console.log('panend');
	            if (!this.isScrollable() || !this._dragging) return;
	            if (this._direction === BOTH || this._direction === HORIZONTAL) {
	                if (!this._tryBufferBackX()) {
	                    if (this._momentumEnabled) {
	                        this._values.velocityX = e.hammerEvent.velocityX;
	                        if (this._values.momentumXTween) {
	                            this._values.momentumXTween.setPaused(true);
	                        }
	                        this._values.momentumXTween = _pixi.Tween.get(this._values).to({
	                            velocityX: 0
	                        }, 1000).call(function () {
	                            _this2._values.momentumXTween = null;
	                        });
	                    } else {
	                        this._values.velocityX = 0;
	                        this._values.momentumY = 0;
	                    }
	                }
	            }
	            if (this._direction === BOTH || this._direction === VERTICAL) {
	                if (!this._tryBufferBackY()) {
	                    if (this._momentumEnabled) {
	                        this._values.velocityY = e.hammerEvent.velocityY;
	                        if (this._values.momentumYTween) {
	                            this._values.momentumYTween.setPaused(true);
	                        }
	                        this._values.momentumYTween = _pixi.Tween.get(this._values).to({
	                            velocityY: 0
	                        }, 1000).call(function () {
	                            _this2._values.momentumYTween = null;
	                        });
	                    } else {
	                        this._values.velocityY = 0;
	                        this._values.momentumY = 0;
	                    }
	                }
	            }
	            this._dragging = false;
	        }
	    }, {
	        key: '_onContainerSizeChange',
	        value: function _onContainerSizeChange() {
	            this.invalidate();
	        }
	    }, {
	        key: '_tryBufferBackX',
	        value: function _tryBufferBackX() {
	            if (!this._bufferBackEnabled) {
	                return false;
	            }
	            var minScrollX = this.getMinScrollX();
	            var container = this._container;
	            if (container.x > 0) {
	                if (this._values.bufferXTween) {
	                    this._values.bufferXTween.setPaused(true);
	                }
	                this._values.bufferXTween = container.tween(false).to({
	                    x: 0
	                }, 100).callRemove();
	                return true;
	            } else if (container.x < minScrollX) {
	                if (this._values.bufferXTween) {
	                    this._values.bufferXTween.setPaused(true);
	                }
	                this._values.bufferXTween = container.tween(false).to({
	                    x: minScrollX
	                }, 100).callRemove();
	                return true;
	            }
	            return false;
	        }
	    }, {
	        key: '_tryBufferBackY',
	        value: function _tryBufferBackY() {
	            if (!this._bufferBackEnabled) {
	                return false;
	            }
	            var minScrollY = this.getMinScrollY();
	            var container = this._container;
	            if (container.y > 0) {
	                if (this._values.bufferYTween) {
	                    this._values.bufferYTween.setPaused(true);
	                }
	                this._values.bufferYTween = container.tween(false).to({
	                    y: 0
	                }, 100).callRemove();
	                return true;
	            } else if (container.y < minScrollY) {
	                if (this._values.bufferYTween) {
	                    this._values.bufferYTween.setPaused(true);
	                }
	                this._values.bufferYTween = container.tween(false).to({
	                    y: minScrollY
	                }, 100).callRemove();
	                return true;
	            }
	            return false;
	        }
	    }, {
	        key: '_tickScrollTweens',
	        value: function _tickScrollTweens() {
	            if (this._values.momentumXTween) {
	                this._values.momentumXTween.tick(ticker.elapsedMS);
	            }
	            if (this._values.momentumYTween) {
	                this._values.momentumYTween.tick(ticker.elapsedMS);
	            }
	            if (this._values.momentumXTween || this._values.momentumYTween) {
	                this.invalidate();
	            }
	        }
	    }, {
	        key: '_updateScroll',
	        value: function _updateScroll() {
	            if (!this._container) return;
	
	            if (!this._bufferBackEnabled && !this._momentumEnabled) return;
	
	            this._tickScrollTweens();
	
	            var container = this._container;
	            if (this._direction === BOTH || this._direction === HORIZONTAL) {
	                container.x += (this._values.velocityX + this._values.momentumX) * ticker.elapsedMS;
	                var minScrollX = this.getMinScrollX();
	                if (!this._bufferBackEnabled) {
	                    container.x = middle(container.x, minScrollX, 0);
	                }
	                if (container.x > 0 && this._values.velocityX !== 0 || this._bufferBackCheckRequired) {
	                    container.x = 0;
	                    this._values.momentumX = this._values.velocityX = 0;
	                    this._bufferBackCheckRequired = false;
	                } else if (container.x < minScrollX && this._values.velocityX !== 0 || this._bufferBackCheckRequired) {
	                    container.x = minScrollX;
	                    this._values.momentumX = this._values.velocityX = 0;
	                    this._bufferBackCheckRequired = false;
	                }
	            }
	
	            if (this._direction === BOTH || this._direction === VERTICAL) {
	                container.y += (this._values.velocityY + this._values.momentumY) * ticker.elapsedMS;
	                var minScrollY = this.getMinScrollY();
	                if (!this._bufferBackEnabled) {
	                    container.y = middle(container.y, minScrollY, 0);
	                }
	                if (container.y > 0 && this._values.velocityY !== 0 || this._bufferBackCheckRequired) {
	                    container.y = 0;
	                    this._values.momentumY = this._values.velocityY = 0;
	                    this._bufferBackCheckRequired = false;
	                } else if (container.y < minScrollY && this._values.velocityY !== 0 || this._bufferBackCheckRequired) {
	                    container.y = minScrollY;
	                    this._values.momentumY = this._values.velocityY = 0;
	                    this._bufferBackCheckRequired = false;
	                }
	            }
	        }
	    }]);
	
	    return ScrollView;
	}(_UIContainer2.UIContainer);

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.SimpleButton = undefined;
	
	var _pixi = __webpack_require__(1);
	
	var _pixi2 = _interopRequireDefault(_pixi);
	
	var _Button2 = __webpack_require__(21);
	
	var _ImageView = __webpack_require__(20);
	
	var _math = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SimpleButton = exports.SimpleButton = function (_Button) {
	    _inherits(SimpleButton, _Button);
	
	    _createClass(SimpleButton, null, [{
	        key: 'fromImage',
	        value: function fromImage(normalImage, pressImage) {
	            return new SimpleButton(_pixi2.default.Texture.fromImage(normalImage), _pixi2.default.Texture.fromImage(pressImage || normalImage));
	        }
	    }, {
	        key: 'fromFrame',
	        value: function fromFrame(normalFrame, pressFrame) {
	            return new SimpleButton(_pixi2.default.Texture.fromFrame(normalFrame), _pixi2.default.Texture.fromFrame(pressFrame || normalFrame));
	        }
	    }]);
	
	    function SimpleButton(normalTexture, pressTexture) {
	        _classCallCheck(this, SimpleButton);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SimpleButton).call(this));
	
	        var normalImageView = new _ImageView.ImageView(normalTexture);
	        normalImageView.anchor.set(0.5);
	        normalImageView.interactive = true;
	
	        var pressImageView = undefined;
	        if (!pressTexture) {
	            pressImageView = new _ImageView.ImageView(pressTexture);
	            pressImageView.anchor.set(0.5);
	            pressImageView.interactive = true;
	        }
	
	        _this.getAdapter().addAll([{
	            state: 'normal',
	            isDefault: true,
	            view: normalImageView
	        }, {
	            state: 'press',
	            view: pressImageView || normalImageView
	        }]);
	        return _this;
	    }
	
	    _createClass(SimpleButton, [{
	        key: 'setCurrentView',
	        value: function setCurrentView(view) {
	            _get(Object.getPrototypeOf(SimpleButton.prototype), 'setCurrentView', this).call(this, view);
	            this._checkTextureLoaded();
	        }
	    }, {
	        key: '_checkTextureLoaded',
	        value: function _checkTextureLoaded() {
	            var _this2 = this;
	
	            var view = this.getCurrentView();
	            if (!view || !view.texture) return;
	            var texture = view.texture;
	            if (!texture.baseTexture.hasLoaded) {
	                texture.once('update', function () {
	                    _this2._updateSize();
	                });
	            }
	        }
	    }]);
	
	    return SimpleButton;
	}(_Button2.Button);

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.SimpleCheckbox = undefined;
	
	var _Checkbox2 = __webpack_require__(22);
	
	var _math = __webpack_require__(3);
	
	var _ImageView = __webpack_require__(20);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SimpleCheckbox = exports.SimpleCheckbox = function (_Checkbox) {
	    _inherits(SimpleCheckbox, _Checkbox);
	
	    _createClass(SimpleCheckbox, null, [{
	        key: 'fromImage',
	        value: function fromImage(uncheckedImage, checkedImage) {
	            return new SimpleCheckbox(PIXI.Texture.fromImage(uncheckedImage), PIXI.Texture.fromImage(checkedImage));
	        }
	    }, {
	        key: 'fromFrame',
	        value: function fromFrame(uncheckedFrame, checkedFrame) {
	            return new SimpleCheckbox(PIXI.Texture.fromFrame(uncheckedFrame), PIXI.Texture.fromFrame(checkedFrame));
	        }
	    }]);
	
	    function SimpleCheckbox(uncheckedTexture, checkedTexture) {
	        _classCallCheck(this, SimpleCheckbox);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SimpleCheckbox).call(this));
	
	        var uncheckedSprite = new _ImageView.ImageView(uncheckedTexture);
	        uncheckedSprite.anchor.set(0.5);
	        uncheckedSprite.interactive = true;
	
	        var checkedSprite = new _ImageView.ImageView(checkedTexture);
	        checkedSprite.anchor.set(0.5);
	        checkedSprite.interactive = true;
	
	        _this.getAdapter().addAll([{
	            state: 'unchecked',
	            isDefault: true,
	            view: uncheckedSprite
	        }, {
	            state: 'checked',
	            view: checkedSprite
	        }]);
	        return _this;
	    }
	
	    _createClass(SimpleCheckbox, [{
	        key: 'setCurrentView',
	        value: function setCurrentView(view) {
	            _get(Object.getPrototypeOf(SimpleCheckbox.prototype), 'setCurrentView', this).call(this, view);
	            this._checkTextureLoaded();
	        }
	    }, {
	        key: '_checkTextureLoaded',
	        value: function _checkTextureLoaded() {
	            var _this2 = this;
	
	            var view = this.getCurrentView();
	            if (!view || !view.texture) return;
	            var texture = view.texture;
	            if (!texture.baseTexture.hasLoaded) {
	                texture.once('update', function () {
	                    _this2._updateSize();
	                });
	            }
	        }
	    }]);
	
	    return SimpleCheckbox;
	}(_Checkbox2.Checkbox);

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.SlideLayout = exports.SlideView = exports.VERTICAL = exports.HORIZONTAL = undefined;
	
	var _pixi = __webpack_require__(1);
	
	var _pixi2 = _interopRequireDefault(_pixi);
	
	var _ListView2 = __webpack_require__(23);
	
	var _LayoutManager2 = __webpack_require__(2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ticker = _pixi2.default.ticker.shared;
	
	var HORIZONTAL = exports.HORIZONTAL = 'Horizontal';
	var VERTICAL = exports.VERTICAL = 'Vertical';
	
	var SlideView = exports.SlideView = function (_ListView) {
	    _inherits(SlideView, _ListView);
	
	    _createClass(SlideView, [{
	        key: 'direction',
	        get: function get() {
	            return this._direction;
	        }
	    }, {
	        key: 'enabled',
	        get: function get() {
	            return this._enabled;
	        },
	        set: function set(value) {
	            this._enabled = value;
	        }
	    }, {
	        key: 'swipeOffset',
	        get: function get() {
	            return this._swipeOffset;
	        },
	        set: function set(value) {
	            this._swipeOffset = value;
	            this.onSlideMove();
	        }
	    }]);
	
	    function SlideView(direction, size) {
	        _classCallCheck(this, SlideView);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SlideView).call(this, new SlideLayout()));
	
	        _this._direction = direction;
	        _this.setSize(size);
	
	        _this._swipeOffset = 0;
	        _this._enabled = true;
	
	        _this._dragMovedInLastSession = false;
	        _this._dragging = false;
	        _this._values = {
	            velocityX: 0,
	            velocityY: 0,
	            lastDragX: 0,
	            lastDragY: 0,
	            _swipeOffsetTween: null
	        };
	
	        _this.interactive = true;
	        _this.on('panstart', _this.onPanStart, _this);
	        _this.on('panmove', _this.onPanMove, _this);
	        _this.on('panend', _this.onPanEnd, _this);
	
	        if (_this._direction === HORIZONTAL) {
	            _this.on('swipeleft', _this.onSwipe, _this);
	            _this.on('swiperight', _this.onSwipe, _this);
	        } else {
	            _this.on('swipeup', _this.onSwipe, _this);
	            _this.on('swipedown', _this.onSwipe, _this);
	        }
	        return _this;
	    }
	
	    _createClass(SlideView, [{
	        key: 'destroy',
	        value: function destroy(destroyChildren) {
	            this.off('panstart', this.onPanStart, this);
	            this.off('panmove', this.onPanMove, this);
	            this.off('panend', this.onPanEnd, this);
	            if (this._direction === HORIZONTAL) {
	                this.off('swipeleft', this.onSwipe, this);
	                this.off('swiperight', this.onSwipe, this);
	            } else {
	                this.off('swipeup', this.onSwipe, this);
	                this.off('swipedown', this.onSwipe, this);
	            }
	            _get(Object.getPrototypeOf(SlideView.prototype), 'destroy', this).call(this, destroyChildren);
	        }
	    }, {
	        key: 'updateTransform',
	        value: function updateTransform() {
	            if (this._values.swipeOffsetTween) {
	                this._values.swipeOffsetTween.tick(ticker.elapsedMS);
	            }
	            _get(Object.getPrototypeOf(SlideView.prototype), 'updateTransform', this).call(this);
	        }
	    }, {
	        key: 'isSwipable',
	        value: function isSwipable() {
	            return this._enabled;
	        }
	    }, {
	        key: 'clearSlideTweens',
	        value: function clearSlideTweens() {
	            if (this._values.swipeOffsetTween) {
	                this._values.swipeOffsetTween.setPaused(true);
	                this._values.swipeOffsetTween = null;
	            }
	        }
	    }, {
	        key: 'onSizeChange',
	        value: function onSizeChange() {
	            _get(Object.getPrototypeOf(SlideView.prototype), 'onSizeChange', this).call(this);
	            this.hitArea = new _pixi2.default.Rectangle(0, 0, this.size.width, this.size.height);
	        }
	    }, {
	        key: 'onPanStart',
	        value: function onPanStart(e) {
	            this.clearSlideTweens();
	            if (!this.isSwipable()) return;
	            this._dragging = true;
	            this._dragMovedInLastSession = true;
	            this._values.lastDragX = e.x;
	            this._values.lastDragY = e.y;
	            this._values.velocityX = 0;
	            this._values.velocityY = 0;
	        }
	    }, {
	        key: 'onPanMove',
	        value: function onPanMove(e) {
	            if (!this.isSwipable() || !this._dragging) return;
	            if (this.direction === HORIZONTAL) {
	                this.swipeOffset += e.x - this._values.lastDragX;
	                this._values.lastDragX = e.x;
	            } else {
	                this.swipeOffset += e.y - this._values.lastDragY;
	                this._values.lastDragY = e.y;
	            }
	        }
	    }, {
	        key: 'onPanEnd',
	        value: function onPanEnd(e) {
	            if (!this.isSwipable() || !this._dragging) return;
	            this._dragging = false;
	
	            if (this.direction === HORIZONTAL) {
	                this.swipeOffset += e.x - this._values.lastDragX;
	            } else {
	                this.swipeOffset += e.y - this._values.lastDragY;
	            }
	
	            this._values.lastDragX = e.x;
	            this._values.lastDragY = e.y;
	            this._values.velocityX = e.hammerEvent.velocityX;
	            this._values.velocityY = e.hammerEvent.velocityY;
	
	            this.snap();
	        }
	    }, {
	        key: 'onSwipe',
	        value: function onSwipe(e) {
	            this._dragging = false;
	            this.clearSlideTweens();
	            switch (e.type) {
	                case 'swipeleft':
	                case 'swipeup':
	                    this.swipeToPrevious();
	                    break;
	                case 'swiperight':
	                case 'swipedown':
	                    this.swipeToNext();
	                    break;
	            }
	        }
	    }, {
	        key: 'snap',
	        value: function snap() {
	            var sizeV = this.direction === HORIZONTAL ? this.size.width : this.size.height;
	            var indexF = this.swipeOffset / sizeV;
	            var preIndex = Math.floor(indexF);
	            var nextIndex = Math.ceil(indexF);
	            if (preIndex === nextIndex) {
	                return;
	            }
	
	            if (indexF - preIndex < 0.5) {
	                this.snapTo(preIndex);
	            } else {
	                this.snapTo(nextIndex);
	            }
	        }
	    }, {
	        key: 'snapTo',
	        value: function snapTo(index, time) {
	            var _this2 = this;
	
	            if (index > 0) {
	                index = 0;
	            } else if (index < -this.children.length + 1) {
	                index = -this.children.length + 1;
	            }
	            var sizeV = this.direction === HORIZONTAL ? this.size.width : this.size.height;
	            var targetOffset = index * sizeV;
	            this._values.swipeOffsetTween = _pixi.Tween.get(this).to({
	                swipeOffset: targetOffset
	            }, time || 500).call(function () {
	                _this2._values.swipeOffsetTween = null;
	            });
	        }
	    }, {
	        key: 'swipeToPrevious',
	        value: function swipeToPrevious() {
	            var sizeV = this.direction === HORIZONTAL ? this.size.width : this.size.height;
	            var index = Math.floor(this.swipeOffset / sizeV);
	            this.snapTo(index);
	        }
	    }, {
	        key: 'swipeToNext',
	        value: function swipeToNext() {
	            var sizeV = this.direction === HORIZONTAL ? this.size.width : this.size.height;
	            var index = Math.floor(this.swipeOffset / sizeV) + 1;
	            this.snapTo(index);
	        }
	    }, {
	        key: 'onSlideMove',
	        value: function onSlideMove() {
	            this.requestLayout();
	            this.invalidate();
	        }
	    }]);
	
	    return SlideView;
	}(_ListView2.ListView);
	
	var SlideLayout = exports.SlideLayout = function (_LayoutManager) {
	    _inherits(SlideLayout, _LayoutManager);
	
	    function SlideLayout() {
	        _classCallCheck(this, SlideLayout);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(SlideLayout).apply(this, arguments));
	    }
	
	    _createClass(SlideLayout, [{
	        key: 'getSlideView',
	        value: function getSlideView() {
	            return this.container;
	        }
	    }, {
	        key: 'doLayout',
	        value: function doLayout() {
	            var slideView = this.getSlideView();
	            var children = slideView.children;
	            var direction = slideView.direction;
	            var swipeOffset = slideView.swipeOffset;
	
	            if (direction === HORIZONTAL) {
	                for (var i = 0, len = children.length; i < len; i++) {
	                    var child = children[i];
	                    child.x = swipeOffset + slideView.size.width * i + slideView.size.width / 2;
	                    child.y = slideView.size.height / 2;
	                }
	            } else {
	                for (var i = 0, len = children.length; i < len; i++) {
	                    var child = children[i];
	                    child.y = swipeOffset + slideView.size.height * i + slideView.size.height / 2;
	                    child.x = slideView.size.width / 2;
	                }
	            }
	        }
	    }]);
	
	    return SlideLayout;
	}(_LayoutManager2.LayoutManager);

/***/ }
/******/ ]);