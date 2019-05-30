#!/usr/bin/env python
# -*- coding: utf-8 -*-

class Core():
    core="""/**
 * @description Bugersito esta en fase de desarrolo y mas adelante
 * madurara y tendra superpoderes java.
 */
 var ReadCss;
class Debug {
    static err(msg) { return console.log("%c" + msg, "color: red; font-size:15px"); }
    static group() { return console.group(); }
    static groupFin() { return console.groupEnd(); }
    static mal(msg) { console.warn("%c" + msg, "color: red; font-size:15px"); }
    static inf(arg) { return console.info(arg); }
    static ok(msg) { return console.log("%c" + msg, "color: green; font-size:13px"); }
    static put(mensanje) { console.log("%c" + mensanje, "color: blue; font-size:13px"); }
    static start(name) { return console.time(name); }
    static end(name) { console.timeEnd(name); }
}
function css(id, arg) {
    var doc = document.getElementById(id);
    var arr = Object.keys(arg);
    for (var i = 0; i < arr.length; i++) {
        doc.style[arr[i]] = arg[arr[i]];
    }
}
class Tools {
    constructor() {
    }
    static put(mesanje) {
        console.log(mesanje);
    }
    static start(name) {
        console.time(name);
    }
    static end(name) {
        console.timeEnd(name);
    }
    static $$(target) {
        if (target.indexOf("&") == 0) {
            return document.querySelector(target.replace("&", ""));
        }
        else if (target.indexOf("@") == 0) {
            return document.querySelectorAll(target.replace("@", ""));
        }
        else {
            return document.getElementById(target);
        }
    }
    static decorate(...args) {
        return (target) => {
            Object.assign(target.prototype, ...args);
        };
    }
    /**
     * @description Referencia de decorador de metodos
     */
    static pushUrlFile(input, output) {
        let preview = document.querySelector(output);
        let file = document.querySelector(input).files[0];
        let reader = new FileReader();
        reader.onloadend = function () {
            preview.src = reader.result;
        };
        if (file) {
            reader.readAsDataURL(file);
        }
        else {
            preview.src = "";
        }
    }
    static date() {
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
    static sleep(milliseconds, MAX = 1e7) {
        var start = new Date().getTime();
        for (var i = 0; i < MAX; i++) {
            if ((new Date().getTime() - start) > milliseconds) {
                break;
            }
        }
    }
    static textSelected() {
        return window.getSelection().toString();
    }
    static markInterpreter(cant) {
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
    static iconUse(cas) {
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
}
/**
 * @description Use la Clase Component para mayor comodidad
 * pero igual manera se puede usar la clase meod
 * @deprecated
 */
class Meod extends HTMLElement {
    constructor(apply_style, style_CSS) {
        super();
        this.applyStyle = apply_style;
        if (style_CSS != undefined) {
            this.styles = style_CSS;
        }
    }
    render(code, callback) {
        if (this.applyStyle == true) {
            let template = this.attachShadow({ mode: 'open' });
            template.innerHTML = `${this.template(code)}`;
            callback(template);
        }
        else {
            this.innerHTML = `${this.template(code)}`;
            callback(this);
        }
    }
    template(templat) {
        if (this.applyStyle == true) {
            return `<style>
         ${this.styles}
       </style>
       ${templat}
       `;
        }
        else if (this.applyStyle == false) {
            return templat;
        }
    }
}
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
class Component extends HTMLElement {
    constructor(_init) {
        super();
        this.init = _init;
    }
    render(callback) {
        if (this.init.style != null) {
            let template = this.attachShadow({ mode: this.init.open });
            template.innerHTML = `<style>${this.init.style}</style>${this.init.template}`;
            callback(template);
        }
        else {
            this.innerHTML = `${this.init.template}`;
            callback(this);
        }
    }
}
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
    recognition.addEventListener("result", (e) => {
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
class Md {
    constructor() {
    }
    /**
     * (>URL !Texto alternativo  @Título de la imagen))
     */
    static img(str) {
        var rn_str;
        rn_str = str.split(/[!@>()]/g);
        if (rn_str.length == 6) {
            return [rn_str[2], rn_str[3], rn_str[4]];
        }
        else if (rn_str.length == 5) {
            return [rn_str[2], rn_str[3]];
        }
        else if (rn_str.length == 4) {
            return [rn_str[2]];
        }
    }
    static iconUse(cas) {
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
    static markInterpreter(cant) {
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
}
/**
 * Objeto en desarrolo
 */
class Support {
    constructor() {
    }
    /**
     *
     * @param fn Es una funcion que puede retornar string y depende de lo retorne lo retorna crudo o a prueba de fallo
     */
    static add(fn) {
        if (fn != undefined) {
            return fn;
        }
        else {
            return "";
        }
    }
    static MD(mobile, desktop) {
        if (Ux.isMobile) {
            return mobile();
        }
        else {
            return desktop();
        }
    }
}

function exist_fn(fn) {
    return typeof fn == "function";
}
function exist_obj(vara) {
    return typeof vara == "object";
}
/**
 *
 * @param func Un callback que se esjecuta cada tiempo establecido en el delay
 * @param delay number en milisegundos
 */
function debounce(func, delay) { let debounceTimer; return function () { let context = this; let args = arguments; clearTimeout(debounceTimer); debounceTimer = setTimeout(() => func.apply(context, args), delay); }; }
/**
 *
 * @param cname cokie nombre
 * @param cvalue valor de la cookie
 * @param exdays el numero de dias que se dura la cookie
 * @param path la ruta del servido donde se trabajara por defecto en el index
 */
function setCookie(cname, cvalue, exdays, path) {
    let d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    if (path != undefined) {
        var _path = path;
    }
    else {
        _path = "/";
    }
    document.cookie = cname + "=" + cvalue + ";" + expires + `;path=${_path}`;
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
function checkCookie(se, debug = true) {
    var user = getCookie(se);
    if (user == "") {
        console.warn("Not Found %c" + se, "color: red; font:bold");
    }
    else {
        if (debug) {
            user = prompt("No se encontro lo que buscaba:");
            if (user != "" && user != null) {
                setCookie("username", user, 0.5);
            }
        }
    }
}
class Ux {
    constructor() {
    }
    static isMobile() { if ("ontouchstart" in window || navigator.msMaxTouchPoints) {
        return true;
    }
    else {
        return false;
    } }
    /*document.addEventListener('click', debounce(function() {
            alert("Hello\nNo matter how many times you" +
            "click the debounce button, I get " +
            "executed once every 3 seconds!!") }, 3000)); */
    /**
     * @descripcion activa la opcion de controlar la camara desde ya con navigator.getMedia(callback,callbcak)
     */
    static getMedia() {
        return navigator.getMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia);
    }
    //Unbreve adelanto esta en funcion experimental 
    /**
     *
     * @param id Id del elemento donde desea que trabaje esrta funcion
     * @param callback el callback recibe el codigo en numeros y el codigo del teclado en string
     */
    static keyPush(id, callback) {
        document.getElementById(id).addEventListener("keydown", function (ev) { callback(ev.code, ev.keyCode); });
    }
    /**
     *
     * @param id Id del elemento donde desea que trabaje esrta funcion
     * @param callback callback recibe el codigo del teclado del mause que ha sido pulsado
     */
    static clickMouse(id, callback) {
        document.getElementById(id).addEventListener("mousedown", function (e) {
            callback(e.which);
        });
    }
    /**
     *
     * @param handler El callback recibe los parametros de la de los datos de la orientacion del dispositivo
     */
    static getCoorMb(handler) {
        try {
            window.addEventListener('deviceorientation', function (ev) { handler(ev); });
        }
        catch (error) {
            window.addEventListener('MozOrientation', function (ev) {
                handler(ev);
            });
        }
    }
    static getIp() {
        window.RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection; //compatibility for firefox and chrome
        var pc = new RTCPeerConnection({ iceServers: [] }), noop = function () { };
        pc.createDataChannel("");
        pc.createOffer(pc.setLocalDescription.bind(pc), noop);
        pc.onicecandidate = function (ice) {
            if (!ice || !ice.candidate || !ice.candidate.candidate)
                return;
            var myIP = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/.exec(ice.candidate.candidate)[1];
            pc.onicecandidate = noop;
            return myIP;
        };
    }
    ;
    /**
     *
     * @param handler este es un callback que recibe la ubicaion del usuario
     * @param handlerError directamente recibe el codigo de error{1:Error time out,2:dispositivono pude mostrar
     * ubicacion,1:no se tiene permisos}
     * @param timeout este es el tiempo de espera antes de que ocurra un error de code 3
     */
    static getLocation(handler, handlerError, timeout) { navigator.geolocation.getCurrentPosition((ub) => { handler(ub); }, (er) => { handlerError(er.code); }, (timeout != undefined) ? timeout : { timeout: 0 }); }
}
/**
 * @param metho el metodo pude ser get o post
 * @param url la url que desea tratar tenga en cuenta el tipò de
 */
class Http {
    constructor(_method, _url, _asyc = true) {
        this.method = _method.toUpperCase();
        this.url = _url;
        this.asyc = _asyc;
    }
    send(callback, query, headers) {
        var response;
        try {
            /*// Opera 8.0+, Firefox, Safari,Chrome*/
            response = new XMLHttpRequest();
        }
        catch (e) {
            /*// Internet Explorer Browsers ;C*/
            try {
                response = new ActiveXObject("Msxml2.XMLHTTP");
            }
            catch (e) {
                try {
                    response = new ActiveXObject("Microsoft.XMLHTTP");
                }
                catch (e) {
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
        }
        else if (this.method == "POST") {
            response.open(this.method, this.url, this.asyc);
            response.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            if (headers != undefined) {
                var _keys = Object.keys(headers);
                for (let i = 0; i < _keys.length; i++) {
                    response.setRequestHeader(_keys[i], headers[_keys[i]]);
                }
            }
            response.send(query);
        }
    }
    static getHeaders() {
        var req;
        try {
            req = new XMLHttpRequest();
        }
        catch (e) {
            try {
                req = new ActiveXObject("Msxml2.XMLHTTP");
            }
            catch (e) {
                try {
                    req = new ActiveXObject("Microsoft.XMLHTTP");
                }
                catch (e) {
                    alert("Navegador viejisimo");
                    return false;
                }
            }
        }
        ;
        req.open('GET', document.location.href, false);
        req.send(null);
        var headers = req.getAllResponseHeaders();
        return headers.split("");
    }
    /**
 *
 * @param url
 * @param callback
 * @see este metodo No esta deltodo dessarrollado
 * TODO:   Experimental
 */
    static see(url, callback) {
        if (typeof (EventSource) !== "undefined") {
            var source = new EventSource(url);
            source.onmessage = function (event) {
                document.getElementById("result").innerHTML += event.data + "<br>";
            };
        }
        else { }
    }
}
/**
 * @descripcion este Objeto no esta stable aun no puede ser utilizado con fiabilidad
 */
class Toch {
    constructor(_target, disparar) {
        this.target = _target;
        this.onfire = disparar;
    }
    disparar(callback) {
        document.getElementById(this.target);
    }
   /* //museDown Elbotom del raton se matiene presionado
    //mouseUp El boton del raton se solto
         * @description Esto es experimental y no esta desarollada aun
     * pero aqui se presenta el prototipo
     *  TODO: un problemita es que esta trabajndo al reves
     * enrtre el Saliendo y Entrando
     */
    static simulatorDesktop() {
        document.onmousemove = (e) => {
            document.onclick = (ev) => {
                console.log("Saliendo del click al click");
                console.log(ev.clientX);
                document.onmousedown = (er) => {
                    console.log("Entrando del click");
                    console.log(er.clientX);
                };
            };
            console.log(e.clientX);
        };
    }
}
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
class Ntx {
    constructor(require, extras) {
        this.content = require;
        this.extras = extras;
    }
    joder(onclick, nodisplay = 3000, onshow, onclose, onerr) {
        if (Notification) {
            if (Notification.permission !== "granted") {
                Notification.requestPermission();
            }
            var noti;
            noti = (typeof this.extras == "object") ? new Notification(this.content.title, this.extras) : new Notification(this.content.title, { body: this.content.body });
            // Al hacer click
            noti.onclick = onclick();
            // Al cerrar
            noti.onshow = (typeof onshow == "function") ? onshow() : null;
            noti.onclose = (typeof onclose == "function") ? onclose() : null;
            noti.onerror = (typeof onerr == "function") ? onerr() : null;
            setTimeout(function () { noti.close(); }, nodisplay);
        }
    }
    static iCan() { if (Notification.permission == "default") {
        return -1;
    }
    else if (Notification.permission == "denied") {
        return 0;
    }
    else {
        return 1;
    } }
}
Ntx.vibrar = Nt.vibration;
Ntx.sound = Nt.sound;

class ButtonFloat extends Component {
    constructor() {
        super({ style: null, template: `<div class="button-float">
        <img id="img-float">
    </div>` });
    }
    connectedCallback() {
        this.render((float_button) => {
            window.floatButton = float_button;
            document.getElementById("img-float").setAttribute("src", Support.add(Md.img(floatButton.getAttribute("md-cr-img"))[0]));
        });
    }
}
web_component("meod-button-float", ButtonFloat);
class EditText extends Component {
    constructor() {
        super({ style: null, template: `
        <div class="card-meod-editex">
            <div class="android">
                <input class="input-hint">
                <label class="label"></label>
            </div>
        </div>
        ` });
    }
    connectedCallback() {
        this.render((comp) => {
            comp.childNodes[1].childNodes[1].childNodes[1].setAttribute("type", comp.getAttribute("md-type"));
            comp.childNodes[1].childNodes[1].childNodes[1].setAttribute("placeholder", comp.getAttribute("md-placeholder"));
            comp.childNodes[1].childNodes[1].childNodes[1].setAttribute("name", comp.getAttribute("md-name"));
            comp.childNodes[1].childNodes[1].childNodes[3].innerText = comp.getAttribute("md-label");
        });
    }
}
web_component("meod-edit-text", EditText);

class Tab extends Meod {
    constructor() {
        super(false);
    }
    connectedCallback() {
        this.render(``, (o) => {
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
}
class AsideMain extends Component {
    constructor() {
        super({
            template: `<div class="main-aside" id="main-aside" >
        <img class="main-aside-img" id="main-aside-img">
        <div class="content" id="content-aside">
            <!-- insert your code -->
        </div>
    </div>`
        });
    }
    connectedCallback() {
        this.render((meod_aside) => {
            window.meodAside = meod_aside;
            var aside = document.getElementById("main-aside");
            document.getElementById("content-aside").innerHTML = aside.getAttribute("md-content");
            document.getElementById("main-aside-img").setAttribute("src", Support.add(Md.img(aside.getAttribute("md-cr-img"))[0]));
        });
    }
}
class Switch extends Component {
    constructor() {
        super({ style: null, template: `
        <label class="switch">
            <input type="checkbox">
<span class="slider round"></span>
</label>` });
    }
    connectedCallback() {
        this.render((divisor) => {
        });
    }
}
class SwitchRectangular extends Component {
    constructor() {
        super({ style: null, template: `
        <label class="switch">
  <input type="checkbox">
  <span class="slider"></span>
</label>` });
    }
    connectedCallback() {
        this.render((divisor) => {
        });
    }
}

web_component("meod-tab", Tab);
web_component("meod-aside-main", AsideMain);
web_component("meod-switch-rd", Switch);
web_component("meod-switch-li", SwitchRectangular);

class Toolbar extends Meod {
    constructor(__supportStyleMobile) {
        super(true, `
               .toolbar{
                position: fixed;
                top: 0;
                width: 100%;
                height: ${ToolbarDimens.altura};
                background: ${colorSettings.colorPrimary};
                box-sizing: border-box;
            }
            .toolbar #img-menu {
                position: absolute;
                right: 0;
                top: 15%;
            }
            .container-toolbar{
                height: 100%;
                width: 90%;
            }
            .container-toolbar div{
            float: left;
            height: 100%;
        }
        .action-icon{
            height: 100%;
            width: ${ToolbarDimens.primaryAction};
            margin:auto;
            }
            .action-icon img{
                display:block;
                margin:1.6em 15%;
                }
            .logo{
                width: 65%;
                margin-left:15px;
            }
            .logo img{
            height: 100%;
                width: 45%;
            }
            .logo h1{margin-top:13px}
            .logo h2{margin-top:13px}
            .logo h3{margin-top:13px}
            .logo h4{margin-top:13px}
            .logo h5{margin-top:13px}
            .logo h6{margin-top:13px}
            p,h1,h2,h3,h4,h5,h6,span{
                margin-block-start: 0;
                margin-block-end: 0;
                margin-inline-start: 0;
                margin-inline-end: 0;font-family:karla;
                color:${colorSettings.colorText}
            }
            ${Fonts.title.css}
            p,h1,h2,h3,h4,h5,h6,span{font-family:${Fonts.title.name}}
         ${Support.add(ToolbarSupport.onDeskot.imgLogo)}   
        ${Support.add(__supportStyleMobile)}
        `);
        this.supportStyleMobile = __supportStyleMobile;
    }
    connectedCallback() {
        this.render(`<div class="toolbar" id="toolbar">
            <div class="container-toolbar" id="container-toolbar">
                <div class="action-icon" id="toolbar-back" >
                </div>
                <div class="logo" id="toolbar-logo">
                </div>
            </div>
        </div>
        `, function (o) {
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
                }
                else {
                    img.src = Tools.iconUse(doc_toolbar.getAttribute("md-action-use"));
                }
                toolbar.getElementById("toolbar-back").append(img);
            }
            if (doc_toolbar.hasAttribute("md-action-sd") == true) {
                var img2 = document.createElement("img");
                if (doc_toolbar.getAttribute("md-action-use-sd").includes("@") == true) {
                    img2.src = doc_toolbar.getAttribute("md-action-use").replace(/@/g, "");
                }
                else {
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
                logo.onclick = () => { document.location.href = "/"; };
                toolbar.getElementById("toolbar-logo").append(logo);
            }
        });
    }
}
web_component("meod-toolbar", Toolbar);
 """
    coreSupport=""" "use strict";

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
var ReadCss;

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
            alert("Hello
    No matter how many times you" +
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
      return headers.split("");
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

web_component("meod-toolbar", Toolbar);"""
class Css():
    compAside="""@import "../material";
.main-aside{
    display: flex;
    height: 80px;
    width: 100%;
    background: $dark-primary-color;
    img.main-aside-img{
        width: 60px;
        height: 60px;
        margin-left: 3%;
        margin-top: 3%;
    }
    .content{
        margin: 3% 0%  6%;
        /*background: rgba(187, 86, 86, 0.664);*/
        width: 20em;
        height: 60px;
    }
}

/*stilos del divisor de menus/status*/
.divisor-main{
    box-sizing: border-box;
    display: flex;
    background:rgba(120, 100, 167, 0.623);
    img{
        width: 46px;
        height: 46px;
    }
    .content{
       /* width: 10em;*/
        height: 50px;
    }
}
.divisor-line{
    height: $divider-heigth;
    background:$divider-color;
  }
  
/*Fin estilos del divisor de menus/status*/
.meod-lateral{
    display: none;
    position: fixed;
    left: 0;
    background:$background-color;
    z-index: 1000;
    transition: width 4s;
}
/*body {
width: 100%;
height: 100%;
background: blanchedalmond;
}*/
meod-toolbar:hover+.meod-lateral{
display: block;
width: 100%;
height: 100%;
background: rgba(179, 86, 86, 0.123)
}
.main-lateral{
width: 30%;
height: 100vh;
overflow-y:scroll;
overflow-x: hidden; 
}
@media only screen and (max-width: 425px){
.main-lateral{
    background: rgb(230, 140, 6);
    width: 250px;
    height: 100vh;
}
}
 """
    compButton=""".button-float{
    position: absolute;
    right: 34px;
    bottom: 0;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background:$accent-color;
    margin-bottom: 80px;
    transition: background 2s,width 2s,height 2s,padding 2.8s;

}
.button-float:active{
    background-image: radial-gradient(#E040FB, rgb(241, 177, 252), rgb(195, 162, 201));
    width: 95px;
    height: 95px;
    padding: 10px;
}
.button-float #img-float{
    /*margin: 50em 50em;*/
    position: fixed;
    padding: 8px;
    width: 80px;
    height: 80px;
    
} """
    compInput=""" .android{
    height: 60px;
    width: 80%;
    box-sizing: border-box;
    justify-content: center;
}
.input-hint{
    border: 0;
    width: 40%;
    height: 40px;
    
}
.input-hint:focus{
    padding:0px; 
    box-shadow: 1px 1px 0px rgb(145, 151, 189),
2px 2px 0px rgb(145, 151, 189),
3px 3px 0px rgb(145, 151, 189),
4px 4px 0px rgb(145, 151, 189),
5px 5px 0px rgb(145, 151, 189),
6px 6px 0px rgb(145, 151, 189),
7px 7px 0px rgb(145, 151, 189);
/* A más sombras más profundidad */
    outline-style: none;
}

.label{
    position: absolute;
    left: 0;
    font-family: karla;
}
.input-hint{
    margin-top: 1.3em;

}
.input-hint + label{
    transition: margin-top 1s ,font-size 1s,transform 2s;
}
.input-hint:focus + label
{
    margin-top: 5px;
    font-size: 12px;
}.input-hint:focus
{
    transform: translateX(8px)
}

.android > .input-hint
{
    float:left;
}
"""
    compSwitch="""/*Esta versin del interruptor esta en css*/
 /* The switch - the box around the slider */
 .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }
  
  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
  }
  
  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }
  
  input:checked + .slider {
    background-color: #2196F3;
  }
  
  input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
  }
  
  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
  
  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }
  
  .slider.round:before {
    border-radius: 50%;
  } """
    material=""" /*
Aqui usted tiene que colocar  las variables que utilizara en todo su sitio web
principalmente las variables de material desing que meod ya tiene por defecto
si es que usted no tiene ni puta idea que es eso l@ invito a visitar el siguiente sitio web
para que se ayude => https://www.materialpalette.com/
*/
$dark-primary-color    : #512DA8; 
$primary-color         : #673AB7; 
$light-primary-color   : #D1C4E9;
$background-color      : #D1C4E9; 
$text-primary-color    : #FFFFFF; 
$accent-color          : #E040FB; 
$primary-text-color    : #212121; 
$secondary-text-color  : #757575; 
$divider-color         : #BDBDBD;
$divider-heigth        :8px; 
    """
    main="""@import "components/aside","_material","components/switch","components/button-float","components/input";
*,*::before,*::after{padding: 0;margin: 0;border: 0;box-sizing: border-box;}
p,h1,h2,h3,h4,h5,h6,span{margin-block-start: 0;margin-block-end: 0;margin-inline-start: 0;margin-inline-end: 0;font-family: karla;}
.clearfix {overflow: auto;}
.clearfix::after{content: "";clear: both;display: table;}
@font-face {
font-family: karla;
src: url(https://fonts.googleapis.com/css?family=Roboto)
}
.meod-tabs {
width: 100%;
position: fixed;
/*bottom: 0;*/
overflow-x:auto;
overflow-y: hidden;
white-space: nowrap;
height: 60px;          
display: flex;
justify-content: center;
}
meod-tab{
justify-content:center ;
width: 50px;
height: 50px;
margin-left: 1.5%;}
meod-tab img{
width: 40px;
height: 40px;
text-align: center;
margin-left:5px;
margin-top:5px;
}
.meod-tabs meod-tab:hover{
/*Tines que colocar un color mas debil del color deacentuacion.*/
background: rgb(245, 208, 252);
}
.meod-tabs meod-tab img:hover{
width: 45px;
} """

