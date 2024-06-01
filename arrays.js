/*let mark_Student = [96,80,77,66,54,50,44];
console.log(mark_Student[1]);
console.log(mark_Student);
console.log(mark_Student.length);
console.log(mark_Student[3]);
mark_Student[2] = 21;
console.log(mark_Student[2]);
let name= ["monu","sonu","madhu","gaurav"]
for(let index= 0;index<name.length;index++){
    console.log(name[index]);
}
for(let mark of mark_Student){
    console.log(mark);
}
let sum = 0;
let mark = [85,97,44,37,76,60];
for(let i of mark){
   
    sum = sum +i;

   
}
let avg = sum/mark.length;
    console.log(`the avearage of mark is:= ${avg}`);
 let  item = [250,645,300,900,50];
 let i = 0
   for (val of item){
    console.log(`value at idx ${i} = ${val}`);
    let offer = val /10;
    item[i]= item[i]-offer;
    console.log(`balue after offer = ${item[i]}`);
i++;
   }

   item.push(88);

let marvel_heroes=["thor","spiderman",'ironman'];
let dc_heroes=['superman','batman'];
let hero = marvel_heroes.concat(dc_heroes);
console.log(hero);console.log(hero.slice(3,5)); 
*/
let companies=["bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log(companies);
companies.shift();
// first element
console.log(companies);
companies.splice(1,1,"ola");
console.log(companies);
companies.push("Amazon");
console.log(companies);
