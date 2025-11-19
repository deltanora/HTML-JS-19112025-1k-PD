// your code goes here
const inputWeight = document.getElementById('svars');
const inputHeight = document.getElementById('augums');
const outPut = document.getElementById('out');

document.getElementById('kg').addEventListener('click', function(){
 outPut.innerHTML = inputWeight.value / inputHeight.value ;

}

)

BMI = 0
if (BMI < 18,5){
    console.log("Nepietiekama ķermeņa masa");
}else{
    (BMI <=24,99);
    console.log("Normāla ķermeņa masa")
}else{
    (BMI <=29,99 );
    console.log("Lieka ķermeņa masa")
}else{
    (BMI > 30)
    console.log("Aptaukošanās")
}

console.log(BMI);

li = document.getElementById('li');
li.innerHTML = `Vēsture`;
