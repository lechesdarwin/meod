/// <reference path="../values/icons.js" />
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
