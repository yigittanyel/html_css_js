/*function hello(name){
    return "Hello "+name;
}

document.getElementById("p1").innerHTML=hello("Yigit"); */

/*
function hello(){
    var name=prompt("Adınızı girin: ");
    return "Hello "+name;
}

document.getElementById("p1").innerHTML=hello();
*/

/*function findMax(){
    let max=-Infinity;
    for(let i=1;1<arguments.length;i++){
        if(arguments[i]>max)
            max=arguments[i]
    }
    return max;
}

document.getElementById("p1").innerHTML=findMax(5,4,3,2,-6,14,65,43);
*/

/*function sumAll(){
    let sum=0;
    for(let i=0;i<arguments.length;i++){
        sum+=arguments[i];
    }
    return sum;
}

document.getElementById("p1").innerHTML=sumAll(1,2,4,6,8,-1);
*/

function mult(x,y=2){
    return x*y;
}
    

document.getElementById("p1").innerHTML=mult(3)