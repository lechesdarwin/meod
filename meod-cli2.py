#!/usr/bin/env python
# -*- coding: utf-8 -*-
import re
import sys
import os
import webbrowser
import lib 
import base64
import json
import argparse
import time
from bs4 import BeautifulSoup

def ts_open(name,prefix):
    _name=str(name).upper().capitalize()
    _prefix=prefix
    _comp=str(name).lower()
    return """///<reference path="../" /> 
    class""" " "+_name+" """"extends Component {
    constructor(){
      /*Llamado cuando el elemento es creado o actualizado*/
      super({open:"open",style:null,template:"<p> coloca tus tags html aqui</p>"})
    }
connectedCallback(){
  /*Llamado cuando el elemento se es insertado en el documento, incluyéndose en un árbol shadow*/
}
disconnectedCallback(){
  /*Llamado cuando el elemento es eliminado de un documento*/

}
adoptedCallback(antiguoDocumento, nuevoDocumento){
  /*Llamado cuando un elemento es adoptado en otro nuevo documento*/
}
/*Observar los cambios en el atributo 'name'.
*puedes tener una lista de atributos y manejarlo en el metodo 
*attributeChangueCallback
*/
static get observedAttributes() {return ['name']; }
/*Responder a los cambios en el atributo.*/
attributeChangedCallback(attr, oldValue, newValue) {
  /*Llamado cuando un atributo es cambiado, concatenado, eliminado o reemplazado en el elemento. Sólo llamado sobre atributos observados.*/
    if (attr == 'name') {
      /*Aqui realiza los cambios en tus compionentes = `Hello, ${newValue}`;*/
    }
}
}
web_component("""+"'{1}-{2}',{0}".format(_name,_prefix,_comp)+" );"


def ts_closed(name,prefix):
    _name=str(name).upper().capitalize()
    _prefix=prefix
    _comp=str(name).lower()
    return """///<reference path="../" /> 
    class""" " "+_name+" """"extends Component {
    constructor(){
      /*Llamado cuando el elemento es creado o actualizado*/
      super({open:"open",style:ReadCss,template:"<p> coloca tus tags html aqui</p>"})
    }
connectedCallback(){
  /*Llamado cuando el elemento se es insertado en el documento, incluyéndose en un árbol shadow*/
}
disconnectedCallback(){
  /*Llamado cuando el elemento es eliminado de un documento*/

}
adoptedCallback(antiguoDocumento, nuevoDocumento){
  /*Llamado cuando un elemento es adoptado en otro nuevo documento*/
}
/*Observar los cambios en el atributo 'name'.
*puedes tener una lista de atributos y manejarlo en el metodo 
*attributeChangueCallback
*/
static get observedAttributes() {return ['name']; }
/*Responder a los cambios en el atributo.*/
attributeChangedCallback(attr, oldValue, newValue) {
  /*Llamado cuando un atributo es cambiado, concatenado, eliminado o reemplazado en el elemento. Sólo llamado sobre atributos observados.*/
    if (attr == 'name') {
      /*Aqui realiza los cambios en tus compionentes = `Hello, ${newValue}`;*/
    }
}
}
web_component("""+"'{1}-{2}',{0}".format(_name,_prefix,_comp)+" );"

#iciar una aplicaion web -> meod-cli.pyc init nameproyect
#export PATH="$PATH:`pwd`/flutter/bin"
#os.system("comando liux")
def img64(name:str,img_str_64:str):
    imgdata = base64.b64decode(img_str_64)
    with open(name, 'wb') as f:
        f.write(imgdata)

path:str=os.getcwd()
"sdf".upper().capitalize()

if sys.argv[1]=="init" and sys.argv[2]:
    if sys.argv[3]:
        prefix:str=sys.argv[3]
    else:
        prefix="app"
    name_proyect:str=sys.argv[2]
    os.mkdir("{0}/{1}".format(path,name_proyect))
    
    with open("{0}/{1}/meod-core.js".format(path,name_proyect),"w") as f:
        f.write(lib.Core.core)
    with open("{0}/{1}/meod-support-core.js".format(path,name_proyect),"w") as f:
        f.write(lib.Core.coreSupport)

    os.mkdir("{0}/{1}/css".format(path,name_proyect))
    
    with open("{0}/{1}/css/main.scss".format(path,name_proyect),"w") as f:
        f.write(lib.Css.main)
    
    os.mkdir("{0}/{1}/css/components".format(path,name_proyect))
    arch:dict={"_aside.scss":lib.Css.compAside,"_button-float.scss":lib.Css.compButton,"_input.scss":lib.Css.compInput,"_switch.scss":lib.Css.compSwitch}
    for k,v in arch.items():
        with open("{0}/{1}/css/components/{2}".format(path,name_proyect,k),"w") as f:
            f.write(arch[k])

    with open("{0}/{1}/css/_material.scss".format(path,name_proyect),"w") as f:
        f.write(lib.Css.material)

    os.mkdir("{0}/{1}/fonts".format(path,name_proyect))

    os.mkdir("{0}/{1}/layout".format(path,name_proyect))
    os.mkdir("{0}/{1}/mipmap".format(path,name_proyect))
    
    img:dict={"back.png":lib.Img.back,"menuSd.png":lib.Img.menuSd,"menu.png":lib.Img.menuBar,"plus.png":lib.Img.mas}
    for k,v in img.items():
        img64(f'{path}/{name_proyect}/mipmap/{k}',img[k])

    img64("{0}/{1}/mipmap/loader.gif".format(path,name_proyect),lib.Img.loader)
    
    os.mkdir("{0}/{1}/test".format(path,name_proyect))
    
    os.mkdir("{0}/{1}/values".format(path,name_proyect))
    values:dict={"color.js":lib.Values.color,"dimens.js":lib.Values.dimens,"fonts.js":lib.Values.fonts,"icons.js":lib.Values.icons,"strings.js":"","support.js":lib.Values.toolbarSupport,"ux.js":lib.Values.ux}
    for k,v in values.items():
        with open("{0}/{1}/values/{2}".format(path,name_proyect,k),"w") as f:
            f.write(values[k])
    
    with open("{0}/{1}/com-v0.5.2.js".format(path,name_proyect),"w") as f:
            f.write(lib.Fuera.compresor)
    
    with open("{0}/{1}/manifest.js".format(path,name_proyect),"w") as f:
            f.write(lib.Fuera.manifest)
    
    with open("{0}/{1}/LICENCE".format(path,name_proyect),"w") as f:
            f.write(lib.Fuera.licencia)

    with open("{0}/{1}/readme.md".format(path,name_proyect),"w") as f:
            f.write(lib.Fuera.readme)
    with open("{0}/{1}/manual.txt".format(path,name_proyect),"w") as f:
            f.write(lib.Fuera.manual)
    
    meod_json:str=json.dumps({"path":path,"name_proyect":name_proyect,"prefix":prefix})
    with open("{0}/{1}/manifest.js".format(path,name_proyect),"w") as f:
            f.write(lib.Fuera.manifest)

    with open("{0}/{1}/meod-cli.json".format(path,name_proyect),"w") as f:
            f.write(meod_json)
