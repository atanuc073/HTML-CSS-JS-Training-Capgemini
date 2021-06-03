import { Emp } from "./Emp";

export class Onroll extends Emp{
    private da:number;
    private pf:number;
    constructor(eid:number,ename:string,salary:number){
        super(eid,ename,salary);
        this.da=this.getSalary()*0.4;
        this.pf=this.getSalary()*0.12;

    }
    calcSal(): number {
        return this.getSalary()+this.pf+this.da;
    }
    display(): void {
        console.log(`EID: ${this.getEid()} ,
        EName : ${this.getName()} ,
        Salary : ${this.getSalary()} ,
        DA : ${this.da} ,
        PF : ${this.pf},
        Days : na ,
        NetSalary : ${this.calcSal()}`);
        console.log("--------------------------------------------------------")
    }
    
}