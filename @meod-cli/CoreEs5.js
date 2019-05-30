"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @description Bugersito esta en fase de desarrolo y mas adelante
 * madurara y tendra superpoderes java.
 */
var Debug =
/*#__PURE__*/
function () {
  function Debug() {
    _classCallCheck(this, Debug);
  }

  _createClass(Debug, null, [{
    key: "err",
    value: function err(msg) {
      return console.log("%c" + msg, "color: red; font-size:15px");
    }
  }, {
    key: "group",
    value: function group() {
      return console.group();
    }
  }, {
    key: "groupFin",
    value: function groupFin() {
      return console.groupEnd();
    }
  }, {
    key: "mal",
    value: function mal(msg) {
      console.warn("%c" + msg, "color: red; font-size:15px");
    }
  }, {
    key: "inf",
    value: function inf(arg) {
      return console.info(arg);
    }
  }, {
    key: "ok",
    value: function ok(msg) {
      return console.log("%c" + msg, "color: green; font-size:13px");
    }
  }, {
    key: "put",
    value: function put(mensanje) {
      console.log("%c" + mensanje, "color: blue; font-size:13px");
    }
  }, {
    key: "start",
    value: function start(name) {
      return console.time(name);
    }
  }, {
    key: "end",
    value: function end(name) {
      console.timeEnd(name);
    }
  }]);

  return Debug;
}();

function css(id, arg) {
  var doc = document.getElementById(id);
  var arr = Object.keys(arg);

  for (var i = 0; i < arr.length; i++) {
    doc.style[arr[i]] = arg[arr[i]];
  }
}

var Tools =
/*#__PURE__*/
function () {
  function Tools() {
    _classCallCheck(this, Tools);
  }

  _createClass(Tools, null, [{
    key: "put",
    value: function put(mesanje) {
      console.log(mesanje);
    }
  }, {
    key: "start",
    value: function start(name) {
      console.time(name);
    }
  }, {
    key: "end",
    value: function end(name) {
      console.timeEnd(name);
    }
  }, {
    key: "$$",
    value: function $$(target) {
      if (target.indexOf("&") == 0) {
        return document.querySelector(target.replace("&", ""));
      } else if (target.indexOf("@") == 0) {
        return document.querySelectorAll(target.replace("@", ""));
      } else {
        return document.getElementById(target);
      }
    }
  }, {
    key: "decorate",
    value: function decorate() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return function (target) {
        Object.assign.apply(Object, [target.prototype].concat(args));
      };
    }
    /**
     * @description Referencia de decorador de metodos
     */

  }, {
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
  }, {
    key: "textSelected",
    value: function textSelected() {
      return window.getSelection().toString();
    }
  }, {
    key: "markInterpreter",
    value: function markInterpreter(cant) {
      var res;

      switch (cant) {
        case 1:
          res = "h1";
          break;

        case 2:
          res = "h2";
          break;

        case 3:
          res = "h3";
          break;

        case 4:
          res = "h4";
          break;

        case 5:
          res = "h5";
          break;

        case 6:
          res = "h6";
          break;

        default:
          break;
      }

      return res;
    }
  }, {
    key: "iconUse",
    value: function iconUse(cas) {
      var i_can;

      switch (cas) {
        case "hamburger":
          i_can = ToolbarIcons.menuHamburger;
          break;

        case "ball":
          i_can = ToolbarIcons.menuBalls;
          break;

        default:
          i_can = ToolbarIcons.back;
          break;
      }

      return i_can;
    }
  }]);

  return Tools;
}();
/**
 * @description Use la Clase Component para mayor comodidad
 * pero igual manera se puede usar la clase meod
 * @deprecated
 */


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
        return "<style>\n         ".concat(this.styles, "\n       </style>\n       ").concat(templat, "\n       ");
      } else if (this.applyStyle == false) {
        return templat;
      }
    }
  }]);

  return Meod;
}(_wrapNativeSuper(HTMLElement));

function web_component(nameComponent, classComponent) {
  return window.customElements.define(nameComponent, classComponent);
}
/**
 * @description example
 class N extends Meod{
 constructor() {
   super(false)
 }
 connectedCallback():void{
   this.render("<h1>asddddddddddddddddddddd</h1>",(e)=>console.log(e) );
 }
}*/


