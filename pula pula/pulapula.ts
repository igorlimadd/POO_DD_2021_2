
// Consegui entender bem melhor a formação do for e shift e push!!! AMÉM
// Consegui cumprir os requisitos, menos o de tirar e botar de novo na fila, o meu toString ficou meio doido pq nao consegui monta-lo bem


class Kid{
    age: number;
    name:string;

    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }
    public toString(){
        return this.name;
    }
}

class Pulapula{
    playing: Array<Kid | null>;   
    waiting: Array<Kid>;


    constructor(qtdPlaying:number) {
        this.playing = [];
        for (let i = 0; i< qtdPlaying; i++){
            this.playing.push(null);
        }
        this.waiting = []; 

    }
    arrive(kid:Kid):void{
        this.waiting.push(kid);

    }
    in(indice:number):boolean{
        if(indice < 0 || indice >= this.playing.length){
            console.log("Indice invalido");
            return false;
        }
        if (this.waiting.length == 0){
            console.log("não tem ninguem na fila");
            return false;
        }
        else{
        for (let i = 0; i<this.playing.length; i++)
            if (this.playing[i] != null){
                this.playing[i] = this.waiting[indice];
                return true;
            }
        }
        this.waiting.shift();
        return true;
    }
    out(indice:number){
        if(indice < 0 || indice >= this.playing.length){
            console.log("Indice invalido");
            return false;
        }
        if (this.waiting.length == 0){
            console.log("não tem ninguem na fila");
            return false;
        }
        else{
        for (let i = 0; i<this.playing.length; i++)
            if (this.playing[i] != null){
                this.playing[i] = this.waiting[indice];
                return true;
            }
        }
        this.playing.shift();
        this.playing.push(null);
        return true;


     


    }


    public toString(){
        let str = "[ ";                                                                   // eu tentei fazer sem indice mas sempre dava erro no "kid", então fui pelo oq ja havia feito e fiz as mudanças recomendadas no video para montar pq senti dificuldade nesse toString
        for (let i = 0; i < this.playing.length; i++) {                           
            str += i + ": ";                                              
            str += this.playing[i] !== null ? this.playing[i]?.toString() :" null ";
            str += " | ";
        }
        str += "\n";                             // já aqui o kid nao reclamou
        str += "Estão esperando: ";  
        for (let kid of this.waiting){
            str += kid.toString() + " ";
        }
        return str;

    }
}

let pulapula = new Pulapula(1);
pulapula.arrive(new Kid("Mario", 5));
pulapula.arrive(new Kid("Livia", 4));
pulapula.arrive(new Kid("Luana", 3));
console.log(" " + pulapula);
pulapula.in(0);
console.log(" " + pulapula);
pulapula.in(0);
console.log(" " + pulapula);
pulapula.in(0);
console.log(" " + pulapula);
pulapula.out(0);
console.log(" " + pulapula);



