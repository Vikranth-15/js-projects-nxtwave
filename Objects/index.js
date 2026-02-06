let person={
    name:"vikky",
    age:24,
    "City":"Khammam",
    profession:"Engineer"

};

console.log(person.name);
console.log(person['name']);
console.log(person.gender);         //undefined
//console.log(person.['gender']);   //errror 

let key="name";
console.log(person.key);        //undefined
console.log(person['key']);     //undefined


let key1='age';

console.log(person.key1);       //undefined
console.log(person[key1])       //24

let {name}=person;
console.log(name);           //vikky 

let{name1,profession}=person;

console.log(name1);                 //key not matched 
console.log(profession);       


person.name="Ram";
console.log(person);