class Img():
    loader=b'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'
    back=b'iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAABuwAAAbsBOuzj4gAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACHSURBVEiJ7ZWxDoJAEAWfJPYQVBL5BT+MBD7SXiuhkZ8ZCq+42LovkcA02800t3vSvwA0QOeUT3wYouUtMCf5Ayhd8idQueQv4OSUn1cpH93yi0s+RcoPQC3pLukWJc0pJB3T9PF1CmJfThYp0ykAeAPXPbLNSOuOzK5Ivid9eCCLeD79X1gAGChJ4csQsKwAAAAASUVORK5CYII='
    menuBar=b'iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB4AAAAeABBeqfSQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAArSURBVEiJ7dNBDQAACMPAgX/PQwTJ4NEz0FclfFe2nQh1IgLc4CNgj4+QN8UUC/7p6r7ZAAAAAElFTkSuQmCC'
    menuSd=b'iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAADmwAAA5sBPN8HMQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAADfSURBVGiB7dexCsIwFIXhRLAKgrv4froJvpO+i6gUxPdw0cHtd2kHh7SRpuS2ng+yXZJ7h7Q5zokMB1AAW+ACPKp1BjbANHd/UYA1UBJ2BVa5+2wEzIFbwxC1Eihy9xsE7COGqO1y9xtU3YlYp5Rn+5SbAS/n3CKy/Om9X6Y6e5Jqowo91bZKPci9p9pWqQc5/lB7SHx2OsBsFJ9f50byQ6zx/UR5V2tYTxQRaYfyiBEojxiD8kh3yiMByiOmoDxiFMojIv8B5REjUB4xBuWR7pRHApRHTEF5xCiUR2Q8Pj8P1K1JVQSzAAAAAElFTkSuQmCC'
    mas=b'iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAADdgAAA3YBfdWCzAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAABlSURBVGiB7dfBDQAhCABBsf+esQC9+xjckOwUANn4wTEkiRQVQzMzt0URJbtmxdCXDKAZQDOAZgDNAJoBtPYBnyfu6SSm/J3i7V/AAFr7AP/ENANoBtAMoBlAM4BmAK19gCTpygJiRwxExsV5vwAAAABJRU5ErkJggg=='

