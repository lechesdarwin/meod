/// <reference path="../values/ux.js" />

function exist_fn(fn:Function):boolean {
  return typeof fn =="function";
}
function exist_obj(vara:object):boolean {
  return typeof vara =="object";
}
/**
 * 
 * @param func Un callback que se esjecuta cada tiempo establecido en el delay
 * @param delay number en milisegundos
 */
function debounce(func:Function, delay:number):Function{ let debounceTimer:any; return function() :void{ let context = this;let args = arguments;clearTimeout(debounceTimer);debounceTimer = setTimeout(() => func.apply(context, args), delay) } }  
/**
 * 
 * @param cname cokie nombre
 * @param cvalue valor de la cookie
 * @param exdays el numero de dias que se dura la cookie
 * @param path la ruta del servido donde se trabajara por defecto en el index
 */
function setCookie(cname:string, cvalue:string|number, exdays?:number,path?:string):void {
    let d:Date=new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires:string = "expires="+d.toUTCString();
    if (path!=undefined) {
        var _path:string=path;
    } else {
        _path="/"
    }
    document.cookie = cname + "=" + cvalue + ";" + expires + `;path=${_path}`;
  }
  /**
   * 
   * @param cname colaca el ombre de la cookie a buscar y te retorna su valor
   */
function getCookie(cname:string):string {
    var name:string= cname + "=";
    var ca:string[]= document.cookie.split(';');
    for(var i:number = 0; i < ca.length; i++) {
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
  function checkCookie(se:string,debug:boolean=true) {
    var user:string = getCookie(se);
    if (user == "") {console.warn("Not Found %c"+se, "color: red; font:bold");} else {if(debug){user = prompt("No se encontro lo que buscaba:");if (user != "" && user != null){setCookie("username", user, 0.5);}}}}
 
class Ux {
    constructor() {
        
    }
static isMobile():boolean{if ("ontouchstart" in window || navigator.msMaxTouchPoints) { return true; } else { return false; }}
/*document.addEventListener('click', debounce(function() { 
        alert("Hello\nNo matter how many times you" + 
        "click the debounce button, I get " + 
        "executed once every 3 seconds!!") }, 3000)); */
/**
 * @descripcion activa la opcion de controlar la camara desde ya con navigator.getMedia(callback,callbcak)
 */
static getMedia(){
  return (<any>navigator).getMedia = ( navigator.getUserMedia || (<any>navigator).webkitGetUserMedia || (<any>navigator).mozGetUserMedia);}
//Unbreve adelanto esta en funcion experimental 
/**
 * 
 * @param id Id del elemento donde desea que trabaje esrta funcion
 * @param callback el callback recibe el codigo en numeros y el codigo del teclado en string
 */
static keyPush(id:string,callback:Function){
    document.getElementById(id).addEventListener("keydown",function(ev){callback(ev.code,ev.keyCode)})}
/**
 * 
 * @param id Id del elemento donde desea que trabaje esrta funcion
 * @param callback callback recibe el codigo del teclado del mause que ha sido pulsado
 */
static clickMouse(id:string,callback:Function):void{
     document.getElementById(id).addEventListener("mousedown", function(e){
       callback(e.which);
     });
  }

/**
 * 
 * @param handler El callback recibe los parametros de la de los datos de la orientacion del dispositivo
 */
static getCoorMb(handler:Function){
try {window.addEventListener('deviceorientation', function(ev){handler(ev);});}catch (error) {
  window.addEventListener('MozOrientation',function(ev){
    handler(ev);});}}

static getIp():void{
  window.RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;   //compatibility for firefox and chrome
    var pc = new RTCPeerConnection({iceServers:[]}), noop = function(){};     
    pc.createDataChannel("");
    pc.createOffer(pc.setLocalDescription.bind(pc), noop);   
    pc.onicecandidate = function(ice){  
        if(!ice || !ice.candidate || !ice.candidate.candidate)  return;
        var myIP = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/.exec(ice.candidate.candidate)[1];
        pc.onicecandidate = noop;
        return myIP};};
  /**
   * 
   * @param handler este es un callback que recibe la ubicaion del usuario
   * @param handlerError directamente recibe el codigo de error{1:Error time out,2:dispositivono pude mostrar
   * ubicacion,1:no se tiene permisos}
   * @param timeout este es el tiempo de espera antes de que ocurra un error de code 3
   */
  static getLocation(handler:Function,handlerError:Function,timeout?:{timeout:number}):void{navigator.geolocation.getCurrentPosition((ub)=>{handler(ub)},(er)=>{handlerError(er.code)},(timeout!=undefined)?timeout:{timeout:0});}
}

    
/**
 * @param metho el metodo pude ser get o post 
 * @param url la url que desea tratar tenga en cuenta el tipò de 
 */
class Http {
  public method:string;public url:string;public asyc:boolean;
    constructor(_method:string,_url:string,_asyc:boolean=true) {
    this.method=_method.toUpperCase();this.url=_url;this.asyc=_asyc;
    }
    public send(callback:Function,query?:string,headers?:object){
        var response;
        try {
        /*// Opera 8.0+, Firefox, Safari,Chrome*/
        response = new XMLHttpRequest();
        }
        catch (e) {
         /*// Internet Explorer Browsers ;C*/
        try {
        response = new ActiveXObject("Msxml2.XMLHTTP");
        }catch (e) {
        try{
        response = new ActiveXObject("Microsoft.XMLHTTP");
        }catch (e){
        // Navegadores super viejos
        alert("Navegador viejisimmo");
        return false;
}}};
        response.onreadystatechange = function() {
            if (response.readyState == 4 && response.status == 200) {
              callback(response.responseText);
            }};
           if(this.method=="GET"){
                response.open(this.method,this.url,this.asyc)
                response.send()}
           else if(this.method=="POST"){
                response.open(this.method,this.url,this.asyc)
                response.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                if (headers!=undefined) {
                  var _keys=Object.keys(headers);
                  for (let i = 0; i < _keys.length; i++) {
                    response.setRequestHeader(_keys[i], headers[_keys[i]]);}} 
                response.send(query)}
    }
    static getHeaders(){
            var req;try {
                req = new XMLHttpRequest();
                }
                catch (e) {
                try {
                req = new ActiveXObject("Msxml2.XMLHTTP");
                }catch (e) {
                try{
                req = new ActiveXObject("Microsoft.XMLHTTP");
                }catch (e){
                alert("Navegador viejisimo");
                return false;}}};
            req.open('GET', document.location.href, false);
            req.send(null);
            var headers = req.getAllResponseHeaders();
            return headers.split("\n")
    }
    /**
 * 
 * @param url 
 * @param callback
 * @see este metodo No esta deltodo dessarrollado 
 * TODO:   Experimental
 */ 
  static see(url:string,callback:Function){
    
    if(typeof(EventSource) !== "undefined") {
    var source = new EventSource(url);
    source.onmessage = function(event) {
    document.getElementById("result").innerHTML += event.data + "<br>";
};} else {}}
}
/**
 * @descripcion este Objeto no esta stable aun no puede ser utilizado con fiabilidad
 */
class Toch {
  public target:string;public onfire:{x?:number,y?:number};
  constructor(_target:string,disparar:{x?:number,y?:number}) {
    this.target=_target;this.onfire=disparar;
  }
  disparar(callback:Function){
    document.getElementById(this.target)
  }
  //museDown Elbotom del raton se matiene presionado
  //mouseUp El boton del raton se solto
  /**
   * @description Esto es experimental y no esta desarollada aun
   * pero aqui se presenta el prototipo
   *  TODO: un problemita es que esta trabajndo al reves
   * enrtre el Saliendo y Entrando
   */
  static simulatorDesktop(){
    document.onmousemove=(e)=>{
    document.onclick=(ev)=>{
    console.log("Saliendo del click al click");
    console.log(ev.clientX);document.onmousedown=(er)=>{
    console.log("Entrando del click");
    console.log(er.clientX)}};
    console.log(e.clientX)}
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
  static vibrar:number[]=Nt.vibration;
  static sound:string=Nt.sound;
  public content:{title:string,body?:string};
  extras: any;
  constructor(require:{title:string,body?:string},extras:any) {
    this.content=require;
    this.extras=extras;
  }
  public joder(onclick:Function,nodisplay:number=3000,onshow?:Function,onclose?:Function,onerr?:Function) {
    if (Notification) {
    if (Notification.permission !== "granted") {
    Notification.requestPermission()
    }
    var noti:Notification;
    
    noti=(typeof this.extras =="object")?new Notification(this.content.title,this.extras):new Notification(this.content.title,{body:this.content.body});
    // Al hacer click
    noti.onclick = onclick();
    // Al cerrar
    noti.onshow=(typeof onshow== "function")?onshow():null;
    noti.onclose =(typeof onclose== "function")?onclose():null;
    noti.onerror=(typeof onerr=="function")?onerr():null;
    setTimeout( function() { noti.close() }, nodisplay)
    }
    }
    static iCan():number{if (Notification.permission=="default") {return -1;} else if(Notification.permission=="denied"){return 0;}else{return 1; }}}