function calcularPrecioTotal(){
    let precioUnitario = recuperarInt("precioUnitario");
    let cantidad = recuperarInt("cantidad");
    let precioTotal = precioUnitario * cantidad;
    document.getElementById("mensaje1").innerHTML = "precioTotal: "+precioTotal;
}

function verificarCedula(){
    let cedula = recuperaraTexto("Cedula");
    if(cedula.length < 10 || cedula.length > 10){
        mostrarTexto("mensaje2","La cedula debe tener 10 digitos");
    }else{
        mostrarTexto("mensaje2","Cedula correcta");
    }
}

function verificarCredencial(){
    let ID = 12345;
    let credencial = recuperarInt("Credencial");
    if(credencial === ID){
        mostrarTexto("mensaje3","Credencial correcta");
    }else{
        mostrarTexto("mensaje3","Credencial incorrecta");
    }
}

function calcularTotalFactura(){
    let IVA = 15;
    let IDCliente = "47934";
    let subTotalFactura = recuperarInt("subTotalFactura");
    let cedula = recuperaraTexto("cedula");
    let IVAFactura;
    let totalFactura;
    if(cedula === IDCliente){
        IVA -=2
        IVAFactura = (subTotalFactura*IVA)/100
        totalFactura = subTotalFactura + IVAFactura
        document.getElementById("mensaje4").innerHTML = "Cliente afiliado, su total es de: "+ totalFactura
    }else{
        IVAFactura = (subTotalFactura*IVA)/100
        totalFactura = subTotalFactura + IVAFactura
        document.getElementById("mensaje4").innerHTML = "Cliente no Afiliado, su total es de: "+totalFactura
    }
}