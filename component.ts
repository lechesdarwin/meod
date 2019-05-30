///<reference path="../" />
class Name extends Component {
    constructor(){
      /*Llamado cuando el elemento es creado o actualizado*/
      super({open:"open",style:"",template:""})
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