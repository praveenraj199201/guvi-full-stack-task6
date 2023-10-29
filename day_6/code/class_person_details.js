class passenger{
    constructor(name,age,height,weight,gender,city,state,mobileNO){
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.gender = gender;
        this.city = city;
        this.state = state;
        this.mobileNO = mobileNO;
    }
}

let passenger1 = new passenger("praveen raj","22","5.7","69","male","chennai","tamil nadu","9150734719");
console.log(passenger1);
let passenger2 = new passenger("gayathri","22","5.1","52","female","chennai","tamil nadu","9150734719");
console.log(passenger2);
let passenger3 = new passenger("raj kumar","21","4.7","89","male","chennai","tamil nadu","9150734719");
console.log(passenger3);