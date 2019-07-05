// let balance = 500.00;

class Account {
  constructor(username) {
    this.username = username;
    this.transactions = [];
    this.balance = 0;
    // this.balance = this.transactions[0];
  }
  isAllowed(value) {
    console.log(this.balance);
    return this.calBalance + value >= 0 ? true : false;
  }
  addTransactions(transactions) {
    if (this.isAllowed(transactions)) {
      this.transactions.push(transactions);
      this.balance = this.calBalance;
    }
  }
  get calBalance() {
    return this.transactions.length >= 1 ? this.transactions.length >= 2 ? this.transactions.reduce((a, b) => (a + b)) : this.transactions[0] : 0;
  }

}

class Transaction {

  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }
  commit() {
    this.time = new Date();
    this.account.addTransactions(this.getValue);
  }
}

class Deposit extends Transaction {

  get getValue() {
    return this.amount;
  }

}

class Withdrawal extends Transaction {

  get getValue() {
    return -this.amount;
  }

}

// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected
const myAccount = new Account("snow-patrol");


const t2 = new Withdrawal(9.99, myAccount);
t2.commit();
console.log('Transaction 2:', t2);

console.log('Balance:', myAccount.balance);
const t3 = new Deposit(120.00, myAccount);
t3.commit();
console.log('Transaction 3:', t3);
console.log('Balance:', myAccount.balance);
const t4 = new Deposit(240.00, myAccount);
t4.commit();
console.log('Transaction 3:', t4);
console.log('Balance:', myAccount.balance);

const t1 = new Withdrawal(50.25, myAccount);
t1.commit();
console.log('Transaction 1:', t1);