var Component =
/*#__PURE__*/
function (_HTMLElement2) {
  _inherits(Component, _HTMLElement2);

  function Component(_init) {
    var _this2;

    _classCallCheck(this, Component);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Component).call(this));
    _this2.init = _init;
    return _this2;
  }

  _createClass(Component, [{
    key: "render",
    value: function render(callback) {
      if (this.init.style != null) {
        var template = this.attachShadow({
          mode: this.init.open
        });
        template.innerHTML = "<style>".concat(this.init.style, "</style>").concat(this.init.template);
        callback(template);
      } else {
        this.innerHTML = "".concat(this.init.template);
        callback(this);
      }
    }
  }]);

  return Component;
}(_wrapNativeSuper(HTMLElement));
/**
 * Esta funcion puede ser utilizada solo en google chrome
 * pero gia.js es compatible con la mayoria de los navegadores
 * lea su dumentacion en annyang.com
 * necesita incluir la libreia de jquery para eso
 */


function listen(callback) {
  /*//const recognition = window.webkitSpeechRecognition;*/
  var Speech = window.webkitSpeechRecognition || window.SpeechRecognition;
  var recognition = new Speech();
  /*//si devuelve resultados por cada resultado semejante defecto false
  //recognition.continuous=true
  //Si devuelve resultados relacionados pero que no fueron considerados a la hora de la salida
  //recognition.interimResults=true*/

  recognition.lang = "es-MX";
  recognition.start();
  recognition.addEventListener("result", function (e) {
    callback(e, e.results[0][0].transcript);
  });
}

function speak(mensage) {
  var msg = new SpeechSynthesisUtterance(mensage);
  window.speechSynthesis.speak(msg);
}
/**
 * Md es el interprete de los atributos de los componentes de meod y de tu propios componentes
 * en sus procimas versiones tendra muchas mas funcionalidades y sera un interpreter para los archivos con extencian
 * file.mdhtml para crear archivos html rapidos y sensillos
 */


var Md =
/*#__PURE__*/
function () {
  function Md() {
    _classCallCheck(this, Md);
  }
  /**
   * (>URL !Texto alternativo  @Título de la imagen))
   */


  _createClass(Md, null, [{
    key: "img",
    value: function img(str) {
      var rn_str;
      rn_str = str.split(/[!@>()]/g);

      if (rn_str.length == 6) {
        return [rn_str[2], rn_str[3], rn_str[4]];
      } else if (rn_str.length == 5) {
        return [rn_str[2], rn_str[3]];
      } else if (rn_str.length == 4) {
        return [rn_str[2]];
      }
    }
  }, {
    key: "iconUse",
    value: function iconUse(cas) {
      var i_can;

      switch (cas) {
        case "hamburger":
          i_can = ToolbarIcons.menuHamburger;
          break;

        case "ball":
          i_can = ToolbarIcons.menuBalls;
          break;

        default:
          i_can = ToolbarIcons.back;
          break;
      }

      return i_can;
    }
  }, {
    key: "markInterpreter",
    value: function markInterpreter(cant) {
      var res;

      switch (cant) {
        case 1:
          res = "h1";
          break;

        case 2:
          res = "h2";
          break;

        case 3:
          res = "h3";
          break;

        case 4:
          res = "h4";
          break;

        case 5:
          res = "h5";
          break;

        case 6:
          res = "h6";
          break;

        default:
          break;
      }

      return res;
    }
  }]);

  return Md;
}();
/**
 * Objeto en desarrolo
 */


var Support =
/*#__PURE__*/
function () {
  function Support() {
    _classCallCheck(this, Support);
  }
  /**
   *
   * @param fn Es una funcion que puede retornar string y depende de lo retorne lo retorna crudo o a prueba de fallo
   */


  _createClass(Support, null, [{
    key: "add",
    value: function add(fn) {
      if (fn != undefined) {
        return fn;
      } else {
        return "";
      }
    }
  }, {
    key: "MD",
    value: function MD(mobile, desktop) {
      if (Ux.isMobile) {
        return mobile();
      } else {
        return desktop();
      }
    }
  }]);

  return Support;
}();

function exist_fn(fn) {
  return typeof fn == "function";
}

function exist_obj(vara) {
  return _typeof(vara) == "object";
}
/**
 *
 * @param func Un callback que se esjecuta cada tiempo establecido en el delay
 * @param delay number en milisegundos
 */


