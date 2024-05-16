import { DioAccount } from "./DioAccount";

export class RetireeAccount extends DioAccount {
    constructor(name: string, accountNumber: number, status: boolean, balance: number){
        super(name, accountNumber, true, 10)
    }

    deposit = (amount: number) => {
        this.deposit
        this.balance = amount + 10;
        console.log(`Depósito de ${amount} realizado com sucesso. Deposito total de ${amount + 10}. Novo saldo: ${this.balance}`);
    }

    withdraw = (amount: number): void => {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Saque de ${amount} realizado com sucesso. Novo saldo: ${this.balance}`);
        } else {
            throw new Error('Saldo insuficiente');
        }
    }
}