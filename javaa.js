let number = prompt("3 iki reqemli eded daxil edin")
let x = +number.split(",")[0]
let y = +number.split(",")[1]
let z = +number.split(",")[2]

let xx = number.split(",")[0].length
let yy = number.split(",")[1].length
let zz = number.split(",")[2].length



if (xx==2 && yy==2 && zz==2){
    if (x != y && y != z && x != z && y != x) {
        if ((x > y && x < z) || (x < y && x > z)) {
            console.log("orta eded x dir");
            
        }
        else if ((z > y && y > x) || (x > y && y > z)){
    
            console.log("orte eded y dir");
        }
        else if ((z > x && y > z) || (z > y && x > z)){
    
            console.log("orte eded z dir");
        }
    }
    else {
        alert("reqemler eynidir")
    }
}
else{
    alert("error")
}