function debounce(func, delay) {
  var debounceTimer;
  return function () {
    var context = this;
    var args = arguments;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(function () {
      return func.apply(context, args);
    }, delay);
  };
}
/**
 *
 * @param cname cokie nombre
 * @param cvalue valor de la cookie
 * @param exdays el numero de dias que se dura la cookie
 * @param path la ruta del servido donde se trabajara por defecto en el index
 */


function setCookie(cname, cvalue, exdays, path) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();

  if (path != undefined) {
    var _path = path;
  } else {
    _path = "/";
  }

  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=".concat(_path);
}
/**
 *
 * @param cname colaca el ombre de la cookie a buscar y te retorna su valor
 */


function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];

    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }

    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }

  return "";
}
/**
 *
 * @param se el nombre de la cookie a comprobar si existe
 * @param debug por defecto es true y no es recomendable usar elçn desarrollo
 */


function checkCookie(se) {
  var debug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var user = getCookie(se);

  if (user == "") {
    console.warn("Not Found %c" + se, "color: red; font:bold");
  } else {
    if (debug) {
      user = prompt("No se encontro lo que buscaba:");

      if (user != "" && user != null) {
        setCookie("username", user, 0.5);
      }
    }
  }
}

var Ux =
/*#__PURE__*/
function () {
  function Ux() {
    _classCallCheck(this, Ux);
  }

  _createClass(Ux, null, [{
    key: "isMobile",
    value: function isMobile() {
      if ("ontouchstart" in window || navigator.msMaxTouchPoints) {
        return true;
      } else {
        return false;
      }
    }
    /*document.addEventListener('click', debounce(function() {
            alert("Hello\nNo matter how many times you" +
            "click the debounce button, I get " +
            "executed once every 3 seconds!!") }, 3000)); */

    /**
     * @descripcion activa la opcion de controlar la camara desde ya con navigator.getMedia(callback,callbcak)
     */

  }, {
    key: "getMedia",
    value: function getMedia() {
      return navigator.getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
    } //Unbreve adelanto esta en funcion experimental 

    /**
     *
     * @param id Id del elemento donde desea que trabaje esrta funcion
     * @param callback el callback recibe el codigo en numeros y el codigo del teclado en string
     */

  }, {
    key: "keyPush",
    value: function keyPush(id, callback) {
      document.getElementById(id).addEventListener("keydown", function (ev) {
        callback(ev.code, ev.keyCode);
      });
    }
    /**
     *
     * @param id Id del elemento donde desea que trabaje esrta funcion
     * @param callback callback recibe el codigo del teclado del mause que ha sido pulsado
     */

  }, {
    key: "clickMouse",
    value: function clickMouse(id, callback) {
      document.getElementById(id).addEventListener("mousedown", function (e) {
        callback(e.which);
      });
    }
    /**
     *
     * @param handler El callback recibe los parametros de la de los datos de la orientacion del dispositivo
     */

  }, {
    key: "getCoorMb",
    value: function getCoorMb(handler) {
      try {
        window.addEventListener('deviceorientation', function (ev) {
          handler(ev);
        });
      } catch (error) {
        window.addEventListener('MozOrientation', function (ev) {
          handler(ev);
        });
      }
    }
  }, {
    key: "getIp",
    value: function getIp() {
      window.RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection; //compatibility for firefox and chrome

      var pc = new RTCPeerConnection({
        iceServers: []
      }),
          noop = function noop() {};

      pc.createDataChannel("");
      pc.createOffer(pc.setLocalDescription.bind(pc), noop);

      pc.onicecandidate = function (ice) {
        if (!ice || !ice.candidate || !ice.candidate.candidate) return;
        var myIP = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/.exec(ice.candidate.candidate)[1];
        pc.onicecandidate = noop;
        return myIP;
      };
    }
  }, {
    key: "getLocation",

    /**
     *
     * @param handler este es un callback que recibe la ubicaion del usuario
     * @param handlerError directamente recibe el codigo de error{1:Error time out,2:dispositivono pude mostrar
     * ubicacion,1:no se tiene permisos}
     * @param timeout este es el tiempo de espera antes de que ocurra un error de code 3
     */
    value: function getLocation(handler, handlerError, timeout) {
      navigator.geolocation.getCurrentPosition(function (ub) {
        handler(ub);
      }, function (er) {
        handlerError(er.code);
      }, timeout != undefined ? timeout : {
        timeout: 0
      });
    }
  }]);

  return Ux;
}();
/**
 * @param metho el metodo pude ser get o post
 * @param url la url que desea tratar tenga en cuenta el tipò de
 */


