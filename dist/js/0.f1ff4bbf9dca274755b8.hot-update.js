webpackHotUpdate(0,{

/***/ 254:
/*!*************************************!*\
  !*** ./app/components/TodoItem.jsx ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 77);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TodoItem = function (_React$Component) {
	    _inherits(TodoItem, _React$Component);
	
	    function TodoItem() {
	        _classCallCheck(this, TodoItem);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(TodoItem).apply(this, arguments));
	    }
	
	    _createClass(TodoItem, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "li",
	                { className: "todo" },
	                _react2.default.createElement(
	                    "div",
	                    { className: "view" },
	                    _react2.default.createElement("input", { type: "checkbox", className: "toggle" }),
	                    _react2.default.createElement(
	                        "label",
	                        { htmlFor: "todo" },
	                        this.props.text
	                    ),
	                    _react2.default.createElement("button", { className: "destroy" })
	                )
	            );
	        }
	    }]);
	
	    return TodoItem;
	}(_react2.default.Component);
	
	exports.default = TodoItem;
	;

/***/ }

})
//# sourceMappingURL=0.f1ff4bbf9dca274755b8.hot-update.js.map