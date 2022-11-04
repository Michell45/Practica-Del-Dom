
const btnAssign = document.getElementById("btn-assign");
const txtname = document.getElementById("txt-name");
const txtnote1 = document.getElementById("txt-note1");
const txtnote2 = document.getElementById("txt-note2");
const txtnote3 = document.getElementById("txt-note3");
const response = document.getElementById("p-result");

const printDate = () => {
  console.log(txtname.value);
  console.log(txtnote1.value);
  console.log(txtnote2.value);
  console.log(txtnote3.value);
}
btnAssign.addEventListener("click", printDate);

btnAssign.addEventListener("click", calculate)

function calculate(){

let note1 = 0.3;
let note2 = 0.3;
let note3 = 0.4;

let txtName = txtname.value;
let n1 = txtnote1.value;
let n2 = txtnote2.value;
let n3 = txtnote3.value;

  let noteresult = (n1 * note1) + (n2 * note2) + (n3 * note3) / 3;
  if (noteresult >= 4.5){
    response.textContent = `${txtName}, you are excellent" `    
    response.style.color = "aqua";
  } else if (result > 3.5 && noteresult < 4.5){
    response.textContent = `${txtName}, you are good" `    
    response.style.color = "aqua";
  } else if (result > 2 && noteresult < 3.4){
    response.textContent = `${txtName}, 
    you have the opportunity to recover" `    
    response.style.color = "aqua";
  } else {
    response.textContent = `${txtName}, 
    you should repeat the subject" `    
    response.style.color = "red";
  }


}


