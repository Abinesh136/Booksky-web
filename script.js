 var pop=document.getElementById("pop")
 var popups=document.getElementById("add-bnt")
 var ol=document.getElementById("overlay")
 popups.addEventListener("click",function(){
    ol.style.display="block"
  pop.style.display="block"
})
    popups.addEventListener("dblclick",function(event){
        event.preventDefault()
       pop.style.display="none"
       ol.style.display="none"
    })
var bookcon=document.getElementById("con1")
var bookname=document.querySelector(".tit")
var bookau=document.querySelector(".aur1")
var bookdes1=document.querySelector(".desc")
var bookdel=document.getElementById("del")
var add=document.getElementById("bntadd")
add.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","bc")
    div.innerHTML=`<h2>${bookname.value}</h2>
        <h5>${bookau.value}</h5>
        <p>${bookdes1.value}</p>
        <button id="del" onclick="del(event)">Delete</button>`
    bookcon.append(div)
     pop.style.display="none"
     ol.style.display="none"
})

function del(event){
    event.target.parentElement.remove()
}