/// <reference path="../core.ts"/>

class ButtonFloat extends Component{
    constructor() {
        super({style:null,template:`<div class="button-float">
        <img id="img-float">
    </div>`})
    }
    connectedCallback(){
        this.render((float_button)=>{
            (<any>window).floatButton=float_button;
            document.getElementById("img-float").setAttribute("src",Support.add(Md.img(floatButton.getAttribute("md-cr-img"))[0]))
        })
    }
}
web_component("meod-button-float",ButtonFloat)