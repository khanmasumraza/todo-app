let inputBox=document.getElementById("inp")
let inputBut=document.getElementById("but")
let ul=document.getElementById("add")

inputBut.addEventListener("click",function(){
if(inputBox.value===""){
    alert("Fields box")
}
else{
    let li=document.createElement("li")
    
    li.textContent=inputBox.value;
    ul.appendChild(li);
    inputBox.value="";

    let delBut=document.createElement("button");
    delBut.textContent="Remove";
    li.appendChild(delBut);

    delBut.addEventListener("click",function(){
        li.remove()
    });

}
})