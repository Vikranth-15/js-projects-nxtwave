let inputEl=document.getElementById("inputElement");
let signInText=document.getElementById("signInText");


function signIN(){
    let value=inputEl.value;
    console.log(value);
   let verifyText="Hii "+value+" ,Verifying your text";
   signInText.textContent=verifyText;
}