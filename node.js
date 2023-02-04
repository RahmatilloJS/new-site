


const btn = document.querySelector('button')
const input = document.querySelector('.input1')
const input2 = document.querySelector('.input2')

function changeColor(){
    console.log(input.value);
    let ogirlik = input.value
    let boy = input2.value
    let bmi =((ogirlik/ (boy*boy))).toFixed(1)
    if(bmi < 18.5){
    const h1 = document.querySelector(".imges")
    h1.setAttribute( "src" , "./img/normal.jpg")   
    const hi = document.querySelector("#hi2")
    hi2.innerHTML = "siz og'irsiz"
   
    
}
else if(bmi > 18.5 && bmi < 25){
    const h1 = document.querySelector(".imges")
    const hi = document.querySelector("#hi")
    h1.setAttribute( "src" , "./img/normal.jpg")
    hi.innerHTML = "siz normalsiz"
    
}
else if(bmi > 25 && bmi < 30){
    const h1 = document.querySelector(".imges")
    const hi = document.querySelector("#hi3")
    h1.setAttribute( "src" , "./img/normal.jpg")
    hi3.innerHTML = "siz semiz siz"
}
else {
    const h1 = document.querySelector(".imges")
    const hi = document.querySelector("#hi4")
    h1.setAttribute( "src" , "./img/normal.jpg")
    hi4.innerHTML = "siz o'ta semiz siz"
} 
}
document.querySelector('form').addEventListener('submit' , (e)=>{
     e.preventDefault()
     changeColor()
})

