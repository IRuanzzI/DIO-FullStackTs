import { DioAccount } from "./DioAccount"

export class PeopleAccount extends DioAccount{
    private doc_Id: number
    constructor(doc_Id: number, name: string, accountNumber: number){
        super(name, accountNumber, true, 10)
        this.doc_Id = doc_Id
    }

    deposit= (deposit: number ) => {
        console.log("O deposito de ", deposit, " foi efetudo com sucesso! totalizando: ", deposit + 10, " depositados")
    }


}