var Http =
/*#__PURE__*/
function () {
  function Http(_method, _url) {
    var _asyc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    _classCallCheck(this, Http);

    this.method = _method.toUpperCase();
    this.url = _url;
    this.asyc = _asyc;
  }

  _createClass(Http, [{
    key: "send",
    value: function send(callback, query, headers) {
      var response;

      try {
        /*// Opera 8.0+, Firefox, Safari,Chrome*/
        response = new XMLHttpRequest();
      } catch (e) {
        /*// Internet Explorer Browsers ;C*/
        try {
          response = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
          try {
            response = new ActiveXObject("Microsoft.XMLHTTP");
          } catch (e) {
            alert("Navegador viejisimmo");
            return false;
          }
        }
      }

      ;

      response.onreadystatechange = function () {
        if (response.readyState == 4 && response.status == 200) {
          callback(response.responseText);
        }
      };

      if (this.method == "GET") {
        response.open(this.method, this.url, this.asyc);
        response.send();
      } else if (this.method == "POST") {
        response.open(this.method, this.url, this.asyc);
        response.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

        if (headers != undefined) {
          var _keys = Object.keys(headers);

          for (var i = 0; i < _keys.length; i++) {
            response.setRequestHeader(_keys[i], headers[_keys[i]]);
          }
        }

        response.send(query);
      }
    }
  }], [{
    key: "getHeaders",
    value: function getHeaders() {
      var req;

      try {
        req = new XMLHttpRequest();
      } catch (e) {
        try {
          req = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
          try {
            req = new ActiveXObject("Microsoft.XMLHTTP");
          } catch (e) {
            alert("Navegador viejisimo");
            return false;
          }
        }
      }

      ;
      req.open('GET', document.location.href, false);
      req.send(null);
      var headers = req.getAllResponseHeaders();
      return headers.split("\n");
    }
    /**
    *
    * @param url
    * @param callback
    * @see este metodo No esta deltodo dessarrollado
    * TODO:   Experimental
    */

  }, {
    key: "see",
    value: function see(url, callback) {
      if (typeof EventSource !== "undefined") {
        var source = new EventSource(url);

        source.onmessage = function (event) {
          document.getElementById("result").innerHTML += event.data + "<br>";
        };
      } else {}
    }
  }]);

  return Http;
}();
/**
 * @descripcion este Objeto no esta stable aun no puede ser utilizado con fiabilidad
 */


var Toch =
/*#__PURE__*/
function () {
  function Toch(_target, disparar) {
    _classCallCheck(this, Toch);

    this.target = _target;
    this.onfire = disparar;
  }

  _createClass(Toch, [{
    key: "disparar",
    value: function disparar(callback) {
      document.getElementById(this.target);
    }
    /* //museDown Elbotom del raton se matiene presionado
     //mouseUp El boton del raton se solto
          * @description Esto es experimental y no esta desarollada aun
      * pero aqui se presenta el prototipo
      *  TODO: un problemita es que esta trabajndo al reves
      * enrtre el Saliendo y Entrando
      */

  }], [{
    key: "simulatorDesktop",
    value: function simulatorDesktop() {
      document.onmousemove = function (e) {
        document.onclick = function (ev) {
          console.log("Saliendo del click al click");
          console.log(ev.clientX);

          document.onmousedown = function (er) {
            console.log("Entrando del click");
            console.log(er.clientX);
          };
        };

        console.log(e.clientX);
      };
    }
  }]);

  return Toch;
}();
/**
 *
 * @example {
        "//": "Visual Options",
        "body": "<String>",
        "icon": "<URL String>",
        "image": "<URL String>",
        "badge": "<URL String>",
        "vibrate":,
        "sound": "<URL String>",
        "dir": "<String of 'auto' | 'ltr' | 'rtl'>",
      
        "//": "Behavioural Options",
        "tag": "<String>",
        "data": "<Anything>",
        "requireInteraction": "<boolean>",
        "renotify": "<Boolean>",
        "silent": "<Boolean>",
      
        "//": "Both Visual & Behavioural Options",
        "actions": "<Array of Strings>",
      
        "//": "Information Option. No visual affect.",
        "timestamp": "<Long>"
      }
 */


