


while(true){
  var precioCosto = parseFloat(prompt("Ingrese el precio de costo del producto"));

  if(!isNaN(precioCosto) && precioCosto != null && precioCosto != ""){
    //alert(es numero)
    break;
  } else{ 
    alert("no es un numero");
    continue;
  }
}
precioCostoM = precioCosto.toFixed(2);
alert("el precio de costo del prodcuto a calcular es: "+ precioCostoM);
console.log("el precio de costo del producto a calcular es: "+ precioCostoM);


function CalcularIva(preciocosto) {
  return (precioCosto * 0.21)
  
}

var iva = CalcularIva(precioCosto);
ivaM= iva.toFixed(2)

alert("el iva del producto ingresado es " + ivaM);
console.log("el iva del producto ingresado es " + ivaM)

function SumarIva(precioCosto){ 
  return (precioCosto + (precioCosto * 0.21));
}
