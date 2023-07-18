let txt = document.querySelector(".text");
let allSpans = document.querySelectorAll(".btns span");
let result = document.querySelector(".result");
var regrex = /^\s*$/ig

allSpans.forEach( span =>{

    span.addEventListener("click", (e)=>{
        if(e.target.classList.contains('cheak-Item'))
        {
            cheakItem();
        }
        if(e.target.classList.contains('Add-Item'))
        {
            addItem();
        }
        if(e.target.classList.contains('Delete-Item'))
        {
            deleteItem();
        }
        if(e.target.classList.contains('Show-Items'))
        {
            showItem();
        }

    })
});


function showMessage() {
  result.innerHTML = "Local Storage Is Empty";
}
function cheakItem() {
  if(!regrex.test(txt.value)){
    if(localStorage.getItem(txt.value)){
        result.innerHTML = `Found Local Storage Item Called <span>${txt.value}</span>`;

    } else {

        result.innerHTML = ` No Local Storage Item With The Name <span>${txt.value}</span>`;

    }
  }else{
    showMessage()
  }
}

function addItem(){
    if(!regrex.test(txt.value)){
        localStorage.setItem(txt.value,"test")
        result.innerHTML = ` Local Storage Item <span>${txt.value}</span> Added`
        txt.value = ''
    }else{
        showMessage()
    }
}

function deleteItem(){
    if(!regrex.test(txt.value)){
        if(localStorage.getItem(txt.value)){
            localStorage.removeItem(txt.value)
            result.innerHTML = ` Local Storage Item <span>${txt.value}</span> Deleted`
            txt.value = ''
        }else{
            result.innerHTML = `No Local Storage Item With The Name <span>${txt.value}</span>`
        }
        
    }else{
        showMessage()
    }
}

function showItem(){
    if(localStorage.length){
        result.innerHTML = ""
        for(let [key,value] of Object.entries(localStorage)){
            result.innerHTML += `<span class="keys">${key}</span> `
        }
    }else{
        showMessage()
    }
}