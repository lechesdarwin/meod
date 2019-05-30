/// <reference path="../../@meod-cli/support.ts"/>
/// <reference path="../../@meod-cli/core.ts"/>
/// <reference path="../../manifest.js"/>
/// <reference path="../../values/color.js"/>
/// <reference path="../../values/dimens.js"/>
/// <reference path="../../values/icons.js"/>
/// <reference path="../../values/support-css.js" />
/// <reference path="../../@meod-cli/md-interpreter.ts" />
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
/*
class Tabs extends Meod {
    constructor() {
        super(false)
    }
connectedCallback(){
this.render("",(o)=>{(<any>window).tabs=o})
}
}
web_component("meod-tabs",Tabs);*/
web_component("meod-tab", Tab);
web_component("meod-aside-main", AsideMain);
web_component("meod-switch-rd", Switch);
web_component("meod-switch-li", SwitchRectangular);
