var arr=["amit","shubhajit","ranjan","tanmay","rohit","samima","wriju","titas","arghya"];
function display(){
    console.log("ascending order");
    arr.sort().forEach(e=>console.log(e));
    console.log("decending Order");
    arr.sort((a,b)=>b.localeCompare(a)).forEach(e=>console.log(e));
}
display();