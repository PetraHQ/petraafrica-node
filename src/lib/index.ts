import { Transaction } from "./modules/transaction";


export class Petra{
  //transaction: Transaction;
  constructor(secret_key:string) {
    if (!secret_key) {
      throw new Error('missing credentials, please pass in your credentials')
    }
  }



 // this.transaction = new Transaction()


}