export class Circle{
    public radius:number;
    constructor(radius:number){
        this.radius=radius;
    }

    calcArea():number{
        return Math.PI*Math.pow(this.radius,2);
    }
    clacPerimeter():number{
        return 2*Math.PI*this.radius;
    }
}