var Ntx =
/*#__PURE__*/
function () {
  function Ntx(require, extras) {
    _classCallCheck(this, Ntx);

    this.content = require;
    this.extras = extras;
  }

  _createClass(Ntx, [{
    key: "joder",
    value: function joder(onclick) {
      var nodisplay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3000;
      var onshow = arguments.length > 2 ? arguments[2] : undefined;
      var onclose = arguments.length > 3 ? arguments[3] : undefined;
      var onerr = arguments.length > 4 ? arguments[4] : undefined;

      if (Notification) {
        if (Notification.permission !== "granted") {
          Notification.requestPermission();
        }

        var noti;
        noti = _typeof(this.extras) == "object" ? new Notification(this.content.title, this.extras) : new Notification(this.content.title, {
          body: this.content.body
        }); // Al hacer click

        noti.onclick = onclick(); // Al cerrar

        noti.onshow = typeof onshow == "function" ? onshow() : null;
        noti.onclose = typeof onclose == "function" ? onclose() : null;
        noti.onerror = typeof onerr == "function" ? onerr() : null;
        setTimeout(function () {
          noti.close();
        }, nodisplay);
      }
    }
  }], [{
    key: "iCan",
    value: function iCan() {
      if (Notification.permission == "default") {
        return -1;
      } else if (Notification.permission == "denied") {
        return 0;
      } else {
        return 1;
      }
    }
  }]);

  return Ntx;
}();

Ntx.vibrar = Nt.vibration;
Ntx.sound = Nt.sound;

var ButtonFloat =
/*#__PURE__*/
function (_Component) {
  _inherits(ButtonFloat, _Component);

  function ButtonFloat() {
    _classCallCheck(this, ButtonFloat);

    return _possibleConstructorReturn(this, _getPrototypeOf(ButtonFloat).call(this, {
      style: null,
      template: "<div class=\"button-float\">\n        <img id=\"img-float\">\n    </div>"
    }));
  }

  _createClass(ButtonFloat, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render(function (float_button) {
        window.floatButton = float_button;
        document.getElementById("img-float").setAttribute("src", Support.add(Md.img(floatButton.getAttribute("md-cr-img"))[0]));
      });
    }
  }]);

  return ButtonFloat;
}(Component);

web_component("meod-button-float", ButtonFloat);

var EditText =
/*#__PURE__*/
function (_Component2) {
  _inherits(EditText, _Component2);

  function EditText() {
    _classCallCheck(this, EditText);

    return _possibleConstructorReturn(this, _getPrototypeOf(EditText).call(this, {
      style: null,
      template: "\n        <div class=\"card-meod-editex\">\n            <div class=\"android\">\n                <input class=\"input-hint\">\n                <label class=\"label\"></label>\n            </div>\n        </div>\n        "
    }));
  }

  _createClass(EditText, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render(function (comp) {
        comp.childNodes[1].childNodes[1].childNodes[1].setAttribute("type", comp.getAttribute("md-type"));
        comp.childNodes[1].childNodes[1].childNodes[1].setAttribute("placeholder", comp.getAttribute("md-placeholder"));
        comp.childNodes[1].childNodes[1].childNodes[1].setAttribute("name", comp.getAttribute("md-name"));
        comp.childNodes[1].childNodes[1].childNodes[3].innerText = comp.getAttribute("md-label");
      });
    }
  }]);

  return EditText;
}(Component);

web_component("meod-edit-text", EditText);

var Tab =
/*#__PURE__*/
function (_Meod) {
  _inherits(Tab, _Meod);

  function Tab() {
    _classCallCheck(this, Tab);

    return _possibleConstructorReturn(this, _getPrototypeOf(Tab).call(this, false));
  }

  _createClass(Tab, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render("", function (o) {
        window.tab = o;

        if (tab.hasAttribute("md-cr-img") == true) {
          var img = document.createElement("img");
          img.src = Support.add(Md.img(tab.getAttribute("md-cr-img"))[0]);
          img.alt = Support.add(Md.img(tab.getAttribute("md-cr-img"))[1]);
          img.title = Support.add(Md.img(tab.getAttribute("md-cr-img"))[2]);
          img.id = Support.add(tab.getAttribute("md-id"));
          tab.append(img);
        }
      });
    }
  }]);

  return Tab;
}(Meod);