class Values():
    color="""/**
 * :root{
--dark-primary-color    : #512DA8; 
--primary-color         : #673AB7; 
--light-primary-color   : #D1C4E9;
--background-color      : #D1C4E9; 
--text-primary-color    : #FFFFFF; 
--accent-color          : #E040FB; 
--primary-text-color    : #212121; 
--secondary-text-color  : #757575; 
--divider-color         : #BDBDBD; 
}
 */
var colorSettings={
    colorPrimaryDark:"#512DA8",
    colorPrimary:"#673AB7",
    colorBackground:"#D1C4E9",
    colorText:"#FFFFFF",
    colorAccent:"#E040FB",
    colorSecondText:"#212121",
    colorThirdText:"#757575",
    colorDivider:"#BDBDBD",
} """
    dimens=""" /**
 * @description Medidas utilizadas en los toolbars.
 * Se recomienda por defecto utilizar valores en porcentaje para la adaptacion
 * correpta del dispositivo.
 */
var ToolbarDimens={
    primaryAction:"7%",
    logo:"25%",
    spaceLogoORText:"25%",
    imgMenuTop:"15%",
    altura:"80px"
}"""
    fonts="""var Fonts={
    title:{
        css:`@font-face {
            font-family: karla;
            src: url(https://fonts.googleapis.com/css?family=Roboto)
        }`,
        name:"karla"
    },
    subtitle:{
        css:`@font-face {
            font-family: tuname ;
            src: url(tuFuente)
        }`,
        name:"tuname"
    },
    text:{
        css:`@font-face {
            font-family: tuname ;
            src: url(tuFuente)
        }`,
        name:"tuname"
        }
} """
    icons=""" var ToolbarIcons={
    back:ICON+"back.png",/**recomendado 24x24 */
    menuBalls:ICON+"menuSd.png",/**recomendado 50x50 */
    menuHamburger:ICON+"menu.png"/**recomendado 24x24 */
}"""
    toolbarSupport="""var ToolbarSupport={
    onDeskot:{
        imgLogo:`@media only screen and (min-width: 768px) {
            /* For mobile phones: */
            .logo{
                width: 30%;
            }
          }`
    }
} """

    ux="""var Nt={vibration:[500,110,500,110,450,110,200,110,170,40,450,110,200,110,170,40,500],
sound:""
} """



