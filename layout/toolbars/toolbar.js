"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Toolbar =
/*#__PURE__*/
function (_Meod) {
  _inherits(Toolbar, _Meod);

  function Toolbar(__supportStyleMobile) {
    var _this;

    _classCallCheck(this, Toolbar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Toolbar).call(this, true, "\n               .toolbar{\n                position: fixed;\n                top: 0;\n                width: 100%;\n                height: ".concat(ToolbarDimens.altura, ";\n                background: ").concat(colorSettings.colorPrimary, ";\n                box-sizing: border-box;\n            }\n            .toolbar #img-menu {\n                position: absolute;\n                right: 0;\n                top: 15%;\n            }\n            .container-toolbar{\n                height: 100%;\n                width: 90%;\n            }\n            .container-toolbar div{\n            float: left;\n            height: 100%;\n        }\n        .action-icon{\n            height: 100%;\n            width: ").concat(ToolbarDimens.primaryAction, ";\n            margin:auto;\n            }\n            .action-icon img{\n                display:block;\n                margin:1.6em 15%;\n                }\n            .logo{\n                width: 65%;\n                margin-left:15px;\n            }\n            .logo img{\n            height: 100%;\n                width: 45%;\n            }\n            .logo h1{margin-top:13px}\n            .logo h2{margin-top:13px}\n            .logo h3{margin-top:13px}\n            .logo h4{margin-top:13px}\n            .logo h5{margin-top:13px}\n            .logo h6{margin-top:13px}\n            p,h1,h2,h3,h4,h5,h6,span{\n                margin-block-start: 0;\n                margin-block-end: 0;\n                margin-inline-start: 0;\n                margin-inline-end: 0;font-family:karla;\n                color:").concat(colorSettings.colorText, "\n            }\n            ").concat(Fonts.title.css, "\n            p,h1,h2,h3,h4,h5,h6,span{font-family:").concat(Fonts.title.name, "}\n         ").concat(Support.add(ToolbarSupport.onDeskot.imgLogo), "   \n        ").concat(Support.add(__supportStyleMobile), "\n        ")));
    _this.supportStyleMobile = __supportStyleMobile;
    return _this;
  }

  _createClass(Toolbar, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render("<div class=\"toolbar\" id=\"toolbar\">\n            <div class=\"container-toolbar\" id=\"container-toolbar\">\n                <div class=\"action-icon\" id=\"toolbar-back\" >\n                </div>\n                <div class=\"logo\" id=\"toolbar-logo\">\n                </div>\n            </div>\n        </div>\n        ", function (o) {
        window.toolbar = o;
        var doc_toolbar = document.getElementsByTagName("meod-toolbar")[0];

        if (doc_toolbar.hasAttribute("md-title") == true) {
          var para = document.createElement(Tools.markInterpreter(doc_toolbar.getAttribute("md-title").split("#").length - 1));
          var node = document.createTextNode(doc_toolbar.getAttribute("md-title").replace(/#/g, ""));
          para.appendChild(node);
          toolbar.childNodes[2].childNodes[0].children[0].children[1].append(para);
        }

        if (doc_toolbar.hasAttribute("md-subtitle") == true) {
          var par = document.createElement("p");
          var nod = document.createTextNode(doc_toolbar.getAttribute("md-subtitle"));
          par.appendChild(nod);
          toolbar.childNodes[2].childNodes[0].children[0].children[1].append(par);
        }

        if (doc_toolbar.hasAttribute("md-action") == true) {
          var img = document.createElement("img");

          if (doc_toolbar.getAttribute("md-action-use").includes("@") == true) {
            img.src = doc_toolbar.getAttribute("md-action-use").replace(/@/g, "");
          } else {
            img.src = Tools.iconUse(doc_toolbar.getAttribute("md-action-use"));
          }

          toolbar.getElementById("toolbar-back").append(img);
        }

        if (doc_toolbar.hasAttribute("md-action-sd") == true) {
          var img2 = document.createElement("img");

          if (doc_toolbar.getAttribute("md-action-use-sd").includes("@") == true) {
            img2.src = doc_toolbar.getAttribute("md-action-use").replace(/@/g, "");
          } else {
            img2.src = ToolbarIcons.menuBalls;
          }

          img2.id = "img-menu";
          toolbar.getElementById("container-toolbar").append(img2);
        }

        if (doc_toolbar.hasAttribute("md-logo") == true && (doc_toolbar.hasAttribute("md-title") == false && doc_toolbar.hasAttribute("md-subtitle") == false) == true) {
          Tools.put("Workin insert logo");
          var logo = document.createElement("img");
          logo.src = Support.add(Md.img(doc_toolbar.getAttribute("md-logo"))[0]);
          logo.alt = Support.add(Md.img(doc_toolbar.getAttribute("md-logo"))[1]);
          logo.title = Support.add(Md.img(doc_toolbar.getAttribute("md-logo"))[2]);
          logo.id = "toolbar-logo-img";

          logo.onclick = function () {
            document.location.href = "/";
          };

          toolbar.getElementById("toolbar-logo").append(logo);
        }
      });
    }
  }]);

  return Toolbar;
}(Meod);

web_component("meod-toolbar", Toolbar);