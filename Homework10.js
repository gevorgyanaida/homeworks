// 1. Create an Author class and a Book class.

// Author should have: name, email, gender.
// It should have appropriate getters and setters.
// It should have a toString method.

// Book should have: title, author(Author), price, quantity.
// It should have appropriate getters and setters.
// It should have a method: getProfit(), which calculates the profit from the book based on the price and quantity.
// It should have a toString method.

class Author{
    constructor(name, email, gender){
        this.name = name
        this.email = email
        this.gender = gender
    }
    get name(){
        return this._name
    }
    set name(v){
        this._name = v
    }
    get email(){
        return this._email
    }
    set email(v){
        this._email = v
    } 
    get gender(){
        return this._gender
    }
    set gender(v){
        this._gender = v
    }
    toString(){
        return `This is author ${this.name} (${this.gender}) at ${this.email}`
    }
}

class Book{
    constructor(title, price, quantity, authorName, authorEmail, authorGender){
       this.title = title
       this.author = new Author(authorName, authorEmail, authorGender)
       this.price = price
       this.quantity = quantity
   }
   get title(){
       return this._title
   }
   set title(v){
       this._title = v
   }
   get price(){
       return this._price
   }
   set price(v){
        if(typeof v === "number"){
            this._price = v
        }
   } 
   get quantity(){
       return this._quantity
   }
   set quantity(v){
        if(typeof v === "number"){
            this._quantity = v
        }
   }
   getProfit(){
       return this.price * this.quantity
   }
   toString(){
       return `${this.title} by ${this.author.name}, cost - ${this.getProfit()}`
   }
}

// 2. Create an Account class. Account should have: id, name, balance.
// It should have setters for name and balance, and getters for all fields.
// It should have a method: credit(amount), which should add amount to balance and return the updated balance.
// It should have a method: debit(amount), which should subtract the amount from the balance, if amount is less than the balance, otherwise output “Amount exceeded balance.”
// It should have a method: transferTo(anotherAccount, amount): which should subtract the amount from the account balance and add it to the given anotherAccount and return the updated balance, if amount is less than the balance, otherwise output “Amount exceeded balance.”
// It should have a static method: identifyAccounts(accountFirst, accountSecond) which gets two accounts and identifies if they are the same or not comparing all fields.
// It should have toString method.

class Account {
    constructor(name, balance){
        this.name = name
        this.balance = balance
        this._id = Math.random()
    }
    get name(){
        return this._name
    }
    set name(v){
        this._name = v
    }
    get balance(){
        return this._balance
    }
    set balance(v){
        if(typeof v === 'number'){
            this._balance = v
        }
    }
    get id(){
        return this._id
    }
    credit(amount){
        return this.balance += amount
    }
    debit(amount){
        if(amount <= this.balance){
           return this.balance -= amount
        } else {
            console.log("Amount exceeded balance.")
        }
    }
    transferTo(anotherAccount, amount){
        if(amount <= this.balance){
           this.balance -= amount
            anotherAccount.balance += amount
            return this.balance
        } else {
            console.log("Amount exceeded balance.")
        }
    }
    static identifyAccounts(accountFirst, accountSecond){
        if(accountFirst.id === accountSecond.id && accountFirst.name === accountSecond.name && accountFirst.balance === accountSecond.balance){
            return true
        } else {
            return false
        }
    }
    toString(){
        return `This is ${this.name}'s account(balance - ${this.balance})`
    }
}

// 3. Write classes: Person, Student, Staff.

// Person should have: firstName, lastName, gender, age.
// It should have appropriate getters and setters.
// It should have a method: toString().

// Student is inherited from Person. It should have programs (array of strings), year, fee.
// It should have appropriate getters and setters.
// It should have method: passExam(program, grade). Student should contain the data about its programs and exams. passExam will update that data, so if student passed all
// the exams(grade is great or equal to 50), its year should be increased by one. 
// It should have a toString method.

// Teacher is inherited from Person. It should have program(string), pay.
// It should have appropriate getters and setters.
// It should have a toString method.

class Person {
    constructor(firstName, lastName, gender, age){
        this.firstName = firstName
        this.lastName = lastName
        this.gender = gender
        this.age = age
    }
    get firstName(){
        return this._firstName
    }
    set firstName(v){
        this._firstName = v
    }
    get lastName(){
        return this._lastName
    }
    set lastName(v){
        this._lastName = v
    }
    get gender(){
        return this._gender
    }
    set gender(v){
        this._gender = v
    }
    get age(){
        return this._age
    }
    set age(v){
        if(typeof v === 'number' && v > 0){
            this._age = v
        }
    }
    toString(){
        return `This person is ${this.firstName} ${this.lastName}, gender - ${this.gender}, age - ${this.age}`
    }
}

class Student extends Person {
    constructor(firstName, lastName, gender, age, programs, year, fee){
        super(firstName, lastName, gender, age)
        this.programs = programs
        this.year = year
        this.fee = fee
        this.exams = {}
        for(let i = 0; i < programs.length; i++){
            this.exams[programs[i]] = 0
        }
    }
    get programs(){
        return this._programs
    }
    set programs(v){
        if((Array.isArray(v) === true) && v.every(el => typeof el === 'string')){
            this._programs = v
        }
    }
    get year(){
        return this._year
    }
    set year(v){
        if(typeof v === 'number'){
            this._year = v
        }
    }
    get fee(){
        return this._fee
    }
    set fee(v){
        if(typeof v === 'number'){
            this._fee = v
        }
    }
    passExam(program, grade){
        if(this.programs.indexOf(program) !== -1){
            this.exams[program] = grade
        }
        if(Object.values(this.exams).every(el => el >= 50)){
            return this.year += 1
        }
    }
    toString(){
        return `Student ${this.firstName} ${this.lastName} (${this.gender}), ${this.year} year`
    }
}

class Teacher extends Person {
    constructor(firstName, lastName, gender, age, program, pay){
        super(firstName, lastName, gender, age)
        this.program = program
        this.pay = pay
    }
    get program(){
        return this._program
    }
    set program(v){
        if(typeof v === 'string'){
            this._program = v
        }
    }
    get pay(){
        return this._pay
    }
    set pay(v){
        if(typeof v === 'number'){
            this._pay = v
        }
    }
    toString(){
        return `Teacher ${this.firstName} ${this.lastName} (${this.gender})`
    }
}