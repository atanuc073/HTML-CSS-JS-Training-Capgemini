import { NokiaN7 } from "./NokiaN7";

function display(){
    let obj:NokiaN7=new NokiaN7()
    obj.price=17000;
    obj.campx="50mp";
    console.log(`price = ${obj.price} and camera pixal =${obj.campx}`);
    obj.doConverse();
    obj.captureVideo();


}
display();