var arr=[10,100,17,20,5,43];
function display(arr){
    console.log("Ascending Order ");
    arr.sort().forEach(element =>console.log(element));

    console.log("Decending Order ");
    arr.sort((a,b)=>b-a).forEach(e=>console.log(e));
}
display();