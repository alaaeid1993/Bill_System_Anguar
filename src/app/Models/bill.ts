import { Client } from "./client";
import { Item } from "./item";



export class Bill {

    constructor(
    public id : number,
    public BillDate : Date,
    public quantity : number,
    public BillsTotal : number,
    public clientId : number,
    public itemId : number,
    public sellingPrice: number,
    public item?:Item,
    public client?: Client

    ) {}
}

