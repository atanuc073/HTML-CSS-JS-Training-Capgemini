export class Student{
    // private stuid:number;
    // private stuName:string;
    // private marks:number;

    // in typescript only one constructor is allowed
    //No overloaded constructor in TypeScript
    constructor(public stuid:number,public stuname:string,public marks:number){
        // this.stuid=stuid;
        // this.stuname=stuname;
        // this.marks=marks;
    }
    display():void{
        console.log(`Student Id = ${this.stuid}`);
        console.log(`Student Id = ${this.stuname}`);
        console.log(`Student Id = ${this.marks}`);
        console.log(`================================`);
    }
}