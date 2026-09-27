class Student{

    constructor(){

        this.name="";
    }

    getName(){

        return this.name;
    }

    setName(name){

        this.name=name;
    }
}

let ts=new Student();
ts.setName("AVanish");
console.log(ts.getName());