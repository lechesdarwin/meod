/// <reference path="../support.ts"/>
/// <reference path="../core.ts"/>
/// <reference path="../../manifest.js"/>
/// <reference path="../../values/color.js"/>
/// <reference path="../../values/dimens.js"/>
/// <reference path="../../values/icons.js"/>
/// <reference path="../../values/support-css.js" />
/// <reference path="../md-interpreter.ts" />

class Toolbar extends Meod {
    public supportStyleMobile:string;
    constructor(__supportStyleMobile?:string) {
        super(true, `
               .toolbar{
                position: fixed;
                top: 0;
                width: 100%;
                height: ${ToolbarDimens.altura};
                background: ${colorSettings.colorPrimary};
                box-sizing: border-box;
            }
            .toolbar #img-menu {
                position: absolute;
                right: 0;
                top: 15%;
            }
            .container-toolbar{
                height: 100%;
                width: 90%;
            }
            .container-toolbar div{
            float: left;
            height: 100%;
        }
        .action-icon{
            height: 100%;
            width: ${ToolbarDimens.primaryAction};
            margin:auto;
            }
            .action-icon img{
                display:block;
                margin:1.6em 15%;
                }
            .logo{
                width: 65%;
                margin-left:15px;
            }
            .logo img{
            height: 100%;
                width: 45%;
            }
            .logo h1{margin-top:13px}
            .logo h2{margin-top:13px}
            .logo h3{margin-top:13px}
            .logo h4{margin-top:13px}
            .logo h5{margin-top:13px}
            .logo h6{margin-top:13px}
            p,h1,h2,h3,h4,h5,h6,span{
                margin-block-start: 0;
                margin-block-end: 0;
                margin-inline-start: 0;
                margin-inline-end: 0;font-family:karla;
                color:${colorSettings.colorText}
            }
            ${Fonts.title.css}
            p,h1,h2,h3,h4,h5,h6,span{font-family:${Fonts.title.name}}
         ${Support.add(ToolbarSupport.onDeskot.imgLogo)}   
        ${Support.add(__supportStyleMobile)}
        `);
    this.supportStyleMobile=__supportStyleMobile;
    }
    connectedCallback() {
        this.render(`<div class="toolbar" id="toolbar">
            <div class="container-toolbar" id="container-toolbar">
                <div class="action-icon" id="toolbar-back" >
                </div>
                <div class="logo" id="toolbar-logo">
                </div>
            </div>
        </div>
        `, function(o:object){
            (<any>window).toolbar=o;
         var doc_toolbar=document.getElementsByTagName("meod-toolbar")[0];
             if(doc_toolbar.hasAttribute("md-title")==true){
            var para = document.createElement(Tools.markInterpreter(doc_toolbar.getAttribute("md-title").split("#").length-1));
            var node = document.createTextNode(doc_toolbar.getAttribute("md-title").replace(/#/g,""));
            para.appendChild(node);
            (<any>toolbar).childNodes[2].childNodes[0].children[0].children[1].append(para);
             }
             
             if(doc_toolbar.hasAttribute("md-subtitle")==true){
                var par = document.createElement("p");
                var nod = document.createTextNode(doc_toolbar.getAttribute("md-subtitle"));
                par.appendChild(nod);
                (<any>toolbar).childNodes[2].childNodes[0].children[0].children[1].append(par)
             }

             if(doc_toolbar.hasAttribute("md-action")==true){
                 var img = document.createElement("img");
                if(doc_toolbar.getAttribute("md-action-use").includes("@")==true) {
                    img.src=doc_toolbar.getAttribute("md-action-use").replace(/@/g,"");
                } else {
                    img.src=Tools.iconUse(doc_toolbar.getAttribute("md-action-use"))
                }
                (<any>toolbar).getElementById("toolbar-back").append(img)
             }
             if(doc_toolbar.hasAttribute("md-action-sd")==true){
                var img2 = document.createElement("img");
               if(doc_toolbar.getAttribute("md-action-use-sd").includes("@")==true) {
                   img2.src=doc_toolbar.getAttribute("md-action-use").replace(/@/g,"");
               } else {
                   img2.src=ToolbarIcons.menuBalls;
               }
               img2.id="img-menu";
               (<any>toolbar).getElementById("container-toolbar").append(img2)
            }
            if(doc_toolbar.hasAttribute("md-logo")==true && (doc_toolbar.hasAttribute("md-title")==false && doc_toolbar.hasAttribute("md-subtitle")==false)==true){
                Tools.put("Workin insert logo");
                var logo = document.createElement("img");
                logo.src=Support.add(Md.img(doc_toolbar.getAttribute("md-logo"))[0]);
                logo.alt=Support.add(Md.img(doc_toolbar.getAttribute("md-logo"))[1]);
                logo.title=Support.add(Md.img(doc_toolbar.getAttribute("md-logo"))[2]);
                logo.id="toolbar-logo-img";
                logo.onclick=()=>{document.location.href="/"};
                
                (<any>toolbar).getElementById("toolbar-logo").append(logo);
            }
        });
        
    }
}
web_component("meod-toolbar", Toolbar);