else:
    parser = argparse.ArgumentParser()
    parser.add_argument("-new", "--new", help="Nombre del nuevo componente")
    parser.add_argument("-m","--mode",help="open | closed -> para crear un nodo del dom encapsulado o abierto ")
    parser.add_argument("-p","--prefix", help="El prefijo de tus componetes , te recomendamos un nombre corto")
    parser.add_argument("-c","--compresion", help="Comprime el componente")
    parser.add_argument("-vjs","--versionjs", help="Cual sera la versiono de js")
    args = parser.parse_args()
    f=open(f"{os.getcwd()}/meod-cli.json","r")
    meod_py =f.read()
    f.close()
    meod_py=json.loads(meod_py)
#import time
#time.strftime("%H:%M:%S") #Formato de 24 horas
#20:08:40
#import time
#time.strftime("%I:%M:%S") #Formato de 12 horas
#08:08:40
#Imprimir la fecha actual:
#Formato: dd/mm/yyyy
#import time
#print (time.strftime("%d/%m/%y"))
#22/05/14
    if args.new:
        os.mkdir(f"{meod_py['path']}/{meod_py['name_proyect']}/layout/{args.new}")
        with open(f"{meod_py['path']}/{meod_py['name_proyect']}/layout/{args.new}/{meod_py['prefix']}.{args.new}.html","w") as f:
             f.write(f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{args.new}</title>
</head>
<body>
<h1>Estas a punto de crear yu primer componente</h1>
</body>
</html> """)
        if args.mode=="open":
            with open(f"{meod_py['path']}/{meod_py['name_proyect']}/css/components/{meod_py['prefix']}.{args.new}.scss","w") as f:
                f.write(f"/*Hoja de estilos del componente: {args.new} fecha:{time.strftime('%d/%m/%y')} , hora: {time.strftime('%H:%M:%S')}*/")
            component:str=str(args.new).lower().capitalize()
            with open(f"{meod_py['path']}/{meod_py['name_proyect']}/layout/{args.new}/{meod_py['prefix']}.{args.new}.ts","w") as f:
                    f.write(ts_open(component,meod_py["prefix"]))
        else:
            with open(f"{meod_py['path']}/{meod_py['name_proyect']}/layout/{args.new}/{meod_py['prefix']}.{args.new}.scss","w") as f:
                f.write(f"/*Hoja de estilos del componente: {args.new} fecha:{time.strftime('%d/%m/%y')} , hora: {time.strftime('%H:%M:%S')}*/")
            component:str=str(args.new).lower().capitalize()
            with open(f"{meod_py['path']}/{meod_py['name_proyect']}/layout/{args.new}/{meod_py['prefix']}.{args.new}.ts","w") as f:
                f.write(ts_closed(component,meod_py["prefix"]))
    if args.compresion:
      with open(f"{meod_py['path']}/{meod_py['name_proyect']}/layout/{args.compresion}/{meod_py['prefix']}.{args.compresion}.scss","r") as f:
          hoja=f.read()

      with open(f"{meod_py['path']}/{meod_py['name_proyect']}/layout/{args.compresion}/{meod_py['prefix']}.{args.compresion}.ts","r") as f:
          ho=f.read()
      print(hoja)
      res=ho.replace("ReadCss","`{0}`".format(hoja))
      with open(f"{meod_py['path']}/{meod_py['name_proyect']}/layout/{args.compresion}/{meod_py['prefix']}.{args.compresion}.ts","w+") as f:
          f.write(str(res))
      ver=args.versionjs if args.versionjs else 'es6'
      os.system(f"tsc {meod_py['path']}/{meod_py['name_proyect']}/layout/{args.compresion}/{meod_py['prefix']}.{args.compresion}.ts -t {ver}")