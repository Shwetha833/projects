let buttoncontrol=document.getElementById('btn')
let spanControl=document.querySelector('.color')
let colors=["white","red","yellow","green","brown","purple"]
let len=colors.length-1
buttoncontrol.addEventListener('click',()=>{
    let index=generateRandomNumber()
    // alert("hello good morning")
    document.body.style.backgroundColor=colors[index]
    spanControl.innerHTML=colors[index]
})

function generateRandomNumber(){
    return Math.round( Math.random()*len)
}