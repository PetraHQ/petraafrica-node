

export class Petra{
  constructor(secret_key:string) {
    if (!secret_key) {
      throw new Error('missing credentials, please pass in your credentials')
    }
  }
}