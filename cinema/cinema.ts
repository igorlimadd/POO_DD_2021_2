class Cliente{
    fone:number;
    id: string;

    constructor(fone:number,id:string){
        this.fone = fone;
        this.id = id;
    }
    toString(){
        return;
    }

}


class Sala{
    fileira: Array <Cliente |null>

    constructor(qtdCadeiras:number){
        this.fileira = []
        this.fileira.push(null)
            
    }
    //Senti dificuldade em entender como funcionaria o Sala(capacidade) então utilizei a logica explicada no video

    reservar(cliente:Cliente, cadeira:number){                                
          console.log("Essa cadeira está ocupada")
          return false;
      }
      for (let client of this.fileira){
      if(client != null){                                                          
          if(client.id == cliente.id)
          console.log("Já estao nessa cadeira")
          return false;
      }
    cancelar():boolean{                                                         
        if(cadeira === null){
            console.log("essa cadeira não existe")
            return;
        }
        if (cadeira != null){
            console.log("cancelada")
            return;
        }

    }
    

    // FIZ PRIMEIRAMENTE SEM VER E SUBI PARA O GIT, DEPOIS DISSO ASSISTI O VIDEO POR COMPLETO E FUI FAZENDO DA MESMA FORMA QUE VOCÊ PARA TENTAR REFORÇAR A LÓGICA DO INDEX QUE FOI COMPLICADO PRA MIM DE COMPREENDER
}