var AsideMain =
/*#__PURE__*/
function (_Component3) {
  _inherits(AsideMain, _Component3);

  function AsideMain() {
    _classCallCheck(this, AsideMain);

    return _possibleConstructorReturn(this, _getPrototypeOf(AsideMain).call(this, {
      template: "<div class=\"main-aside\" id=\"main-aside\" >\n        <img class=\"main-aside-img\" id=\"main-aside-img\">\n        <div class=\"content\" id=\"content-aside\">\n            <!-- insert your code -->\n        </div>\n    </div>"
    }));
  }

  _createClass(AsideMain, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render(function (meod_aside) {
        window.meodAside = meod_aside;
        var aside = document.getElementById("main-aside");
        document.getElementById("content-aside").innerHTML = aside.getAttribute("md-content");
        document.getElementById("main-aside-img").setAttribute("src", Support.add(Md.img(aside.getAttribute("md-cr-img"))[0]));
      });
    }
  }]);

  return AsideMain;
}(Component);

var Switch =
/*#__PURE__*/
function (_Component4) {
  _inherits(Switch, _Component4);

  function Switch() {
    _classCallCheck(this, Switch);

    return _possibleConstructorReturn(this, _getPrototypeOf(Switch).call(this, {
      style: null,
      template: "\n        <label class=\"switch\">\n            <input type=\"checkbox\">\n<span class=\"slider round\"></span>\n</label>"
    }));
  }

  _createClass(Switch, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render(function (divisor) {});
    }
  }]);

  return Switch;
}(Component);

var SwitchRectangular =
/*#__PURE__*/
function (_Component5) {
  _inherits(SwitchRectangular, _Component5);

  function SwitchRectangular() {
    _classCallCheck(this, SwitchRectangular);

    return _possibleConstructorReturn(this, _getPrototypeOf(SwitchRectangular).call(this, {
      style: null,
      template: "\n        <label class=\"switch\">\n  <input type=\"checkbox\">\n  <span class=\"slider\"></span>\n</label>"
    }));
  }

  _createClass(SwitchRectangular, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render(function (divisor) {});
    }
  }]);

  return SwitchRectangular;
}(Component);

web_component("meod-tab", Tab);
web_component("meod-aside-main", AsideMain);
web_component("meod-switch-rd", Switch);
web_component("meod-switch-li", SwitchRectangular);

var Toolbar =
/*#__PURE__*/
function (_Meod2) {
  _inherits(Toolbar, _Meod2);

  function Toolbar(__supportStyleMobile) {
    var _this3;

    _classCallCheck(this, Toolbar);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(Toolbar).call(this, true, "\n               .toolbar{\n                position: fixed;\n                top: 0;\n                width: 100%;\n                height: ".concat(ToolbarDimens.altura, ";\n                background: ").concat(colorSettings.colorPrimary, ";\n                box-sizing: border-box;\n            }\n            .toolbar #img-menu {\n                position: absolute;\n                right: 0;\n                top: 15%;\n            }\n            .container-toolbar{\n                height: 100%;\n                width: 90%;\n            }\n            .container-toolbar div{\n            float: left;\n            height: 100%;\n        }\n        .action-icon{\n            height: 100%;\n            width: ").concat(ToolbarDimens.primaryAction, ";\n            margin:auto;\n            }\n            .action-icon img{\n                display:block;\n                margin:1.6em 15%;\n                }\n            .logo{\n                width: 65%;\n                margin-left:15px;\n            }\n            .logo img{\n            height: 100%;\n                width: 45%;\n            }\n            .logo h1{margin-top:13px}\n            .logo h2{margin-top:13px}\n            .logo h3{margin-top:13px}\n            .logo h4{margin-top:13px}\n            .logo h5{margin-top:13px}\n            .logo h6{margin-top:13px}\n            p,h1,h2,h3,h4,h5,h6,span{\n                margin-block-start: 0;\n                margin-block-end: 0;\n                margin-inline-start: 0;\n                margin-inline-end: 0;font-family:karla;\n                color:").concat(colorSettings.colorText, "\n            }\n            ").concat(Fonts.title.css, "\n            p,h1,h2,h3,h4,h5,h6,span{font-family:").concat(Fonts.title.name, "}\n         ").concat(Support.add(ToolbarSupport.onDeskot.imgLogo), "   \n        ").concat(Support.add(__supportStyleMobile), "\n        ")));
    _this3.supportStyleMobile = __supportStyleMobile;
    return _this3;
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