import { Flight } from "./Flight";
import { Flyable } from "./Flyable";

function display(){
    let obj:Flyable=new Flight();
    obj.fly();
}
display();