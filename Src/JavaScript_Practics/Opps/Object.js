import { permission } from "node:process";

//Object Literal
//const MyObject={

    //Name:'Avanish',
    //Age:'40',
    //city:'Jaunpur'

//}

//console.log(MyObject);

function demo(name,age,city){

    this.Name=Name;
    this.age=age;
    this.city=city;
}

let newPerson=new demo('avanish','30','Varasi');
let newPerson2=new demo('singh','44','Jaunpur');