let a = +prompt("Birinchi son");
let b = prompt("Qiymat kiriting");
let c = +prompt("Ikkinchi sonni kiriting");

if (b == "+"){
    alert(a + c);
}

else if ( b == "-"){
    alert(a - c);
}

else if(b == "*"){
    alert(a * c);
}

else if (b == "/"){
    alert( a / c);
}


else if (b == "%"){
    alert( a * c / 100);
}

else {
    alert("Notogri qiymat kiritingiz");
}