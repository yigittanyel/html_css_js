const person={
    name:"Yigit",
    age:21,
    job:"Student",
    name_age:function(){
        return this.name +" "+ this.age;
    },
    cars:{
        car1:"BMW",
        car2:"Volvo"
    }
}

document.getElementById("p1").innerHTML=person.name_age();
document.getElementById("p2").innerHTML=person.cars.car2;

let txt="";
for(let x in person){
    txt+=person[x]+" ";
}
document.getElementById("p3").innerHTML=txt;