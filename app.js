// your code goes here
const inputWeight = document.getElementById('svars');
const inputHeight = document.getElementById('augums');
const outPut = document.getElementById('out');

addEventListener.kg('click', function(){
    BMI = inputWeight / inputHeight;
    console.log(BMI)

})

BMI = 0;
if (BMI < 18,5){
    console.log("Nepietiekama ķermeņa masa");
}else{
    (BMI = 18,5 – 24,99)
    console.log("Normāla ķermeņa masa")
}else{
    (BMI =  25 – 29,99 )
    console.log("Lieka ķermeņa masa")
}else{
    (BMI > 30)
    console.log("Aptaukošanās")
}
