import { Circle } from "./Circle";

function circleClient():void{
    let cir=new Circle(12);
    console.log(`This Area of the circle with radius ${cir.radius} is ${cir.calcArea().toFixed(2)}`);
    console.log(`This Perimeter of the circle with radius ${cir.radius} is ${cir.clacPerimeter().toFixed(2)}`);

}
circleClient();