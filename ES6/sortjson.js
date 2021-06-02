var empjsonarr=[{"eid":1008,"name":"atanu","salary":500000,},
            {"eid":1007,"name":"john","salary":300000,},
            {"eid":1001,"name":"neon","salary":600000,},
            {"eid":1005,"name":"flen","salary":800000,}]

function display(){
    console.log("sort by id ")
    empjsonarr.sort((a,b)=>a.eid-b.eid).forEach(e=>console.log(e));
    console.log("sort by Name ")
    empjsonarr.sort((a,b)=>a.name.localeCompare(b.name)).forEach(e=>console.log(e));

    console.log("sort by salary ")
    empjsonarr.sort((a,b)=>a.salary-b.salary).forEach(e=>console.log(e));

}
display();