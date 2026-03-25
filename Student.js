//We use _name (or _age, _id) in the constructor when we want to store the value directly without triggering any setter logic, for example during object creation when no validation or extra processing is needed; we use the plain name (without underscore) in the constructor when we want the setter to run immediately, so any logic inside it—like validation, formatting, or transformations—applies as soon as the object is created.

class Student {
    constructor(id, name, age) {
        this._id = id;
        this._name = name;
        this._age = age;
    }
    //Display Method
    display(){
        console.log(`ID:${this.id},Name: ${this.name}, Age: ${this.age} `)
    }

    //Getter
    get id() {
        return this._id;
    };
    get name(){
        return this._name;
    };
    get age(){
        return this._age;
    }

    //Setter
    set name(value1){
        this._name = value1
    }
      set age(value2){
        this._age = value2;
    }  
}

    //Regular students class

class RegularStudent extends Student{
    constructor(id,name,age,fee){
        super(id,name,age)
        this.fee = fee
    }
    display(){
        super.display();
        console.log(`Fee: ${this.fee} `)
    }
}

   //ScholarShip Students

class ScholarShipStudent extends Student{
    constructor(id,name,age,fee,discount){
        super(id,name,age)
        this.fee = fee
        this.discount = discount;
    }
    display(){
         const finalFee = this.fee - (this.fee * this.discount / 100);
         super.display();
        console.log(`Fee: ${this.fee} FinalFee: ${finalFee} `)
    }
}
module.exports = { Student, RegularStudent, ScholarShipStudent };