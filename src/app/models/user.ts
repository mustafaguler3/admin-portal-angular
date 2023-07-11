import { PrimaryAccount } from "./primary-account";
import { SavingsAccount } from "./savings-account";

export class User {
    username!:string;
    email!:string;
    firstName!:string;
    lastName!:string;
    phone!:number;
    enabled!:boolean;
    primaryAccount!:PrimaryAccount;
    savingsAccount!:SavingsAccount
}
