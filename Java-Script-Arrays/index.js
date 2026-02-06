let myArr=[3,4,5,6,7,8];
console.log(myArr);
console.log(myArr[3]);          //Access Elements using index
myArr[1]=100;
console.log(myArr);
console.log(myArr.length);     //Length of an array

myArr.push(101);               //add elements using push method 

console.log(myArr);


myArr.pop();                    //used to remove last element 
console.log(myArr);


//Create Elements in Java Script 

let h1Element=document.createElement("h1");
h1Element.textContent="Hello World!";
let containerElement=document.getElementById("myContainer");
containerElement.appendChild(h1Element);


let buttonEl=document.createElement("button");
buttonEl.textContent="Change Heading";
containerElement.appendChild(buttonEl);

let removeStyleBtn=document.createElement("button");
removeStyleBtn.textContent="Remove Styles";
containerElement.append(removeStyleBtn);



buttonEl.onclick=function(){
    // h1Element.textContent="Heading Changed";
    // h1Element.style.color="blue";
    // h1Element.style.fontFamily="Roboto";
    // h1Element.style.fontSize="30px";
    // h1Element.style.textDecoration="underline";

    h1Element.classList.add("heading");
}

removeStyleBtn.onclick=function(){
    h1Element.classList.remove("heading");
}