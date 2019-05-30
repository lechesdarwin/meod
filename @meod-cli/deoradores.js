/**
 * @description decorador directo
 * @param target El metodo adecorar
 * @param key el valor del metodo que esta decorando
 * @param value value el objeto que devuelte la propiedades del metodo
 */
function log(target, key, value) {
    // target === C.prototype
    // key === "foo"
    // value === Object.getOwnPropertyDescriptor(C.prototype, "foo")
    return {
        value: function (...args) {
            //Los arg son los argumentos que recibe en el metodo decorado
            // convert list of foo arguments to string
            var a = args.map(a => JSON.stringify(a)).join();
            // invoke foo() and get its return value
            var result = value.value.apply(this, args);
            //result toma el valor que retorna el metodo 
            // convert result to string
            var r = JSON.stringify(result);
            // display in console the function call details
            console.log(`Call: ${key}(${a}) => ${r}`);
            // return the result of invoking foo
            return result;
        }
    };
}
function logParameter(target, key, index) {
    var metadataKey = `log_${key}_parameters`;
    //target el objeto que se esta trabjando
    //key el metodo donde se esta trabajando
    //el indice donde fue colocado el metodo
    if (Array.isArray(target[metadataKey])) {
        target[metadataKey].push(index);
    }
    else {
        target[metadataKey] = [index];
    }
}
//recibe una serie de objetos y lo aplica como si fuyeran nativos  
function decorate(...args) {
    return (target) => {
        Object.assign(target.prototype, ...args);
    };
}
function g() {
    //code
    console.log("g(): evaluated");
    return function (target, propertyKey, descriptor) {
        target.prototype.Valordenuevapropidad;
    };
}
