function display(value){
    document.getElementById('result').value+=value


}
function clearScreen(){
    document.getElementById('result').value=""

}
function calculate(value){
    let p=document.getElementById('result').value
    let q=eval(p)
    document.getElementById('result').value=q

}
