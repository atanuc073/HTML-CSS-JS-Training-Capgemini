import { Contract } from "./Contract";
import { Emp } from "./Emp";
import { Onroll } from "./Onroll";

function empClient(){
    let arr:Emp[]=new Array(2);
    arr[0]=new Onroll(1001,"atanu",500000);
    arr[1]=new Contract(1002,"sayan",2000,15);
    display(arr);

}

function display(emps:Emp[]) {
    emps.forEach(e=>e.display());
    
}
empClient();