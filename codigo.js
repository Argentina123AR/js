
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
