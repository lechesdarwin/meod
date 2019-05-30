/**
 * @description Bugersito esta en fase de desarrolo y mas adelante
 * madurara y tendra superpoderes java.
 */
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
        return headers.split("\n");
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
                toolbar.childNodes[2].childNodes[1].children[1].append(para);
            }
            if (doc_toolbar.hasAttribute("md-subtitle") == true) {
                var par = document.createElement("p");
                var nod = document.createTextNode(doc_toolbar.getAttribute("md-subtitle"));
                par.appendChild(nod);
                toolbar.childNodes[2].childNodes[1].children[1].append(par);
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
