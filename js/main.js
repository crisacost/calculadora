const nombreProductoFunc = () => {
    const respuesta = prompt("Ingresa el nombre del producto para el cual quieres conocer el costo final y/o definir su precio")
    // alert('El nombre de tu producto es: ' + respuesta)
    return respuesta
}

nombreProducto = nombreProductoFunc()



const cargaDatosInsumos = (nombre) => {
    let respuesta 
    let costoAcumulado = 0
    do{
        const nombreInsumo = prompt("Ingresa el nombre de un insumo necesario para producir un(a) " + nombre)
        const cantidad = prompt("Cual es la cantidad (sin importar la unidad de medida) por la que compras " + nombreInsumo + "?")
        const precio = prompt("A que precio compras esta cantidad?")
        const cantidadUnidad = prompt("Cual es la cantidad de " + nombreInsumo + " que lleva una unidad de " + nombre + "? (en la misma unidad de medida que antes)")
        costo = (cantidadUnidad * precio) / cantidad
        costoAcumulado += costo
        respuesta = prompt("Deseas agregar otro insumo?")
        
    }while(respuesta=='si')


    alert('El costo total para producir una unidad de ' + nombreProducto + ' es: ' + costoAcumulado)
}


cargaDatosInsumos(nombreProducto)