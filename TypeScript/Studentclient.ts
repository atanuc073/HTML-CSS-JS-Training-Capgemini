import { Student } from "./Student";

function studentclient(){
    let arr:Student[]=new Array(4);
    arr[0]=new Student(1001,"sam",96);
    arr[1]=new Student(1002,"anand",60);
    arr[2]=new Student(1003,"riju",56);
    arr[3]=new Student(1004,"mohit",88);
    arr.sort((a,b)=>a.marks-b.marks).forEach(e=>e.display());
    // let obj:Student=new Student(1001,"atanu",98);
    // obj.display()
}
studentclient();