import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {

    constructor(name: string, accountNumber: number, status: boolean = true, balance: number) {
        super(name, accountNumber, status, balance);
    }

    getLoan = (loan: number): void => {
        if (this.validateStatus()) {
            const currentBalance = this.getBalance();
            const newBalance = currentBalance + loan;
            console.log(`Você pegou um empréstimo de ${loan}, novo saldo: ${newBalance}`);
            this.setBalance(newBalance);
        } else {
            throw new Error('Conta inválida para empréstimos.');
        }
    }

    deposit = (amount: number) => {
        this.deposit (amount);
        console.log(`A empresa depositou ${amount}.`);
    }
}
