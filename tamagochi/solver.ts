

class Pet{
    private nome:string;
    private saciedade: number;
    private saciedadeMax: number;
    private energy:number;
    private energyMin:number;

    constructor(nome:string, saciedadeMax:number, energy:number){
        this.nome = nome;
        this.saciedade = saciedadeMax;
        this.energy = this.energyMin;
    }
    public setNome(nome:string):void{                        //se assemelha ao leão, gato, cachorro feitos nas vezes passadas         
        if (nome.lenght == 0){                        
            this.nome - 'bichinho'
        }else{
            this.nome = nome;
        }
        this.nome = nome;
    }
    public getNome():string{
        return this.nome;
    }
    public getSaciedade(): void{
        return this.saciedade;
    }
    public setSaciedade(saciedade:number){                        //descobri o write após o video
        if (saciedade < 0 ) {
            this.saciedade = 0;
        write
        }else if (saciedade > this.saciedadeMax){
            this.saciedade = this.saciedadeMax;
        }else{
            this.saciedade = saciedade;
        }
    }
    public getEnergy():void{
        return this.energy;
    }
    public setEnergy():void{
        if (energy < 1){
            this.energy = 1;
        }else if (energy < this.energyMin){
            this.energy = this.energyMin
        }else {
            this.energy = energy;
        }

    }
    public brincar(): void{                              // já tinha feito algo bem parecido na cadeira com o Victor
        this.setEnergy(this.energy - 1);
        this.setSaciedade(this.saciedade - 1);
    }
    public comer(){
        this.setSaciedade(this.saciedade + 1);
    }
}

function create_pet(): Pet{                                        // nao consegui fazer o menu interativo, o npm dava um erro repetido que nao tinha fim, consegui entender como funciona mas ele nao ia nem a pau, consegui entender como funciona pelo video, mas nao inicializa
    write("Digite o nome do seu pet: ");
    let nome - input();
    let saciedadeMax = +input();
    let pet = new Pet (nome, saciedadeMax);
    return pet
}
function shell() {
    let pet = this.create_pet();
    this.help();
    while (true) {
        let line = input();
        let words = line.split(" ");
        if (words[0] == "end") {
            break;
        }else if (words[0] == "help"){
            this.help();
        }else if (words[0] == "show"){
            let nome = words [1];
            let sacMax = +words[2];
            pet = new Pet (nome, sacMax);
        }else{
            console.log("comando invalido")
        }

    }
}