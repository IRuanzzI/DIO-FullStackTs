//Dio banking

//Name, accountNumber

//Depositar, sacar

import{DioAccount } from './class/DioAccount' 

import { PeopleAccount } from './class/PeopleAccount'

import { CompanyAccount } from './class/CompanyAccount'

import {RetireeAccount} from './class/RetireeAccount'

const companyAccount: CompanyAccount = new CompanyAccount ('Tec-imports', 5, true, 0)
companyAccount.getLoan(100)

const retireeAccount: RetireeAccount = new RetireeAccount ('Ruan',10,true,0 )
retireeAccount.deposit(10)
retireeAccount.withdraw(10)

