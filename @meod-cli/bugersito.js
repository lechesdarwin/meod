/**
 * @description Bugersito esta en fase de desarrolo y mas adelante
 * madurara y tendra superpoderes java.
 */
class Debug {
    static err(msg) { return console.log("%c" + msg, "color: red; font-size:15px"); }
    ;
    static group() { return console.group(); }
    static groupFin() { return console.groupEnd(); }
    static mal(msg) { console.warn("%c" + msg, "color: red; font-size:15px"); }
    static inf(arg) { return console.info(arg); }
    static ok(msg) { return console.log("%c" + msg, "color: green; font-size:13px"); }
    static put(mensanje) { console.log("%c" + mensanje, "color: blue; font-size:13px"); }
    static start(name) { return console.time(name); }
    static end(name) { console.timeEnd(name); }
}
