let x="";
const obj1={
    name:"yigit",
    age:21,
    cars:[
        {name:"Ford",models:["Fiesta","Mustang","Focus"]},
        {name:"Fiat",models:["Egea","Sahin","Doblo"]}
    ]
}

for(let i in obj1.cars){
    x+="<h3>" + obj1.cars[i].name+"</h2>";
    for(let j in obj1.cars[i].models){
        x+=obj1.cars[i].models[j]+"<br>";
    }
}
document.getElementById("p1").innerHTML=x;

//document.getElementById("p2").innerHTML = Object.values(obj1);