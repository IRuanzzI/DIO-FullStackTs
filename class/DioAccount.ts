export abstract class DioAccount {
    private name: string;
    private readonly accountNumber: number;
     balance: number;
    private status: boolean;

    constructor(name: string, accountNumber: number, status: boolean, balance: number) {
        this.name = name;
        this.accountNumber = accountNumber;
        this.status = status;
        this.balance = balance;
    }

    setName = (name: string): void => {
        this.name = name;
        console.log('Nome alterado com sucesso!');
    }

    getName = (): string => {
        return this.name;
    }

    deposit = (amount: number) => {
        this.deposit
        this.balance += amount;
        console.log(`Depósito de ${amount} realizado com sucesso. Novo saldo: ${this.balance}`);
    }

    withdraw = (amount: number): void => {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Saque de ${amount} realizado com sucesso. Novo saldo: ${this.balance}`);
        } else {
            throw new Error('Saldo insuficiente');
        }
    }

    getBalance = (): number => {
        console.log(`Saldo da conta ${this.balance}`)
        return this.balance;
    }

    setBalance = (balance: number): void => {
        this.balance = balance;
        console.log(`Saldo alterado para ${balance}`);
    }

    validateStatus = (): boolean => {
        return this.status;
    }
}
