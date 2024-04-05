function calculeIMT()   {

    var weight = document.getElementById('weight').value

    var height = document.getElementById('height').value
console.log("вес:" , weight)

let imt = weight /(height ** 2) 
var imtText = imt.toFixed(2)

if (imt < 16){
    imtText +="Выраженный дефицит массы телла"
} else if (imt >= 16 && imt <18.5) {
  imtText +="Недостаточная (дефицит) масса тела"
} else if (imt >=18.5 && imt < 25){
 imtText += "норма"
} else if (imt >=25 && imt <30){
imtText +="Избыточная масса тела (предожирение)"
} else{
    imtText +="Ожирение"
}
 console.log(imtText)

 document.getElementById("result").innerHTML = imtText

//console.log("imt:" ,imt)





}