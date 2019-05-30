///<reference path="ux.ts" />
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
