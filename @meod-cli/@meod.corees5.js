"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function put(mesanje) {
  console.log(mesanje);
}

function start(name) {
  console.time(name);
}

function end(name) {
  console.timeEnd(name);
}

function $(target) {
  if (target.indexOf("&") == 0) {
    return document.querySelector(target.replace("&", ""));
  } else if (target.indexOf("@") == 0) {
    return document.querySelectorAll(target);
  } else {
    return document.getElementById(target);
  }
}

var Meod =
/*#__PURE__*/
function (_HTMLElement) {
  _inherits(Meod, _HTMLElement);

  function Meod(apply_style, style_CSS) {
    var _this;

    _classCallCheck(this, Meod);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Meod).call(this));
    _this.applyStyle = apply_style;

    if (style_CSS != undefined) {
      _this.styles = style_CSS;
    }

    return _this;
  }

  _createClass(Meod, [{
    key: "render",
    value: function render(code, callback) {
      if (this.applyStyle == true) {
        var template = this.attachShadow({
          mode: 'open'
        });
        template.innerHTML = "".concat(this.template(code));
        callback(template);
      } else {
        this.innerHTML = "".concat(this.template(code));
        callback(this);
      }
    }
  }, {
    key: "template",
    value: function template(templat) {
      if (this.applyStyle == true) {
        return "<style>\n        ".concat(this.styles, "\n      </style>\n      <div>").concat(templat, "</div>\n      ");
      } else if (this.applyStyle == false) {
        return templat;
      }
    }
  }], [{
    key: "pushUrlFile",
    value: function pushUrlFile(input, output) {
      var preview = document.querySelector(output);
      var file = document.querySelector(input).files[0];
      var reader = new FileReader();

      reader.onloadend = function () {
        preview.src = reader.result;
      };

      if (file) {
        reader.readAsDataURL(file);
      } else {
        preview.src = "";
      }
    }
  }, {
    key: "date",
    value: function date() {
      return {
        date: new Date(),
        datecrudo: new Date().getTime(),
        ano: new Date().getFullYear(),
        mes: new Date().getMonth(),
        dia: new Date().getDate(),
        hora: new Date().getHours(),
        minutos: new Date().getMinutes(),
        segunndos: new Date().getSeconds(),
        milisegundos: new Date().getMilliseconds()
      };
    }
  }, {
    key: "sleep",
    value: function sleep(milliseconds) {
      var MAX = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1e7;
      var start = new Date().getTime();

      for (var i = 0; i < MAX; i++) {
        if (new Date().getTime() - start > milliseconds) {
          break;
        }
      }
    }
  }]);

  return Meod;
}(_wrapNativeSuper(HTMLElement));

function web_component(nameComponent, classComponent) {
  return window.customElements.define(nameComponent, classComponent);
}