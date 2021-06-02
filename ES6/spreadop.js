function display(... args){
    console.log("size = "+args.length)
    args.forEach(e=>console.log(e))
}

display(10,20,30,40);
