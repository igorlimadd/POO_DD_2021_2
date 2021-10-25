class Person{
    name:string;
    age:number;


    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }
    toString(){
        return "NOME: " + this.name + ", " + "IDADE: " + this.age + " ";
 
    }
    

}
class Motorcycle{
    person:Person | null;
    power:number;
    time:number;

    constructor(power:number, time:number){
        this.power = 1;
        this.time = 0;
        this.person = null;
    }
    subir(person:Person):void{
        if (this.person != null){
            console.log("Já têm alguém em cima da moto");
            return;
        }
    }
    descer(person:Person):void{
        if (this.person == null){
            console.log("Não tem ninguém na moto");
            return;
        }else{
           this.person += 1;                                              //tentei adicionar pessoa na moto, mas não lembro como adicionar pessoa para uma classe
        }
    }
    dirigir(){
        if(this.age < 10){                                                   //COMO CHAMAR A CLASSE PERSON AQUI?
            console.log("se ainda tem tempo, pode passear");
            return;
        }  
    }
    toString(){
        return "POWER: " + this.power + " , " + "TIME: " + this.time;
    }
}


let person = new Person("João", 15);
console.log(" " + person.toString())

let motorcycle = new Motorcycle(1,25);
console.log(" " + motorcycle.toString())