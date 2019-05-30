/**
 * @description Bugersito esta en fase de desarrolo y mas adelante 
 * madurara y tendra superpoderes java.
 */
class Debug {
    static err(msg:string |any):void{return console.log("%c"+msg,"color: red; font-size:15px")};
    static group():void{return console.group()}
    static groupFin():void{return console.groupEnd();}
    static mal(msg:string):void{console.warn("%c"+msg,"color: red; font-size:15px");}
    static inf(arg:any):void{return console.info(arg);}
    static ok(msg:string):void{return console.log("%c"+ msg,"color: green; font-size:13px")}
    static put(mensanje:string):void{console.log("%c"+ mensanje,"color: blue; font-size:13px");}
    static start(name:string):void{return console.time(name);}
    static end(name:string):void{console.timeEnd(name);}}