class Fuera():
    manifest=""" /**
 * Este archivo debe estar un nivel arrba o considerar la ruta donde se trabajara los demas
 * componentes para que asi no haiga problemas de encontrar los archivos respectivamente.
 */
   var PATH="/";
   var VALUES=PATH+"values/";
   var ICON=PATH+"mipmap/";
   var LAYOUT=PATH+"layout/";
   var TOOLBAR=PATH+LAYOUT+"widgets/";
   var WIDGETS=PATH+"widgets/";
   var DRAWABLE=PATH+"drawable/";
"""
    compresor="""const fs=require("fs")
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`Introduce el nombre del archivo [ file.extension,salida.extension ]=> `, (nam) => {
    name=nam.split(",")
    fs.readFile(`${name[0]}`, 'utf-8', (err, dat) => {
        if(err) {
          console.log('Error Com no pudo ejecutar el trabajo: ', err);
        } else {
            da=dat.replace(/([\ \t]+(?=[\ \t])|^\s+|\s+$)/g,"")
          console.log("Comprimiendo...");
            fs.writeFile(`com.${name[1]}`,da.replace(/\n/g,""), function (err) {
              if (err){ 
                  return console.log(`El archivo :com.${name} no se pudo crear;`,err);}
              console.log(`El archivo : meod.${name} creado Exitosamente;`);
          });
        }
      });
    readline.close()
  })
 """
 ################################################### actualizar
    licencia="""Copyright 2019 Los autores de Meod. Todos los derechos reservados.

                                 Licencia de apache
                           Versión 2.0, enero de 2004
                        http://www.apache.org/licenses/

   TÉRMINOS Y CONDICIONES DE USO, REPRODUCCIÓN Y DISTRIBUCIÓN

   1. Definiciones.

      "Licencia" significará los términos y condiciones de uso, reproducción,
      y la distribución como se define en las Secciones 1 a 9 de este documento.

      "Licenciante" significará el propietario de los derechos de autor o entidad autorizada por
      El propietario de los derechos de autor que otorga la licencia.

      "Entidad jurídica": la unión de la entidad en funciones y todas las
      otras entidades que controlan, están controladas por o están bajo
      controlar con esa entidad. A los efectos de esta definición,
      "control" significa (i) la potencia, directa o indirecta, para provocar la
      dirección o gestión de dicha entidad, ya sea por contrato o
      de lo contrario, o (ii) propiedad del cincuenta por ciento (50%) o más del
      acciones en circulación, o (iii) titularidad real de dicha entidad.

      "Usted" (o "Su") significará una persona física o jurídica
      Ejerciendo los permisos otorgados por esta Licencia.

      "Source" form shall mean the preferred form for making modifications,
      including but not limited to software source code, documentation
      source, and configuration files.

      "Object" form shall mean any form resulting from mechanical
      transformation or translation of a Source form, including but
      not limited to compiled object code, generated documentation,
      and conversions to other media types.

      "Work" shall mean the work of authorship, whether in Source or
      Object form, made available under the License, as indicated by a
      copyright notice that is included in or attached to the work
      (an example is provided in the Appendix below).

      "Derivative Works" shall mean any work, whether in Source or Object
      form, that is based on (or derived from) the Work and for which the
      editorial revisions, annotations, elaborations, or other modifications
      represent, as a whole, an original work of authorship. For the purposes
      of this License, Derivative Works shall not include works that remain
      separable from, or merely link (or bind by name) to the interfaces of,
      the Work and Derivative Works thereof.

      "Contribution" shall mean any work of authorship, including
      the original version of the Work and any modifications or additions
      to that Work or Derivative Works thereof, that is intentionally
      submitted to Licensor for inclusion in the Work by the copyright owner
      or by an individual or Legal Entity authorized to submit on behalf of
      the copyright owner. For the purposes of this definition, "submitted"
      means any form of electronic, verbal, or written communication sent
      to the Licensor or its representatives, including but not limited to
      communication on electronic mailing lists, source code control systems,
      and issue tracking systems that are managed by, or on behalf of, the
      Licensor for the purpose of discussing and improving the Work, but
      excluding communication that is conspicuously marked or otherwise
      designated in writing by the copyright owner as "Not a Contribution."

      "Contributor" shall mean Licensor and any individual or Legal Entity
      on behalf of whom a Contribution has been received by Licensor and
      subsequently incorporated within the Work.

   2. Grant of Copyright License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      copyright license to reproduce, prepare Derivative Works of,
      publicly display, publicly perform, sublicense, and distribute the
      Work and such Derivative Works in Source or Object form.

   3. Grant of Patent License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      (except as stated in this section) patent license to make, have made,
      use, offer to sell, sell, import, and otherwise transfer the Work,
      where such license applies only to those patent claims licensable
      by such Contributor that are necessarily infringed by their
      Contribution(s) alone or by combination of their Contribution(s)
      with the Work to which such Contribution(s) was submitted. If You
      institute patent litigation against any entity (including a
      cross-claim or counterclaim in a lawsuit) alleging that the Work
      or a Contribution incorporated within the Work constitutes direct
      or contributory patent infringement, then any patent licenses
      granted to You under this License for that Work shall terminate
      as of the date such litigation is filed.

   4. Redistribution. You may reproduce and distribute copies of the
      Work or Derivative Works thereof in any medium, with or without
      modifications, and in Source or Object form, provided that You
      meet the following conditions:

      (a) You must give any other recipients of the Work or
          Derivative Works a copy of this License; and

      (b) You must cause any modified files to carry prominent notices
          stating that You changed the files; and

      (c) You must retain, in the Source form of any Derivative Works
          that You distribute, all copyright, patent, trademark, and
          attribution notices from the Source form of the Work,
          excluding those notices that do not pertain to any part of
          the Derivative Works; and

      (d) If the Work includes a "NOTICE" text file as part of its
          distribution, then any Derivative Works that You distribute must
          include a readable copy of the attribution notices contained
          within such NOTICE file, excluding those notices that do not
          pertain to any part of the Derivative Works, in at least one
          of the following places: within a NOTICE text file distributed
          as part of the Derivative Works; within the Source form or
          documentation, if provided along with the Derivative Works; or,
          within a display generated by the Derivative Works, if and
          wherever such third-party notices normally appear. The contents
          of the NOTICE file are for informational purposes only and
          do not modify the License. You may add Your own attribution
          notices within Derivative Works that You distribute, alongside
          or as an addendum to the NOTICE text from the Work, provided
          that such additional attribution notices cannot be construed
          as modifying the License.

      You may add Your own copyright statement to Your modifications and
      may provide additional or different license terms and conditions
      for use, reproduction, or distribution of Your modifications, or
      for any such Derivative Works as a whole, provided Your use,
      reproduction, and distribution of the Work otherwise complies with
      the conditions stated in this License.

   5. Submission of Contributions. Unless You explicitly state otherwise,
      any Contribution intentionally submitted for inclusion in the Work
      by You to the Licensor shall be under the terms and conditions of
      this License, without any additional terms or conditions.
      Notwithstanding the above, nothing herein shall supersede or modify
      the terms of any separate license agreement you may have executed
      with Licensor regarding such Contributions.

   6. Trademarks. This License does not grant permission to use the trade
      names, trademarks, service marks, or product names of the Licensor,
      except as required for reasonable and customary use in describing the
      origin of the Work and reproducing the content of the NOTICE file.

   7. Disclaimer of Warranty. Unless required by applicable law or
      agreed to in writing, Licensor provides the Work (and each
      Contributor provides its Contributions) on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
      implied, including, without limitation, any warranties or conditions
      of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
      PARTICULAR PURPOSE. You are solely responsible for determining the
      appropriateness of using or redistributing the Work and assume any
      risks associated with Your exercise of permissions under this License.

   8. Limitation of Liability. In no event and under no legal theory,
      whether in tort (including negligence), contract, or otherwise,
      unless required by applicable law (such as deliberate and grossly
      negligent acts) or agreed to in writing, shall any Contributor be
      liable to You for damages, including any direct, indirect, special,
      incidental, or consequential damages of any character arising as a
      result of this License or out of the use or inability to use the
      Work (including but not limited to damages for loss of goodwill,
      work stoppage, computer failure or malfunction, or any and all
      other commercial damages or losses), even if such Contributor
      has been advised of the possibility of such damages.

   9. Accepting Warranty or Additional Liability. While redistributing
      the Work or Derivative Works thereof, You may choose to offer,
      and charge a fee for, acceptance of support, warranty, indemnity,
      or other liability obligations and/or rights consistent with this
      License. However, in accepting such obligations, You may act only
      on Your own behalf and on Your sole responsibility, not on behalf
      of any other Contributor, and only if You agree to indemnify,
      defend, and hold each Contributor harmless for any liability
      incurred by, or claims asserted against, such Contributor by reason
      of your accepting any such warranty or additional liability.

   END OF TERMS AND CONDITIONS

   APPENDIX: How to apply the Apache License to your work.

      To apply the Apache License to your work, attach the following
      boilerplate notice, with the fields enclosed by brackets "[]"
      replaced with your own identifying information. (Don't include
      the brackets!)  The text should be enclosed in the appropriate
      comment syntax for the file format. We also recommend that a
      file or class name and description of purpose be included on the
      same "printed page" as the copyright notice for easier
      identification within third-party archives.

   Copyright 2019, The Meod Author.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   SIN GARANTÍAS O CONDICIONES DE NINGÚN TIPO, ya sea expresa o implícita.
   Consulte la Licencia para el idioma específico que rige los permisos y
   Limitaciones bajo la Licencia. """
    
    manual="""MANUAL MEOD V.0.8.9
**Aside se obtine con unas clase css en el dos div
@abrir el principal (meod-lateral)->classcss
    |_@hijo para empezar a trabajar en el (main-lateral)->classcss
         |_@la parte principal del aside @meod ya tiene un componente abierto para eso <meod-aside-main (md-content)->"En esta va el contenido html para escribir en el espacio reservado para tu contenido"> y utiliza md-cr-img -> para tu img que quieres poner al lado derecho REQUERIDO que la etiqueta tenga el id="main-aside"
@para crear subdiviones de meod-aside
   |_<div class="divisor-main">
                <img src="/mipmap/add-add.png" alt="">
                    <div class="conten-divisor-main">
                        <div class="content">
                            <h1>aeasdcgjkds</h1>
                        </div>
                    </div>
                    <meod-switch></meod-switch>
            </div>
@atributos
    |_@md-cr-img="(>URL !Texto alternativo  @Título de la imagen)"
    |_@md-id="" ->este atributp esta trabajando bien por el momento en el componente <meod-tab>
 """
    readme=""" Meod esta en desarrolo pero una cosa es clara que lo que tiene que hacer lo pero bien y tabuien tiene soporte para 
navegares viejos en la parte de javascript y tambien css
Te recomendamos que trabajes con typescript,pero tambien puedes trabajar con javascript
y si creas un compononte con typescrip y quieres tranpilarlo a es6 esta bien pero si lo haces a es5
no te funcionara utiliza babel en su lugar
Meod esta contento con scss realemente te recomendamos que utilizes scss para trabajar con estilos ya que hace ekl trabajo sucio de compatibilidad por tiene
ayuda a desarrolo de meod een git hub"""