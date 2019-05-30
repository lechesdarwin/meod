///<reference path="../values/icons.js" />
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
