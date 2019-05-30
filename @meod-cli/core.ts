///<reference path="../values/icons.js" />

function css(id:string,arg:any):void{
  var doc=document.getElementById(id);
  var arr=Object.keys(arg)
  for(var i=0;i<arr.length;i++){
      doc.style[arr[i]]=arg[arr[i]];
  }
}
class Tools {
  constructor() {
    
  }
  static put(mesanje:string):void{
    console.log(mesanje);
   }
  static start(name:string):void {
     console.time(name);
   }
  static end(name:string):void {
     console.timeEnd(name);
   }
  static getParameterByName(name:string):string {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex:RegExp=new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results:RegExpExecArray = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
  static $$(target:string):Element | NodeListOf<Element>{
     if (target.indexOf("&")==0) {
       return document.querySelector(target.replace("&",""));
     }
     else if(target.indexOf("@")==0){
       return document.querySelectorAll(target.replace("@",""))
     }
     else{
       return document.getElementById(target);
     }


   }
   
static decorate(...args:any){
     return (target:Function) => {
       Object.assign(target.prototype, ...args)
     }
   }
   /**
    * @description Referencia de decorador de metodos
    */
  
   public static pushUrlFile(input:any,output:string):void {
    let preview:any=document.querySelector(output);
    let file:any= (<any>document).querySelector(input).files[0];
    let reader:FileReader = new FileReader();
    reader.onloadend= function () {
      preview.src = reader.result;
    }
    if (file) {
      reader.readAsDataURL(file);
    } else {
      
      preview.src = "";
    }
  }

public static date() {
return {
  date:new Date(),
  datecrudo:new Date().getTime(),
  ano:new Date().getFullYear(),
  mes:new Date().getMonth(),
  dia:new Date().getDate(),
  hora:new Date().getHours(),
  minutos:new Date().getMinutes(),
  segunndos:new Date().getSeconds(),
  milisegundos:new Date().getMilliseconds()
  }
}
public static sleep(milliseconds:number,MAX:number=1e7) {
  var start = new Date().getTime();
  for (var i = 0; i < MAX; i++) {
   if ((new Date().getTime() - start) > milliseconds) {
    break;}}}

public static textSelected():string{
  return window.getSelection().toString();
} 
static markInterpreter(cant:number):string{
  var res:string;
  switch (cant) {
    case 1:
    res="h1"
      break;
      case 2:
    res= "h2";
      break;
      case 3:
      res= "h3";
      break;
      case 4:
      res= "h4";
      break;
      case 5:
      res= "h5";
      break;
      case 6:
      res= "h6";
      break;
    default:
      break;
  }
  return res;
}

static iconUse(cas:string):any{
  var i_can:string;
  switch (cas) {
    case "hamburger":
      i_can=ToolbarIcons.menuHamburger;
      break;
  case "ball":
    i_can=ToolbarIcons.menuBalls;
  break;
    default:
    i_can=ToolbarIcons.back;
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
 class Meod extends HTMLElement{
     public applyStyle:boolean;
     public styles:string;
 constructor(apply_style:boolean,style_CSS?:string) {
         super();
         this.applyStyle=apply_style;
         if(style_CSS!=undefined){
           this.styles=style_CSS;
         }
     }
 public render(code:string,callback:Function):void {
     if (this.applyStyle==true) {
       let template:ShadowRoot=this.attachShadow({mode:'open'});
       template.innerHTML=`${this.template(code)}`;
       callback(template)
     }
     else{
       this.innerHTML=`${this.template(code)}`
       callback(this);
     }    
   }
 
 public template(templat:string):string{
     if (this.applyStyle==true) {
       return `<style>
         ${this.styles}
       </style>
       ${templat}
       ` 
 
     } else if(this.applyStyle==false){
       return templat 
     }
   }
 
 
 }
 
 function web_component(nameComponent:string,classComponent:Function):void {
   return window.customElements.define(nameComponent,classComponent)
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
  public init:{open?:ShadowRootMode,style?:string,template?:string};
  public nombre:string;
  constructor(_init:{open?:ShadowRootMode,style?:string,template?:string}) {
    super();
    this.init=_init;
  }
public render(callback:Function):void {
   if (this.init.style!= null) {
     let template:ShadowRoot=this.attachShadow({mode:this.init.open});
     template.innerHTML=`<style>${this.init.style}</style>${this.init.template}`;
     callback(template)
   }
   else{
     this.innerHTML=`${this.init.template}`
     callback(this);
   }    
 }}
