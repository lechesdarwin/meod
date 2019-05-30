class EditText extends Component {
    constructor() {
        super({style:null,template:`
        <div class="card-meod-editex">
            <div class="android">
                <input class="input-hint">
                <label class="label"></label>
            </div>
        </div>
        `});
    }
    connectedCallback(){
        this.render((comp)=>{
            comp.childNodes[1].childNodes[1].childNodes[1].setAttribute("type",comp.getAttribute("md-type")) 
            comp.childNodes[1].childNodes[1].childNodes[1].setAttribute("placeholder",comp.getAttribute("md-placeholder")) 
            comp.childNodes[1].childNodes[1].childNodes[1].setAttribute("name",comp.getAttribute("md-name")) 
            comp.childNodes[1].childNodes[1].childNodes[3].innerText=comp.getAttribute("md-label")
        });
    }
}
web_component("meod-edit-text",EditText)