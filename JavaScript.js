
const btn = document.querySelector("#add-button");
const nameInpt = document.querySelector("#Name");
const dateInpt = document.querySelector("#Date");
const table = document.querySelector("#tbl");
const amountInpt = document.querySelector("#Amount");
const trwillhide = document.querySelector("#trwillhide");
const deleteHead = document.querySelector("#delete");
btn.addEventListener("click",showResult);
function showResult (eve){
eve.preventDefault();

//all elements that should be created
const tr = document.createElement("tr");
const tdName = document.createElement("td");
const tdDate = document.createElement("td");
const tdAmount = document.createElement("td");
const tdBtn = document.createElement("td");

let deleteBtn = document.createElement("button");
deleteBtn.innerHTML = "<i class='far fa-trash-alt'></i>";
deleteBtn.classList.add("delbtn");

tdName.innerText = nameInpt.value;
tdDate.innerText = dateInpt.value;
tdAmount.innerText = `${amountInpt.value} $`;
//styles
trwillhide.style.display= "none";
tdDate.style['text-align']  = 'center';
tdAmount.style['text-align']  = 'center';
deleteHead.style["display"] = "block";
tdBtn.style["display"] = "grid";
tdBtn.style["justify-content"] = "center";
//append elements to the html document
tr.append(tdName,tdDate,tdAmount,tdBtn)
tdBtn.appendChild (deleteBtn);
table.appendChild(tr);
nameInpt.value = "";amountInpt.value="";dateInpt.value="";
deleteBtn.addEventListener("click",dltrow);
function dltrow(){
    tr.style["display"] = "none";
    }
    
}

