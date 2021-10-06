/*
const person={
    name:"Yigit",
    surname:"Tanyel",
    age:21,
    fullname:function(){
        return this.name+" "+this.surname;
    }
}

document.getElementById("p1").innerHTML=person.fullname(); //this fullname is a function
*/
const person={
    name:"Yigit",
    surname:"Tanyel",
    age:21,
    get fullname(){
        return this.name+" "+this.surname;
    }
}
document.getElementById("p1").innerHTML=person.fullname; // this fullname is a property
