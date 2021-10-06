var person={
    name:"Yigit",
    surname:"Tanyel",
    age:21,
    cars:{
        car1:"BMW",
        car2:"Fiat"
    },
    language:"",
    wrLang:function(a){
        return a.toUpperCase();
    } 
};
a=prompt();
document.getElementById("p1").innerHTML=person.wrLang(a);