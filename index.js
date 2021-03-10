const calc = require("./modulo-calculadora/calculadora");

console.log("a) 1 + 1 = ",calc.somar(1,1));

console.log("b) -123 + 123123 = ",calc.somar(-123,123123));
console.log("c) 8 * 0 = ",calc.multiplicar(8,0));
console.log("d) 1239123 * 12313 = ",calc.multiplicar(1239123,12313));
console.log("e) 123 / -12 = ",calc.dividir(123,-12));
console.log("f) 313123 / 0 = ",calc.dividir(313123,0));
try{
    const operacaoNaoNum = calc.somar(1,'B');
} catch(e){
    console.log(`Utilização incorreta: ${e}`);
}


