
let gomitas= 5;
let chuletas= 6;
let prensas= 9;
let vinchas= 11;

nombre= prompt("como te llamas?")
dinero= prompt ("cuanto dinero tienes?")
if(dinero>=5 && dinero<6){
    alert(nombre +"  "+ "puedes comprar gomitas");
}
else if (dinero>=6 && dinero<9 ){
    alert(nombre +"   "+ "puedes comprar chuletas");
}
else if (dinero>=9 && dinero<11){
    alert(nombre+"   "+ "puedes comprar chuletas");
}
else if (dinero>=11){
    alert(nombre+"   "+"puedes comprar vinchas");
}
else{
    alert(nombre +"  "+"el dinero no te alcanza para realizar ninguna compra");
}

//mayor de edad

edad= prompt ("cual es tu edad?")

function mayorDeEdad (edad, mayor){
    for(let i = 1; i<= edad; i++){
        if(mayorDeEdad === "mayor" && i >=18 ){
            console.log ("eres mayor de edad");
        }
        else{
            console.log ("eres menor de edad");
        }
        break
    }
}


//ARRAYS 

let productos = [
    {
        id:1,
        producto: "shampoo",
        precio: 300,
    },
    {
        id:2,
        producto: "acondicionador",
        precio: 350,
    },
    {
        id:3,
        producto: "nutrición",
        precio: 500,
    },
    {
        id:4,
        producto: "serum",
        precio: 550,
    }
]

const elegido = productos.find(producto => producto.id ===2)
console.log(elegido);

const listaDeProductos = productos.map(producto => producto.producto)
console.log (listaDeProductos);