//Codigo del cuadrado
console.group("Cuadrados")
function perimetroCuadrado(lado){ 
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}
console.groupEnd();

//Codigo del triangulo
console.group("Triangulos")

function perimetroTriangulo(lados, base){
    return (Number(lados) + Number(lados) + Number(base));
} 

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
} 
console.groupEnd();

//Codigo circulo
console.group("Circulo")

//Diametro
function diametroCirculo(radio){
    return radio * 2;
} 
//PI
const PI = Math.PI;
console.log("PI es: " + PI);

//Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
//Area
function  areaCirculo(radio){
    return (radio * radio) * PI;
}
console.groupEnd();

//Interaccion con html

//Cuadrado

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);
    alert(area);
}

//Triangulo

function calcularPerimetroTriangulo(){
    const ladosTriangulo = document.getElementById("ladosTriangulo");
    const lados = ladosTriangulo.value;

    const baseTriangulo = document.getElementById("baseTriangulo");
    const base = baseTriangulo.value;

    const perimetro = perimetroTriangulo(lados, base);
    alert(perimetro);
} 

function calcularAreaTriangulo(){
    const alturaTriangulo = document.getElementById("alturaTriangulo");
    const altura = alturaTriangulo.value;

    const baseTriangulo = document.getElementById("baseTriangulo");
    const base = baseTriangulo.value;
    
    const area = areaTriangulo(base, altura);
    alert(area);
}

//Circulo

function calcularDiametroCirculo(){
    const radioCirculo = document.getElementById("radioCirculo");
    const radio = radioCirculo.value;

    const diametro = diametroCirculo(radio);
    alert(diametro);
} 

function calcularAreaCirculo(){
    const radioCirculo = document.getElementById("radioCirculo");
    const radio = radioCirculo.value;
    
    const area = areaCirculo(radio);
    alert(area);
}

function calcularPerimetroCirculo(){
    const radioCirculo = document.getElementById("radioCirculo");
    const radio = radioCirculo.value;
  
    const perimetro = perimetroCirculo(radio);
    alert(perimetro); 
} 

function calcularAltura(lado1, lado2, base){

    if(lado1 != lado2){
        return "Los lados no corresponden a un triángulo isósceles"
    }else{
        ladoA = lado1;
        ladoB = base / 2;
        altura = Math.sqrt((ladoA**2) - (ladoB**2))
        return altura;
    }
}

function alturaIsosceles(){
    
    const lado1 = document.getElementById("lado1Isosceles").value;
    const lado2 = document.getElementById("lado2Isosceles").value;
    const base = document.getElementById("baseIsosceles").value;

    const altura = calcularAltura(lado1, lado2, base);
    alert (altura)
} 

