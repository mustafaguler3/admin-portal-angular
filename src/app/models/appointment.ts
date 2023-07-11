import { User } from "./user";

export class Appointment {
    id!:number;
    date!:Date;
    user!:User
    description!:string;
    confirmed!:string;

}
