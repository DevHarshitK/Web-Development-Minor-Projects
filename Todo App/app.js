let inp=document.querySelector('input');
let btn=document.querySelector('button');
let ul=document.querySelector("ul");
btn.addEventListener("click",function(event){
    let li = document.createElement("li");
    li.innerText=inp.value+" ";
    inp.value="";
    ul.appendChild(li);
    let delBtn=document.createElement('button');
    delBtn.classList.add('delete');
    delBtn.innerText='Delete';
    li.appendChild(delBtn);
});
ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        event.target.parentElement.remove();
    }
});
