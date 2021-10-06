var sb=document.getElementById("p1");
sb.innerHTML=" ";

function topla(a,b){
    return a+b;
}
function carp(a,b){
    return a*b;
}
function cikar(a,b){
    return a-b;
}
function bol(a,b){
    try {
        if(b==0) 
            throw new Error("İkinci değer sıfır olamaz");
        else
            return a/b;
    }
    catch(err) {
        sb.innerHTML= "Hata var " + err;
      }
}

var secim=prompt("Seçiminiz: (1,2,3,4) ");

if(secim==1)
    sb.innerHTML=topla(5,3)
else if (secim==2)
    sb.innerHTML =carp(5,3)
else if(secim==3)
    sb.innerHTML=cikar(5,3)
else if(secim==4)
    sb.innerHTML=bol(5,0)
else
    sb.innerHTML="Hatalı giriş."
