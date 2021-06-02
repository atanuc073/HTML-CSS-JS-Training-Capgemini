import { Calculator } from "./Calculator";

function display(){
    let obj:Calculator=new Calculator();
    obj.amt=500;
    obj.years=2;
    obj.rate=2.5;
    console.log(`simple interest = ${obj.calcSimple()}`);
    console.log(`Compound Interest = ${obj.calcCompound()}`);
}
//tsc--:>TypeScript compiler

display();