export class Calculator{
/*    declare a variable in TypeScript
    variable:type
    number
    boolean
    string
object Type
    array
    <classtype>
other types
    array -->[]
    <classtype>
    {}*/

    amt:number;
    years:number;
    rate:number;
    // default all are public specifier
    calcSimple():number{
        return (this.amt*this.rate*this.years/100);
    }
    calcCompound():number{
        return this.amt* Math.pow((1+this.rate/100.0),this.years)-this.amt;
    }

}